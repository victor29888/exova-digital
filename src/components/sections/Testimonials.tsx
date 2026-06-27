import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { urlFor } from "@/sanity/lib/image";
import type { Testimonial } from "@/sanity/types";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Note : ${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
          className={i < rating ? "text-indigo-400" : "text-zinc-700"}
        >
          <path
            d="M7 1l1.76 3.57 3.94.57-2.85 2.78.67 3.92L7 10.27l-3.52 1.85.67-3.92L1.3 5.14l3.94-.57L7 1z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (testimonial.avatar) {
    return (
      <Image
        src={urlFor(testimonial.avatar).width(80).height(80).url()}
        alt={testimonial.name}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover"
      />
    );
  }

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-semibold text-indigo-400">
      {initials}
    </div>
  );
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="border-y border-white/[0.06] bg-white/[0.01] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Témoignages</SectionLabel>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ce que disent{" "}
            <span className="gradient-text">nos clients</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            Des PME françaises qui ont transformé leur acquisition client avec
            Exova Digital.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial._id}
              className="gradient-border flex flex-col rounded-2xl bg-white/[0.02] p-8"
            >
              <StarRating rating={testimonial.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-6">
                <Avatar testimonial={testimonial} />
                <div>
                  <cite className="not-italic text-sm font-medium text-white">
                    {testimonial.name}
                  </cite>
                  <p className="text-xs text-zinc-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
