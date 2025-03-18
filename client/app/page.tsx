import HeroSection from "@/components/home/hero";
import HowItWorks from "@/components/home/howItWorks";

export default function Home() {
  return (
    <section className="py-8 md:space-y-10 md:py-10">
      <HeroSection />
      <HowItWorks />
    </section>
  );
}
