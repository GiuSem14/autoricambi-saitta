import type { Metadata } from "next";
import {
  FULL_ADDRESS,
  PHONE_NUMBER,
  MOBILE_NUMBER,
  EMAIL,
  ORARI,
  WHATSAPP_URL,
  SERVIZI_NEGOZIO,
  ACCESSIBILITA,
  PAGAMENTI,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contatti – Autoricambi Saitta | Piazza Armerina, Enna",
  description:
    "Contatta Autoricambi Saitta a Piazza Armerina (EN): telefono, WhatsApp, indirizzo e orari. Ricambi auto disponibili subito o su ordinazione.",
};

export default function ContattiPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <span className="text-brand-yellow text-sm font-semibold uppercase tracking-widest">
          Dove trovarci
        </span>
        <h1 className="text-4xl font-extrabold text-brand-white mt-2 mb-4">
          Contatti
        </h1>
        <p className="text-gray-400 text-lg">
          Siamo disponibili di persona, per telefono o via WhatsApp. Scegli il
          canale più comodo per te.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        {/* Info contatti */}
        <div className="space-y-6">
          <ContactCard
            icon={<MapPinIcon />}
            titolo="Indirizzo"
            contenuto={FULL_ADDRESS}
          />
          <ContactCard
            icon={<PhoneIcon />}
            titolo="Telefono fisso"
            contenuto={
              <a
                href="tel:0935682960"
                className="hover:text-brand-yellow transition-colors"
              >
                {PHONE_NUMBER}
              </a>
            }
          />
          <ContactCard
            icon={<PhoneIcon />}
            titolo="Cellulare"
            contenuto={
              <a
                href="tel:+393801575950"
                className="hover:text-brand-yellow transition-colors"
              >
                {MOBILE_NUMBER}
              </a>
            }
          />
          <ContactCard
            icon={<EmailIcon />}
            titolo="Email"
            contenuto={
              <a
                href={`mailto:${EMAIL}`}
                className="hover:text-brand-yellow transition-colors"
              >
                {EMAIL}
              </a>
            }
          />
          <div className="bg-[#222222] border border-gray-800 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#25D366]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <WhatsAppSmallIcon />
              </div>
              <div>
                <div className="text-brand-white font-semibold mb-1">WhatsApp</div>
                <div className="text-gray-400 text-sm mb-3">{MOBILE_NUMBER}</div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-500 text-white font-bold px-5 py-2.5 rounded-lg transition-all text-sm"
                >
                  Scrivici ora
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Orari */}
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-8 h-fit">
          <h2 className="text-xl font-bold text-brand-white mb-6">
            Orari di apertura
          </h2>
          <ul className="space-y-4">
            {ORARI.map((o) => (
              <li
                key={o.giorno}
                className="flex justify-between items-center border-b border-gray-800 pb-4 last:border-0 last:pb-0"
              >
                <span className="text-gray-400">{o.giorno}</span>
                <span className="text-brand-white font-medium text-right">
                  {o.orario}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-gray-800 rounded-xl p-4 bg-brand-yellow/5 border border-brand-yellow/20">
            <p className="text-brand-yellow text-sm font-medium">
              💬 Fuori orario? Lascia un messaggio su WhatsApp e ti richiamiamo appena possibile.
            </p>
          </div>
        </div>
      </div>

      {/* Servizi, Accessibilità, Pagamenti */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#222222] border border-gray-800 rounded-2xl p-6">
          <h3 className="text-brand-white font-bold mb-4">Servizi</h3>
          <ul className="space-y-2">
            {SERVIZI_NEGOZIO.map((s) => (
              <li key={s} className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-brand-yellow">✓</span> {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#222222] border border-gray-800 rounded-2xl p-6">
          <h3 className="text-brand-white font-bold mb-4">Accessibilità</h3>
          <ul className="space-y-2">
            {ACCESSIBILITA.map((a) => (
              <li key={a} className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-brand-yellow">✓</span> {a}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#222222] border border-gray-800 rounded-2xl p-6">
          <h3 className="text-brand-white font-bold mb-4">Pagamenti accettati</h3>
          <ul className="space-y-2">
            {PAGAMENTI.map((p) => (
              <li key={p} className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-brand-yellow">✓</span> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Google Maps */}
      <div className="rounded-2xl overflow-hidden border border-gray-800">
        <iframe
          src="https://maps.google.com/maps?q=Via+Giosuè+Carducci+7,+Piazza+Armerina,+EN&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Autoricambi Saitta – Via Giosuè Carducci 7, Piazza Armerina"
        />
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  titolo,
  contenuto,
}: {
  icon: React.ReactNode;
  titolo: string;
  contenuto: React.ReactNode;
}) {
  return (
    <div className="bg-[#222222] border border-gray-800 rounded-2xl p-6 flex items-start gap-4">
      <div className="w-10 h-10 bg-brand-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0 text-brand-yellow">
        {icon}
      </div>
      <div>
        <div className="text-brand-white font-semibold mb-1">{titolo}</div>
        <div className="text-gray-400 text-sm">{contenuto}</div>
      </div>
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function WhatsAppSmallIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
