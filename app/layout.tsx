import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noirblanc.com.br"),
  title: "Noir & Blanc — Criação de Sites Profissionais em São Paulo",
  description:
    "Estúdio de criação de sites profissionais para negócios locais em São Paulo. Sites responsivos, otimizados para Google e prontos para atrair novos clientes.",
  keywords: [
    "criação de sites",
    "web design",
    "São Paulo",
    "sites profissionais",
    "negócios locais",
  ],
  openGraph: {
    title: "Noir & Blanc — Criação de Sites Profissionais",
    description:
      "Sites responsivos, otimizados para Google e prontos para atrair novos clientes.",
    images: ["/logos/20-og-image-1200x630.png"],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/logos/18-favicon-64x64.png", sizes: "64x64" },
      { url: "/logos/19-favicon-192x192.png", sizes: "192x192" },
    ],
    apple: "/logos/19-favicon-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased grain`}
      >
        {children}
      </body>
    </html>
  );
}
