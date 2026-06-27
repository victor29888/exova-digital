import { client } from "@/sanity/lib/client";
import {
  fallbackBlogPosts,
  fallbackFaqItems,
  fallbackPricingPlans,
  fallbackServices,
  fallbackTestimonials,
} from "@/sanity/lib/fallbacks";
import {
  blogPostBySlugQuery,
  blogPostSlugsQuery,
  blogPostsQuery,
  faqItemsQuery,
  pricingPlansQuery,
  servicesQuery,
  testimonialsQuery,
} from "@/sanity/lib/queries";
import { isSanityConfigured } from "@/sanity/env";
import type {
  BlogPost,
  BlogPostPreview,
  FaqItem,
  PricingPlan,
  Service,
  Testimonial,
} from "@/sanity/types";

async function fetchWithFallback<T>(
  query: string,
  fallback: T,
  params?: Record<string, unknown>,
): Promise<T> {
  if (!isSanityConfigured) {
    return fallback;
  }

  try {
    const data = await client.fetch<T>(query, params ?? {}, {
      next: { revalidate: 60 },
    });

    if (Array.isArray(data) && data.length === 0) {
      return fallback;
    }

    if (data === null || data === undefined) {
      return fallback;
    }

    return data;
  } catch {
    return fallback;
  }
}

export function getServices(): Promise<Service[]> {
  return fetchWithFallback<Service[]>(servicesQuery, fallbackServices);
}

export function getPricingPlans(): Promise<PricingPlan[]> {
  return fetchWithFallback<PricingPlan[]>(
    pricingPlansQuery,
    fallbackPricingPlans,
  );
}

export function getFaqItems(): Promise<FaqItem[]> {
  return fetchWithFallback<FaqItem[]>(faqItemsQuery, fallbackFaqItems);
}

export function getTestimonials(): Promise<Testimonial[]> {
  return fetchWithFallback<Testimonial[]>(
    testimonialsQuery,
    fallbackTestimonials,
  );
}

export function getBlogPosts(): Promise<BlogPostPreview[]> {
  return fetchWithFallback<BlogPostPreview[]>(
    blogPostsQuery,
    fallbackBlogPosts,
  );
}

export function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return fetchWithFallback<BlogPost | null>(
    blogPostBySlugQuery,
    null,
    { slug },
  );
}

export async function getBlogPostSlugs(): Promise<string[]> {
  if (!isSanityConfigured) {
    return [];
  }

  try {
    return await client.fetch<string[]>(blogPostSlugsQuery);
  } catch {
    return [];
  }
}
