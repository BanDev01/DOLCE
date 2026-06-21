import { Quote } from "lucide-react";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="temoignages" className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-navy-700">
            Ils nous font confiance
          </p>
          <h2 className="font-display mt-4 text-3xl text-ink sm:text-4xl">
            La satisfaction de nos clients
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.quote}
              className="flex flex-col rounded-2xl border border-navy-900/10 bg-white p-7 shadow-sm"
            >
              <Quote size={28} className="text-azure-500" />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink/75">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-navy-900/10 pt-4 text-sm">
                <span className="font-semibold text-ink">{t.author}</span>
                <span className="text-ink/50"> — {t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
