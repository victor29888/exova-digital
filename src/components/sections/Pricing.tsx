import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { PricingPlan } from "@/sanity/types";

interface PricingProps {
  plans: PricingPlan[];
}

export function Pricing({ plans }: PricingProps) {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-y border-white/[0.08] bg-white/[0.012] py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Tarifs</SectionLabel>
          <h2 className="text-balance mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Des offres transparentes,
            <br />
            <span className="gradient-text">sans mauvaise surprise</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
            Chaque formule inclut un devis détaillé avant engagement. Pas de
            frais cachés, pas de sous-traitance opaque.
          </p>
        </div>

        <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan._id}
              className={`gradient-border premium-card premium-card-hover relative flex flex-col rounded-3xl p-7 sm:p-8 ${
                plan.highlighted
                  ? "scale-[1.01] ring-1 ring-indigo-400/25"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-950 shadow-[0_16px_40px_rgba(255,255,255,0.12)]">
                  Le plus populaire
                </span>
              )}

              <div>
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {plan.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {plan.description}
                </p>
              </div>

              <div className="mt-7 flex flex-wrap items-baseline gap-1">
                {!plan.isCustomPrice && plan.pricePrefix && (
                  <span className="mr-1 text-sm text-zinc-400">
                    {plan.pricePrefix}
                  </span>
                )}
                <span className="text-4xl font-semibold tracking-tight text-white">
                  {plan.isCustomPrice
                    ? plan.priceLabel
                    : `${plan.priceLabel} €`}
                </span>
                {!plan.isCustomPrice && (
                  <span className="text-sm text-zinc-400">/ {plan.period}</span>
                )}
              </div>

              <ul className="mt-8 flex-1 space-y-3.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-6 text-zinc-400"
                  >
                    <svg
                      className="mt-1 shrink-0 text-indigo-300"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={plan.highlighted ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                {plan.ctaLabel}
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm leading-6 text-zinc-400">
          Besoin d&apos;une formule sur mesure ?{" "}
          <a
            href="#contact"
            className="text-zinc-300 underline underline-offset-4 hover:text-white"
          >
            Parlons-en lors d&apos;un appel gratuit de 30 minutes.
          </a>
        </p>
      </div>
    </section>
  );
}
