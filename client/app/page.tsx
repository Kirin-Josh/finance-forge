import CallToAction from "@/components/home/CallToAction";
import FeatureSection from "@/components/home/Feature";
import HeroSection from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <section className="py-8 md:space-y-[10rem] md:p-0 overflow-hidden">
      <HeroSection />
      <HowItWorks />
      <FeatureSection />
      <CallToAction />
    </section>
  );
}
