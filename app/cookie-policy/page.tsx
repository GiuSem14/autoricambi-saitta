import type { Metadata } from "next";
import OpenCookieManagerButton from "@/components/OpenCookieManagerButton";

export const metadata: Metadata = {
  title: "Cookie Policy – Autoricambi Saitta",
  description:
    "Informativa sull'uso dei cookie del sito Autoricambi Saitta ai sensi del Regolamento UE 2016/679 e del D.Lgs. 196/2003.",
  robots: { index: false },
};

const COOKIES: {
  categoria: string;
  colore: string;
  descrizione?: string;
  voci: { nome: string; tipo: string; finalita: string; durata: string; fonte: string }[];
}[] = [
  {
    categoria: "Necessari",
    colore: "text-green-400",
    voci: [
      {
        nome: "cookie_preferences",
        tipo: "Tecnico",
        finalita: "Salva le preferenze cookie dell'utente",
        durata: "12 mesi",
        fonte: "Questo sito",
      },
    ],
  },
  {
    categoria: "Statistici",
    colore: "text-blue-400",
    descrizione:
      "Utilizzati da Google Analytics 4 per misurare il numero di visite e il comportamento degli utenti su autoricambisaitta.it. I dati sono aggregati e anonimi.",
    voci: [
      {
        nome: "_ga",
        tipo: "Statistico",
        finalita: "Google Analytics 4 — distingue gli utenti unici su autoricambisaitta.it",
        durata: "2 anni",
        fonte: "Google LLC",
      },
      {
        nome: "_ga_LQC7VH9WWC",
        tipo: "Statistico",
        finalita: "Google Analytics 4 — mantiene lo stato della sessione su autoricambisaitta.it",
        durata: "2 anni",
        fonte: "Google LLC",
      },
    ],
  },
  {
    categoria: "Marketing",
    colore: "text-orange-400",
    voci: [
      {
        nome: "_fbp",
        tipo: "Marketing",
        finalita: "Tracciamento per annunci Facebook/Meta",
        durata: "3 mesi",
        fonte: "Meta Platforms",
      },
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-extrabold text-brand-white mb-2">
        Cookie Policy
      </h1>
      <p className="text-gray-500 text-sm mb-10">
        Ultimo aggiornamento: aprile 2026 · ai sensi del D.Lgs. 196/2003 e Regolamento UE 2016/679
      </p>

      <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-brand-white mb-3 pb-2 border-b border-gray-800">
            Cosa sono i cookie
          </h2>
          <p>
            I cookie sono piccoli file di testo che i siti web salvano sul dispositivo
            dell&apos;utente durante la navigazione. Servono a memorizzare preferenze,
            sessioni e informazioni di utilizzo per migliorare l&apos;esperienza di navigazione.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-white mb-3 pb-2 border-b border-gray-800">
            Cookie utilizzati su questo sito
          </h2>
          <p className="mb-6">
            La tabella seguente elenca i cookie installati dal sito, suddivisi per categoria.
          </p>

          {COOKIES.map((cat) => (
            <div key={cat.categoria} className="mb-8">
              <h3 className={`font-semibold text-base mb-2 ${cat.colore}`}>
                {cat.categoria}
              </h3>
              {cat.descrizione && (
                <p className="text-gray-400 text-xs mb-3">{cat.descrizione}</p>
              )}
              <div className="overflow-x-auto rounded-xl border border-gray-800">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-[#1a1a1a] text-gray-400 uppercase tracking-wide text-left">
                      <th className="px-4 py-3">Nome</th>
                      <th className="px-4 py-3">Tipo</th>
                      <th className="px-4 py-3">Finalità</th>
                      <th className="px-4 py-3">Durata</th>
                      <th className="px-4 py-3">Fonte</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.voci.map((v, i) => (
                      <tr
                        key={v.nome}
                        className={`border-t border-gray-800 ${i % 2 === 0 ? "bg-[#111]" : "bg-[#161616]"}`}
                      >
                        <td className="px-4 py-3 font-mono text-gray-300">{v.nome}</td>
                        <td className="px-4 py-3 text-gray-400">{v.tipo}</td>
                        <td className="px-4 py-3 text-gray-400">{v.finalita}</td>
                        <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{v.durata}</td>
                        <td className="px-4 py-3 text-gray-400">{v.fonte}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-white mb-3 pb-2 border-b border-gray-800">
            Come gestire i cookie
          </h2>
          <p className="mb-4">
            Puoi modificare le tue preferenze cookie in qualsiasi momento tramite il pannello
            dedicato. I cookie necessari non possono essere disattivati in quanto essenziali
            al funzionamento del sito.
          </p>
          <OpenCookieManagerButton className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-yellow-400 text-brand-black font-bold px-5 py-3 rounded-xl transition-colors text-sm" />
          <p className="mt-4">
            È inoltre possibile gestire o disabilitare i cookie direttamente dal browser.
            Per istruzioni dettagliate consulta la guida del tuo browser:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Chrome: Impostazioni → Privacy e sicurezza → Cookie</li>
            <li>Firefox: Preferenze → Privacy e sicurezza</li>
            <li>Safari: Preferenze → Privacy</li>
            <li>Edge: Impostazioni → Cookie e autorizzazioni sito</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-white mb-3 pb-2 border-b border-gray-800">
            Link utili
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a href="/privacy-policy" className="text-brand-yellow hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              Garante Privacy:{" "}
              <span className="text-gray-400">www.garanteprivacy.it</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
