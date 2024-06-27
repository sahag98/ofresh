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
  const content = [
    {
      title: "Full on Detailing",
      description:
        "Looking to get a nice detail for your car with some TLC? Great! At Mr. O Fresh, our auto detailing packages are a great way to keep your car looking brand new that include a range of services from exterior wash, waxing, interior cleaning, and more. Choose the package that suits your needs and let us care of the rest. Contact us today to schedule an appointment.",
      content: (
        <div className="h-full w-full bg-red-300 flex items-center justify-center">
          <Image
            src="/detailing.jpg"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Paint Correction",
      description:
        "Introducing our paint protection service! Say goodbye to scratches, swirls, holograms, pigtail swirls, and scuffs on your car's paint. Our team of experts will make your car look brand new again. Trust us to protect your investment and keep your car looking its best.",
      content: (
        <div className="h-full w-full  flex items-center justify-center">
          <Image
            src="/correction.jpeg"
            width={889}
            height={550}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Ceramic Coating",
      description:
        "Ceramic coating is a popular solution for protecting your car's paint job. It creates a durable layer that can withstand harsh weather conditions and everyday wear and tear. With ceramic, your car will maintain its shine and brand new for years to come. Contact us today to learn more about our coating services.",
      content: (
        <div className="h-full w-full  flex items-center justify-center">
          <Image
            src="/ceramic.jpeg"
            width={1366}
            height={768}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Maintenance",
      description:
        "Is your car in need of some TLC? Our maintenance services have got you covered. From clay treatment to undercarriage wash, engine bay cleaning to headlight restoration, iron removal to gum and tar removal, we'll have your car looking and feeling like new in no time. Trust us to take care of your ride.",
      content: (
        <div className="h-full w-full  flex items-center justify-center">
          <Image
            src="/engine-bay.jpeg"
            width={4032}
            height={3024}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];
  return (
    <section className="my-10 no-scrollbar  w-full flex flex-col items-center gap-5">
      <h2 className={cn(myFont.className, "text-5xl")}>Services</h2>
      <BentoGridDemo />
      {/* <StickyScroll content={content} /> */}
    </section>
  );
};

export default Services;
