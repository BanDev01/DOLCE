import Image from "next/image";

export default function Results() {
  return (
    <section className="bg-navy-900 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-azure-400">
          Des résultats qui parlent
        </p>
        <h2 className="font-display mt-4 text-3xl text-cream sm:text-4xl">
          Avant / Après une intervention La Dolce Vita
        </h2>
        <p className="mt-4 text-cream/70 max-w-2xl mx-auto">
          Au-delà des promesses, voici le niveau de propreté que nous
          garantissons sur chaque intervention.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-black/20">
            <Image
              src="/images/1770306927597.jpg"
              alt="Comparaison avant et après le nettoyage d'un matelas par La Dolce Vita"
              width={1080}
              height={1080}
              className="w-full"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-black/20">
            <Image
              src="/images/1752057246043.jpg"
              alt="Comparaison avant et après le nettoyage d'un sol par La Dolce Vita"
              width={800}
              height={800}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
