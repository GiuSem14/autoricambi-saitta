"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getCookiePreferences } from "@/components/CookieManager";

const GA_ID = "G-LQC7VH9WWC";

/**
 * Google Analytics 4 caricato SOLO dopo il consenso ai cookie statistici.
 *
 * Prima GA4 era nel layout e partiva per tutti, anche senza scelta o dopo un
 * rifiuto, mentre la cookie policy lo elenca fra i cookie "Statistici" che il
 * visitatore può rifiutare. Ora lo script si monta solo con
 * `statistical: true` nelle preferenze salvate da CookieBanner/CookieManager.
 *
 * Se il consenso viene revocato dopo il caricamento, lo script non si può
 * togliere dalla pagina: si imposta il flag ufficiale `ga-disable-<ID>`, che
 * ferma ogni invio da quel momento. Alla visita successiva non si carica più.
 */
export default function GoogleAnalytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const update = () => {
      const ok = getCookiePreferences()?.statistical === true;
      (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = !ok;
      setAllowed(ok);
    };
    update();
    window.addEventListener("cookiePreferencesChanged", update);
    return () => window.removeEventListener("cookiePreferencesChanged", update);
  }, []);

  if (!allowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
