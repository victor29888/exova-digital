"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Méthode" },
  { href: "#testimonials", label: "Clients" },
  { href: "#why-us", label: "Pourquoi nous" },
  { href: "#pricing", label: "Tarifs" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-[#050505]/82 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-[76px]">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-zinc-950 shadow-[0_0_28px_rgba(255,255,255,0.18)] transition-transform group-hover:scale-105">
            E
          </span>
          <span className="text-sm font-semibold tracking-tight text-white sm:text-[15px]">
            Exova Digital
          </span>
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.035] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm text-zinc-400 transition-all hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary">
            Réserver un appel
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-white transition-colors hover:bg-white/[0.07] lg:hidden"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path
                d="M4 4l10 10M14 4L4 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path
                  d="M2 5h14M2 9h14M2 13h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/[0.08] bg-[#050505]/96 px-6 py-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:hidden">
          <nav aria-label="Navigation mobile" className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.025] px-4 py-3 text-base text-zinc-200 transition-colors hover:bg-white/[0.06]"
              >
                {link.label}
              </Link>
            ))}
            <Button
              href="#contact"
              variant="primary"
              className="mt-2 w-full"
            >
              Réserver un appel
            </Button>
            <p className="mt-2 text-center text-xs text-zinc-600">
              Audit gratuit, réponse sous 48h ouvrées.
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
