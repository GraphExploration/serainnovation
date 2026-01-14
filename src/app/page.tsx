import Nav from "@/components/nav";
import DealSenseHero from "@/components/sections/Product"; // Ensure this is renamed or updated
import FeatureSection from "@/components/sections/ServiceSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import ContactSection from "@/components/sections/ContactSection";
import CareerSection from "@/components/sections/CareerSection";
import SampleReport from "@/components/sections/SampleReport";


export default function Home() {
  return (
    <main>
      <Nav />
      <DealSenseHero />
      <FeatureSection />
      <SampleReport /> 
      <HowItWorks />
      <Pricing />
      <CareerSection />
      <ContactSection />
      
      <footer className="py-10 bg-slate-900 border-t border-slate-800 text-center text-slate-500 text-sm">
        © 2026 SERA Innovation | Built with AI Intelligence
      </footer>
    </main>
  );
}
