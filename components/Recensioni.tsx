const RECENSIONI = [
  {
    nome: "Danilo Salamone",
    stelle: 5,
    testo: "Il migliore ricambista della città di Piazza Armerina, cordiale e soprattutto competente!",
    data: "5 anni fa",
  },
  {
    nome: "Dario Morelli",
    stelle: 5,
    testo: "Mi trovo benissimo, Enrico e suo padre sono persone serie, disponibili e molto professionali. Lo consiglio.",
    data: "7 anni fa",
  },
  {
    nome: "Angelo Filippo Ingala",
    stelle: 5,
    testo: "Gentile e professionale, con tanta pazienza ha saputo trovarmi un ricambio di difficile reperibilità.",
    data: "7 anni fa",
  },
  {
    nome: "Eman Lane",
    stelle: 5,
    testo: "Professionale. Ben fornito. Economico. Consigliatissimo.",
    data: "5 anni fa",
  },
  {
    nome: "vincenzo marino",
    stelle: 5,
    testo: "Gentilezza e disponibilità del proprietario, magazzino fornissimo. Consiglio vivamente.",
    data: "6 anni fa",
  },
  {
    nome: "Salvatore Di Martino",
    stelle: 5,
    testo: "Grande professionalità, cortesia e convenienza. Lo consiglio.",
    data: "3 anni fa",
  },
];

const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Autoricambi+Saitta+Piazza+Armerina";

export default function Recensioni() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brand-white mb-4">
          Cosa dicono i <span className="text-brand-yellow">clienti</span>
        </h2>
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-sm font-semibold px-4 py-2 rounded-full hover:bg-brand-yellow/20 transition-colors"
        >
          <span className="text-brand-yellow">★</span>
          4,4 su Google · 54 recensioni
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RECENSIONI.map((r) => (
          <div
            key={r.nome}
            className="bg-brand-black border border-brand-yellow/30 rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="text-brand-yellow text-lg tracking-wider">
              {"★".repeat(r.stelle)}
            </div>
            <p className="text-brand-white text-sm leading-relaxed flex-1">{r.testo}</p>
            <div className="flex justify-between items-center pt-2 border-t border-gray-800">
              <span className="text-brand-yellow text-sm font-semibold">{r.nome}</span>
              <span className="text-gray-500 text-xs">{r.data}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand-yellow hover:text-yellow-300 font-semibold text-sm transition-colors"
        >
          Leggi tutte le recensioni su Google →
        </a>
      </div>
    </section>
  );
}
