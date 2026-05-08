"use client";

import { QRCodeCanvas } from "qrcode.react";
import { restaurantData } from "@/data/restaurant";

export function MenuQRCode() {
    // Automatisch aktuelle Domain nehmen
    const menuUrl =
        typeof window !== "undefined"
            ? `${window.location.origin}/menu`
            : "/menu";

    return (
        <div className="relative overflow-hidden rounded-[2rem] border border-[#f3d7c7] bg-gradient-to-br from-[#fffaf3] to-[#fff1dc] p-6 text-[#2b1408] shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
            {/* Glow */}
            <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-pink-300/20 blur-3xl" />

            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-pink-500">
                QR Menü
            </p>

            <h3 className="text-3xl font-black leading-tight">
                Direkt zur
                <br />
                digitalen Speisekarte
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-7 text-[#5c463b]">
                Gäste scannen den QR-Code und öffnen sofort das digitale Menü von{" "}
                {restaurantData.name} auf dem Smartphone.
            </p>

            <div className="mt-7 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                {/* QR */}
                <div className="rounded-[1.75rem] bg-white p-4 shadow-xl">
                    <QRCodeCanvas
                        value={menuUrl}
                        size={170}
                        bgColor="#ffffff"
                        fgColor="#2b1408"
                        includeMargin
                    />
                </div>

                {/* Vorteile */}
                <div className="space-y-3">
                    <div className="rounded-2xl bg-white/70 px-4 py-3 text-sm font-bold text-[#2b1408] shadow-sm backdrop-blur">
                        ⚡ Schnell & kontaktlos
                    </div>

                    <div className="rounded-2xl bg-white/70 px-4 py-3 text-sm font-bold text-[#2b1408] shadow-sm backdrop-blur">
                        📱 Perfekt fürs Smartphone
                    </div>

                    <div className="rounded-2xl bg-white/70 px-4 py-3 text-sm font-bold text-[#2b1408] shadow-sm backdrop-blur">
                        🍦 Modernes Gäste-Erlebnis
                    </div>
                </div>
            </div>
        </div>
    );
}