"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import {
  Book,
  Camera,
  Cog,
  Home,
  Images,
  SplitSquareVertical,
  Zap,
} from "lucide-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-6 w-h-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "/#services",
      icon: <Cog className="h-6 w-h-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Specials",
      link: "/#specials",
      icon: <Zap className="h-6 w-h-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Gallery",
      link: "/gallery",
      icon: <Images className="h-6 w-h-6 text-neutral-500 dark:text-white" />,
    },
    // {
    //   name: "Book Now",
    //   link: "/book",
    //   icon: (
    //     <Book className="h-4 w-4 text-neutral-500 dark:text-white" />
    //   ),
    // },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
