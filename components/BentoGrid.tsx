import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <BentoGrid className="w-full ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
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
    title: "Full on Detail",
    description:
      "Looking to get a nice detail for your car with some TLC? Great! At Mr. O Fresh, our auto detailing packages are a great way to keep your car looking brand new that include a range of services from exterior wash, waxing, interior cleaning, and more. Choose the package that suits your needs and let us care of the rest. Contact us today to schedule an appointment.",
    header: <Skeleton image="/detailing.jpg" />,
  },
  {
    title: "Paint Correction",
    description:
      "Introducing our paint protection service! Say goodbye to scratches, swirls, holograms, pigtail swirls, and scuffs on your car's paint. Our team of experts will make your car look brand new again. Trust us to protect your investment and keep your car looking its best.",
    header: <Skeleton image="/correction.jpeg" />,
  },
  {
    title: "Ceramic Coating",
    description:
      "Ceramic coating is a popular solution for protecting your car's paint job. It creates a durable layer that can withstand harsh weather conditions and everyday wear and tear. With ceramic, your car will maintain its shine and brand new for years to come. Contact us today to learn more about our coating services.",
    header: <Skeleton image="/ceramic.jpeg" />,
  },
  {
    title: "Maintenance",
    description:
      "Is your car in need of some TLC? Our maintenance services have got you covered. From clay treatment to undercarriage wash, engine bay cleaning to headlight restoration, iron removal to gum and tar removal, we'll have your car looking and feeling like new in no time. Trust us to take care of your ride.",
    header: <Skeleton image="/engine-bay.jpeg" />,
  },
  {
    title: "Upholstery",
    description:
      "Maintain your car's fresh look and smell by regularly vacuuming and using fabric protection for upholstery. Remove pet hair with the right tools, treat leather with care, and protect it from wear. Keep the dashboard and console clean with a quick wipe down.",
    header: <Skeleton image="/upholstery.jpeg" />,
  },
  {
    title: "Sanitation",
    description:
      "Looking for a professional and reliable cleaning service for your vehicle? Look no further than our team! We offer a wide range of services, including sanitation with extraction, steam cleaning, mold removal, ozone treatment, biohazard treatment, seat and carpet shampoo, baby and toddler seats, headliner cleaning, and odor elimination.",
    header: <Skeleton image="/cleaning.webp" />,
  },
];
