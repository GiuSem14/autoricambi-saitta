"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getCookiePreferences, saveCookiePreferences } from "./CookieManager";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookiePreferences()) {
      setVisible(true);
    }
    const handler = () => setVisible(false);
    window.addEventListener("cookiePreferencesChanged", handler);
    return () => window.removeEventListener("cookiePreferencesChanged", handler);
  }, []);

  function acceptAll() {
    saveCookiePreferences({ necessary: true, statistical: true, marketing: true });
    setVisible(false);
  }

  function acceptNecessary() {
    saveCookiePreferences({ necessary: true, statistical: false, marketing: false });
    setVisible(false);
  }

  function openManager() {
    window.dispatchEvent(new Event("openCookieManager"));
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-[#1e1e1e] border border-gray-700 rounded-2xl shadow-2xl p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-brand-white text-sm font-medium mb-1">
              🍪 Utilizziamo i cookie
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">
              Usiamo i cookie per migliorare la tua esperienza di navigazione.
              Puoi scegliere quali accettare.{" "}
              <Link
                href="/cookie-policy"
                className="text-brand-yellow hover:underline"
              >
                Cookie Policy
              </Link>
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-2 flex-shrink-0">
            <button
              onClick={acceptNecessary}
              className="text-xs font-semibold text-gray-400 hover:text-white border border-gray-600 hover:border-gray-400 px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Solo necessari
            </button>
            <button
              onClick={openManager}
              className="text-xs font-semibold text-gray-300 hover:text-white border border-gray-600 hover:border-gray-400 px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Gestisci preferenze
            </button>
            <button
              onClick={acceptAll}
              className="text-xs font-bold bg-brand-yellow hover:bg-yellow-400 text-brand-black px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Accetta tutti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
