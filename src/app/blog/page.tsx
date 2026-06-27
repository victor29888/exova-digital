import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
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
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wide text-indigo-400 uppercase">
              Blog
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              Conseils & actualités
            </h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Stratégies d&apos;acquisition, tendances IA et bonnes pratiques
              pour les PME françaises.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="mt-16 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-12 text-center">
              <p className="text-zinc-400">
                Aucun article publié pour le moment. Revenez bientôt !
              </p>
            </div>
          ) : (
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  className="gradient-border group overflow-hidden rounded-2xl bg-white/[0.02] transition-colors hover:bg-white/[0.04]"
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
                    <h2 className="mt-2 text-lg font-semibold text-white transition-colors group-hover:text-indigo-300">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400">
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
