import {
  HardHat,
  Building2,
  Sofa,
  SprayCan,
  Trees,
  Car,
  Trash2,
  PackageCheck,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  HardHat,
  Building2,
  Sofa,
  SprayCan,
  Trees,
  Car,
  Trash2,
  PackageCheck,
  UtensilsCrossed,
};

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-navy-700">
            Nos services
          </p>
          <h2 className="font-display mt-4 text-3xl text-ink sm:text-4xl">
            Un service complet, pour chaque besoin d&apos;entretien
          </h2>
          <p className="mt-4 text-ink/70">
            De l&apos;après-chantier à l&apos;événementiel, La Dolce Vita
            accompagne entreprises et particuliers avec une offre pensée pour
            allier exigence et sérénité.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-navy-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-900/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-azure-400 transition-colors group-hover:bg-azure-500 group-hover:text-navy-950">
                  <Icon size={22} />
                </span>
                <h3 className="font-display mt-5 text-lg text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
