import Image from "next/image";
import { company } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-cream/10 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-cream/60">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={`${company.name} — ${company.tagline}`}
            width={32}
            height={32}
            className="rounded-md"
          />
          <p>
            © {new Date().getFullYear()} {company.name} — {company.tagline}.
            Tous droits réservés.
          </p>
        </div>
        <p>{company.city}, République Démocratique du Congo</p>
      </div>
    </footer>
  );
}
