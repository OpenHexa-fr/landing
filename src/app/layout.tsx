import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const SITE_URL = "https://openhexa.fr";
const TITLE = "OpenHexa — Données publiques françaises, outils concrets";
const DESCRIPTION =
  "OpenHexa transforme les données ouvertes du gouvernement français (DVF, DPE, prix des carburants...) en outils web grand public, gratuits et open source.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · OpenHexa",
  },
  description: DESCRIPTION,
  keywords: [
    "données publiques",
    "open data",
    "data.gouv.fr",
    "DVF",
    "DPE",
    "prix carburants",
    "immobilier",
    "open source",
  ],
  authors: [{ name: "OpenHexa", url: "https://github.com/OpenHexa-fr" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "OpenHexa",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b12" },
  ],
};

// Applique le thème choisi (localStorage) avant le premier paint, pour éviter tout flash.
// S'exécute avant l'hydratation React : volontairement en dehors de tout composant.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("openhexa-theme");
    if (stored === "light" || stored === "dark") {
      document.documentElement.setAttribute("data-theme", stored);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
