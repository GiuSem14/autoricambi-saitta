"use client";

import { useEffect, useState } from "react";

export interface CookiePreferences {
  necessary: true;
  statistical: boolean;
  marketing: boolean;
}

const STORAGE_KEY = "cookie_preferences";

export function getCookiePreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveCookiePreferences(prefs: CookiePreferences) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  window.dispatchEvent(new Event("cookiePreferencesChanged"));
}

export default function CookieManager() {
  const [open, setOpen] = useState(false);
  const [statistical, setStatistical] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = getCookiePreferences();
    if (existing) {
      setStatistical(existing.statistical);
      setMarketing(existing.marketing);
    }

    const handler = () => setOpen(true);
    window.addEventListener("openCookieManager", handler);
    return () => window.removeEventListener("openCookieManager", handler);
  }, []);

  function handleSave() {
    saveCookiePreferences({ necessary: true, statistical, marketing });
    setOpen(false);
  }

  function handleAcceptAll() {
    setStatistical(true);
    setMarketing(true);
    saveCookiePreferences({ necessary: true, statistical: true, marketing: true });
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Modale */}
      <div className="relative bg-[#1e1e1e] border border-gray-700 rounded-2xl shadow-2xl w-full max-w-lg p-6 sm:p-8">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 transition-colors"
          aria-label="Chiudi"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-xl font-bold text-brand-white mb-2">
          Gestisci preferenze cookie
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Scegli quali categorie di cookie vuoi abilitare. I cookie necessari non
          possono essere disattivati in quanto essenziali al funzionamento del sito.
        </p>

        <div className="space-y-4 mb-8">
          <CookieToggle
            label="Necessari"
            description="Essenziali per il funzionamento del sito. Non disattivabili."
            checked={true}
            disabled
            onChange={() => {}}
          />
          <CookieToggle
            label="Statistici"
            description="Ci aiutano a capire come i visitatori usano il sito (es. Google Analytics)."
            checked={statistical}
            onChange={setStatistical}
          />
          <CookieToggle
            label="Marketing"
            description="Usati per mostrare annunci pertinenti e misurare le campagne pubblicitarie."
            checked={marketing}
            onChange={setMarketing}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleSave}
            className="flex-1 bg-brand-yellow hover:bg-yellow-400 text-brand-black font-bold px-5 py-3 rounded-xl transition-colors text-sm"
          >
            Salva preferenze
          </button>
          <button
            onClick={handleAcceptAll}
            className="flex-1 border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
          >
            Accetta tutti
          </button>
        </div>
      </div>
    </div>
  );
}

function CookieToggle({
  label,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className={`flex items-start justify-between gap-4 p-4 rounded-xl border ${disabled ? "border-gray-800 bg-[#141414]" : "border-gray-700 bg-[#252525]"}`}>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-brand-white text-sm font-semibold">{label}</span>
          {disabled && (
            <span className="text-xs bg-brand-yellow/20 text-brand-yellow px-2 py-0.5 rounded-full">
              Sempre attivi
            </span>
          )}
        </div>
        <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`relative flex-shrink-0 w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
          checked ? "bg-brand-yellow" : "bg-gray-700"
        } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
