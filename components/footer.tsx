import { Facebook, Globe, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className="w-full h-72 bg-secondary mt-20 py-5 lg:px-48  md:px-10 px-4 justify-center lg:justify-normal md:justify-normal border-t gap-5 lg:gap-10 flex flex-wrap lg:flex-col items-start">
      <section>
        <h4 className="font-bold mb-2 ">Social Media Links</h4>
        <ul className="space-y-2">
          <Link
            className="flex gap-2 items-center"
            href={"https://www.instagram.com/mrofresh7/"}
          >
            <Instagram color="#fa7e1e" />
            <span className="text-[13px]">mrofresh7</span>
          </Link>
          <Link
            className="flex gap-2 items-center"
            href={"https://www.facebook.com/profile.php?id=100095148414909"}
          >
            <Facebook color="#316FF6" />
            <span className="text-[13px]">Mr. O Fresh</span>
          </Link>
          <Link
            className="flex gap-2 items-center"
            href={"https://www.youtube.com/channel/UCYLN9KvdXTuTnLFuWlrQGhw"}
          >
            <Youtube color="#FF0000" />
            <span className="text-[13px]">Mr. O Fresh</span>
          </Link>
          <Link
            className="flex gap-2 items-center"
            href={"https://www.tiktok.com/@mrofresh"}
          >
            <Image
              className="w-[22px]"
              alt="tiktok icon"
              src={"/tiktok-icon.png"}
              width={512}
              height={512}
            />
            <span className="text-[13px]">mrofresh</span>
          </Link>
        </ul>
      </section>

      <p className="self-center flex text-center text-lg font-medium">
        @2024 MR O FRESH ALL RIGHTS RESERVED.
      </p>
    </div>
  );
};

export default Footer;
