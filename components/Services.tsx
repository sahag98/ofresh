import { cn } from "@/lib/utils";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import localFont from "next/font/local";
import Image from "next/image";
import { BentoGridDemo } from "./BentoGrid";
const myFont = localFont({
  src: "../app/quayside-font.otf",
  display: "swap",
});

const Services = () => {
  return (
    <section
      id="services"
      className="my-20 no-scrollbar w-full flex flex-col items-center gap-5"
    >
      <h2 className={cn(myFont.className, "text-5xl")}>Services</h2>
      <BentoGridDemo />
      {/* <StickyScroll content={content} /> */}
    </section>
  );
};

export default Services;
