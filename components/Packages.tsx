import { cn } from "@/lib/utils";
import { Check, CheckCircle, CircleCheck, Dot, Timer } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Badge } from "./ui/badge";

const Packages = () => {
  const items = [
    {
      title: "Simply Fresh",
      description: "Basic car detailing for a quick and clean look.",
      tier: "Basic",
      services: [
        "Quick wipedown",
        "Quick vacuum",
        "Window cleaning",
        "Foam bath",
        "Wheel cleaning",
      ],
      prices: [
        {
          carType: "Sedan",
          price: 60,
        },
        {
          carType: "Midsize",
          price: 75,
        },
        {
          carType: "SUV/Trucks",
          price: 90,
        },
      ],
      time: "2-3 hrs",
    },
    {
      title: "O So FRESH",
      description: "Standard detailing for a fresh and new look.",
      tier: "Standard",
      services: [
        "Full wipedown",
        "Full shampoo",
        "Window cleaning",
        "Bug Removal",
        "Wheel cleaning",
        "And More!",
      ],
      prices: [
        {
          carType: "Sedan",
          price: 120,
        },
        {
          carType: "Midsize",
          price: 150,
        },
        {
          carType: "SUV/Trucks",
          price: 180,
        },
      ],
      time: "5-6 hrs",
    },
    {
      title: "O'TRA Fresh",
      description: "Premium car detailing for a nice and new look.",
      tier: "Premium",
      services: [
        "Foam Bath",
        "Bug Removal",
        "Wheels w/dressing",
        "Windows",
        "Door/trunk jams",
        "Clay treatment",
      ],
      prices: [
        {
          carType: "Sedan",
          price: 240,
        },
        {
          carType: "Midsize",
          price: 300,
        },
        {
          carType: "SUV/Trucks",
          price: 360,
        },
      ],
      time: "2-3 hrs",
    },
  ];
  return (
    <div className="grid lg:px-10 lg:grid-cols-3 md:grid-cols-2 w-full gap-8 grid-cols-1">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={cn(
            "border flex flex-col gap-3 justify-between hover:scale-105 transition-all duration-300 text-foreground rounded-md w-full p-4",
            idx === 1 && "bg-[#00232D] text-white"
          )}
        >
          <section className="flex w-full items-center justify-between">
            <h3 className="font-bold text-2xl">{item.title}</h3>
            <Badge className="text-base">{item.tier}</Badge>
            {/* <div className="flex items-center justify-between gap-2 rounded-lg">
              <Timer />
              {item.time}
            </div> */}
          </section>

          <p>{item.description}</p>
          <section>
            <h4 className="font-semibold text-lg">Pricing starting at:</h4>
            <ul className="w-full list-disc flex flex-col items-center justify-between">
              {item.prices.map((price, pIdx) => (
                <li
                  className="flex items-center justify-between w-full"
                  key={pIdx}
                >
                  <div className="flex items-center">
                    <Dot />
                    <span>{price.carType}</span>
                  </div>
                  <span className="font-semibold text-lg">${price.price}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="space-y-2">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="w-full mb-5 list-disc flex flex-col gap-3 items-center justify-between">
              {item.services.map((service, sIdx) => (
                <li
                  className="flex items-center justify-between w-full"
                  key={sIdx}
                >
                  <div className="flex items-center gap-2">
                    <CircleCheck />
                    <span
                      className={cn(
                        "text-white",
                        (idx === 0 && "text-foreground") ||
                          (idx === 2 && "text-foreground")
                      )}
                    >
                      {service}
                    </span>
                  </div>
                  {/* <span>${service.}</span> */}
                </li>
              ))}
            </ul>
          </section>
          <Link className="w-full" href={`/book?package_type=${item.title}`}>
            <Button
              size={"lg"}
              className="w-full text-foreground font-bold text-base"
            >
              Book Now
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Packages;
