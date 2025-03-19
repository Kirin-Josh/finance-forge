import AboutSection from "@/components/aboutUs/AboutSection";
import HeroAboutUs from "@/components/aboutUs/Hero";

export default function AboutPage() {
  return (
    <section className="py-8 md:space-y-[10rem] md:py-0">
      <HeroAboutUs />
      <AboutSection />
    </section>
  );
}
