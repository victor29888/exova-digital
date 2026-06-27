import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Audit & stratégie",
    description:
      "Nous analysons votre marché, vos concurrents et vos objectifs. Vous repartez avec un plan d'action clair et chiffré.",
  },
  {
    number: "02",
    title: "Conception & développement",
    description:
      "Design sur mesure, copywriting persuasif et développement performant. Chaque détail est pensé pour convertir.",
  },
  {
    number: "03",
    title: "Lancement & acquisition",
    description:
      "Mise en ligne, campagnes publicitaires et automatisations IA activées. Vos premiers résultats arrivent rapidement.",
  },
  {
    number: "04",
    title: "Optimisation continue",
    description:
      "Reporting transparent, tests A/B et ajustements permanents. Votre ROI s'améliore mois après mois.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-y border-white/[0.06] bg-white/[0.01] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-lg">
            <SectionLabel>Notre méthode</SectionLabel>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Un processus clair,
              <br />
              des résultats concrets
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-zinc-400 lg:text-base">
            Pas de jargon, pas de surprise. Vous savez exactement où en est
            votre projet à chaque étape, avec un interlocuteur dédié.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group bg-[#050505] p-8 transition-colors hover:bg-white/[0.02]"
            >
              <span className="font-mono text-xs text-indigo-400">
                {step.number}
              </span>
              <h3 className="mt-4 text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
