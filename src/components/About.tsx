import Image from "next/image";
import { company, values } from "@/lib/content";

const stats = [
  { value: `${new Date().getFullYear() - company.foundedYear}+`, label: "Années d'expérience" },
  { value: "9", label: "Services proposés" },
  { value: "100%", label: "Interventions à Goma" },
];

export default function About() {
  return (
    <section id="apropos" className="bg-navy-950 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-azure-400">
            À propos de nous
          </p>
          <h2 className="font-display mt-4 text-3xl text-cream sm:text-4xl">
            Depuis {company.foundedYear}, le goût du confort à Goma
          </h2>
          <p className="mt-6 text-cream/75 leading-relaxed">
            {company.name} {company.tagline} est une entreprise de nettoyage
            professionnel basée à {company.city}. Nous accompagnons
            entreprises et particuliers avec des services d&apos;entretien
            sur-mesure, exécutés par une équipe formée et attentive à chaque
            détail.
          </p>
          <p className="mt-4 text-cream/75 leading-relaxed">
            Notre engagement repose sur trois piliers, présents dans chacune
            de nos interventions.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-cream/15 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-azure-400">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-cream/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-cream/15 pt-8">
            <Image
              src="/images/ceo.jpg"
              alt={`${company.ceoName}, ${company.ceoTitle} de ${company.name}`}
              width={64}
              height={64}
              className="rounded-full object-cover h-16 w-16"
            />
            <div>
              <p className="font-display text-base text-cream">
                {company.ceoName}
              </p>
              <p className="text-sm text-cream/60">{company.ceoTitle}</p>
              <a
                href={company.ceoLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-azure-400 hover:text-azure-200 underline underline-offset-2"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/equipe.jpg"
              alt="L'équipe La Dolce Vita devant un immeuble entretenu à Goma"
              width={810}
              height={1080}
              className="w-full"
            />
          </div>

          {values.map((value, i) => (
            <div
              key={value.title}
              className="flex gap-5 rounded-2xl border border-cream/10 bg-cream/4 p-6"
            >
              <span className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-azure-500/15 text-lg text-azure-400">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-display text-lg text-cream">
                  {value.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cream/70">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
