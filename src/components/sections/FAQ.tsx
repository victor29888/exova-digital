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
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Questions
              <br />
              fréquentes
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Vous ne trouvez pas votre réponse ?{" "}
              <a
                href="#contact"
                className="text-white underline underline-offset-4 hover:text-zinc-300"
              >
                Contactez-nous
              </a>{" "}
              — nous répondons sous 48h.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
