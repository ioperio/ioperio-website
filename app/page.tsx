"use client";

import { useState } from "react";

const industries = [
  "Handwerker",
  "Händler",
  "Werkstätten",
  "Vermietungen",
  "Dienstleister",
  "Servicebetriebe",
];

const painPoints = [
  {
    title: "Anfragen gehen unter",
    text: "Kunden schreiben per E-Mail, Formular, WhatsApp oder rufen an – und wichtige Details fehlen oft.",
  },
  {
    title: "Angebote dauern zu lange",
    text: "Nach der eigentlichen Arbeit beginnt die Büroarbeit: Daten sammeln, Preise prüfen, Angebot vorbereiten.",
  },
  {
    title: "Kunden warten zu lange",
    text: "Wer zu spät reagiert, verliert Anfragen an schnellere Mitbewerber.",
  },
];

const systems = [
  {
    name: "ioperio Anfrage-System",
    text: "Erfasst Kundenanfragen automatisch, erkennt wichtige Informationen und erstellt eine klare Zusammenfassung.",
  },
  {
    name: "ioperio Angebots-System",
    text: "Bereitet Angebotsentwürfe anhand Ihrer Leistungen, Preise und Regeln vor.",
  },
  {
    name: "ioperio Telefon-Assistent",
    text: "Nimmt Anrufe entgegen, fragt relevante Daten ab und erstellt strukturierte Rückrufnotizen.",
  },
];

const steps = [
  "Kunde stellt eine Anfrage per Formular, E-Mail oder Telefon.",
  "ioperio erkennt Name, Kontakt, Anliegen, Dringlichkeit und fehlende Daten.",
  "Die Anfrage wird strukturiert und priorisiert.",
  "Ihr Betrieb erhält eine klare Zusammenfassung.",
  "Ein Angebotsentwurf oder Rückruf wird vorbereitet.",
  "Sie prüfen, senden und gewinnen schneller den Auftrag.",
];

const packages = [
  {
    name: "Starter",
    price: "ab 1.490 €",
    monthly: "ab 149 € / Monat",
    description: "Für Betriebe, die Kundenanfragen endlich sauber erfassen wollen.",
    features: [
      "Anfrageformular",
      "E-Mail-Benachrichtigung",
      "KI-Zusammenfassung",
      "Basis-Automatisierung",
      "1 Monat Betreuung",
    ],
  },
  {
    name: "Pro",
    price: "ab 2.490 €",
    monthly: "ab 299 € / Monat",
    description: "Für Firmen, die Anfragen und Angebotsvorbereitung automatisieren wollen.",
    features: [
      "Alles aus Starter",
      "Angebotsentwürfe",
      "Kundenqualifizierung",
      "Individuelle Regeln",
      "Workflow-Automation",
    ],
    highlighted: true,
  },
  {
    name: "Voice",
    price: "Individuell",
    monthly: "nach Aufwand",
    description: "Für Betriebe mit vielen Anrufen, Rückrufen und Terminabstimmungen.",
    features: [
      "KI-Telefonassistenz",
      "Rückrufnotizen",
      "Dringlichkeitserkennung",
      "Zusammenfassungen",
      "Individuelle Einrichtung",
    ],
  },
];

const reasons = [
  "Schnellere Reaktion auf Kundenanfragen",
  "Weniger manuelle Büroarbeit",
  "Bessere Übersicht über offene Anfragen",
  "Professioneller erster Eindruck beim Kunden",
  "Individuell an Betrieb, Leistungen und Preise angepasst",
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Fehler beim Senden");
      }

      setStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-400 text-2xl font-black text-slate-950">
              i
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight">ioperio</div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                AI Automation
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-300 md:flex">
            <a className="hover:text-white" href="#problem">
              Problem
            </a>
            <a className="hover:text-white" href="#loesung">
              Lösung
            </a>
            <a className="hover:text-white" href="#systeme">
              Systeme
            </a>
            <a className="hover:text-white" href="#pakete">
              Pakete
            </a>
            <a className="hover:text-white" href="#kontakt">
              Kontakt
            </a>
          </nav>

          <a
            href="#kontakt"
            className="hidden rounded-full bg-teal-400 px-5 py-3 text-sm font-black text-slate-950 shadow-lg shadow-teal-400/20 transition hover:bg-teal-300 md:inline-flex"
          >
            Demo anfragen
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-bold text-teal-200">
              Für Betriebe mit vielen Kundenanfragen
            </div>

            <h1 className="max-w-3xl text-5xl font-black tracking-tight md:text-7xl">
              Mehr Anfragen.
              <span className="block text-teal-300">Schnellere Angebote.</span>
              Weniger Büroarbeit.
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-300">
              ioperio automatisiert Kundenanfragen, E-Mails und
              Angebotsvorbereitung für Handwerker, Händler, Werkstätten,
              Vermietungen und Dienstleister – damit keine Anfrage liegen bleibt.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {industries.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#kontakt"
                className="rounded-2xl bg-teal-400 px-7 py-4 text-center font-black text-slate-950 shadow-xl shadow-teal-400/20 transition hover:bg-teal-300"
              >
                Kostenlose Demo anfragen
              </a>
              <a
                href="#demo"
                className="rounded-2xl border border-white/15 px-7 py-4 text-center font-black text-white transition hover:bg-white/10"
              >
                Beispiel ansehen
              </a>
            </div>
          </div>

          <div id="demo" className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-slate-900 p-6">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <div className="text-sm font-bold uppercase tracking-[0.25em] text-teal-300">
                    Live Anfrage
                  </div>
                  <div className="mt-1 text-2xl font-black">
                    ioperio Anfrage-System
                  </div>
                </div>
                <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-black text-red-300">
                  Dringend
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-white p-5 text-slate-950">
                  <p className="text-xs font-black uppercase text-slate-400">
                    Neue Anfrage
                  </p>
                  <h2 className="mt-1 text-2xl font-black">
                    Klimaanlage ausgefallen
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Kunde benötigt kurzfristig einen Technikertermin und fragt
                    nach Kosten, Verfügbarkeit und Rückruf.
                  </p>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-bold uppercase text-slate-400">
                      Name
                    </p>
                    <p className="mt-1 font-black">Max Mustermann</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-bold uppercase text-slate-400">
                      Kontakt
                    </p>
                    <p className="mt-1 font-black">0664 1234567</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-bold uppercase text-slate-400">
                      Ort
                    </p>
                    <p className="mt-1 font-black">Wien Umgebung</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-bold uppercase text-slate-400">
                      Priorität
                    </p>
                    <p className="mt-1 font-black text-teal-300">hoch</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-teal-400 p-5 text-slate-950">
                  <p className="text-xs font-black uppercase opacity-70">
                    ioperio Ergebnis
                  </p>
                  <p className="mt-2 font-black leading-7">
                    Anfrage erkannt, Kundendaten strukturiert, Dringlichkeit
                    bewertet und Rückruf mit Angebotsvorbereitung empfohlen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="border-y border-white/10 bg-white/[0.03] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-teal-300">
              Das Problem
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Viele Betriebe verlieren Aufträge, bevor überhaupt ein Angebot
              entsteht.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Nicht wegen schlechter Arbeit – sondern weil Anfragen zu spät
              beantwortet, nicht sauber erfasst oder im Alltag vergessen werden.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {painPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-slate-900 p-8 shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/15 text-2xl font-black text-red-300">
                  !
                </div>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="loesung" className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-teal-300">
              Die Lösung
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              ioperio macht aus unklaren Anfragen strukturierte Verkaufschancen.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Das System sammelt Informationen, erkennt Dringlichkeit, bereitet
              Antworten und Angebote vor und sorgt dafür, dass Ihr Betrieb
              schneller reagieren kann.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-400 font-black text-slate-950">
                  {index + 1}
                </div>
                <p className="font-semibold leading-7 text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="systeme" className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-teal-600">
              Systeme
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Keine komplizierte Software. Fertige Systeme für Ihren Betrieb.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {systems.map((item) => (
              <div
                key={item.name}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm"
              >
                <h3 className="text-2xl font-black">{item.name}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pakete" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-teal-300">
              Pakete
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Starten Sie klein. Automatisieren Sie Schritt für Schritt.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              ioperio wird an Ihren Betrieb angepasst – Leistungen, Preise,
              Abläufe und Kommunikation werden individuell eingerichtet.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((item) => (
              <div
                key={item.name}
                className={`rounded-[2rem] border p-8 shadow-2xl ${
                  item.highlighted
                    ? "border-teal-300 bg-teal-300 text-slate-950"
                    : "border-white/10 bg-white/[0.04] text-white"
                }`}
              >
                {item.highlighted && (
                  <div className="mb-5 inline-flex rounded-full bg-slate-950 px-3 py-1 text-xs font-black uppercase text-teal-300">
                    Beliebt
                  </div>
                )}
                <h3 className="text-3xl font-black">{item.name}</h3>
                <p className="mt-3 leading-7 opacity-80">{item.description}</p>
                <div className="mt-7">
                  <div className="text-4xl font-black">{item.price}</div>
                  <div className="mt-2 font-bold opacity-70">{item.monthly}</div>
                </div>

                <ul className="mt-8 space-y-3">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex gap-3 font-semibold">
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-black ${
                          item.highlighted
                            ? "bg-slate-950 text-teal-300"
                            : "bg-teal-300 text-slate-950"
                        }`}
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-teal-600">
              Warum ioperio?
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Weil schnelle Reaktion heute direkt Umsatz bedeutet.
            </h2>
          </div>

          <div className="grid gap-4">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 font-black text-teal-300">
                  ✓
                </span>
                <p className="font-bold text-slate-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-teal-300">
              Kontakt
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Lassen Sie uns Ihren Anfrageprozess automatisieren.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              In einer kostenlosen Demo zeigen wir, wie ioperio zu Ihrem Betrieb
              passen kann – mit echten Abläufen statt Theorie.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-[1.5rem] bg-white p-6 text-slate-950 shadow-xl"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 p-4 outline-none transition focus:border-teal-400"
              placeholder="Name"
              required
            />

            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 p-4 outline-none transition focus:border-teal-400"
              placeholder="Firma"
            />

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 p-4 outline-none transition focus:border-teal-400"
              placeholder="E-Mail"
              required
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 p-4 outline-none transition focus:border-teal-400"
              placeholder="Telefon"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="h-28 w-full rounded-xl border border-slate-200 p-4 outline-none transition focus:border-teal-400"
              placeholder="Wobei dürfen wir helfen?"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-xl bg-slate-950 px-6 py-4 font-black text-white transition hover:bg-slate-800 disabled:opacity-60"
            >
              {status === "loading" ? "Wird gesendet..." : "Demo anfragen"}
            </button>

            {status === "success" && (
              <p className="rounded-xl bg-teal-50 p-4 text-sm font-bold text-teal-800">
                Danke! Ihre Anfrage wurde erfolgreich gesendet.
              </p>
            )}

            {status === "error" && (
              <p className="rounded-xl bg-red-50 p-4 text-sm font-bold text-red-700">
                Fehler beim Senden. Bitte versuchen Sie es erneut oder schreiben
                Sie direkt an office@ioperio.at.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <div>
            <strong className="text-white">
              <span className="text-teal-300">i</span>operio
            </strong>{" "}
            – Mehr Anfragen. Schnellere Angebote. Weniger Büroarbeit.
          </div>
          <div className="flex flex-wrap gap-6">
            <a className="hover:text-white" href="#">
              Impressum
            </a>
            <a className="hover:text-white" href="#">
              Datenschutz
            </a>
            <a className="hover:text-white" href="mailto:office@ioperio.at">
              office@ioperio.at
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
