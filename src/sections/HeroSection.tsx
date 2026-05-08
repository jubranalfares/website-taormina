"use client";

import { motion } from "framer-motion";
import { restaurantData } from "@/data/restaurant";
import { image } from "framer-motion/client";

const heroSlides = [
    {
        image: "/images/taormina-becher.png",
        alt: "Taormina Becher",
        fit: "cover",
    },
    
    {
        image: "/images/obstsalat.png",
        alt: "Obstsalat",
        fit: "cover",
    },
    {
        image: "/images/bananen-split.png",
        alt: "Bananen Split",
        fit: "cover",
    },
    {
        image: "/images/spaghetti-eis.png",
        alt: "Spaghetti Eis",
        fit: "cover",
    },
    {
        image: "/images/sportler-becher.png",
        alt: "Sportler Becher",
        fit: "cover",
    },
    {
        image: "/images/tartufo.png",
        alt: "Tartufo",
        fit: "cover",
    }
];

export function HeroSection() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#fff3df] text-white">
            {/* Animierte Hintergrund-Story */}
            <div className="absolute inset-0">
                {heroSlides.map((slide, index) => (
                    <motion.img
                        key={slide.image}
                        src={slide.image}
                        alt={slide.alt}
                        className="absolute inset-0 h-full w-full object-cover md:object-cover" initial={{ opacity: index === 0 ? 1 : 0, scale: 1.08 }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                            scale: [1.08, 1.03, 1.0, 1.04],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            delay: index * 5,
                            ease: "easeInOut",
                            times: [0, 0.12, 0.72, 1],
                        }}
                    />
                ))}
            </div>

            {/* Sommerliche Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,_#fb718555,_transparent_28%),radial-gradient(circle_at_80%_15%,_#facc1550,_transparent_24%),radial-gradient(circle_at_80%_85%,_#84cc1640,_transparent_26%)]" />

            <div className="relative z-10 mx-auto grid min-h-[92vh] max-w-7xl items-center gap-8 px-5 pb-20 pt-28 md:min-h-screen md:grid-cols-2 md:gap-12 md:px-12 md:pb-16 md:pt-32">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.75 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-bold text-white shadow-2xl backdrop-blur"
                    >
                        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_#34d399]" />
                        Sommer, Eis & digitales Menü
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.75, delay: 0.08 }}
                        className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-amber-200"
                    >
                        Italian Gelato Experience
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 38, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            duration: 0.95,
                            delay: 0.16,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="max-w-4xl text-5xl font-black leading-[0.9] sm:text-6xl md:text-7xl lg:text-8xl"
                    >
                        {restaurantData.name}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 34, filter: "blur(6px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.9, delay: 0.3 }}
                        className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg md:text-2xl md:leading-8"
                    >
                        {restaurantData.tagline}. Entdecke Eisbecher, Spaghetti-Eis,
                        Eiskaffee, Aperitifs und süße Spezialitäten direkt auf deinem
                        Smartphone.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 34 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.45 }}
                        className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10 md:gap-4"
                    >
                        <a
                            href="#menu"
                            className="rounded-full bg-amber-300 px-6 py-3.5 text-center font-black text-[#1d1208] shadow-[0_18px_60px_rgba(251,191,36,0.35)] transition hover:scale-105 hover:bg-amber-200 md:px-8 md:py-4"
                        >
                            Speisekarte ansehen
                        </a>

                        <a
                            href={restaurantData.contact.mapsLink}
                            target="_blank"
                            className="rounded-full border border-white/25 bg-white/15 px-6 py-3.5 text-center font-black text-white backdrop-blur transition hover:scale-105 hover:bg-white/25 md:px-8 md:py-4"
                        >
                            Route planen
                        </a>
                    </motion.div>
                </div>

                {/* Rechte Premium-Eis-Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.94, y: 34, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="hidden rounded-[2.25rem] border border-white/20 bg-white/12 p-5 shadow-2xl backdrop-blur-xl md:block"
                >
                    <div className="flex h-[360px] items-center justify-center overflow-hidden rounded-[1.75rem] bg-white">
                        <img
                            src="/images/taormina-becher.png"
                            alt="Taormina Becher"
                            className="max-h-full max-w-full object-contain p-4 transition duration-700 hover:scale-105"
                        />
                    </div>

                    <div className="mt-6">
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-200">
                            Signature des Hauses
                        </p>

                        <h2 className="mt-2 text-3xl font-black">Taormina Becher</h2>

                        <p className="mt-3 text-white/70">
                            Fruchtig, cremig und gemacht für echte Sommermomente.
                        </p>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-3">
                        <div className="rounded-2xl bg-white/15 p-4 text-center backdrop-blur">
                            <p className="text-2xl font-black text-amber-200">60+</p>
                            <p className="mt-1 text-xs text-white/60">Spezialitäten</p>
                        </div>

                        <div className="rounded-2xl bg-white/15 p-4 text-center backdrop-blur">
                            <p className="text-2xl font-black text-amber-200">QR</p>
                            <p className="mt-1 text-xs text-white/60">Menü</p>
                        </div>

                        <div className="rounded-2xl bg-white/15 p-4 text-center backdrop-blur">
                            <p className="text-2xl font-black text-amber-200">🍦</p>
                            <p className="mt-1 text-xs text-white/60">Gelato</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}