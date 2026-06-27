import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PortableTextContent } from "@/components/ui/PortableTextContent";
import { getBlogPostBySlug, getBlogPostSlugs } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export async function generateStaticParams() {
  const slugs = await getBlogPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article introuvable — Exova Digital" };
  }

  return {
    title: `${post.title} — Exova Digital`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <article className="mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="text-sm text-zinc-500 transition-colors hover:text-white"
          >
            ← Retour au blog
          </Link>

          <header className="mt-8">
            <time className="text-sm text-zinc-500">
              {formatDate(post.publishedAt)}
            </time>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {post.title}
            </h1>
            {post.author && (
              <p className="mt-4 text-sm text-zinc-400">Par {post.author}</p>
            )}
            {post.excerpt && (
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                {post.excerpt}
              </p>
            )}
          </header>

          {post.mainImage && (
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={urlFor(post.mainImage).width(1200).height(675).url()}
                alt={post.mainImage.alt ?? post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {post.body && (
            <div className="mt-12">
              <PortableTextContent value={post.body} />
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
