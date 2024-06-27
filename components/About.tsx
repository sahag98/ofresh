import { cn } from "@/lib/utils";
import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { Button } from "./ui/button";

const myFont = localFont({
  src: "../app/quayside-font.otf",
  display: "swap",
});

const About = () => {
  return (
    <div className="flex my-10 items-center py-24 justify-center flex-col gap-5 w-full">
      <Image
        alt="logo"
        className="lg:w-1/4 md:w-1/4 w-1/2"
        src={"/logo-nobg.png"}
        width={612}
        height={402}
      />
      <h2
        className={cn(
          myFont.className,
          "lg:text-8xl md:text-6xl text-4xl text-center"
        )}
      >
        We specialise in all aspects of car detailing
      </h2>
      <p className="text-center">
        Making sure everything is done properly inside and out. Fulfilling
        clients needs as needed.
      </p>
    </div>
  );
};

export default About;
