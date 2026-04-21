import type { Metadata } from "next";
import RicambioForm from "@/components/RicambioForm";

export const metadata: Metadata = {
  title: "Cerca Ricambio – Autoricambi Saitta | Piazza Armerina",
  description:
    "Compila il modulo per cercare un ricambio auto a Piazza Armerina. Marca, modello, anno: ti risponderemo su WhatsApp anche in giornata. Autoricambi Saitta.",
};

export default function CercaRicambioPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <span className="text-brand-yellow text-sm font-semibold uppercase tracking-widest">
          Richiesta rapida
        </span>
        <h1 className="text-4xl font-extrabold text-brand-white mt-2 mb-4">
          Cerca il tuo ricambio
        </h1>
        <p className="text-gray-400 text-lg">
          Inserisci i dati del tuo veicolo e il ricambio che cerchi. Premendo
          &ldquo;Invia&rdquo; si aprirà WhatsApp con il messaggio già compilato.
        </p>
      </div>

      <div className="bg-[#222222] border border-gray-800 rounded-2xl p-8">
        <RicambioForm />
      </div>

      <p className="mt-6 text-center text-gray-600 text-sm">
        Nessun account richiesto. La richiesta parte direttamente da WhatsApp.
      </p>
    </div>
  );
}
