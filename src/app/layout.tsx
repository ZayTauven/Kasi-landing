import { Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";

import type { Metadata } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const dmSans = localFont({
  src: [
    {
      path: "../../fonts/dm-sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  // Base servant a resoudre les URL relatives (og:image, twitter:image).
  // Sans elle, Next les resout vers http://localhost:3000 et TOUS les apercus
  // de partage (WhatsApp, LinkedIn, Facebook) sont casses en ligne.
  // Vercel fournit le domaine de production; il suffira de definir
  // NEXT_PUBLIC_SITE_URL=https://kasigroupe.com le jour de la bascule.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3000"),
  ),
  title: {
    default: "Kasi — Courses, livraisons et logistique à Dakar",
    template: "%s | Kasi",
  },
  description:
    "Une course, un colis, une tournée entreprise : Kasi fait bouger Dakar avec les taximans et livreurs qui la connaissent déjà. Suivi en temps réel, Kasiman notés, prix connu avant de partir.",
  keywords: [
    "Kasi",
    "Dakar",
    "Sénégal",
    "taxi Dakar",
    "livraison Dakar",
    "coursier Dakar",
    "VTC Sénégal",
    "livraison dernier kilomètre",
    "logistique entreprise Dakar",
    "Kasiman",
  ],
  authors: [{ name: "Kasi" }],
  creator: "Kasi",
  publisher: "Kasi",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon/favicon.ico", sizes: "48x48" }],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Kasi — Courses, livraisons et logistique à Dakar",
    description:
      "Une course, un colis, une tournée entreprise : Kasi fait bouger Dakar avec ceux qui la connaissent déjà.",
    siteName: "Kasi",
    locale: "fr_SN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 800,
        alt: "Kasi — la vitesse sénégalaise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kasi — Courses, livraisons et logistique à Dakar",
    description:
      "Une course, un colis, une tournée entreprise : Kasi fait bouger Dakar avec ceux qui la connaissent déjà.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${bricolage.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
