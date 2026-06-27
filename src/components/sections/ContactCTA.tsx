"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="gradient-border premium-card relative overflow-hidden rounded-[2rem]">
          <div className="hero-glow pointer-events-none absolute inset-0 opacity-70" />
          <div className="pointer-events-none absolute right-8 bottom-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative grid gap-12 p-6 sm:p-8 lg:grid-cols-[0.9fr_1fr] lg:gap-16 lg:p-12 xl:p-16">
            <div>
              <SectionLabel>Audit gratuit</SectionLabel>
              <h2 className="text-balance mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Prêt à transformer
                <br />
                <span className="gradient-text">votre acquisition ?</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-8 text-zinc-400 sm:text-lg">
                Réservez un appel découverte gratuit de 30 minutes. Nous
                analysons votre situation et vous proposons un plan d&apos;action
                concret — sans engagement.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Audit gratuit de votre présence digitale",
                  "Estimation ROI personnalisée",
                  "Réponse garantie sous 48h",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 5l2.5 2.5L8 3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid grid-cols-3 gap-3">
                {[
                  ["30 min", "appel clair"],
                  ["48h", "retour écrit"],
                  ["0 €", "sans engagement"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4"
                  >
                    <p className="text-xl font-semibold tracking-tight text-white">
                      {value}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {submitted ? (
              <div className="flex min-h-[460px] flex-col items-center justify-center rounded-3xl border border-white/[0.07] bg-[#0a0a0a] p-8 text-center sm:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12l5 5L20 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  Message envoyé !
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Nous vous recontactons sous 48h ouvrées.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-3xl border border-white/[0.07] bg-[#0a0a0a]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-6 lg:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-medium text-zinc-500"
                    >
                      Nom complet
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className="min-h-11 w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-indigo-400/60 focus:ring-1 focus:ring-indigo-400/30"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1.5 block text-xs font-medium text-zinc-500"
                    >
                      Entreprise
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      placeholder="Ma PME"
                      className="min-h-11 w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-indigo-400/60 focus:ring-1 focus:ring-indigo-400/30"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-medium text-zinc-500"
                  >
                    Email professionnel
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jean@entreprise.fr"
                    className="min-h-11 w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-indigo-400/60 focus:ring-1 focus:ring-indigo-400/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-xs font-medium text-zinc-500"
                  >
                    Service souhaité
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="min-h-11 w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-indigo-400/60 focus:ring-1 focus:ring-indigo-400/30"
                  >
                    <option value="site">Site web à conversion</option>
                    <option value="ia">Automatisations & agents IA</option>
                    <option value="ads">Publicité digitale</option>
                    <option value="complet">Solution complète</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium text-zinc-500"
                  >
                    Décrivez votre projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Parlez-nous de vos objectifs, votre secteur et votre budget..."
                    className="w-full resize-none rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-indigo-400/60 focus:ring-1 focus:ring-indigo-400/30"
                  />
                </div>

                <button
                  type="submit"
                  className="min-h-12 w-full rounded-full bg-white py-3 text-sm font-medium text-zinc-950 transition-all hover:-translate-y-0.5 hover:bg-zinc-100"
                >
                  Envoyer ma demande
                </button>

                <p className="text-center text-xs text-zinc-600">
                  En soumettant ce formulaire, vous acceptez d&apos;être
                  recontacté par Exova Digital.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
