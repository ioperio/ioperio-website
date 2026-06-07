"use client";

import { useEffect, useState } from "react";

const industries = [
  "Handwerk",
  "Handel",
  "Werkstätten",
  "Vermietungen",
  "Servicebetriebe",
  "Dienstleister",
];

const painPoints = [
  {
    title: "Anfragen bleiben liegen",
    text: "Kunden melden sich per Telefon, E-Mail oder Formular – aber im Tagesgeschäft geht schnell etwas unter.",
  },
  {
    title: "Angebote kosten zu viel Zeit",
    text: "Daten sammeln, Preise prüfen, Rückfragen stellen und Angebote vorbereiten passiert oft erst spätabends.",
  },
  {
    title: "Kunden erwarten schnelle Antworten",
    text: "Wer schneller reagiert, wirkt professioneller und hat eine höhere Chance auf den Auftrag.",
  },
];

const systems = [
  {
    name: "Anfrage-System",
    label: "Erfassung",
    text: "Strukturiert Kundenanfragen automatisch und erkennt wichtige Informationen wie Anliegen, Kontakt, Ort und Dringlichkeit.",
  },
  {
    name: "Angebots-System",
    label: "Vorbereitung",
    text: "Bereitet Angebotsentwürfe anhand Ihrer Leistungen, Preise und Regeln vor – damit Sie schneller reagieren können.",
  },
  {
    name: "Telefon-Assistent",
    label: "Entlastung",
    text: "Erfasst Telefonanfragen, fragt wichtige Details ab und erstellt klare Rückrufnotizen für Ihr Team.",
  },
];

const processSteps = [
  "Kunde stellt eine Anfrage",
  "ioperio erkennt die wichtigsten Daten",
  "Anfrage wird strukturiert und priorisiert",
  "Rückfrage oder Angebot wird vorbereitet",
  "Ihr Betrieb prüft und sendet",
];

const packages = [
  {
    name: "Starter",
    price: "ab 1.490 €",
    monthly: "ab 149 € / Monat",
    text: "Für Betriebe, die Kundenanfragen sauber erfassen und schneller bearbeiten wollen.",
    features: [
      "Anfrageformular",
      "KI-Zusammenfassung",
      "E-Mail-Benachrichtigung",
      "Basis-Automatisierung",
      "1 Monat Betreuung",
    ],
  },
  {
    name: "Pro",
    price: "ab 2.490 €",
    monthly: "ab 299 € / Monat",
    text: "Für Firmen, die Anfragen, E-Mails und Angebotsvorbereitung automatisieren möchten.",
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
    text: "Für Betriebe mit vielen Anrufen, Rückrufen und Terminabstimmungen.",
    features: [
      "KI-Telefonassistenz",
      "Rückrufnotizen",
      "Dringlichkeitserkennung",
      "Zusammenfassungen",
      "Individuelle Einrichtung",
    ],
  },
];

const stats = [
  {
    value: "24/7",
    label: "Anfragen erfassen",
  },
  {
    value: "3x",
    label: "schneller reagieren",
  },
  {
    value: "0",
    label: "verlorene Anfragen",
  },
];

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <main className="min-h-screen overflow-hidden bg-[#020617] text-white">
      <div
        className="fixed left-0 top-0 z-[100] h-1 bg-teal-300 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-300 text-2xl font-black text-slate-950 shadow-lg shadow-teal-300/20">
              i
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight">ioperio</div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                AI Automation
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-400 md:flex">
            <a className="transition hover:text-white" href="#problem">
              Problem
            </a>
            <a className="transition hover:text-white" href="#system">
              System
            </a>
            <a className="transition hover:text-white" href="#pakete">
              Pakete
            </a>
            <a className="transition hover:text-white" href="#kontakt">
              Kontakt
            </a>
          </nav>

          <a
            href="#kontakt"
            className="hidden rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-teal-300 md:inline-flex"
          >
            Demo anfragen
          </a>
        </div>
      </header>

      <section className="relative px-6 py-20 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-teal-300/10 blur-3xl" />
        <div className="absolute right-[-150px] top-36 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-300 shadow-2xl">
              <span className="h-2 w-2 rounded-full bg-teal-300 shadow-lg shadow-teal-300" />
              Automatisierung für Betriebe mit viel Kundenkontakt
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              Mehr Anfragen.
              <span className="block bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text text-transparent">
                Schnellere Angebote.
              </span>
              Weniger Büroarbeit.
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-300">
              ioperio automatisiert Kundenanfragen, E-Mails und
              Angebotsvorbereitung für Betriebe, die schneller reagieren und
              professioneller arbeiten wollen.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {industries.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#kontakt"
                className="rounded-2xl bg-teal-300 px-7 py-4 text-center font-black text-slate-950 shadow-2xl shadow-teal-300/20 transition hover:-translate-y-1 hover:bg-teal-200"
              >
                Kostenlose Demo anfragen
              </a>
              <a
                href="#system"
                className="rounded-2xl border border-white/15 px-7 py-4 text-center font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                System ansehen
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                >
                  <div className="text-3xl font-black text-teal-300">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-400">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-teal-300/10 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-2xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#07111f] p-6">
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <div className="text-xs font-black uppercase tracking-[0.3em] text-teal-300">
                      ioperio system
                    </div>
                    <div className="mt-2 text-2xl font-black">
                      Anfrage erkannt
                    </div>
                  </div>
                  <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-black text-red-300">
                    hoch
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-3xl bg-white p-5 text-slate-950">
                    <p className="text-xs font-black uppercase text-slate-400">
                      Neue Kundenanfrage
                    </p>
                    <h2 className="mt-2 text-2xl font-black">
                      Serviceanfrage mit Angebotswunsch
                    </h2>
                    <p className="mt-3 leading-7 text-slate-600">
                      Kunde benötigt kurzfristige Rückmeldung, Preisrahmen und
                      Terminmöglichkeit.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      ["Kontakt", "erfasst"],
                      ["Anliegen", "erkannt"],
                      ["Priorität", "hoch"],
                      ["Nächster Schritt", "Angebot"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                      >
                        <p className="text-xs font-bold uppercase text-slate-500">
                          {label}
                        </p>
                        <p className="mt-1 font-black text-white">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-3xl border border-teal-300/30 bg-teal-300 p-5 text-slate-950">
                    <p className="text-xs font-black uppercase opacity-70">
                      Empfehlung
                    </p>
                    <p className="mt-2 font-black leading-7">
                      Rückruf vorbereiten, Anfrage priorisieren und
                      Angebotsentwurf erstellen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="relative border-y border-white/10 bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-teal-300">
              Das Problem
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Gute Betriebe verlieren keine Kunden wegen schlechter Arbeit.
              Sondern wegen zu langsamer Reaktion.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Wenn Anfragen nicht sauber erfasst, priorisiert und bearbeitet
              werden, bleibt Umsatz liegen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {painPoints.map((item) => (
              <div
                key={item.title}
                className="group rounded-[2rem] border border-white/10 bg-[#07111f] p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-teal-300/40"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl font-black text-teal-300 transition group-hover:bg-teal-300 group-hover:text-slate-950">
                  !
                </div>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="system" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-teal-300">
              Das System
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Von der Anfrage bis zum vorbereiteten Angebot.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              ioperio verbindet Anfrageerfassung, KI-Auswertung und
              Angebotsvorbereitung in einem klaren Ablauf.
            </p>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-black text-slate-400">
                  Automation Flow
                </span>
                <span className="rounded-full bg-teal-300 px-3 py-1 text-xs font-black text-slate-950">
                  aktiv
                </span>
              </div>

              <div className="space-y-3">
                {processSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-300 text-sm font-black text-slate-950">
                      {index + 1}
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-[#07111f] px-4 py-3 text-sm font-bold text-slate-300">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {systems.map((item) => (
              <div
                key={item.name}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-2 hover:border-teal-300/40 hover:bg-white/[0.06]"
              >
                <div className="mb-6 inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-teal-300">
                  {item.label}
                </div>
                <h3 className="text-3xl font-black">
                  ioperio {item.name}
                </h3>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pakete" className="border-y border-white/10 bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-teal-300">
              Pakete
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Starten Sie klein. Automatisieren Sie Schritt für Schritt.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Jedes System wird an Betrieb, Leistungen, Preise und interne
              Abläufe angepasst.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((item) => (
              <div
                key={item.name}
                className={`relative rounded-[2rem] border p-8 shadow-2xl transition duration-300 hover:-translate-y-2 ${
                  item.highlighted
                    ? "border-teal-300 bg-teal-300 text-slate-950 shadow-teal-300/20"
                    : "border-white/10 bg-[#07111f] text-white"
                }`}
              >
                {item.highlighted && (
                  <div className="mb-5 inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-teal-300">
                    Beliebt
                  </div>
                )}

                <h3 className="text-3xl font-black">{item.name}</h3>
                <p className="mt-4 leading-7 opacity-80">{item.text}</p>

                <div className="mt-8">
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

      <section id="kontakt" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl md:grid-cols-2 md:p-12">
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

            <div className="mt-8 space-y-4">
              {[
                "Kostenlose Ersteinschätzung",
                "Konkreter Ablauf für Ihren Betrieb",
                "Keine Verpflichtung",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-300 text-sm font-black text-slate-950">
                    ✓
                  </span>
                  <span className="font-bold text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-[2rem] bg-white p-6 text-slate-950 shadow-2xl"
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
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <div>
            <strong className="text-white">
              <span className="text-teal-300">i</span>operio
            </strong>{" "}
            – Mehr Anfragen. Schnellere Angebote. Weniger Büroarbeit.
          </div>
          <div className="flex flex-wrap gap-6">
            <a className="transition hover:text-white" href="#">
              Impressum
            </a>
            <a className="transition hover:text-white" href="#">
              Datenschutz
            </a>
            <a
              className="transition hover:text-white"
              href="mailto:office@ioperio.at"
            >
              office@ioperio.at
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
