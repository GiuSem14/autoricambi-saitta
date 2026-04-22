import Link from "next/link";
import {
  BUSINESS_NAME,
  FULL_ADDRESS,
  PHONE_NUMBER,
  EMAIL,
  ORARI,
  PARTITA_IVA,
  WHATSAPP_URL,
  NAV_LINKS,
} from "@/lib/constants";
import OpenCookieManagerButton from "./OpenCookieManagerButton";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="text-brand-yellow font-bold text-lg block mb-3">
              {BUSINESS_NAME}
            </span>
            <p className="text-sm leading-relaxed">
              Ricambi auto nuovi a Piazza Armerina. Disponibili subito o
              su ordinazione, con risposta rapida via WhatsApp.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-green-500 transition-colors"
            >
              <WhatsAppIcon />
              Scrivici su WhatsApp
            </a>
          </div>

          {/* Orari */}
          <div>
            <h3 className="text-brand-white font-semibold text-sm uppercase tracking-wider mb-4">
              Orari di apertura
            </h3>
            <ul className="space-y-2 text-sm">
              {ORARI.map((o) => (
                <li key={o.giorno} className="flex justify-between gap-4">
                  <span className="text-gray-400">{o.giorno}</span>
                  <span className="text-gray-300 text-right">{o.orario}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti + Nav */}
          <div>
            <h3 className="text-brand-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contatti
            </h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>{FULL_ADDRESS}</li>
              <li>
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="hover:text-brand-yellow transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-brand-yellow transition-colors">
                  {EMAIL}
                </a>
              </li>
            </ul>
            <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-brand-yellow transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <span>
            © {new Date().getFullYear()} {BUSINESS_NAME} – {PARTITA_IVA}
          </span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 justify-center">
            <Link href="/privacy-policy" className="hover:text-brand-yellow transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-brand-yellow transition-colors">
              Cookie Policy
            </Link>
            <OpenCookieManagerButton className="hover:text-brand-yellow transition-colors cursor-pointer" />
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-800/50 text-center text-xs text-gray-600">
          Sito realizzato da Giuseppe Seminato –{" "}
          <a
            href="mailto:seminato.giuseppe98@gmail.com"
            className="text-gray-600 no-underline hover:text-brand-yellow transition-colors"
          >
            seminato.giuseppe98@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
