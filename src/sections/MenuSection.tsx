"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { restaurantData } from "@/data/restaurant";
import type { MenuItem } from "@/types/restaurant";

type MenuSectionProps = {
    compact?: boolean;
};

function getCategoryCount(categoryName: string) {
    return (
        restaurantData.menu.categories.find((category) => category.name === categoryName)
            ?.items.length ?? 0
    );
}

export function MenuSection({ compact = false }: MenuSectionProps) {
    const [activeCategory, setActiveCategory] = useState(
        restaurantData.menu.categories[0]?.name ?? ""
    );

    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

    const selectedCategory = restaurantData.menu.categories.find(
        (category) => category.name === activeCategory
    );

    const hasImages =
        selectedCategory?.items.some((item) => Boolean(item.image)) ?? false;

    return (
        <section
            id="menu"
            className={`bg-[#0f0c09] px-4 text-white md:px-6 ${compact ? "py-5 pb-28" : "py-16 md:py-24"
                }`}
        >
            <div className="mx-auto max-w-7xl">
                {!compact && (
                    <div className="mb-10">
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
                            Digitales Menü
                        </p>

                        <h2 className="text-4xl font-black md:text-6xl">
                            Eis, Kaffee & Sommerdrinks
                        </h2>

                        <p className="mt-4 max-w-2xl text-white/60">
                            Wähle eine Kategorie und entdecke die Spezialitäten vom Eiscafé
                            Taormina.
                        </p>
                    </div>
                )}

                {compact && (
                    <div className="mb-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                            Digitales Menü
                        </p>

                        <h1 className="mt-2 text-2xl font-black">{restaurantData.name}</h1>

                        <p className="mt-2 text-sm text-white/55">
                            Tippe eine Spezialität an, um Details zu sehen.
                        </p>
                    </div>
                )}

                {/* Kategorie-Leiste */}
                <div className="sticky top-0 z-30 -mx-4 mb-7 border-y border-white/10 bg-[#0f0c09]/95 px-4 py-3 backdrop-blur-xl md:top-24 md:mx-0 md:rounded-[2rem] md:border md:px-4">
                    <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {restaurantData.menu.categories.map((category) => {
                            const isActive = category.name === activeCategory;
                            const count = getCategoryCount(category.name);

                            return (
                                <button
                                    key={category.name}
                                    type="button"
                                    onClick={() => setActiveCategory(category.name)}
                                    className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-black transition ${isActive
                                        ? "bg-amber-300 text-[#2b1408] shadow-[0_12px_30px_rgba(251,191,36,0.25)]"
                                        : "bg-white/[0.06] text-white/75 hover:bg-white/[0.1] hover:text-white"
                                        }`}
                                >
                                    {category.name}
                                    <span
                                        className={`ml-2 rounded-full px-2 py-0.5 text-xs ${isActive ? "bg-black/10 text-[#2b1408]" : "bg-white/10 text-white/45"
                                            }`}
                                    >
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Kategorie-Headline */}
                <div className="mb-5 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300/80">
                            Kategorie
                        </p>
                        <h3 className="mt-1 text-3xl font-black md:text-4xl">
                            {selectedCategory?.name}
                        </h3>
                    </div>

                    <p className="hidden rounded-full bg-white/[0.06] px-4 py-2 text-sm font-bold text-white/55 md:block">
                        {selectedCategory?.items.length ?? 0} Spezialitäten
                    </p>
                </div>

                {/* Menü-Items: Bild-Kategorien */}
                {hasImages ? (
                    <motion.div layout className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {selectedCategory?.items.map((item, index) => (
                            <motion.button
                                key={`${activeCategory}-${item.name}`}
                                type="button"
                                onClick={() => setSelectedItem(item)}
                                initial={{ opacity: 0, y: 28, scale: 0.97, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.55,
                                    delay: Math.min(index * 0.06, 0.36),
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] text-left transition hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-[0_20px_70px_rgba(0,0,0,0.18)] md:rounded-[2rem]"
                            >
                                {item.image ? (
                                    <div
                                        className={`flex w-full items-center justify-center overflow-hidden bg-white ${compact ? "h-60" : "h-72 md:h-80"
                                            }`}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="max-h-full max-w-full object-contain p-4 transition duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className={`flex w-full items-center justify-center bg-[#17120d] ${compact ? "h-32" : "h-40"
                                            }`}
                                    >
                                        <p className="px-6 text-center text-sm font-bold text-white/45">
                                            Bild folgt
                                        </p>
                                    </div>
                                )}

                                <div className={`flex flex-1 flex-col ${compact ? "p-4" : "p-5"}`}>
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-black leading-tight">
                                                {item.name}
                                            </h3>

                                            <p className="mt-2 text-sm leading-6 text-white/60">
                                                {item.description}
                                            </p>
                                        </div>

                                        <p className="shrink-0 rounded-full bg-amber-300 px-3 py-1.5 text-sm font-black text-[#2b1408]">
                                            {item.price}
                                        </p>
                                    </div>

                                    <p className="mt-auto pt-5 text-xs font-black uppercase tracking-[0.2em] text-amber-300/85">
                                        Details ansehen
                                    </p>
                                </div>
                            </motion.button>
                        ))}
                    </motion.div>
                ) : (
                    /* Menü-Items: Listen-Kategorien ohne Bilder */
                    <motion.div
                        layout
                        className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]"
                    >
                        {selectedCategory?.items.map((item, index) => (
                            <motion.button
                                key={`${activeCategory}-${item.name}`}
                                type="button"
                                onClick={() => setSelectedItem(item)}
                                initial={{ opacity: 0, x: -14 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.35,
                                    delay: Math.min(index * 0.035, 0.28),
                                }}
                                className="flex w-full items-start justify-between gap-4 border-b border-white/10 px-5 py-4 text-left transition last:border-b-0 hover:bg-white/[0.06] md:px-7 md:py-5"
                            >
                                <div>
                                    <h3 className="text-lg font-black">{item.name}</h3>
                                    <p className="mt-1 text-sm leading-6 text-white/55">
                                        {item.description}
                                    </p>
                                </div>

                                <p className="shrink-0 rounded-full bg-amber-300 px-3 py-1.5 text-sm font-black text-[#2b1408]">
                                    {item.price}
                                </p>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-end bg-black/75 p-3 backdrop-blur-md md:items-center md:justify-center md:p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            initial={{ y: 80, opacity: 0, scale: 0.96 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 80, opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(event) => event.stopPropagation()}
                            className="max-h-[92vh] w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#120f0c] text-white shadow-2xl"
                        >
                            {selectedItem.image && (
                                <div className="flex h-[360px] w-full items-center justify-center bg-white md:h-[460px]">
                                    <img
                                        src={selectedItem.image}
                                        alt={selectedItem.name}
                                        className="max-h-full max-w-full object-contain p-4"
                                    />
                                </div>
                            )}

                            <div className="p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-300">
                                            Taormina Spezialität
                                        </p>

                                        <h3 className="mt-2 text-3xl font-black leading-tight">
                                            {selectedItem.name}
                                        </h3>
                                    </div>

                                    <p className="rounded-full bg-amber-300 px-4 py-2 text-sm font-black text-[#2b1408]">
                                        {selectedItem.price}
                                    </p>
                                </div>

                                <p className="mt-4 leading-7 text-white/65">
                                    {selectedItem.description}
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setSelectedItem(null)}
                                    className="mt-6 w-full rounded-full bg-white px-6 py-4 font-black text-black transition hover:bg-amber-300"
                                >
                                    Zurück zur Karte
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}