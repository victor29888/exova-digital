import type { PortableTextBlock } from "next-sanity";

export type ServiceIcon = "website" | "automation" | "ads";

export interface Service {
  _id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  features: string[];
}

export interface PricingPlan {
  _id: string;
  name: string;
  description: string;
  priceLabel: string;
  pricePrefix?: string;
  period: string;
  isCustomPrice: boolean;
  features: string[];
  highlighted: boolean;
  ctaLabel: string;
}

export interface FaqItem {
  _id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar?: {
    asset: {
      _ref: string;
    };
  };
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  mainImage?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  publishedAt: string;
  author?: string;
  body?: PortableTextBlock[];
}

export interface BlogPostPreview {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  mainImage?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  publishedAt: string;
  author?: string;
}
