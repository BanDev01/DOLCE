import Image from "next/image";
import { ShieldCheck, Sparkles, Clock3 } from "lucide-react";
import { company } from "@/lib/content";

const badges = [
  { icon: ShieldCheck, label: "Professionnalisme" },
  { icon: Sparkles, label: "Qualité" },
  { icon: Clock3, label: "Rapidité" },
];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-navy-950"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/1762607879712.jpg"
          alt="Intervention La Dolce Vita dans un hall d'immeuble en marbre à Goma"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/85 to-navy-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-20">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-azure-400">
          {company.city} · {company.region}
        </p>
        <h1 className="font-display mt-6 max-w-3xl text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
          {company.tagline}, signé{" "}
          <span className="text-azure-400">{company.name}</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-cream/80">
          Services professionnels de nettoyage, désinfection et entretien pour
          entreprises et particuliers à Goma. Une équipe rigoureuse, des
          espaces impeccables, un confort retrouvé.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-azure-500 px-7 py-3.5 text-sm font-semibold text-navy-950 hover:bg-azure-400 transition-colors"
          >
            Demander un devis gratuit
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream hover:border-azure-400 hover:text-azure-400 transition-colors"
          >
            Découvrir nos services
          </a>
        </div>

        <div className="mt-14 flex flex-wrap gap-8">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-azure-400">
                <Icon size={20} />
              </span>
              <span className="text-sm font-medium text-cream/85">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
