import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BentoGridDemo } from "@/components/BentoGrid";
const myFont = localFont({
  src: "./quayside-font.otf",
  display: "swap",
});
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <section className="flex px-4 relative flex-col bg-primary bg-hero-img w-full min-h-screen items-center justify-center ">
        <div className="absolute inset-0 z-10 bg-black opacity-85"></div>
        <div className="flex flex-col z-30 items-center gap-3 justify-center">
          <h1
            className={cn(
              myFont.className,
              "lg:text-8xl md:text-7xl text-6xl bg-primary rounded-md px-4 text-foreground "
            )}
          >
            Mr. O Fresh
          </h1>
          {/* <TextGenerateEffect
          className="font-normal text-base"
          words="From Filth to Fresh, we specialize in all kinds of car detailing services."
        /> */}
          <p className="text-white/50 text-lg">
            From <b className="text-white">Filth</b> to
            <b className="text-white">Fresh</b>, we specialize in all kinds of
            car detailing services.
          </p>
          <Button
            size={"lg"}
            className="bg-primary text-base font-bold text-foreground "
          >
            Call for FREE QUOTE
          </Button>
        </div>
        <p
          className={cn(
            "absolute bottom-5 right-5 z-30 text-white text-xl",
            myFont.className
          )}
        >
          2 Corinthians 5:17
        </p>
      </section>
      <section className="my-16 w-full flex flex-col items-center gap-5">
        <h2 className={cn(myFont.className, "text-5xl")}>Services</h2>
        <BentoGridDemo />
      </section>

      {/* <section className="my-16 w-full flex flex-col items-center gap-5">
        <h2 className={cn(myFont.className, "text-5xl")}>Packages</h2>
        <BentoGridDemo />
      </section> */}
    </main>
  );
}
