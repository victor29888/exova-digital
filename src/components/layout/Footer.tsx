import Link from "next/link";

const footerLinks = {
  navigation: [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Méthode" },
    { href: "#testimonials", label: "Clients" },
    { href: "#pricing", label: "Tarifs" },
    { href: "#contact", label: "Contact" },
  ],
  services: [
    { href: "#services", label: "Sites web" },
    { href: "#services", label: "Automatisations IA" },
    { href: "#services", label: "Publicité digitale" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050505]">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="mb-14 rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-white">
                Une acquisition plus nette commence par un diagnostic.
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                Audit gratuit de votre site, de vos campagnes et de vos
                automatisations. Plan d&apos;action priorisé sous 48h ouvrées.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 transition-all hover:-translate-y-0.5 hover:bg-zinc-100"
            >
              Réserver un appel
            </Link>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-zinc-950 shadow-[0_0_28px_rgba(255,255,255,0.16)]">
                E
              </span>
              <span className="text-sm font-semibold text-white">
                Exova Digital
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-500">
              Agence digitale premium pour les PME françaises. Nous transformons
              votre présence en ligne en un moteur de croissance mesurable.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Sites web", "IA", "Ads", "ROI"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-xs text-zinc-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-wide text-zinc-500 uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-wide text-zinc-500 uppercase">
              Expertises
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Exova Digital. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="#"
              className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
            >
              Mentions légales
            </Link>
            <Link
              href="#"
              className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
