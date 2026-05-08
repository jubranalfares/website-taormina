import { restaurantData } from "@/data/restaurant";

export default function ImpressumPage() {
    return (
        <main className="min-h-screen bg-[#090705] px-6 py-20 text-white">
            <div className="mx-auto max-w-3xl">
                <a href="/" className="text-sm font-bold text-amber-300">
                    ← Zurück zur Startseite
                </a>

                <h1 className="mt-8 text-4xl font-black">Impressum</h1>

                <div className="mt-8 space-y-6 text-white/70">
                    <p>
                        <strong className="text-white">{restaurantData.name}</strong>
                        <br />
                        {restaurantData.contact.address}
                    </p>

                    <p>
                        Telefon: {restaurantData.contact.phone}
                        <br />
                        E-Mail: info@beispiel.de
                    </p>

                    <p>
                        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
                        <br />
                        Max Mustermann
                        <br />
                        {restaurantData.contact.address}
                    </p>

                    <p className="text-sm text-white/40">
                        Hinweis: Diese Seite ist ein Platzhalter und muss vor
                        Veröffentlichung mit den echten rechtlichen Angaben des Betreibers
                        ersetzt werden.
                    </p>
                </div>
            </div>
        </main>
    );
}