export default function DatenschutzPage() {
    return (
        <main className="min-h-screen bg-[#090705] px-6 py-20 text-white">
            <div className="mx-auto max-w-3xl">
                <a href="/" className="text-sm font-bold text-amber-300">
                    ← Zurück zur Startseite
                </a>

                <h1 className="mt-8 text-4xl font-black">Datenschutzerklärung</h1>

                <div className="mt-8 space-y-6 text-white/70">
                    <p>
                        Diese Datenschutzerklärung ist ein Platzhalter und muss vor dem
                        öffentlichen Einsatz durch eine rechtlich geprüfte Version ersetzt
                        werden.
                    </p>

                    <p>
                        Diese Website kann technische Daten verarbeiten, die beim Aufruf
                        automatisch entstehen, z. B. IP-Adresse, Browserinformationen und
                        Zeitpunkt des Zugriffs.
                    </p>

                    <p>
                        Wenn externe Dienste wie Google Maps eingebunden werden, können
                        Daten an Drittanbieter übertragen werden. Dies muss in der finalen
                        Datenschutzerklärung korrekt beschrieben werden.
                    </p>

                    <p className="text-sm text-white/40">
                        Wichtig: Für echte Kunden solltest du die Datenschutzerklärung
                        individuell erstellen lassen oder einen seriösen Generator nutzen.
                    </p>
                </div>
            </div>
        </main>
    );
}