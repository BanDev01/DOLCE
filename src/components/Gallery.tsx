import Image from "next/image";

const images = [
  {
    src: "/images/1773144713961.jpg",
    alt: "Équipe La Dolce Vita nettoyant une façade vitrée en hauteur",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/images/1779283894285.jpg",
    alt: "Nettoyage d'une salle de bain en marbre",
    span: "",
  },
  {
    src: "/images/1774356421939.jpg",
    alt: "Nettoyage de baies vitrées dans un espace haut de gamme",
    span: "",
  },
  {
    src: "/images/1773405372048.jpg",
    alt: "Nettoyage à la vapeur d'une chaise dorée",
    span: "",
  },
  {
    src: "/images/1759236023188.jpg",
    alt: "Nettoyage en profondeur d'un tapis",
    span: "",
  },
  {
    src: "/images/1778756163968.jpg",
    alt: "Entretien de fauteuils anciens dans un jardin",
    span: "",
  },
  {
    src: "/images/1755602596014.jpg",
    alt: "Équipe La Dolce Vita lors d'un nettoyage de canapé",
    span: "",
  },
  {
    src: "/images/1781694684450.jpg",
    alt: "Nettoyage de vitres en hauteur",
    span: "",
  },
  {
    src: "/images/1750763858295.jpg",
    alt: "Nettoyage en profondeur d'un matelas",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section id="galerie" className="bg-cream-soft py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-navy-700">
            Galerie
          </p>
          <h2 className="font-display mt-4 text-3xl text-ink sm:text-4xl">
            Un aperçu de nos interventions
          </h2>
          <p className="mt-4 text-ink/70">
            Notre équipe en action à Goma : façades, mobilier, tapis,
            salles de bain et intérieurs haut de gamme.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-flow-dense lg:auto-rows-[180px]">
          {images.map((img) => (
            <div
              key={img.src}
              className={`relative min-h-40 overflow-hidden rounded-2xl ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
