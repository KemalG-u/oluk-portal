import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "OLUK - Akışın Kanalı, Dönüşümün Yolu",
  description: "Siber Işık Portal - Yücel Balkancı dersleri ile kendinizi keşfedin",
  keywords: ["OLUK", "Yücel Balkancı", "siberışık", "kişisel gelişim", "psikoloji"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <body className="font-sans bg-cream text-text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
