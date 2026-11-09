import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import { company } from "@/data/company";
import "./globals.css";
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const title = "Serralheria Casa Forte | Serralheria em Cornélio Procópio - PR";
const description =
  "Soluções em serralheria em Cornélio Procópio, PR. Portões, grades, coberturas e estruturas metálicas sob medida. Solicite seu orçamento pelo WhatsApp.";
export const metadata: Metadata = {
  title,
  description,
  ...(company.url
    ? { metadataBase: new URL(company.url), alternates: { canonical: "/" } }
    : {}),
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    type: "website",
    siteName: company.name,
    ...(company.url
      ? {
          images: [
            {
              url: new URL("/images/hero/welding.jpg", company.url).toString(),
              width: 1920,
              height: 1280,
              alt: "Imagem ilustrativa de oficina de serralheria",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    ...(company.url
      ? {
          images: [new URL("/images/hero/welding.jpg", company.url).toString()],
        }
      : {}),
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${sora.variable} ${inter.variable}`}>
        <a className="skip-link" href="#main">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
