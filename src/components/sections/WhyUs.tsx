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

const proofPoints = [
  { value: "0", label: "sous-traitance opaque" },
  { value: "1", label: "interlocuteur senior" },
  { value: "100%", label: "orienté résultat" },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div className="max-w-3xl">
            <SectionLabel>Pourquoi Exova</SectionLabel>
            <h2 className="text-balance mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              L&apos;agence qui parle{" "}
              <span className="gradient-text">business, pas buzzwords</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Nous ne vendons pas des prestations isolées. Nous construisons des
              systèmes de croissance pour les PME qui veulent des résultats, pas
              des rapports PowerPoint.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 rounded-3xl border border-white/[0.07] bg-white/[0.025] p-3">
            {proofPoints.map((point) => (
              <div key={point.label} className="rounded-2xl bg-white/[0.035] p-4">
                <p className="text-2xl font-semibold tracking-tight text-white">
                  {point.value}
                </p>
                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  {point.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="premium-card premium-card-hover rounded-3xl p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="h-px w-10 bg-gradient-to-r from-indigo-400 to-cyan-300" />
                <span className="font-mono text-xs text-zinc-600">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-base font-semibold tracking-tight text-white">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-500">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
