import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://exova-digital.fr"),
  title: "Exova Digital — Agence digitale premium pour PME",
  description:
    "Sites web à conversion, automatisations IA et publicité digitale (Google, Meta, TikTok) pour les PME françaises. Plus de clients, moins d'efforts.",
  keywords: [
    "agence digitale",
    "PME France",
    "site web conversion",
    "Google Ads",
    "Meta Ads",
    "TikTok Ads",
    "automatisation IA",
  ],
  openGraph: {
    title: "Exova Digital — Agence digitale premium pour PME",
    description:
      "Sites web, IA et publicité digitale pour accélérer la croissance des PME françaises.",
    type: "website",
    locale: "fr_FR",
    siteName: "Exova Digital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-[#050505] text-white">
        <div className="noise-overlay pointer-events-none fixed inset-0 z-50" />
        {children}
      </body>
    </html>
  );
}
