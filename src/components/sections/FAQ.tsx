import { Accordion } from "@/components/ui/Accordion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const faqItems = [
  {
    question: "Combien de temps faut-il pour voir des résultats ?",
    answer:
      "Un site web est livré en 2 à 4 semaines selon la complexité. Les campagnes publicitaires génèrent leurs premiers leads dès la première semaine de diffusion. L'optimisation continue améliore les performances mois après mois.",
  },
  {
    question: "Travaillez-vous uniquement avec des PME françaises ?",
    answer:
      "Oui, c'est notre spécialité. Nous comprenons le marché français, la fiscalité, les habitudes d'achat locales et les spécificités réglementaires (RGPD, cookies, etc.).",
  },
  {
    question: "Proposez-vous un accompagnement après la livraison ?",
    answer:
      "Absolument. Tous nos plans incluent une période de suivi. Le plan Croissance et Performance comprennent une optimisation continue : ajustements publicitaires, mises à jour du site et amélioration des automatisations IA.",
  },
  {
    question: "Quel budget publicitaire minimum recommandez-vous ?",
    answer:
      "Pour des résultats significatifs, nous recommandons un budget publicitaire minimum de 1 000 €/mois en plus de nos honoraires de gestion. Ce montant varie selon votre secteur et vos objectifs — nous vous conseillons lors de l'audit initial.",
  },
  {
    question: "Comment fonctionnent les automatisations IA ?",
    answer:
      "Nous déployons des agents IA connectés à vos outils existants (CRM, email, calendrier). Ils qualifient vos leads, envoient des relances personnalisées et planifient des rendez-vous — automatiquement, 24h/24.",
  },
  {
    question: "Puis-je commencer par un seul service ?",
    answer:
      "Oui. Vous pouvez démarrer avec un site web seul, puis ajouter la publicité ou l'IA plus tard. Nos formules sont modulaires et évoluent avec votre croissance.",
  },
];

export function FAQ() {
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
            <Accordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
