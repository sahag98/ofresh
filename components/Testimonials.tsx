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
      "My Toyota Camry is a 2019. It was time for me to get it detailed. I had been looking around and found Osei. He did a very nice job. Very conscientious and brought my car back to life. His prices are competitive.  I highly recommend him if you need a detailing.",
    name: "Suzie Blacka",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Very nice wash service. The inside of my car is clean for weeks and the ceramic coating I got is great!",
    name: "Ohema Dua",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "The service was excellent and I was very much satisfied the results of my car.",
    name: "Olabisi Sule-Odu",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Mr. O provided an exceptional car cleaning service, surpassing initial skepticism. He effectively removed stains from the seats and floor, thoroughly washed both the interior and exterior, and left the car smelling fresh. The user was pleasantly surprised to rediscover compartments in the vehicle and plans to continue using Mr. O's biweekly service for maintenance.",
    name: "Victoria Dua",
    title: "A Tale of Two Cities",
  },
];
