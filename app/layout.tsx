import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import CookieManager from "@/components/CookieManager";

export const metadata: Metadata = {
  title: "Autoricambi Saitta – Ricambi Auto a Piazza Armerina, Enna",
  description:
    "Autoricambi Saitta: ricambi auto nuovi e usati a Piazza Armerina (EN), Sicilia. Disponibili subito o su ordinazione. Contattaci su WhatsApp per una risposta rapida.",
  keywords: [
    "ricambi auto Piazza Armerina",
    "autoricambi Enna",
    "ricambi usati Sicilia",
    "Autoricambi Saitta",
    "ricambi su ordinazione Piazza Armerina",
  ],
  openGraph: {
    title: "Autoricambi Saitta – Ricambi Auto a Piazza Armerina",
    description: "Ricambi auto disponibili subito o su ordinazione a Piazza Armerina (EN). Risposta rapida via WhatsApp.",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="bg-brand-black text-brand-white antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
        <CookieManager />
      </body>
    </html>
  );
}
