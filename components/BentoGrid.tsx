import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento";

export function BentoGridDemo() {
  return (
    <BentoGrid className=" w-full">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Full on Detail",
    description: "2 line summary",
    header: <Skeleton />,
  },
  {
    title: "Paint Correction",
    description: "2 line summary",
    header: <Skeleton />,
  },
  {
    title: "Ceramic Coating",
    description: "2 line summary",
    header: <Skeleton />,
  },
  {
    title: "Headlight restoration",
    description: "2 line summary",
    header: <Skeleton />,
  },
  // {
  //   title: "The Pursuit of Knowledge",
  //   description: "Join the quest for understanding and enlightenment.",
  //   header: <Skeleton />,
  // },
  // {
  //   title: "The Joy of Creation",
  //   description: "Experience the thrill of bringing ideas to life.",
  //   header: <Skeleton />,
  // },
  // {
  //   title: "The Spirit of Adventure",
  //   description: "Embark on exciting journeys and thrilling discoveries.",
  //   header: <Skeleton />,
  // },
];
