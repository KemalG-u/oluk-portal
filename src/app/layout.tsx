

import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import SirCompanion from "@/components/SirCompanion";

export const metadata: Metadata = {
  title: "OLUK | Spiritüel Dönüşüm Platformu",
  description: "Arınma, koruma ve aktivasyon ile içsel dönüşüm yolculuğun. Türkiye'nin en kapsamlı spiritüel gelişim platformu.",
  keywords: [
    "spiritüel gelişim",
    "meditasyon",
    "arınma",
    "enerji çalışması",
    "bilinçaltı",
    "dönüşüm"
  ],
  openGraph: {
    title: "OLUK | Spiritüel Dönüşüm Platformu",
    description: "Arınma, koruma ve aktivasyon ile içsel dönüşüm yolculuğun. Türkiye'nin en kapsamlı spiritüel gelişim platformu.",
    url: "https://oluk.org",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "https://oluk.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "OLUK Spiritüel Dönüşüm Platformu"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "OLUK | Spiritüel Dönüşüm Platformu",
    description: "Arınma, koruma ve aktivasyon ile içsel dönüşüm yolculuğun. Türkiye'nin en kapsamlı spiritüel gelişim platformu.",
    images: ["https://oluk.org/og-image.png"]
  },
  alternates: {
    canonical: "https://oluk.org",
    languages: {
      tr: "https://oluk.org",
      en: "https://oluk.org/en",
      "x-default": "https://oluk.org"
    }
  }
};

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-source",
  display: "swap",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "OLUK",
    "url": "https://oluk.org",
    "logo": "https://oluk.org/logo.png",
    "description": "Spiritüel dönüşüm ve kişisel gelişim platformu",
    "sameAs": [
      "https://instagram.com/oluk.org",
      "https://youtube.com/@oluk"
    ]
  };

  return (
    <html lang="tr" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="alternate" hrefLang="tr" href="https://oluk.org" />
        <link rel="alternate" hrefLang="en" href="https://oluk.org/en" />
        <link rel="alternate" hrefLang="x-default" href="https://oluk.org" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0D4F4F" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="OLUK" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body className="font-sans bg-cream text-text-dark antialiased">
        {children}
        <SirCompanion />
      </body>
    </html>
  );
}
