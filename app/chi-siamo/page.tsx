import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_NAME, CITY, WHATSAPP_URL, ORARI } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Chi Siamo – Autoricambi Saitta | Piazza Armerina",
  description:
    "Scopri chi siamo: Autoricambi Saitta a Piazza Armerina (EN). Anni di esperienza nel settore dei ricambi auto, con competenza e disponibilità.",
};

export default function ChiSiamoPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-14">
        <span className="text-brand-yellow text-sm font-semibold uppercase tracking-widest">
          La nostra storia
        </span>
        <h1 className="text-4xl font-extrabold text-brand-white mt-2 mb-6">
          Una storia di famiglia al servizio della tua auto
        </h1>
        <Image
          src="/images/negozio-esterno.jpg"
          alt="Esterno del negozio Autoricambi Saitta"
          width={1920}
          height={1080}
          className="rounded-lg w-full h-auto mb-8"
          priority
        />
        <div className="space-y-5 text-gray-300 text-lg leading-relaxed max-w-3xl">
          <p>
            <strong className="text-brand-white">{BUSINESS_NAME}</strong> non è solo
            un negozio, è una tradizione che attraversa generazioni. Da oltre 50 anni,
            l&apos;esperienza maturata da Enrico e suo padre rappresenta la massima garanzia
            per chi cerca competenza e affidabilità a {CITY} e in tutta la provincia di Enna.
          </p>
          <p>
            Che si tratti di un veicolo europeo, giapponese o americano, il nostro
            magazzino offre un vasto assortimento di ricambi nuovi e di alta qualità.
            E se il pezzo che cerchi non è subito disponibile, lo ordiniamo per te con
            tempi di consegna rapidissimi.
          </p>
          <p>
            La nostra filosofia? Risposte veloci, consulenza tecnica e il miglior
            rapporto qualità-prezzo. Siamo qui per rimetterti in strada nel minor
            tempo possibile.
          </p>
        </div>
      </div>

      <Image
        src="/images/negozio-interno.jpg"
        alt="Interno del negozio Autoricambi Saitta"
        width={1920}
        height={1080}
        className="rounded-lg w-full h-auto mb-14"
      />

      {/* Valori */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {[
          { titolo: "Una Tradizione di Famiglia", desc: "Oltre 50 anni di passione ed esperienza trasmessi di padre in figlio. Siamo il punto di riferimento nel settore dei ricambi auto.", icona: "🏅" },
          { titolo: "Risposte in Tempo Reale", desc: "Il tuo tempo è prezioso. Ricevi assistenza su WhatsApp in meno di un'ora e spediamo i tuoi ordini nella stessa giornata.", icona: "⚡" },
          { titolo: "Supporto Tecnico Dedicato", desc: "Niente errori, solo il pezzo giusto. Ti guidiamo nella scelta del ricambio esatto per il tuo veicolo, garantendoti compatibilità totale.", icona: "🔍" },
        ].map((v) => (
          <div key={v.titolo} className="bg-[#222222] border border-gray-800 rounded-2xl p-6">
            <div className="text-3xl mb-3">{v.icona}</div>
            <h3 className="text-brand-white font-semibold text-lg mb-2">{v.titolo}</h3>
            <p className="text-gray-400 text-sm">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* Orari */}
      <div className="bg-[#111111] border border-gray-800 rounded-2xl p-8 mb-10">
        <h2 className="text-xl font-bold text-brand-white mb-6">Orari di apertura</h2>
        <ul className="space-y-3">
          {ORARI.map((o) => (
            <li key={o.giorno} className="flex justify-between items-center border-b border-gray-800 pb-3 last:border-0 last:pb-0">
              <span className="text-gray-400">{o.giorno}</span>
              <span className="text-brand-white font-medium">{o.orario}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-all"
        >
          Contattaci su WhatsApp
        </a>
        <Link
          href="/contatti"
          className="inline-flex items-center justify-center border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-black font-bold px-6 py-3 rounded-xl transition-all"
        >
          Dove siamo
        </Link>
      </div>
    </div>
  );
}
