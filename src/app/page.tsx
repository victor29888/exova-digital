import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <Pricing />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
