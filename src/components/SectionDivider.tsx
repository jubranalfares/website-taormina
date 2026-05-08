type SectionDividerProps = {
    from?: "light" | "dark";
    to?: "light" | "dark";
};

export function SectionDivider({ from = "light", to = "dark" }: SectionDividerProps) {
    const fromColor = from === "light" ? "#fff8ee" : "#0f0c09";
    const toColor = to === "light" ? "#fff8ee" : "#0f0c09";
    const glowColor = to === "light" ? "rgba(251, 191, 36, 0.22)" : "rgba(236, 72, 153, 0.16)";

    return (
        <div
            className="relative h-28 overflow-hidden"
            style={{ background: fromColor }}
            aria-hidden="true"
        >
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(to bottom, ${fromColor} 0%, ${fromColor} 35%, ${toColor} 100%)`,
                }}
            />

            <div
                className="absolute left-1/2 top-6 h-28 w-[70%] -translate-x-1/2 rounded-full blur-3xl"
                style={{ background: glowColor }}
            />

            <svg
                className="absolute bottom-[-1px] left-0 h-24 w-full"
                viewBox="0 0 1440 160"
                preserveAspectRatio="none"
            >
                <path
                    fill={toColor}
                    opacity="0.45"
                    d="M0,95 C160,35 290,120 455,80 C650,32 760,120 940,78 C1120,35 1260,65 1440,22 L1440,160 L0,160 Z"
                />
                <path
                    fill={toColor}
                    d="M0,115 C190,70 320,145 520,105 C720,65 855,120 1040,92 C1225,65 1330,82 1440,50 L1440,160 L0,160 Z"
                />
            </svg>
        </div>
    );
}