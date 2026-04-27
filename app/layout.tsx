import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import CookieManager from "@/components/CookieManager";

export const metadata: Metadata = {
  title: "Autoricambi Saitta – Ricambi Auto a Piazza Armerina, Enna",
  description:
    "Autoricambi Saitta: ricambi auto nuovi a Piazza Armerina (EN), Sicilia. Disponibili subito o su ordinazione. Contattaci su WhatsApp per una risposta rapida.",
  keywords: [
    "ricambi auto Piazza Armerina",
    "autoricambi Enna",
    "ricambi auto Sicilia",
    "Autoricambi Saitta",
    "ricambi su ordinazione Piazza Armerina",
  ],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Autoricambi Saitta – Ricambi Auto a Piazza Armerina",
    description: "Ricambi auto disponibili subito o su ordinazione a Piazza Armerina (EN). Risposta rapida via WhatsApp.",
    locale: "it_IT",
    type: "website",
  },
  verification: {
    google: 'nvedHY4oBqwqSb5b1It3KdSLUGihZc7W2Z0dTuW1RAI',
  },
  alternates: {
    canonical: 'https://www.autoricambisaitta.it',
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LQC7VH9WWC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LQC7VH9WWC');
          `}
        </Script>
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
