import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Service } from "@/sanity/types";

interface ServicesProps {
  services: Service[];
}

export function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Services</SectionLabel>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tout ce qu&apos;il faut pour{" "}
            <span className="gradient-text">accélérer votre croissance</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            Une approche intégrée : votre site convertit, l&apos;IA automatise,
            la publicité attire. Chaque levier travaille ensemble.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service._id}
              className="gradient-border group rounded-2xl bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-indigo-400 transition-colors group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10">
                <ServiceIcon icon={service.icon} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
                  >
                    {feature}
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
