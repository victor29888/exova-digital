import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Service } from "@/sanity/types";

interface ServicesProps {
  services: Service[];
}

const outcomes = [
  "positionnement premium",
  "parcours de conversion",
  "mesure claire du ROI",
];

export function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <SectionLabel>Services</SectionLabel>
            <h2 className="text-balance mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Un système complet pour{" "}
              <span className="gradient-text">accélérer votre croissance</span>
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-zinc-400 sm:text-lg">
              Votre site convertit, l&apos;IA automatise, la publicité attire.
              Chaque levier est conçu comme une pièce du même moteur
              d&apos;acquisition.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {outcomes.map((outcome) => (
                <span
                  key={outcome}
                  className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-400"
                >
                  {outcome}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service._id}
              className="gradient-border premium-card premium-card-hover group rounded-3xl p-7 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] text-indigo-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors group-hover:border-indigo-400/30 group-hover:bg-indigo-500/10">
                  <ServiceIcon icon={service.icon} />
                </div>
                <span className="font-mono text-xs text-zinc-600">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {service.description}
              </p>
              <ul className="mt-7 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
