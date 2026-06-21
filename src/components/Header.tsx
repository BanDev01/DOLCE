"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { company } from "@/lib/content";

const links = [
  { href: "#services", label: "Services" },
  { href: "#apropos", label: "À propos" },
  { href: "#galerie", label: "Galerie" },
  { href: "#temoignages", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="#accueil" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={`${company.name} — ${company.tagline}`}
            width={44}
            height={44}
            className="rounded-lg"
            priority
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-lg text-cream tracking-wide">
              {company.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-azure-400">
              {company.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/85 hover:text-azure-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`https://wa.me/${company.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-azure-500 px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-azure-400 transition-colors"
        >
          <MessageCircle size={16} />
          Demander un devis
        </a>

        <button
          aria-label="Ouvrir le menu"
          className="md:hidden text-cream"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy-950/98 backdrop-blur px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-cream/90 hover:text-azure-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-azure-500 px-5 py-3 text-sm font-semibold text-navy-950"
          >
            <MessageCircle size={16} />
            Demander un devis
          </a>
        </div>
      )}
    </header>
  );
}
