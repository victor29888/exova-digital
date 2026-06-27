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
    <section
      id="process"
      className="relative overflow-hidden border-y border-white/[0.08] bg-white/[0.012] py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Notre méthode</SectionLabel>
            <h2 className="text-balance mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Un processus clair,
              <br />
              <span className="gradient-text">des résultats concrets</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-8 text-zinc-400">
            Pas de jargon, pas de surprise. Vous savez exactement où en est
            votre projet à chaque étape, avec un interlocuteur dédié.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="premium-card premium-card-hover group relative overflow-hidden rounded-3xl p-7"
            >
              {index < steps.length - 1 && (
                <span className="absolute top-10 -right-2 hidden h-px w-8 bg-gradient-to-r from-indigo-400/50 to-transparent lg:block" />
              )}
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-400/10 font-mono text-xs text-indigo-300">
                {step.number}
              </span>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-500 transition-colors group-hover:text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
