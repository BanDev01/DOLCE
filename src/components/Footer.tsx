import { company } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-cream/10 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center gap-2 text-center text-sm text-cream/60">
        <p>
          © {new Date().getFullYear()} {company.name.toUpperCase()} ·{" "}
          {company.city.toUpperCase()}, RD Congo
        </p>
        <p>
          Conçu et développé par{" "}
          <a
            href={company.developer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-azure-400 hover:text-azure-200"
          >
            {company.developer.name}
          </a>
        </p>
      </div>
    </footer>
  );
}
