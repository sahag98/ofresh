import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Calendar, Phone } from "lucide-react";
import Link from "next/link";

const myFont = localFont({
  src: "../app/quayside-font.otf",
  display: "swap",
});

const Hero = () => {
  return (
    <section className="flex  relative flex-col bg-primary bg-hero-img w-full min-h-screen items-center justify-center ">
      <div className="absolute inset-0 z-10 bg-black opacity-80"></div>
      <div className="flex flex-col z-30 items-center gap-3 justify-center">
        <h1
          className={cn(
            myFont.className,
            "lg:text-8xl md:text-7xl text-6xl rounded-md px-4 text-primary "
          )}
        >
          Mr. O Fresh
        </h1>
        {/* <TextGenerateEffect
          className="font-normal text-center text-base"
          words="From Filth to Fresh, we specialize in all kinds of car detailing services."
        /> */}
        <p className="text-white/70 text-center w-4/5 lg:w-full lg:text-lg">
          From <b className="text-white">Filth</b> to
          <b className="text-white"> Fresh</b>, we specialize in all kinds of
          car detailing services.
        </p>
        <section className="flex lg:flex-row lg:px-0 px-4 mt-5 flex-col lg:w-fit w-full items-center gap-3">
          <Link href={"/book"}>
          <button className="relative inline-flex h-12 lg:w-fit w-3/4 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#04475a_0%,#00B4E6_50%,#04475a_100%)]" />

            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 z-10 text-base font-bold gap-3 text-white backdrop-blur-3xl">
              <Calendar />
              Book Now
            </span>
          </button>
          </Link>
          <button className="relative lg:w-fit w-3/4  inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-primary px-3 py-1 text-base gap-3 font-bold text-foreground backdrop-blur-3xl">
              <Phone />
              FREE QUOTE
            </span>
          </button>
        </section>

        {/* <Button
          size={"lg"}
          className="bg-primary text-base font-bold text-foreground "
        >
          Book Now
        </Button> */}
      </div>
      <p
        className={cn(
          "absolute bottom-20 right-5 z-30 text-white text-xl",
          myFont.className
        )}
      >
        2 Corinthians 5:17
      </p>
      <div className="w-full flex items-center justify-center py-5 absolute bottom-0 z-30 bg-primary">
        <h2 className="font-semibold text-sm underline cursor-pointer">
          Special offers for teachers, delivery drivers and more!
        </h2>
      </div>
    </section>
  );
};

export default Hero;
