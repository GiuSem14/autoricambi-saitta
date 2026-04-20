import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_URL, CITY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Autoricambi Saitta – Ricambi Auto a Piazza Armerina, Enna, Sicilia",
  description:
    "Ricambi auto nuovi e usati a Piazza Armerina. Disponibili subito o su ordinazione. Risposta rapida via WhatsApp. Autoricambi Saitta – Piazza Armerina, Enna.",
};

const SERVIZI = [
  {
    icon: "🔧",
    titolo: "Ricambi disponibili",
    descrizione:
      "Ampia selezione di ricambi pronti per il ritiro immediato in sede. Auto di tutte le marche e modelli.",
  },
  {
    icon: "📦",
    titolo: "Su ordinazione",
    descrizione:
      "Non trovi il pezzo che cerchi? Lo ordiniamo per te con tempi rapidi di consegna. Scrivi e ricevi un preventivo.",
  },
  {
    icon: "💬",
    titolo: "Supporto tecnico",
    descrizione:
      "Il nostro team ti aiuta a identificare il ricambio giusto per il tuo veicolo, anche via WhatsApp.",
  },
];

const BADGES = [
  { label: "Anni di esperienza", valore: "20+" },
  { label: "Risposta rapida", valore: "< 1h" },
  { label: "Ricambio trovato in giornata", valore: "✓" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(245,197,24,0.08),_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          <span className="inline-block bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            {CITY} – Enna – Sicilia
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-white leading-tight mb-6">
            Ricambi auto a{" "}
            <span className="text-brand-yellow">Piazza Armerina</span>
            <br className="hidden sm:block" /> disponibili subito
            <br className="hidden sm:block" /> o su richiesta
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Nuovi e usati, pronti al ritiro o ordinati per te in tempi brevi.
            Scrivi su WhatsApp con marca, modello e anno: ti rispondiamo subito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg"
            >
              <WhatsAppIcon />
              Richiedi su WhatsApp
            </a>
            <Link
              href="/cerca-ricambio"
              className="inline-flex items-center justify-center bg-brand-yellow hover:bg-yellow-400 text-brand-black font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg"
            >
              Cerca il tuo ricambio
            </Link>
          </div>
        </div>
      </section>

      {/* Badge fiducia */}
      <section className="bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-3 divide-x divide-yellow-400/40">
            {BADGES.map((b) => (
              <div key={b.label} className="text-center px-4">
                <div className="text-3xl font-extrabold text-brand-black">{b.valore}</div>
                <div className="text-sm font-medium text-brand-black/70 mt-1">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-brand-white text-center mb-12">
          Come possiamo <span className="text-brand-yellow">aiutarti</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVIZI.map((s) => (
            <div
              key={s.titolo}
              className="bg-[#222222] border border-gray-800 rounded-2xl p-8 hover:border-brand-yellow/40 transition-colors group"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-brand-white group-hover:text-brand-yellow transition-colors mb-3">
                {s.titolo}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.descrizione}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-[#111111] border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-bold text-brand-white mb-4">
            Hai bisogno di un ricambio?
          </h2>
          <p className="text-gray-400 mb-8">
            Compila il modulo sul sito o scrivici direttamente su WhatsApp. Ti
            risponderemo nel minor tempo possibile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              <WhatsAppIcon />
              Scrivici ora
            </a>
            <Link
              href="/cerca-ricambio"
              className="inline-flex items-center justify-center border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-black font-bold px-8 py-4 rounded-xl transition-all"
            >
              Usa il modulo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
