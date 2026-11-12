import type { Metadata } from "next";
import {
  BUSINESS_NAME,
  EMAIL,
  PHONE_NUMBER,
  MOBILE_NUMBER,
} from "@/lib/constants";

// Unico host del sito: www. Il dominio senza www rimanda qui (impostazione dei
// domini su Vercel). Canonical, sitemap, robots e og:url usano solo questo.
export const SITE_URL = "https://www.autoricambisaitta.it";

const OG_IMAGE = {
  url: "/images/og-autoricambi-saitta.jpg",
  width: 1200,
  height: 630,
  alt: "La vetrina di Autoricambi Saitta in Via Giosuè Carducci a Piazza Armerina",
};

/**
 * Metadata di una pagina con canonical, Open Graph e Twitter propri.
 *
 * In Next i `metadata` del layout vengono ereditati dalle pagine figlie:
 * un `alternates.canonical` messo solo nel layout faceva puntare TUTTE le
 * pagine alla home. Ogni pagina indicizzabile deve passare da qui.
 * `openGraph` di una pagina sostituisce per intero quello del layout,
 * per questo l'immagine e il locale sono ripetuti qui.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: BUSINESS_NAME,
      locale: "it_IT",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

// Dati strutturati del negozio (schema.org AutoPartsStore). Stessi dati che il
// sito mostra nel footer e in Contatti: se cambiano lì, vanno cambiati anche
// qui, e devono coincidere con il profilo Google del negozio.
// Coordinate geografiche non inserite: vanno prese dal profilo Google, non stimate.
export function storeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    "@id": `${SITE_URL}/#negozio`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    image: `${SITE_URL}${OG_IMAGE.url}`,
    logo: `${SITE_URL}/images/logo.png`,
    telephone: `+39 ${PHONE_NUMBER}`,
    email: EMAIL,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: MOBILE_NUMBER,
      contactType: "customer service",
      availableLanguage: "Italian",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Giosuè Carducci, 7",
      postalCode: "94015",
      addressLocality: "Piazza Armerina",
      addressRegion: "EN",
      addressCountry: "IT",
    },
    areaServed: "Piazza Armerina",
    paymentAccepted: "Contanti, carte di credito, carte di debito",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "14:30",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:30",
        closes: "12:00",
      },
    ],
  };
}
