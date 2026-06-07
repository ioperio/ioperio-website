const benefits = [
  "Keine verlorenen Anfragen",
  "Weniger Telefonstress",
  "Angebote schneller vorbereiten",
  "Mehr Zeit für Ihre Baustelle",
];

const problems = [
  {
    title: "Telefon klingelt während der Arbeit",
    text: "Neue Anfragen kommen rein, während Sie beim Kunden oder auf der Baustelle sind.",
  },
  {
    title: "E-Mails bleiben liegen",
    text: "Wichtige Informationen verteilen sich auf Postfach, WhatsApp, Notizen und Rückrufe.",
  },
  {
    title: "Angebote entstehen spätabends",
    text: "Nach einem langen Arbeitstag wartet noch Büroarbeit, statt Feierabend.",
  },
];

const products = [
  {
    name: "ioperio Inbox",
    text: "Erfasst Kundenanfragen automatisch und strukturiert alle wichtigen Informationen.",
  },
  {
    name: "ioperio Offer",
    text: "Bereitet Angebotsentwürfe vor, damit Sie schneller reagieren können.",
  },
  {
    name: "ioperio Voice",
    text: "Nimmt später Telefonanfragen entgegen und erstellt daraus klare Rückrufnotizen.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div>
          <div className="text-3xl font-black tracking-tight">
            <span className="text-teal-500">i</span>Operio
          </div>
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Mehr Aufträge. Weniger Büroarbeit.
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
          <a href="#problem">Problem</a>
          <a href="#loesung">Lösung</a>
          <a href="#produkte">Produkte</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="mb-5 inline-flex rounded-full bg-teal-50 px-4 py-2 text-sm font-bold text-teal-700">
            Für Installateure, Elektriker und Handwerksbetriebe
          </div>

          <h1 className="max-w-2xl text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
            Verbringen Sie Ihre Abende noch mit Angeboten?
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-8 text-slate-700">
            ioperio automatisiert Kundenanfragen, strukturiert alle wichtigen
            Informationen und bereitet Angebote vor – damit keine Anfrage
            verloren geht.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#kontakt"
              className="rounded-xl bg-teal-500 px-6 py-4 text-center font-bold text-white shadow-lg shadow-teal-500/25 transition hover:bg-teal-600"
            >
              Kostenlose Demo buchen
            </a>
            <a
              href="#loesung"
              className="rounded-xl border border-slate-200 px-6 py-4 text-center font-bold text-slate-900 transition hover:bg-slate-50"
            >
              So funktioniert es
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <div key={item} className="flex items-center gap-3 text-slate-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-sm font-black text-white">
                  ✓
                </span>
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-slate-950 p-6 shadow-2xl">
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
            <div className="text-xl font-black text-white">
              <span className="text-teal-400">i</span>Operio Inbox
            </div>
            <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-bold text-red-300">
              Priorität hoch
            </span>
          </div>

          <div className="space-y-4 rounded-2xl bg-white p-6">
            <div>
              <p className="text-xs font-bold uppercase text-slate-400">
                Neue Anfrage
              </p>
              <h2 className="mt-1 text-2xl font-black text-slate-950">
                Heizungsausfall in 1120 Wien
              </h2>
            </div>

            <div className="grid gap-3 text-sm">
              <div className="rounded-xl bg-slate-50 p-4">
                <strong>Name:</strong> Max Mustermann
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <strong>Telefon:</strong> 0664 1234567
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <strong>Problem:</strong> Heizung fällt aus, Warmwasser funktioniert
                nicht.
              </div>
              <div className="rounded-xl bg-teal-50 p-4 text-teal-900">
                <strong>iOperio Ergebnis:</strong> Alle Daten erfasst,
                Dringlichkeit erkannt, Angebotsentwurf vorbereitet.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black tracking-tight text-slate-950">
            Kennen Sie das?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-700">
            Viele Handwerksbetriebe verlieren jeden Monat Aufträge, weil Anfragen
            zu spät beantwortet oder nicht sauber nachverfolgt werden.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {problems.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-2xl">
                  !
                </div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="loesung" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-black tracking-tight">
                So macht ioperio aus Anfragen echte Aufträge.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Statt Zettelwirtschaft, verpassten Anrufen und verstreuten
                Informationen erhalten Sie klare, strukturierte Anfragen mit
                allen wichtigen Details.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Kunde stellt Anfrage per Formular, E-Mail oder später Telefon.",
                "ioperio sammelt Name, Adresse, Problem, Dringlichkeit und Kontaktdaten.",
                "Die Anfrage wird automatisch analysiert und priorisiert.",
                "Sie erhalten eine klare Zusammenfassung.",
                "Ein Angebotsentwurf wird vorbereitet.",
                "Sie prüfen und versenden.",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-2xl border border-slate-200 p-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 font-black text-white">
                    {index + 1}
                  </div>
                  <p className="font-semibold text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="produkte" className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black tracking-tight">
            Drei Bausteine für weniger Büroarbeit.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-2xl font-black text-teal-300">{item.name}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl bg-teal-50 p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-4xl font-black tracking-tight">
              Bereit für mehr Aufträge?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              In einer kostenlosen Demo zeigen wir Ihnen, wie ioperio Anfragen
              automatisch erfasst und Angebotsvorbereitungen vereinfacht.
            </p>
          </div>

          <form className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
            <input className="w-full rounded-xl border border-slate-200 p-4" placeholder="Name" />
            <input className="w-full rounded-xl border border-slate-200 p-4" placeholder="Firma" />
            <input className="w-full rounded-xl border border-slate-200 p-4" placeholder="E-Mail" />
            <input className="w-full rounded-xl border border-slate-200 p-4" placeholder="Telefon" />
            <textarea className="h-28 w-full rounded-xl border border-slate-200 p-4" placeholder="Wobei dürfen wir helfen?" />
            <button className="w-full rounded-xl bg-slate-950 px-6 py-4 font-bold text-white">
              Demo anfragen
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <div>
            <strong className="text-slate-950">
              <span className="text-teal-500">i</span>Operio
            </strong>{" "}
            – Mehr Aufträge. Weniger Büroarbeit.
          </div>
          <div className="flex gap-6">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="mailto:kontakt@ioperio.at">office@ioperio.at</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
