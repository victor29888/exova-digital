import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

const stats = [
  { value: "+120", label: "projets livrés" },
  { value: "3,2x", label: "ROI moyen ads" },
  { value: "48h", label: "premier retour" },
];

const trustSignals = [
  "Sites rapides",
  "Tracking ROI",
  "Agents IA",
  "Ads rentables",
];

const pipeline = [
  {
    label: "Visiteurs",
    value: "18 420",
    change: "+28%",
    tone: "text-sky-300",
  },
  {
    label: "Leads qualifiés",
    value: "847",
    change: "+34%",
    tone: "text-emerald-300",
  },
  {
    label: "Coût par lead",
    value: "12,40 €",
    change: "-18%",
    tone: "text-indigo-300",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <div className="max-w-3xl lg:max-w-none">
            <div className="animate-fade-up opacity-0">
              <SectionLabel>Agence digitale premium</SectionLabel>
            </div>

            <h1 className="animate-fade-up animation-delay-100 text-balance mt-7 text-5xl font-semibold tracking-tight text-white opacity-0 sm:text-6xl lg:text-7xl lg:leading-[0.98]">
              Plus de clients.
              <br />
              <span className="gradient-text">Moins d&apos;efforts.</span>
            </h1>

            <p className="animate-fade-up animation-delay-200 mt-6 max-w-2xl text-lg leading-8 text-zinc-300 opacity-0 sm:text-xl">
              Exova Digital construit des systèmes d&apos;acquisition pour PME
              françaises: sites web premium, automatisations IA et campagnes
              Google, Meta, TikTok pensées pour convertir.
            </p>

            <div className="animate-fade-up animation-delay-300 mt-9 flex flex-col gap-3 opacity-0 sm:flex-row">
              <Button
                href="#contact"
                variant="primary"
                className="w-full sm:w-auto"
              >
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
              <Button
                href="#services"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Voir l&apos;approche
              </Button>
            </div>

            <div className="animate-fade-up animation-delay-400 mt-8 flex flex-wrap gap-2 opacity-0">
              {trustSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-zinc-400"
                >
                  {signal}
                </span>
              ))}
            </div>

            <div className="animate-fade-up animation-delay-500 mt-12 grid max-w-xl grid-cols-3 gap-4 opacity-0 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-zinc-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up animation-delay-300 opacity-0">
            <div className="gradient-border premium-card relative overflow-hidden rounded-3xl p-3">
              <div className="absolute -top-24 right-6 h-44 w-44 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="absolute -bottom-20 left-6 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#080808]">
                <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                    Acquisition live
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium text-zinc-500">
                        Pipeline mensuel
                      </p>
                      <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
                        42 680 €
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] px-3 py-2 text-right">
                      <p className="text-[11px] text-zinc-500">Conversion</p>
                      <p className="text-sm font-semibold text-emerald-300">
                        +31%
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 h-28 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
                    <div className="flex h-full items-end gap-2">
                      {[38, 46, 42, 58, 52, 64, 71, 68, 82, 78, 92, 88].map(
                        (height, index) => (
                          <span
                            key={`${height}-${index}`}
                            className="flex-1 rounded-t-md bg-gradient-to-t from-indigo-500/30 via-indigo-400/55 to-cyan-300/80"
                            style={{ height: `${height}%` }}
                          />
                        ),
                      )}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {pipeline.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4"
                      >
                        <p className="text-xs text-zinc-500">{metric.label}</p>
                        <p className="mt-2 text-xl font-semibold tracking-tight text-white">
                          {metric.value}
                        </p>
                        <p
                          className={`mt-1 text-xs font-medium ${metric.tone}`}
                        >
                          {metric.change}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
