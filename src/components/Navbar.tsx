"use client";

import { useState } from "react";
import { restaurantData } from "@/data/restaurant";

const navItems = [
    { label: "Start", href: "#" },
    { label: "Menü", href: "#menu" },
    { label: "Galerie", href: "#gallery" },
    { label: "Kontakt", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function closeMenu() {
        setIsOpen(false);
    }

    return (
        <header className="fixed left-0 top-0 z-50 w-full px-3 py-3 md:px-4 md:py-4">
            <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/45 px-4 py-2.5 text-white shadow-2xl backdrop-blur-xl md:px-5 md:py-3">
                <a href="#" onClick={closeMenu} className="font-black tracking-tight">
                    {restaurantData.name}
                </a>

                <div className="hidden items-center gap-6 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-semibold text-white/70 transition hover:text-amber-300"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen((value) => !value)}
                    className="rounded-full bg-amber-400 px-4 py-2 text-xs font-black text-black transition hover:scale-105 hover:bg-amber-300 md:hidden"
                >
                    Menü
                </button>

                <a
                    href="#menu"
                    className="hidden rounded-full bg-amber-400 px-5 py-2 text-sm font-black text-black transition hover:scale-105 hover:bg-amber-300 md:inline-flex"
                >
                    Speisekarte
                </a>
            </nav>

            {isOpen && (
                <div className="mx-auto mt-3 max-w-6xl rounded-[1.5rem] border border-white/10 bg-black/80 p-3 text-white shadow-2xl backdrop-blur-xl md:hidden">
                    <div className="grid gap-2">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={closeMenu}
                                className="rounded-2xl px-4 py-3 text-sm font-bold text-white/80 transition hover:bg-white/10 hover:text-amber-300"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}