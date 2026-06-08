"use client";

import { useState } from "react";

const packages = [
  {
    name: "Basic",
    label: "E-Mail Der einfachste Weg vom Kundenwunsch zum Angebot",
    desc: "Für Betriebe, die Anfragen über E-Mail oder Kontaktformular erhalten.",
    channels: "E-Mail · Kontaktformular",
    items: [
      "Automatische Ersteinschätzung",
      "Sofortiges unverbindliches Richtangebot an Kunden",
      "Interne Prüfmail mit Freigabe-Link",
      "Änderungen per Textfeld oder optional per Sprache",
      "Finale Angebotsmail über das Firmenpostfach",
    ],
  },
  {
    name: "Pro",
    label: "Multi-Channel AngebotsPilot",
    desc: "Für Betriebe mit zusätzlichen Anfragen über WhatsApp und Social Media.",
    channels: "E-Mail · WhatsApp · Instagram · Facebook",
    items: [
      "Alles aus Basic",
      "Anfragen aus mehreren Kanälen bündeln",
      "Richtangebote aus Chat-Nachrichten vorbereiten",
      "Einheitlicher Freigabeprozess",
      "Kanalübergreifende Anfrageübersicht",
    ],
  },
  {
    name: "Max",
    label: "Telefonie + AngebotsPilot",
    desc: "Für Betriebe, die auch Telefonanfragen automatisiert vorqualifizieren wollen.",
    channels: "E-Mail · WhatsApp · Social Media · Telefon",
    items: [
      "Alles aus Pro",
      "KI-Telefonassistenz / Gesprächserfassung",
      "Anrufdaten werden zu Angebotsanfragen",
      "Rückruf- und Terminlogik",
      "Tagesübersicht und höhere Individualisierung",
    ],
  },
];

const steps = [
  "Kundenanfrage kommt über bestehende E-Mail oder Kontaktformular rein.",
  "ioperio erkennt Leistung, Branche, fehlende Infos und Preislogik.",
  "Der Kunde erhält sofort eine unverbindliche erste Preiseinschätzung.",
  "Der Betrieb bekommt eine Prüfmail mit Freigabe-Link.",
  "Änderungen werden geschrieben oder gesprochen.",
  "ioperio formuliert die finale Angebotsmail und sendet sie über das Firmenpostfach.",
];

const industries = [
  {
    title: "Fahrzeug & Werkstatt",
    text: "Bremsen, Service, Pickerl, Reifenwechsel, Klimaservice, Fehlersuche, Ölwechsel und Fahrzeugaufbereitung.",
    adTitle: "Demo-Anzeige Werkstatt",
    adText: "Bremsen vorne? ioperio erkennt Fahrzeugdaten, erstellt ein Richtangebot und fordert fehlende Infos automatisch an.",
    example: "ca. 280–520 €",
  },
  {
    title: "Handwerk",
    text: "Sanitär, Elektro, Maler, Türen/Fenster, Boden, Metallbau und wiederkehrende Angebotsanfragen.",
    adTitle: "Demo-Anzeige Handwerk",
    adText: "Kundenwunsch rein, Richtpreis raus: ioperio fragt Fotos, Maße und Adresse sauber nach.",
    example: "Rückfrage + Richtpreis",
  },
  {
    title: "Druck & Werbetechnik",
    text: "Flyer, Banner, Beschriftungen, Schilder, Folierung, Rollups, Textildruck und B2B-Anfragen.",
    adTitle: "Demo-Anzeige Print",
    adText: "Aus Menge, Format, Material und Liefertermin wird automatisch ein Angebotsentwurf vorbereitet.",
    example: "Format · Menge · Preis",
  },
];

export default function Home() {
  const [voiceActive, setVoiceActive] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070c] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[130px]" />
        <div className="absolute bottom-20 right-0 h-[420px] w-[420px] rounded-full bg-blue-700/20 blur-[130px]" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="group flex items-center gap-4">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-[1.4rem] border border-cyan-300/40 bg-gradient-to-br from-white/20 via-cyan-300/10 to-blue-600/20 shadow-[0_0_55px_rgba(34,211,238,0.32)] transition duration-300 group-hover:-translate-y-0.5 group-hover:border-cyan-200/70 group-hover:shadow-[0_0_75px_rgba(34,211,238,0.45)]">
            <div className="absolute inset-1 rounded-[1.15rem] border border-white/10 bg-black/20" />
            <span className="relative text-2xl font-black tracking-[-0.08em] text-white">io</span>
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.95)]" />
          </div>
          <div>
            <p className="text-2xl font-black tracking-tight md:text-3xl">ioperio</p>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">AngebotsPilot</p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#ablauf" className="hover:text-white">Ablauf</a>
          <a href="#pakete" className="hover:text-white">Pakete</a>
          <a href="#branchen" className="hover:text-white">Branchen</a>
          <a href="#kontakt" className="rounded-full border border-white/15 px-4 py-2 hover:bg-white/10">Demo anfragen</a>
        </nav>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-24">
        <div>
          <div className="mb-8 inline-flex items-center gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-3 pr-6 shadow-[0_0_70px_rgba(34,211,238,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-white/[0.08] hover:shadow-[0_0_90px_rgba(34,211,238,0.22)]">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-[1.4rem] border border-cyan-300/45 bg-gradient-to-br from-cyan-200/25 via-white/10 to-blue-700/25 shadow-[0_0_55px_rgba(34,211,238,0.32)]">
              <div className="absolute inset-1 rounded-[1.1rem] border border-white/10 bg-black/25" />
              <span className="relative text-3xl font-black tracking-[-0.09em]">io</span>
              <span className="absolute -right-1 top-3 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.95)]" />
            </div>
            <div>
              <p className="text-3xl font-black tracking-tight">ioperio</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200/80">AngebotsPilot</p>
            </div>
          </div>
          <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            Der einfachste Weg vom Kundenwunsch zum Angebot.
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Schluss mit liegen gebliebenen Anfragen.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            ioperio ist der einfachste Weg vom Kundenwunsch zum Angebot: bestehende E-Mails und Kontaktformular-Anfragen werden automatisch erkannt, mit einer ersten Preiseinschätzung beantwortet und über einen Freigabe-Link zur finalen Angebotsmail vorbereitet.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#kontakt" className="rounded-full bg-white px-7 py-4 text-center font-semibold text-slate-950 shadow-[0_0_50px_rgba(255,255,255,0.20)] transition hover:scale-[1.02]">
              Demo anfragen
            </a>
            <a href="#ablauf" className="rounded-full border border-white/15 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10">
              Ablauf ansehen
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Für Betriebe, die Anfragen nicht mehr liegen lassen, sondern schneller und sauberer anbieten wollen.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-white/[0.08] hover:shadow-[0_0_70px_rgba(34,211,238,0.18)]">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#080b12] p-5">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-slate-400">Neue Anfrage erkannt</p>
                  <p className="font-semibold">Bremsen vorne · BMW 320d</p>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Richtangebot erstellt</span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-0.5 hover:border hover:border-cyan-300/35 hover:bg-white/[0.08] hover:shadow-[0_0_35px_rgba(34,211,238,0.14)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Sofort an Kunden</p>
                  <p className="mt-2 text-2xl font-bold">ca. 280–520 €</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">Unverbindliche Ersteinschätzung, abhängig von Fahrzeugdaten, Teilequalität und tatsächlichem Aufwand.</p>
                </div>

                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/55 hover:bg-cyan-300/[0.10] hover:shadow-[0_0_40px_rgba(34,211,238,0.20)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Freigabe-Link</p>
                  <p className="mt-2 font-semibold">Änderungen an ioperio</p>
                  <textarea
                    className="mt-3 min-h-[94px] w-full resize-none rounded-xl border border-white/10 bg-black/30 p-3 text-sm outline-none placeholder:text-slate-600"
                    placeholder="Preis auf 390–490 ändern, Markenqualität erwähnen, Termin nächste Woche anbieten."
                  />
                  <div className="mt-3 flex gap-3">
                    <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950">Neue Vorschau</button>
                    <button
                      onClick={() => setVoiceActive(!voiceActive)}
                      className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                    >
                      {voiceActive ? "Aufnahme läuft..." : "Änderung sprechen"}
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-0.5 hover:border hover:border-cyan-300/35 hover:bg-white/[0.08] hover:shadow-[0_0_35px_rgba(34,211,238,0.14)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Finale Mail</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">ioperio formuliert die Angebotsmail neu und sendet sie nach Freigabe über das Firmenpostfach. Die Mail erscheint in Outlook/Gmail unter „Gesendet“.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ablauf" className="relative z-10 border-y border-white/10 bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Der Basic Ablauf</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Vom Kundenwunsch zum Angebot. Ohne liegen gebliebene Anfragen.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="rounded-3xl border border-white/10 bg-[#080b12]/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-white/[0.07] hover:shadow-[0_0_45px_rgba(34,211,238,0.16)]">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-lg font-black text-slate-950">{index + 1}</div>
                <p className="text-lg font-semibold leading-7">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Freigabe statt Chaos</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Der Betrieb behält Kontrolle.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">ioperio sendet eine erste unverbindliche Einschätzung sofort. Die finale Angebotsmail wird über einen Freigabe-Link geprüft, geändert und versendet.</p>
          </div>
          <div className="space-y-4">
            {[
              ["Textfeld", "Der Betrieb schreibt kurze Änderungswünsche. ioperio formuliert daraus eine professionelle Kundenmail."],
              ["Spracheingabe", "Am Handy Änderung einsprechen, Vorschau prüfen und final senden. Perfekt für Chefs unterwegs."],
              ["Firmenpostfach", "Versand über Outlook oder Gmail des Betriebs. Die Mail liegt nachvollziehbar unter Gesendete Elemente."],
              ["Sicherheitslogik", "Richtpreise bleiben unverbindlich. Heikle Fälle wie Reklamationen, Garantie oder unklare Schäden gehen nur intern zur Prüfung."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-white/[0.08] hover:shadow-[0_0_45px_rgba(34,211,238,0.16)]">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pakete" className="relative z-10 border-y border-white/10 bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Pakete</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Basic, Pro und Max.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Basic startet mit E-Mail und Kontaktformular. Pro erweitert auf WhatsApp und Social Media. Max ergänzt Telefonie. Der Kern bleibt immer gleich: Kundenwunsch zu Richtangebot.</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((pack) => (
              <div key={pack.name} className="rounded-[2rem] border border-white/10 bg-[#080b12] p-7 shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/50 hover:bg-white/[0.06] hover:shadow-[0_0_65px_rgba(34,211,238,0.20)]">
                <p className="text-sm text-cyan-300">ioperio</p>
                <h3 className="mt-1 text-4xl font-black">{pack.name}</h3>
                <p className="mt-2 font-semibold text-slate-200">{pack.label}</p>
                <p className="mt-4 leading-7 text-slate-400">{pack.desc}</p>
                <div className="mt-6 rounded-2xl bg-white/[0.05] p-4 text-sm text-slate-300">{pack.channels}</div>
                <ul className="mt-6 space-y-3">
                  {pack.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="branchen" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Branchenlogik</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Preislogik je Betrieb, Vorlage je Branche.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/50 hover:bg-white/[0.08] hover:shadow-[0_0_55px_rgba(34,211,238,0.18)]">
              <h3 className="text-2xl font-bold">{industry.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{industry.text}</p>

              <div className="mt-7 rounded-3xl border border-cyan-300/20 bg-black/30 p-5 transition duration-300 group-hover:border-cyan-300/55 group-hover:bg-cyan-300/[0.08] group-hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">{industry.adTitle}</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">Live-Beispiel</span>
                </div>
                <p className="text-sm leading-6 text-slate-300">{industry.adText}</p>
                <div className="mt-4 rounded-2xl bg-white/[0.06] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Richtangebot</p>
                  <p className="mt-2 text-xl font-black text-white">{industry.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="kontakt" className="relative z-10 px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.07] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/55 hover:bg-cyan-300/[0.10] hover:shadow-[0_0_65px_rgba(34,211,238,0.18)] md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Demo</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Start mit ioperio Basic für Werkstatt/Fahrzeugbetrieb.</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Wir testen mit Leistungen wie Bremsen vorne, Service, Pickerl, Reifenwechsel, Klimaservice, Fehlersuche und Ölwechsel.</p>
            </div>
            <a href="mailto:kontakt@ioperio.at?subject=ioperio%20Basic%20Demo" className="rounded-full bg-white px-8 py-4 text-center font-bold text-slate-950 shadow-[0_0_50px_rgba(255,255,255,0.18)]">
              kontakt@ioperio.at
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-sm text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ioperio. Schluss mit liegen gebliebenen Anfragen.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Impressum</a>
            <a href="#" className="hover:text-white">Datenschutz</a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-20 hidden rounded-3xl border border-white/10 bg-[#080b12]/95 p-4 shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.08] hover:shadow-[0_0_45px_rgba(34,211,238,0.20)] md:block">
        <p className="text-sm font-semibold">ioperio Demo</p>
        <p className="mt-1 max-w-[240px] text-xs leading-5 text-slate-400">Vom Kundenwunsch zum Angebot – per Freigabe-Link.</p>
      </div>
    </main>
  );
}
