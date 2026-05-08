"use client";

import { motion } from "framer-motion";
import { restaurantData } from "@/data/restaurant";

export function GallerySection() {
    return (
        <section
            id="gallery"
            className="relative overflow-hidden bg-[#fff8ee] px-6 py-24 text-[#2b1408]"
        >
            <div className="absolute left-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-pink-300/30 blur-3xl" />
            <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-amber-300/30 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                        className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-pink-500"
                    >
                        Eindrücke
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65 }}
                        className="text-4xl font-black leading-tight md:text-6xl"
                    >
                        Sommermomente bei Taormina
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75 }}
                        className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5c463b] md:text-lg"
                    >
                        Hausgemachtes Eis, frische Früchte, Eiskaffee und italienisches
                        Café-Feeling mitten in Mettlach.
                    </motion.p>
                </div>

                <div className="grid gap-4 md:grid-cols-4">
                    {restaurantData.gallery.map((image, index) => (
                        <motion.div
                            key={image.src}
                            initial={{ opacity: 0, y: 36, scale: 0.96, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`group overflow-hidden rounded-[2rem] border border-[#f3d7c7] bg-white shadow-[0_20px_70px_rgba(0,0,0,0.08)] ${index === 0 ? "md:col-span-2 md:row-span-2" : ""
                                }`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className={`w-full object-cover transition duration-700 group-hover:scale-105 ${index === 0 ? "h-[430px]" : "h-[210px]"
                                    }`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}