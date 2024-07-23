import { cn } from "@/lib/utils";

import localFont from "next/font/local";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Services from "@/components/Services";
import { TracingBeamDemo } from "@/components/Specials";
import Packages from "@/components/Packages";
import { InfiniteMovingCardsDemo } from "@/components/Testimonials";
import { FloatingNavDemo } from "@/components/navbar";
import AccordionSection from "@/components/Accordion";

const myFont = localFont({
  src: "./quayside-font.otf",
  display: "swap",
});
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <Hero />
      <div className="flex flex-col w-full lg:px-48 md:px-28 px-4">
        <About />
        <Services />
        <section className="w-full h-screen justify-center flex flex-col items-center gap-5">
          <h2 className={cn(myFont.className, "text-5xl")}>Packages</h2>
          <p className="text-lg">
            Here is the available packages I offer to satisfy your car&apos;s
            needs.
          </p>
          <Packages />
        </section>
        <section
          id="specials"
          className="my-16 w-full flex flex-col items-center gap-5"
        >
          <h2 className={cn(myFont.className, "text-5xl")}>Special Offers</h2>
          <p>
            Are you an educator, an athlete, or bought a new vehicle? At Mr. O
            Fresh, I have special offers to show your ride some love and add
            value to you, the customer.
          </p>
          <span className="font-medium">
            Disclaimer: Verification (work/member ID, proof of purchase, etc.)
            is required for offer to go into effect. Discounts CANNOT EXCEED
            PAST 20%. Please call for any questions!
          </span>
          <TracingBeamDemo />
        </section>
      </div>
      <AccordionSection />
      <section className="my-5 z-10 overflow-hidden w-full flex flex-col items-center gap-5">
        <InfiniteMovingCardsDemo />
      </section>
    </main>
  );
}
