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
      <div className="flex flex-col w-full lg:px-40 md:px-10 px-4">
        {/* <About /> */}
        <Services />
        <section className="w-full justify-center flex flex-col my-10 items-center gap-5">
          <h2 className={cn(myFont.className, "text-5xl")}>
            Detailing Packages Tailored to Your Needs
          </h2>
          <p className="text-lg">
            Choose from a variety of detailing packages that suit your
            vehicle&apos;s specific needs.
          </p>
          <Packages />
        </section>
        <section
          id="specials"
          className="my-16 mt-40 w-full flex flex-col items-center gap-5"
        >
          <h2 className={cn(myFont.className, "text-5xl")}>Special Offers</h2>
          <p>
            Whether you&apos;re an educator, athlete, or new car owner, we have
            special discounts designed just for you.
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
