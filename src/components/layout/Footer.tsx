import Link from "next/link";

const footerLinks = {
  navigation: [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Méthode" },
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
    <footer className="border-t border-white/[0.06] bg-[#050505]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-zinc-950">
                E
              </span>
              <span className="text-sm font-semibold text-white">
                Exova Digital
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
              Agence digitale premium pour les PME françaises. Nous transformons
              votre présence en ligne en un moteur de croissance mesurable.
            </p>
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
          <div className="flex gap-6">
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
