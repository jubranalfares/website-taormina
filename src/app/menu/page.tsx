import { MenuSection } from "@/sections/MenuSection";
import { BottomBar } from "@/components/BottomBar";

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-[#0f0c09]">
            <MenuSection compact />
            <BottomBar />
        </main>
    );
}