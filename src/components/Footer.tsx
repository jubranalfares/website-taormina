import { restaurantData } from "@/data/restaurant";

export function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#060504] px-6 pb-24 pt-16 text-white md:pb-14">
            {/* Glow Hintergrund */}
            <div className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />

            <div className="relative mx-auto max-w-6xl">
                {/* obere Linie */}
                <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                    {/* Brand */}
                    <div className="max-w-md">
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-amber-300">
                            Eiscafé Taormina
                        </p>

                        <h2 className="text-3xl font-black md:text-4xl">
                            {restaurantData.name}
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-white/55">
                            {restaurantData.tagline}
                        </p>

                        <p className="mt-6 text-sm text-white/40">
                            Hausgemachtes Eis, italienischer Genuss und moderne digitale
                            Speisekarte direkt auf deinem Smartphone.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-amber-300">
                            Navigation
                        </p>

                        <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-sm font-semibold text-white/60">
                            <a href="#" className="transition hover:text-amber-300">
                                Start
                            </a>

                            <a href="#menu" className="transition hover:text-amber-300">
                                Menü
                            </a>

                            <a href="#gallery" className="transition hover:text-amber-300">
                                Galerie
                            </a>

                            <a href="#contact" className="transition hover:text-amber-300">
                                Kontakt
                            </a>

                            <a href="/impressum" className="transition hover:text-amber-300">
                                Impressum
                            </a>

                            <a href="/datenschutz" className="transition hover:text-amber-300">
                                Datenschutz
                            </a>
                        </div>
                    </div>

                    {/* Kontakt Mini */}
                    <div>
                        <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-amber-300">
                            Kontakt
                        </p>

                        <div className="space-y-3 text-sm text-white/60">
                            <p>{restaurantData.contact.address}</p>

                            <a
                                href={`tel:${restaurantData.contact.phone}`}
                                className="block transition hover:text-amber-300"
                            >
                                {restaurantData.contact.phone}
                            </a>
                        </div>
                    </div>
                </div>

                {/* untere Linie */}
                <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Copyright */}
                <div className="mt-6 flex flex-col gap-3 text-center text-sm text-white/35 md:flex-row md:items-center md:justify-between md:text-left">
                    <p>
                        © {new Date().getFullYear()} {restaurantData.name}
                    </p>

                    <p>
                        Genuss, Eis & italienische Cafékultur in Mettlach.
                    </p>
                </div>
            </div>
        </footer>
    );
}