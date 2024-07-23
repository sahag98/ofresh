import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <BentoGrid className="w-full">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          link={item.link}
          className={i === 3 || i === 6 ? "md:col-span-1" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ image }: { image: string }) => (
  <Image
    src={image}
    width={1366}
    height={768}
    alt="image of car"
    className="object-cover w-full h-full rounded-xl"
  />
  // <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Full on Detail (inside out)",
    description:
      "Does your ride need some TLC? Going on a business trip? Got a weekend date? Great! Our auto detailing packages will keep your ride looking fresh that include a foam bath, wax, interior cleaning, and more. Your date, business, and ride will thank you kindly.",
    header: <Skeleton image="/detailing.jpg" />,
    link: "detail",
  },
  {
    title: "Maintenance",
    description:
      "From clay treatment to undercarriage wash, engine bay cleaning to headlight restoration, iron removal to gum and tar removal, we'll have your car looking and feeling like new in no time.",
    header: <Skeleton image="/engine-bay.jpeg" />,
    link: "maintenance",
  },
  {
    title: "Upholstery",
    description:
      "Maintain your car's fresh look and smell by regularly vacuuming and using fabric protection for upholstery. Remove pet hair with the right tools, treat leather with care, and protect it from wear. Keep the dashboard and console clean with a quick wipe down.",
    header: <Skeleton image="/upholstery.jpeg" />,
    link: "upholstery",
  },
  {
    title: "Sanitation",
    description:
      "Looking for a professional and reliable cleaning service for your vehicle? Look no further than our team! We offer a wide range of services, including sanitation with extraction, steam cleaning, mold removal, ozone treatment, biohazard treatment, seat and carpet shampoo, baby and toddler seats, headliner cleaning, and odor elimination.",
    header: <Skeleton image="/cleaning.webp" />,
    link: "sanitation",
  },
];
