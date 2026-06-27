import { SectionLabel } from "@/components/ui/SectionLabel";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 20h8M12 18v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Sites web à conversion",
    description:
      "Des sites rapides, élégants et pensés pour transformer vos visiteurs en clients. Design premium, copywriting orienté résultats, SEO intégré.",
    features: ["Landing pages", "Sites vitrine", "E-commerce"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8l2 2M14 14l2 2M16 8l-2 2M8 16l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Automatisations & agents IA",
    description:
      "Libérez votre équipe des tâches répétitives. Agents IA sur mesure, workflows intelligents et intégrations qui tournent 24h/24.",
    features: ["Chatbots intelligents", "CRM automatisé", "Qualification de leads"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 18V6l8-3 8 3v12l-8 3-8-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 3v18M4 6l8 3 8-3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Publicité digitale",
    description:
      "Des campagnes rentables sur Google Ads, Meta Ads et TikTok Ads. Ciblage précis, créas percutantes et optimisation continue.",
    features: ["Google Ads", "Meta Ads", "TikTok Ads"],
  },
];

export function Services() {
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
              key={service.title}
              className="gradient-border group rounded-2xl bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-indigo-400 transition-colors group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10">
                {service.icon}
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
