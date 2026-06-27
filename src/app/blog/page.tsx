import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getBlogPosts } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export const metadata = {
  title: "Blog — Exova Digital",
  description:
    "Conseils d'acquisition client, automatisations IA et publicité digitale pour les PME françaises.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <Header />
      <main className="relative overflow-hidden pt-32 pb-24 lg:pt-40">
        <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[32rem]" />
        <div className="grid-pattern pointer-events-none absolute inset-x-0 top-0 h-[32rem] opacity-50" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative max-w-3xl">
            <SectionLabel>Blog</SectionLabel>
            <h1 className="text-balance mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Conseils & <span className="gradient-text">actualités</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
              Stratégies d&apos;acquisition, tendances IA et bonnes pratiques
              pour les PME françaises.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="premium-card relative mt-16 rounded-3xl p-12 text-center">
              <p className="text-zinc-400">
                Aucun article publié pour le moment. Revenez bientôt !
              </p>
            </div>
          ) : (
            <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  className="gradient-border premium-card premium-card-hover group overflow-hidden rounded-3xl"
                >
                  {post.mainImage && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={urlFor(post.mainImage).width(600).height(375).url()}
                        alt={post.mainImage.alt ?? post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <time className="text-xs text-zinc-500">
                      {formatDate(post.publishedAt)}
                    </time>
                    <h2 className="mt-3 text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-indigo-200">
                      {post.title}
                    </h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-zinc-400">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
