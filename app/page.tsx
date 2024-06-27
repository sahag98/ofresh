import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BentoGridDemo } from "@/components/BentoGrid";
import { CanvasRevealEffectDemo } from "@/components/CanvasReveal";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Services from "@/components/Services";
import { TracingBeamDemo } from "@/components/Specials";

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

        <section className="my-16 w-full  flex flex-col items-center gap-5">
          <h2 className={cn(myFont.className, "text-5xl")}>Special Offers</h2>
          <TracingBeamDemo />
        </section>
      </div>
      {/* <section className="my-16 w-full flex flex-col items-center gap-5">
        <h2 className={cn(myFont.className, "text-5xl")}>Packages</h2>
        <BentoGridDemo />
      </section> */}
    </main>
  );
}
