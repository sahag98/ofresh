"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { DialogCloseButton } from "./LearnMoreDialog";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="w-full">
      <div className="w-full antialiased space-y-20 pt-4 relative">
        {dummyContent.map((item, index) => (
          <div
            key={`content-${index}`}
            className={cn(
              "mb-10 items-center  flex gap-10 lg:flex-row flex-col justify-center md:justify-between lg:justify-between",
              index % 2 === 0 && "lg:flex-row-reverse"
            )}
          >
            {/* <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2> */}
            <section className="flex flex-col lg:justify-start gap-3 justify-center items-center">
              <h2 className="lg:text-3xl md:text-2xl text-xl font-bold bg-primary rounded-md w-fit px-4 py-1 mb-4">
                {item.title}
              </h2>
              <p className="text-center w-11/12">{item.description}</p>

              <DialogCloseButton title={item.title} fulllist={item.full_list} />
            </section>

            {item?.image && (
              <Image
                src={item.image}
                alt="blog thumbnail"
                height="1000"
                width="1000"
                className="rounded-lg  lg:w-1/2 lg:h-1/2 w-11/12 h-11/12"
              />
            )}
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "50% Off",
    description: (
      <p className="font-medium text-lg">
        Refer a friend and both get 50% off on selected service for 1 month.
      </p>
    ),
    full_list: (
      <p className="font-medium text-lg">
        Offer covers any services except for paint correction and ceramic
        coating services. Offer is only valid for 1 month from initial service
        date.
      </p>
    ),
    image:
      "https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "20% Off",
    description: (
      <p className="font-medium text-lg">
        Teachers, Community Volunteers, Police Officers
      </p>
    ),
    full_list: (
      <p className="font-medium text-lg">
        Teachers, Community Volunteers, Police Officers, school Employees
        (Cert.) - (Counselors, Admin, Special Ed. Service Providers, etc.),
        Mayors/City Leaders, Community Volunteers, Law Enforcement (Police,
        Sheriff, Highway Patrol, etc.), Military, Retired Workers, Sports/Exotic
        Cars, Trucks.
      </p>
    ),
    image:
      "https://images.pexels.com/photos/5212348/pexels-photo-5212348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "15% Off",
    description: (
      <p className="font-medium text-lg">
        College Students, Librarians, Firefighters
      </p>
    ),
    full_list: (
      <p className="font-medium text-lg">
        College Students, Librarians, Firefighters, Doctors & Medical Workers,
        Gym employees/Personal Trainers,School Employees (Class.) - (Sec/clerks,
        Assistant Teachers, Security, Coaches/Duty Aides, Grounds Workers,
        etc.), Classic Cars, Jeeps, Premium SUVs.
      </p>
    ),
    image:
      "https://images.pexels.com/photos/5538626/pexels-photo-5538626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "10% Off",
    description: (
      <p className="font-medium text-lg">
        Athletes (College) & Coaches (K-12 and College), Gym memberships, City
        Park Employees
      </p>
    ),
    full_list: (
      <p className="font-medium text-lg">
        Athletes (College) & Coaches (K-12 and College), Gym memberships, City
        Park Employees, Lawyers/Attorneys, Federal Office Clerks, Waste
        Management Workers, Federal Credit Union Bankers & Managers,Newly bought
        Vehicles (3-month period), Newly Made Vehicles (5-year cycle) - Ex
        (2024): 2020-2024; Next year Cycle (2025): 2021-2025.
      </p>
    ),
    image:
      "https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "5% Off",
    description: (
      <p className="font-medium text-lg">
        Rideshare Drivers, Retail Workers, Delivery Drivers
      </p>
    ),
    full_list: (
      <p className="font-medium text-lg">
        Rideshare workers/drivers, Retail Workers, Delivery workers/drivers,
        Restaurant Workers, Amusement Park Employees, Bankers & Banking
        Managers.
      </p>
    ),
    image:
      "https://images.pexels.com/photos/6169046/pexels-photo-6169046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
