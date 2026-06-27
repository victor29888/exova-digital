import { SectionLabel } from "@/components/ui/SectionLabel";

const reasons = [
  {
    title: "Spécialistes PME françaises",
    description:
      "Nous comprenons vos contraintes de budget, de temps et de recrutement. Nos solutions sont adaptées à votre réalité, pas à celle des grandes entreprises.",
  },
  {
    title: "Résultats mesurables",
    description:
      "Chaque action est trackée. Vous avez accès à un tableau de bord clair : leads, coût d'acquisition, taux de conversion. Pas de vanity metrics.",
  },
  {
    title: "Design premium",
    description:
      "Votre image compte. Nous créons des expériences digitales au niveau des meilleures marques tech — sobres, modernes, mémorables.",
  },
  {
    title: "Interlocuteur unique",
    description:
      "Fini les allers-retours entre agences. Un chef de projet dédié pilote l'ensemble : site, IA et publicité, de A à Z.",
  },
  {
    title: "IA au service du ROI",
    description:
      "Nous déployons l'intelligence artificielle là où elle a un impact réel : qualification de leads, relances automatiques, personnalisation.",
  },
  {
    title: "Engagement de performance",
    description:
      "Nos contrats incluent des objectifs clairs. Si nous ne livrons pas, nous corrigeons le tir — sans frais supplémentaires.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Pourquoi Exova</SectionLabel>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            L&apos;agence qui parle{" "}
            <span className="gradient-text">business, pas buzzwords</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            Nous ne vendons pas des prestations. Nous construisons des systèmes
            de croissance pour les PME qui veulent des résultats, pas des
            rapports PowerPoint.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
            >
              <div className="mb-4 h-px w-8 bg-indigo-500" />
              <h3 className="text-base font-semibold text-white">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
