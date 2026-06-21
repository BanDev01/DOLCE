"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { company } from "@/lib/content";

export default function Contact() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const waMessage = encodeURIComponent(
    `Bonjour ${company.name}, je suis ${name || "..."}. Je souhaite un devis pour : ${
      service || "..."
    }. ${message}`
  );

  return (
    <section id="contact" className="bg-navy-950 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-azure-400">
            Contact
          </p>
          <h2 className="font-display mt-4 text-3xl text-cream sm:text-4xl">
            Parlons de votre projet
          </h2>
          <p className="mt-4 text-cream/70">
            Une question, un devis, une intervention urgente ? Notre équipe
            vous répond rapidement.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-azure-400">
                <MapPin size={18} />
              </span>
              <span className="text-cream/85">
                {company.city}, {company.region}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-azure-400">
                <Phone size={18} />
              </span>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/85 hover:text-azure-400"
              >
                +{company.whatsapp}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-azure-400">
                <Mail size={18} />
              </span>
              <a
                href={`mailto:${company.email}`}
                className="text-cream/85 hover:text-azure-400"
              >
                {company.email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-azure-400">
                <Clock size={18} />
              </span>
              <span className="text-cream/85">Lun – Sam, 7h30 – 18h00</span>
            </div>
          </div>
        </div>

        <form
          className="lg:col-span-3 rounded-3xl bg-cream p-8 sm:p-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-ink/80">
                Nom complet
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Votre nom"
                className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-navy-700"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-ink/80">
                Service souhaité
              </label>
              <input
                value={service}
                onChange={(e) => setService(e.target.value)}
                type="text"
                placeholder="Ex : nettoyage de bureaux"
                className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-navy-700"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="text-sm font-medium text-ink/80">
              Votre message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Décrivez votre besoin en quelques mots..."
              className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-navy-700"
            />
          </div>

          <a
            href={`https://wa.me/${company.whatsapp}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-cream hover:bg-navy-800 transition-colors sm:w-auto"
          >
            <Send size={16} />
            Envoyer via WhatsApp
          </a>
        </form>
      </div>
    </section>
  );
}
