import { cn } from "@/lib/utils";
import { Check, CheckCircle, CircleCheck, Dot } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Packages = () => {
  const items = [
    {
      title: "O'TRA Interior",
      description: "All services are included.",
      services: [
        "Full wipedown",
        "Full steam clean",
        "Full shampoo scents",
        "Oder elimination",
        "Headliner restore",
      ],
      prices: [
        {
          carType: "Sedan",
          price: 160,
        },
        {
          carType: "Midsize",
          price: 185,
        },
        {
          carType: "SUV/Trucks",
          price: 210,
        },
      ],
    },
    {
      title: "O'TRA FRESH",
      description: "All services are included.",
      services: [
        "Full wipedown",
        "Full steam clean",
        "Full shampoo scents",
        "Restoration",
        "Door/trunk treatments",
      ],
      prices: [
        {
          carType: "Sedan",
          price: 300,
        },
        {
          carType: "Midsize",
          price: 350,
        },
        {
          carType: "SUV/Trucks",
          price: 400,
        },
      ],
    },
    {
      title: "O'TRA Exterior",
      description: "All services are included.",
      services: [
        "Foam Bath",
        "Wax",
        "Wheel Shine",
        "Door trunk jambs",
        "Clay treatment",
      ],
      prices: [
        {
          carType: "Sedan",
          price: 140,
        },
        {
          carType: "Midsize",
          price: 165,
        },
        {
          carType: "SUV/Trucks",
          price: 190,
        },
      ],
    },
  ];
  return (
    <div className="grid lg:px-10 lg:grid-cols-3 md:grid-cols-2 w-full gap-8 grid-cols-1">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={cn(
            "border flex items-center flex-col gap-3 justify-center text-foreground rounded-md w-full p-4",
            idx === 1 && "bg-[#00232D] text-white"
          )}
        >
          <h3 className="font-bold">{item.title}</h3>
          <h4 className="font-semibold text-lg">Pricing</h4>
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
                      "text-white/60",
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
          <Button
            size={"lg"}
            className="w-full text-foreground font-bold text-base"
          >
            Book Now
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Packages;
