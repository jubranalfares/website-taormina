"use client";

import { motion } from "framer-motion";

const highlightItems = [
    {
        name: "Taormina Becher",
        price: "11,00€",
        description:
            "Unsere Signature Kreation mit frischen Früchten, cremigem Eis und sommerlichem Genuss.",
        image: "/images/taormina-becher.png",
        badge: "Signature",
    },
    {
        name: "Spaghetti Eis",
        price: "8,00€",
        description:
            "Der italienische Klassiker mit Vanilleeis, Erdbeersoße und weißer Schokolade.",
        image: "/images/spagetti-eis.png",
        badge: "Beliebt",
    },
    {
        name: "Erdbeer Becher",
        price: "9,00€",
        description:
            "Frische Erdbeeren, cremiges Eis und echte Sommer-Vibes.",
        image: "/images/erdbeer-becher.png",
        badge: "Sommer Hit",
    },
];

export function HighlightsSection() {
    return (
        <section className="relative overflow-hidden bg-[#fff8ee] px-6 py-24 text-[#2b1408]">
            {/* Hintergrund Glow */}
            <div className="absolute left-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-pink-300/30 blur-3xl" />
            <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-amber-300/30 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                <div className="mb-14 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-pink-500"
                    >
                        Unsere Favoriten
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65 }}
                        className="text-4xl font-black leading-tight md:text-6xl"
                    >
                        Signature Specials
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75 }}
                        className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5c463b] md:text-lg"
                    >
                        Sommerliche Eisbecher, italienische Klassiker und echte Taormina
                        Highlights.
                    </motion.p>
                </div>

                <div className="grid gap-7 md:grid-cols-3">
                    {highlightItems.map((item, index) => (
                        <motion.article
                            key={item.name}
                            initial={{
                                opacity: 0,
                                y: 40,
                                scale: 0.96,
                                filter: "blur(8px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                filter: "blur(0px)",
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.75,
                                delay: index * 0.12,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            whileHover={{ y: -8 }}
                            className="group relative overflow-hidden rounded-[2.5rem] border border-[#f3d7c7] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
                        >
                            {/* Badge */}
                            <div className="absolute left-5 top-5 z-20 rounded-full bg-[#2b1408] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white shadow-xl">
                                {item.badge}
                            </div>

                            {/* Bild */}
                            <div className="relative flex h-[420px] items-center justify-center overflow-hidden bg-gradient-to-b from-[#fffdf8] to-[#fff3df]">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="max-h-full max-w-full object-contain p-5 transition duration-700 group-hover:scale-105"
                                />

                                {/* Glow */}
                                <div className="absolute bottom-[-80px] h-[180px] w-[180px] rounded-full bg-pink-300/20 blur-3xl" />
                            </div>

                            {/* Content */}
                            <div className="flex min-h-[300px] flex-col p-7">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-3xl font-black leading-tight">
                                        {item.name}
                                    </h3>

                                    <span className="rounded-full bg-amber-300 px-4 py-2 text-sm font-black text-[#2b1408] shadow-lg">
                                        {item.price}
                                    </span>
                                </div>

                                <p className="mt-4 text-sm leading-7 text-[#5c463b] md:text-base">
                                    {item.description}
                                </p>

                                <a
                                    href="#menu"
                                    className="mt-auto inline-flex w-fit rounded-full bg-[#2b1408] px-6 py-3 text-sm font-black uppercase tracking-[0.15em] text-white transition hover:scale-105 hover:bg-black"
                                >
                                    Jetzt entdecken
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}