export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#020617] px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-sm font-bold text-teal-300 hover:text-teal-200">
          ← Zurück zur Startseite
        </a>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-teal-300">
            Rechtliches
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Impressum
          </h1>

          <div className="mt-10 space-y-8 text-slate-300">
            <section>
              <h2 className="text-2xl font-black text-white">Angaben gemäß § 5 ECG</h2>
              <div className="mt-4 space-y-2 leading-7">
                <p><strong className="text-white">Unternehmen:</strong> ioperio</p>
                <p><strong className="text-white">Inhaber:</strong> Lukas Weidinger</p>
                <p><strong className="text-white">Adresse:</strong> ADRESSE HIER EINTRAGEN</p>
                <p><strong className="text-white">E-Mail:</strong> office@ioperio.at</p>
                <p><strong className="text-white">Telefon:</strong> TELEFON HIER EINTRAGEN</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">Unternehmensgegenstand</h2>
              <p className="mt-4 leading-7">
                Dienstleistungen im Bereich IT, Automatisierung, KI-gestützte Prozesse,
                Websysteme und digitale Geschäftsprozesse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">Gewerbe / Aufsichtsbehörde</h2>
              <div className="mt-4 space-y-2 leading-7">
                <p><strong className="text-white">Gewerbe:</strong> DIENSTLEISTUNGEN IN DER AUTOMATISCHEN DATENVERARBEITUNG UND INFORMATIONSTECHNIK</p>
                <p><strong className="text-white">Aufsichtsbehörde:</strong> Magistratisches Bezirksamt / Bezirkshauptmannschaft HIER EINTRAGEN</p>
                <p><strong className="text-white">Mitgliedschaft:</strong> Wirtschaftskammer Österreich</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">UID-Nummer</h2>
              <p className="mt-4 leading-7">
                UID HIER EINTRAGEN, falls vorhanden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">Haftung für Inhalte</h2>
              <p className="mt-4 leading-7">
                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                übernehmen wir jedoch keine Gewähr.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">Haftung für Links</h2>
              <p className="mt-4 leading-7">
                Diese Website kann Links zu externen Websites enthalten. Auf deren
                Inhalte haben wir keinen Einfluss. Für fremde Inhalte übernehmen
                wir keine Haftung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">Urheberrecht</h2>
              <p className="mt-4 leading-7">
                Inhalte, Texte und Gestaltung dieser Website unterliegen dem
                Urheberrecht. Eine Verwendung ohne Zustimmung ist nicht gestattet.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
