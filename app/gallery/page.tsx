import { PrallaxImages } from "@/components/Parallax";
import React from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Slider } from "@/components/Slider";

const myFont = localFont({
  src: "../quayside-font.otf",
  display: "swap",
});

const GalleryPage = () => {
  const beforeOutsideImage = "/outside-before.JPG";
  const afterOutsideImage = "/outside-after.PNG";
  const beforeInsideImage = "/inside-before.JPG";
  const afterInsideImage = "/inside-after.jpg";
  return (
    <main className="min-h-screen lg:px-48 space-y-5 md:px-16 py-10 px-4">
      <Link href={"/"}>
        <Button className="flex items-center gap-3">
          <ArrowLeft />
          Back to Home
        </Button>
      </Link>
      <h1 className={cn(myFont.className, "text-center text-6xl")}>Gallery</h1>

      <h2 className="text-center font-medium text-xl">
        Outside Before & After
      </h2>
      <Slider
        beforeOutsideImage={beforeOutsideImage}
        afterOutsideImage={afterOutsideImage}
      />
      <h2 className="text-center font-medium text-xl">Inside Before & After</h2>
      <Slider
        beforeOutsideImage={beforeInsideImage}
        afterOutsideImage={afterInsideImage}
      />
      <PrallaxImages />
    </main>
  );
};

export default GalleryPage;
