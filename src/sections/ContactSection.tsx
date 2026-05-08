import { restaurantData } from "@/data/restaurant";
import { MenuQRCode } from "@/components/MenuQRCode";

export function ContactSection() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#fff8ee] px-6 py-24 text-[#2b1408]"
        >
            <div className="absolute left-[-120px] top-[-120px] h-[280px] w-[280px] rounded-full bg-pink-300/30 blur-3xl" />
            <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-amber-300/30 blur-3xl" />

            <div className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
                <div className="rounded-[2.25rem] border border-[#f3d7c7] bg-white p-7 shadow-[0_20px_80px_rgba(0,0,0,0.08)] md:p-9">
                    <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-pink-500">
                        Besuch uns
                    </p>

                    <h2 className="text-4xl font-black leading-tight md:text-5xl">
                        Eis, Kaffee & Sommermomente in Mettlach
                    </h2>

                    <div className="mt-8 space-y-5 text-[#5c463b]">
                        <p>
                            <span className="font-black text-[#2b1408]">Adresse:</span>
                            <br />
                            {restaurantData.contact.address}
                        </p>

                        <p>
                            <span className="font-black text-[#2b1408]">Telefon:</span>
                            <br />
                            <a
                                href={`tel:${restaurantData.contact.phone}`}
                                className="font-bold text-pink-500 hover:text-pink-600"
                            >
                                {restaurantData.contact.phone}
                            </a>
                        </p>

                        <div>
                            <span className="font-black text-[#2b1408]">Öffnungszeiten:</span>

                            <div className="mt-3 space-y-2">
                                {restaurantData.openingHours.map((item) => (
                                    <div
                                        key={item.day}
                                        className="flex justify-between gap-4 rounded-2xl bg-[#fff3df] px-4 py-3"
                                    >
                                        <span>{item.day}</span>
                                        <span className="font-black text-[#2b1408]">
                                            {item.hours}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href={`tel:${restaurantData.contact.phone}`}
                            className="rounded-full bg-pink-500 px-6 py-4 text-center font-black text-white shadow-[0_18px_45px_rgba(236,72,153,0.25)] transition hover:scale-105 hover:bg-pink-600"
                        >
                            Jetzt anrufen
                        </a>

                        <a
                            href={restaurantData.contact.mapsLink}
                            target="_blank"
                            className="rounded-full border border-[#f3d7c7] bg-[#fff3df] px-6 py-4 text-center font-black text-[#2b1408] transition hover:scale-105 hover:bg-amber-100"
                        >
                            Route planen
                        </a>
                    </div>

                    <div className="mt-8">
                        <MenuQRCode />
                    </div>
                </div>

                <div className="min-h-[460px] overflow-hidden rounded-[2.25rem] border border-[#f3d7c7] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                    <iframe
                        src={restaurantData.contact.mapsEmbedUrl}
                        className="h-full min-h-[460px] w-full border-0"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${restaurantData.name} Standort`}
                    />
                </div>
            </div>
        </section>
    );
}