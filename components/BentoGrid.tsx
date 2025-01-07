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
    width={600}
    height={400}
    alt="image of car"
    className="object-cover w-full h-full rounded-xl"
  />
  // <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Full Service Auto Detailing (Interior & Exterior)",
    description:
      "Need your ride to look its best for a special occasion or everyday use? I provide luxurious foam baths, thorough interior cleaning, and more.",
    header: <Skeleton image="/detailing.jpg" />,
    link: "detail",
  },
  {
    title: "Regular Vehicle Maintenance",
    description:
      "From clay bar treatments to engine bay cleaning and headlight restoration, I provide comprehensive care that keeps your car in peak condition.",
    header: <Skeleton image="/engine-bay.jpg" />,
    link: "maintenance",
  },
  {
    title: "Upholstery",
    description:
      "Keep your vehicle's interior fresh with regular vacuuming and fabric protection. I offer leather treatment, pet hair removal, and dashboard cleaning to maintain a pristine look and feel.",
    header: <Skeleton image="/upholstery.jpg" />,
    link: "upholstery",
  },
  {
    title: "Sanitation",
    description:
      "I offer professional car sanitation services, including steam cleaning, mold removal, biohazard treatments, odor elimination, and more, ensuring your car is spotless and safe.",
    header: <Skeleton image="/sanitation.jpg" />,
    link: "sanitation",
  },
];
