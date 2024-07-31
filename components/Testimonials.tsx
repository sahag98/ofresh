"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex z-20 flex-col antialiased items-center justify-center relative overflow-hidden overflow-x-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I’m here to tell you my gold SUV 🚙 looked brand new after several hours of hard labor it was filthy the inside hadn’t been cleaned other than typical vacuuming for years. My grandkids have not been easy on it but now it truly looks new. I love it and no one is allowed to eat in It any longer. Thank you so much you did an amazing job! I highly recommend Mr. O Fresh for your car detailing needs & his prices were competitive and more importantly he was willing to do it lol 🤣",
    name: "Katie MacKenzie Keir",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "I’m here to tell you my gold SUV 🚙 looked brand new after several hours of hard labor it was filthy the inside hadn’t been cleaned other than typical vacuuming for years. My grandkids have not been easy on it but now it truly looks new. I love it and no one is allowed to eat in It any longer. Thank you so much you did an amazing job! I highly recommend Mr. O Fresh for your car detailing needs & his prices were competitive and more importantly he was willing to do it lol 🤣",
    name: "Katie MacKenzie Keir",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "I’m here to tell you my gold SUV 🚙 looked brand new after several hours of hard labor it was filthy the inside hadn’t been cleaned other than typical vacuuming for years. My grandkids have not been easy on it but now it truly looks new. I love it and no one is allowed to eat in It any longer. Thank you so much you did an amazing job! I highly recommend Mr. O Fresh for your car detailing needs & his prices were competitive and more importantly he was willing to do it lol 🤣",
    name: "Katie MacKenzie Keir",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "I’m here to tell you my gold SUV 🚙 looked brand new after several hours of hard labor it was filthy the inside hadn’t been cleaned other than typical vacuuming for years. My grandkids have not been easy on it but now it truly looks new. I love it and no one is allowed to eat in It any longer. Thank you so much you did an amazing job! I highly recommend Mr. O Fresh for your car detailing needs & his prices were competitive and more importantly he was willing to do it lol 🤣",
    name: "Katie MacKenzie Keir",
    title: "A Tale of Two Cities",
  },
];
