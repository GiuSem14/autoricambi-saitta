import type { Metadata } from "next";
import { BUSINESS_NAME, FULL_ADDRESS, EMAIL, PHONE_NUMBER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy – Autoricambi Saitta",
  description:
    "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) – Autoricambi Saitta, Piazza Armerina.",
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-extrabold text-brand-white mb-2">
        Privacy Policy
      </h1>
      <p className="text-gray-500 text-sm mb-10">
        Ultimo aggiornamento: aprile 2026 · ai sensi del Regolamento UE 2016/679 (GDPR)
      </p>

      <div className="prose prose-invert prose-sm max-w-none space-y-10 text-gray-300">

        <Section titolo="1. Titolare del trattamento">
          <p>
            Il titolare del trattamento dei dati personali è{" "}
            <strong className="text-white">{BUSINESS_NAME}</strong>, con sede in{" "}
            {FULL_ADDRESS}.
          </p>
          <p>
            Contatti del titolare:
          </p>
          <ul>
            <li>Email: <a href={`mailto:${EMAIL}`} className="text-brand-yellow hover:underline">{EMAIL}</a></li>
            <li>Telefono: {PHONE_NUMBER}</li>
          </ul>
        </Section>

        <Section titolo="2. Dati raccolti">
          <p>Il sito raccoglie le seguenti categorie di dati:</p>
          <ul>
            <li>
              <strong className="text-white">Dati di navigazione:</strong> indirizzo IP,
              tipo di browser, sistema operativo, pagine visitate, orari di accesso.
              Vengono raccolti automaticamente dai sistemi informatici che gestiscono il sito.
            </li>
            <li>
              <strong className="text-white">Dati forniti volontariamente dall&apos;utente:</strong>{" "}
              nome, numero di telefono e qualsiasi altra informazione inserita nel modulo di
              richiesta ricambio o comunicata via WhatsApp.
            </li>
            <li>
              <strong className="text-white">Cookie:</strong> per i dettagli si rimanda alla{" "}
              <a href="/cookie-policy" className="text-brand-yellow hover:underline">Cookie Policy</a>.
            </li>
          </ul>
        </Section>

        <Section titolo="3. Finalità e base giuridica del trattamento">
          <ul>
            <li>
              <strong className="text-white">Erogazione del servizio</strong> (art. 6, c. 1, lett. b GDPR):
              rispondere alle richieste di preventivo o informazioni sui ricambi.
            </li>
            <li>
              <strong className="text-white">Obblighi legali</strong> (art. 6, c. 1, lett. c GDPR):
              adempimenti fiscali e amministrativi.
            </li>
            <li>
              <strong className="text-white">Legittimo interesse</strong> (art. 6, c. 1, lett. f GDPR):
              miglioramento del sito e sicurezza informatica tramite dati di navigazione anonimi.
            </li>
            <li>
              <strong className="text-white">Consenso</strong> (art. 6, c. 1, lett. a GDPR):
              cookie statistici e di marketing, se accettati dall&apos;utente.
            </li>
          </ul>
        </Section>

        <Section titolo="4. Conservazione dei dati">
          <p>
            I dati vengono conservati per il tempo strettamente necessario agli scopi per cui
            sono stati raccolti:
          </p>
          <ul>
            <li>Dati di navigazione: massimo 12 mesi.</li>
            <li>Richieste commerciali: fino a 2 anni dalla conclusione del rapporto.</li>
            <li>Dati fiscali: 10 anni ai sensi di legge.</li>
          </ul>
        </Section>

        <Section titolo="5. Comunicazione e diffusione">
          <p>
            I dati non vengono diffusi a terzi. Possono essere comunicati a:
          </p>
          <ul>
            <li>Fornitori di servizi tecnici (hosting, email) che operano come responsabili del trattamento.</li>
            <li>Autorità competenti, ove richiesto dalla legge.</li>
          </ul>
          <p>
            Alcuni servizi (es. Google Analytics) comportano il trasferimento di dati verso
            paesi extra-UE. Il trasferimento avviene nel rispetto delle garanzie previste
            dal GDPR (Clausole Contrattuali Standard o equivalenti).
          </p>
        </Section>

        <Section titolo="6. Diritti dell'interessato">
          <p>
            Ai sensi degli artt. 15–22 del GDPR, l&apos;utente ha il diritto di:
          </p>
          <ul>
            <li>Accedere ai propri dati personali (art. 15).</li>
            <li>Rettificare dati inesatti (art. 16).</li>
            <li>Ottenere la cancellazione dei dati (&ldquo;diritto all&apos;oblio&rdquo;, art. 17).</li>
            <li>Limitare il trattamento (art. 18).</li>
            <li>Opporsi al trattamento (art. 21).</li>
            <li>Ricevere i propri dati in formato strutturato (portabilità, art. 20).</li>
            <li>Revocare in qualsiasi momento il consenso prestato (art. 7, c. 3).</li>
          </ul>
          <p>
            Per esercitare i propri diritti è possibile contattare il titolare all&apos;indirizzo{" "}
            <a href={`mailto:${EMAIL}`} className="text-brand-yellow hover:underline">{EMAIL}</a>.
            È inoltre possibile proporre reclamo al Garante per la Protezione dei Dati Personali
            (www.garanteprivacy.it).
          </p>
        </Section>

        <Section titolo="7. Modifiche alla presente informativa">
          <p>
            Il titolare si riserva il diritto di apportare modifiche alla presente informativa
            in qualsiasi momento, dandone pubblicità sul sito. Si invita pertanto a consultare
            periodicamente questa pagina.
          </p>
        </Section>

      </div>
    </div>
  );
}

function Section({ titolo, children }: { titolo: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-brand-white mb-4 pb-2 border-b border-gray-800">
        {titolo}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}
