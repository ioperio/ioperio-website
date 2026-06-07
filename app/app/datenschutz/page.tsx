export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-[#020617] px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-sm font-bold text-teal-300 hover:text-teal-200">
          ← Zurück zur Startseite
        </a>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-teal-300">
            Datenschutz
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Datenschutzerklärung
          </h1>

          <div className="mt-10 space-y-8 text-slate-300">
            <section>
              <h2 className="text-2xl font-black text-white">1. Verantwortlicher</h2>
              <div className="mt-4 space-y-2 leading-7">
                <p><strong className="text-white">Unternehmen:</strong> ioperio</p>
                <p><strong className="text-white">Inhaber:</strong> Lukas Weidinger</p>
                <p><strong className="text-white">Adresse:</strong> ADRESSE HIER EINTRAGEN</p>
                <p><strong className="text-white">E-Mail:</strong> office@ioperio.at</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">2. Allgemeines</h2>
              <p className="mt-4 leading-7">
                Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir
                verarbeiten personenbezogene Daten ausschließlich auf Grundlage
                der gesetzlichen Bestimmungen, insbesondere der DSGVO und des
                österreichischen Datenschutzgesetzes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">3. Zugriffsdaten / Server-Logs</h2>
              <p className="mt-4 leading-7">
                Beim Besuch dieser Website können technische Zugriffsdaten
                verarbeitet werden, etwa IP-Adresse, Zeitpunkt des Zugriffs,
                aufgerufene Seiten, Browsertyp und Betriebssystem. Diese Daten
                dienen der technischen Bereitstellung, Sicherheit und Stabilität
                der Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">4. Kontaktformular</h2>
              <p className="mt-4 leading-7">
                Wenn Sie das Kontaktformular nutzen, verarbeiten wir die von Ihnen
                eingegebenen Daten wie Name, Firma, E-Mail-Adresse, Telefonnummer
                und Nachricht, um Ihre Anfrage zu beantworten und eine Demo oder
                Beratung vorzubereiten.
              </p>
              <p className="mt-4 leading-7">
                Rechtsgrundlage ist unser berechtigtes Interesse an der Bearbeitung
                von Anfragen sowie die Durchführung vorvertraglicher Maßnahmen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">5. E-Mail-Versand über Resend</h2>
              <p className="mt-4 leading-7">
                Für die Übermittlung von Kontaktformular-Anfragen verwenden wir
                den Dienst Resend. Dabei werden die im Formular angegebenen Daten
                zur Zustellung der Nachricht verarbeitet.
              </p>
              <p className="mt-4 leading-7">
                Anbieter: Resend, Inc. Die Verarbeitung erfolgt zur technischen
                Übermittlung der Anfrage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">6. Hosting über Vercel</h2>
              <p className="mt-4 leading-7">
                Diese Website wird über Vercel bereitgestellt. Im Rahmen des
                Hostings können technische Daten verarbeitet werden, die für den
                sicheren und stabilen Betrieb der Website notwendig sind.
              </p>
              <p className="mt-4 leading-7">
                Anbieter: Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">7. Speicherdauer</h2>
              <p className="mt-4 leading-7">
                Personenbezogene Daten werden nur so lange gespeichert, wie dies
                zur Bearbeitung der Anfrage erforderlich ist oder gesetzliche
                Aufbewahrungspflichten bestehen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">8. Ihre Rechte</h2>
              <p className="mt-4 leading-7">
                Sie haben grundsätzlich das Recht auf Auskunft, Berichtigung,
                Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch.
                Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
                Datenschutzrecht verstößt, können Sie sich bei der zuständigen
                Datenschutzbehörde beschweren.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">9. Kontakt zum Datenschutz</h2>
              <p className="mt-4 leading-7">
                Für Fragen zum Datenschutz erreichen Sie uns unter:
                <br />
                <a className="font-bold text-teal-300 hover:text-teal-200" href="mailto:office@ioperio.at">
                  office@ioperio.at
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">10. Stand</h2>
              <p className="mt-4 leading-7">
                Stand: Juni 2026
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
