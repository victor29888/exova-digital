import { Accordion } from "@/components/ui/Accordion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { FaqItem } from "@/sanity/types";

interface FAQProps {
  items: FaqItem[];
}

export function FAQ({ items }: FAQProps) {
  const accordionItems = items.map(({ question, answer }) => ({
    question,
    answer,
  }));

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Questions
              <br />
              <span className="gradient-text">fréquentes</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-400">
              Vous ne trouvez pas votre réponse ?{" "}
              <a
                href="#contact"
                className="text-white underline underline-offset-4 hover:text-zinc-300"
              >
                Contactez-nous
              </a>{" "}
              — nous répondons sous 48h.
            </p>
            <div className="mt-8 rounded-3xl border border-white/[0.07] bg-white/[0.025] p-5">
              <p className="text-sm font-medium text-white">
                Besoin d&apos;un avis direct ?
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Envoyez votre contexte, nous revenons avec les priorités les
                plus rentables pour votre acquisition.
              </p>
            </div>
          </div>

          <div className="premium-card rounded-3xl px-5 sm:px-7">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
