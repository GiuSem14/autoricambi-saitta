import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pagina non trovata – Autoricambi Saitta",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <span className="text-brand-yellow text-sm font-semibold uppercase tracking-widest">
        Errore 404
      </span>
      <h1 className="text-4xl font-extrabold text-brand-white mt-2 mb-4">
        Pagina non trovata
      </h1>
      <p className="text-gray-400 text-lg mb-10">
        La pagina che cerchi non esiste o è stata spostata. Se cerchi un
        ricambio, scrivici: ti rispondiamo su WhatsApp.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-black font-bold px-6 py-3 rounded-xl transition-all"
        >
          Torna alla home
        </Link>
        <Link
          href="/cerca-ricambio"
          className="inline-flex items-center justify-center border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-black font-bold px-6 py-3 rounded-xl transition-all"
        >
          Cerca un ricambio
        </Link>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-all"
        >
          Scrivici su WhatsApp
        </a>
      </div>
    </div>
  );
}
