import { About } from "@/components/home/About";
import { Automation } from "@/components/home/Automation";
import { Contact } from "@/components/home/Contact";
import { Hero } from "@/components/home/Hero";
import { CareersCta, Quote } from "@/components/home/Highlights";
import { Marquee } from "@/components/home/Marquee";
import { Services } from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Automation />
      <Quote />
      <CareersCta />
      <Contact />
    </>
  );
}
