import { Navbar } from "@/components/Navbar";
import { SectionDivider } from "@/components/SectionDivider";
import { HeroSection } from "@/sections/HeroSection";
import { HighlightsSection } from "@/sections/HighlightsSection";
import { MenuSection } from "@/sections/MenuSection";
import { GallerySection } from "@/sections/GallerySection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />

      <HighlightsSection />

      <SectionDivider from="light" to="dark" />
      <MenuSection />

      <SectionDivider from="dark" to="light" />
      <GallerySection />

      <ContactSection />

      <SectionDivider from="light" to="dark" />
      <Footer />

    </main>
  );
}