import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

const stats = [
  { value: "+120", label: "Projets livrés" },
  { value: "3,2×", label: "ROI moyen publicité" },
  { value: "48h", label: "Premier retour garanti" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-up opacity-0">
            <SectionLabel>Agence digitale premium</SectionLabel>
          </div>

          <h1 className="animate-fade-up animation-delay-100 mt-8 text-4xl font-semibold tracking-tight text-white opacity-0 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Plus de clients.
            <br />
            <span className="gradient-text">Moins d&apos;efforts.</span>
          </h1>

          <p className="animate-fade-up animation-delay-200 mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 opacity-0 sm:text-lg">
            Exova Digital accompagne les PME françaises avec des sites web
            performants, des automatisations IA et des campagnes publicitaires
            qui convertissent — Google, Meta et TikTok.
          </p>

          <div className="animate-fade-up animation-delay-300 mt-10 flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row">
            <Button href="#contact" variant="primary">
              Démarrer un projet
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button href="#services" variant="secondary">
              Découvrir nos services
            </Button>
          </div>
        </div>

        <div className="animate-fade-up animation-delay-400 mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-8 opacity-0">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="gradient-border mx-auto mt-20 max-w-4xl overflow-hidden rounded-2xl bg-white/[0.02]">
          <div className="border-b border-white/[0.06] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="ml-3 text-xs text-zinc-600">
                exova-digital.fr — tableau de bord
              </span>
            </div>
          </div>
          <div className="grid gap-px bg-white/[0.04] p-6 sm:grid-cols-3">
            {[
              { label: "Leads ce mois", value: "847", change: "+34%" },
              { label: "Coût par lead", value: "12,40 €", change: "-18%" },
              { label: "Taux de conversion", value: "4,8%", change: "+0,9 pt" },
            ].map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl bg-[#0a0a0a] p-5"
              >
                <p className="text-xs text-zinc-500">{metric.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs font-medium text-emerald-400">
                  {metric.change}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
