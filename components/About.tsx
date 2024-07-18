import { cn } from "@/lib/utils";
import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const myFont = localFont({
  src: "../app/quayside-font.otf",
  display: "swap",
});

const About = () => {
  return (
    <div className="flex my-10 items-center h-screen py-24 justify-center flex-col gap-5 w-full">
      <Image
        alt="logo"
        className="md:w-1/3 w-3/4"
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
        I specialize in all aspects of car detailing
      </h2>
      <p className="text-center lg:text-xl md:text-lg text-base">
        Detailing rides, serving the people, investing into communities!
      </p>
      <Link href={"/about"}>
        <Button className="text-lg" variant={"link"}>
          Learn More
        </Button>
      </Link>
    </div>
  );
};

export default About;
