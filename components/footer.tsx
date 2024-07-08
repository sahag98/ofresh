// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "./ui/button";

// Icon imports
import { Github, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { FaPinterest } from "react-icons/fa";
// Local component imports

// Asset imports
import Logo from "@/public/logo-nobg.png";

export default function Footer() {
  return (
    <footer className="bg-[#00232D] lg:px-48 md:px-16 px-4 py-5">
      <div className="space-y-3">
        <div className="grid gap-12  md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="not-prose flex flex-col gap-3">
            <Link href="/">
              <h3 className="sr-only">Mr. O Fresh</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 dark:invert"
              ></Image>
            </Link>
            <p className="text-white text-lg">
              <Balancer>
                From Filth to Fresh, we specialize in all kinds of car detailing
                services.
              </Balancer>
            </p>
            <Link href="/book">
              <Button className="text-base text-foreground">Book Now</Button>
            </Link>
          </div>
          <div className="flex flex-col text-white gap-2">
            <h2 className="mb-2">Links</h2>
            <Link
              className="font-medium underline underline-offset-2 text-lg"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-medium underline underline-offset-2 text-lg"
              href="#services"
            >
              Services
            </Link>
            <Link
              className="font-medium underline underline-offset-2 text-lg"
              href="#specials"
            >
              Specials
            </Link>
            <Link
              className="font-medium underline underline-offset-2 text-lg"
              href="/gallery"
            >
              Gallery
            </Link>
          </div>
          <div className="flex flex-col text-white gap-2">
            <h5 className="mb-2">Business Hours</h5>
            <span className="font-medium">T-TH-F : 9am - 6pm</span>
            <span className="font-medium">W : 9am - 4pm</span>
            <span className="font-medium">SAT : 9am - 3pm</span>
            <span>$60 fee for booking on off days (Sun and Mon)</span>
          </div>
          <div className="flex flex-col text-white gap-2">
            <h5 className="font-bold">Service Areas</h5>
            <p>
              Anywhere within LA County (and surrounding borders) including:
            </p>
            <ul className="space-y-2 ">
              <li>- Antelope Valley (Lancaster, Palmdale, etc.)</li>
              <li>- LA (Inglewood, Torrence, Longbeach)</li>
              <li>- Hollywood (Santa Monica, UCLA, Beverly Hills)</li>
              <li>- San Fernando Valley (Northridge, Burbank, Glendale)</li>
              <li>- Santa Clarita (Valencia, New Hall, Saugus)</li>
            </ul>
          </div>
        </div>
        <div className="not-prose pt-5 flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
          <div className="flex gap-2">
            <Link target="_blank" href={"https://www.instagram.com/mrofresh7/"}>
              <Button size="icon">
                <Instagram className="text-foreground" />
              </Button>
            </Link>
            <Link href={""}>
              <Button size="icon">
                <Image
                  src={"/tiktok-icon.png"}
                  className="w-5 h-5"
                  alt="tiktok icon"
                  width={512}
                  height={512}
                />
              </Button>
            </Link>
            <Link
              target="_blank"
              href={"https://www.facebook.com/profile.php?id=61559887131693"}
            >
              <Button size="icon">
                <Facebook className="text-foreground" />
              </Button>
            </Link>
            <Link href={"/"}>
              <Button size="icon">
                <Youtube className="text-foreground" />
              </Button>
            </Link>
            <Link href={""}>
              <Button size="icon">
                <FaPinterest size={25} className="text-foreground" />
              </Button>
            </Link>
          </div>
          <p className="text-muted-foreground">
            © mrofresh . All rights reserved. 2024-present.
          </p>
        </div>
      </div>
    </footer>
  );
}
