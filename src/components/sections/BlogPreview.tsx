import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { urlFor } from "@/sanity/lib/image";
import type { BlogPostPreview } from "@/sanity/types";

interface BlogPreviewProps {
  posts: BlogPostPreview[];
}

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  if (posts.length === 0) {
    return null;
  }

  const [featured, ...rest] = posts;

  return (
    <section id="blog" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Blog</SectionLabel>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Conseils &{" "}
              <span className="gradient-text">actualités</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-400">
              Stratégies d&apos;acquisition, tendances IA et bonnes pratiques
              pour les PME françaises.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Voir tous les articles →
          </Link>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <Link
            href={`/blog/${featured.slug}`}
            className="gradient-border group relative overflow-hidden rounded-2xl bg-white/[0.02] lg:col-span-2 lg:row-span-2"
          >
            {featured.mainImage && (
              <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[320px]">
                <Image
                  src={urlFor(featured.mainImage).width(800).height(450).url()}
                  alt={featured.mainImage.alt ?? featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
              </div>
            )}
            <div className="relative p-8">
              <time className="text-xs text-zinc-500">
                {formatDate(featured.publishedAt)}
              </time>
              <h3 className="mt-2 text-xl font-semibold text-white transition-colors group-hover:text-indigo-300">
                {featured.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {featured.excerpt}
              </p>
            </div>
          </Link>

          {rest.slice(0, 2).map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="gradient-border group rounded-2xl bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]"
            >
              <time className="text-xs text-zinc-500">
                {formatDate(post.publishedAt)}
              </time>
              <h3 className="mt-2 text-base font-semibold text-white transition-colors group-hover:text-indigo-300">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
