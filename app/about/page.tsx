import React from "react";

import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
const myFont = localFont({
  src: "../quayside-font.otf",
  display: "swap",
});

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col py-10 lg:px-40 md:px-10 px-4">
      <Link href={"/"}>
        <Button variant={"link"} className="flex items-center gap-3">
          <ArrowLeft />
          Back to Home
        </Button>
      </Link>
      <h1 className={cn(myFont.className, "text-5xl text-center")}>About</h1>
      <div className="flex lg:flex-row flex-col-reverse items-center gap-5 my-10 justify-between">
        <section className="lg:w-1/2 w-full space-y-1">
          <h2 className="font-semibold text-2xl">Hi! I&apos;m Osei Mireku,</h2>
          <p>
            the man behind Mr. O Fresh. I&apos;ve started this business with a
            few things in mind: showing love to the rides of the people, serving
            people by adding value to them, and eventually looking into ways to
            invest into communities.
          </p>
          <p>
            All of this by providing quality service for car enthusiasts, the
            everyday joe looking to care for their ride, community leaders who
            don&apos;t have the time to clean theirs, and influentials who want
            their investment to last, at the convenience of showing up to your
            home or work.
          </p>
        </section>
        <Image
          alt="image of owner"
          placeholder="blur"
          blurDataURL="/about-blur.jpg"
          src={"/about.jpeg"}
          width={5101}
          height={3301}
          className="lg:w-1/2 aspect-square object-cover w-full rounded-lg"
        />
      </div>
      <p className={cn(myFont.className, "text-5xl text-center")}>
        From Filth to FRESH, that&apos;s where Mr. O Fresh Stands.
      </p>
    </div>
  );
};

export default AboutPage;
