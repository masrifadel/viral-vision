import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { MathBand } from "@/components/MathBand";
import { Packages } from "@/components/Packages";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <MathBand />
      <Packages />
      <Process />
      <ContactSection />
    </main>
  );
}
