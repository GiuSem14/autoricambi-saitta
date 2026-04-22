import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Categorie Ricambi – Autoricambi Saitta | Piazza Armerina",
  description:
    "Scopri le categorie di ricambi auto disponibili presso Autoricambi Saitta a Piazza Armerina: motore, freni, carrozzeria, elettronica e molto altro.",
};

const CATEGORIE = [
  { nome: "Motore e trasmissione", icona: "⚙️", esempi: "Cinghie, filtri, pompe acqua, olio, giunti" },
  { nome: "Freni e sospensioni", icona: "🛞", esempi: "Dischi, pastiglie, ammortizzatori, molle" },
  { nome: "Carrozzeria e vetri", icona: "🚗", esempi: "Paraurti, specchietti, portiere, parabrezza" },
  { nome: "Impianto elettrico", icona: "⚡", esempi: "Alternatori, motorini, sensori, batterie" },
  { nome: "Scarico e raffreddamento", icona: "🌡️", esempi: "Radiatori, tubi, marmitta, catalizzatori" },
  { nome: "Illuminazione", icona: "💡", esempi: "Fari, fanali, lampade, frecce" },
  { nome: "Accessori", icona: "🎁", esempi: "Copri sedili, copri sterzo, tappeti, caschi" },
];

export default function CategoriePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-14">
        <span className="text-brand-yellow text-sm font-semibold uppercase tracking-widest">
          Cosa trovi da noi
        </span>
        <h1 className="text-4xl font-extrabold text-brand-white mt-2 mb-4">
          Categorie di ricambi
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Ricambi per tutte le esigenze, disponibili in sede o ordinabili anche in giornata. Non trovi quello che cerchi? Scrivici su WhatsApp.
        </p>
      </div>

      <div className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative h-[240px] md:h-[300px]">
            <Image
              src="/images/negozio-scaffale.jpg"
              alt="Scaffale oli e lubrificanti nel magazzino Autoricambi Saitta"
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
          <div className="relative h-[240px] md:h-[300px]">
            <Image
              src="/images/negozio-scaffale-2.jpg"
              alt="Scaffale prodotti nel magazzino Autoricambi Saitta"
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-3">
          Il nostro magazzino sempre rifornito
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {CATEGORIE.map((cat) => (
          <div
            key={cat.nome}
            className="bg-[#222222] border border-gray-800 rounded-2xl p-6 hover:border-brand-yellow/40 transition-colors group"
          >
            <div className="text-4xl mb-3">{cat.icona}</div>
            <h2 className="text-base font-semibold text-brand-white group-hover:text-brand-yellow transition-colors mb-2">
              {cat.nome}
            </h2>
            <p className="text-gray-500 text-xs leading-relaxed">{cat.esempi}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#111111] border border-gray-800 rounded-2xl p-10 text-center">
        <h3 className="text-2xl font-bold text-brand-white mb-3">
          Non trovi la categoria che cerchi?
        </h3>
        <p className="text-gray-400 mb-6">
          Contattaci direttamente: trattiamo ricambi per la maggior parte dei
          veicoli in circolazione. Se non lo abbiamo in stock, lo ordiniamo per te.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-all"
          >
            Chiedici su WhatsApp
          </a>
          <Link
            href="/cerca-ricambio"
            className="inline-flex items-center justify-center border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-black font-bold px-6 py-3 rounded-xl transition-all"
          >
            Usa il modulo di ricerca
          </Link>
        </div>
      </div>
    </div>
  );
}
