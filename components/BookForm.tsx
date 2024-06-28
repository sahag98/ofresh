"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { z } from "zod";
import { Car, CircleCheck, Dot } from "lucide-react";
import { cn } from "@/lib/utils";
import { DatePickerDemo } from "./DatePicker";

const formSchema = z.object({
  car_type: z.enum(["sedan", "midsize", "truck"], {
    required_error: "You need to select a car type.",
  }),
  package_type: z.enum(["fresh", "interior", "exterior"], {
    required_error: "You need to select a package type.",
  }),
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  email: z.string().email(),
  phone_number: z.string().min(5).max(20),
});

const BookForm = () => {
  const [selectedCarType, setSelectedCarType] = useState("Sedan");
  const [selectedPackage, setSelectedPackage] = useState("O'TRA FRESH");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
    },
  });

  const packages = [
    {
      title: "O'TRA Interior",
      description: "Only Interior detailing",
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
          carType: "SUV/Truck",
          price: 210,
        },
      ],
    },
    {
      title: "O'TRA FRESH",
      description: "All interior and exterior services are included.",
      services: [
        "Full wipedown",
        "Full steam clean",
        "Full shampoo scents",
        "Restoration",
        "Door/trunk treatments",
        "And More!",
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
          carType: "SUV/Truck",
          price: 400,
        },
      ],
    },
    {
      title: "O'TRA Exterior",
      description: "Only Exterior detailing",
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
          carType: "SUV/Truck",
          price: 190,
        },
      ],
    },
  ];

  const carTypes = [
    {
      title: "Sedan",
      description: "Write description here",
      icon: <Car size={50} />,
    },
    {
      title: "Midsize",
      description: "Write description here",
      icon: <Car size={50} />,
    },
    {
      title: "SUV/Truck",
      description: "Write description here",
      icon: <Car size={50} />,
    },
  ];

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <h2 className="font-bold text-2xl mb-3">Select a Car Type:</h2>
            <div className="grid md:grid-cols-3 gap-5 grid-cols-1">
              {carTypes.map((car, idx) => (
                <div
                  onClick={() => setSelectedCarType(car.title)}
                  className={cn(
                    "border p-10 cursor-pointer hover:bg-primary hover:text-white transition-all flex flex-col gap-3 items-center justify-center rounded-md",
                    selectedCarType === car.title && "bg-primary text-white"
                  )}
                  key={idx}
                >
                  {car.icon}
                  <h3 className="font-bold text-xl">{car.title}</h3>
                  <p>{car.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl mb-3">Select a Package:</h2>
            <div className="grid md:grid-cols-3 w-full gap-5 grid-cols-1">
              {packages.map((item, idx) => (
                <div
                  onClick={() => setSelectedPackage(item.title)}
                  key={idx}
                  className={cn(
                    "border cursor-pointer flex hover:bg-primary hover:text-white transition-all items-center flex-col gap-3 justify-between text-foreground rounded-md w-full p-4",
                    selectedPackage === item.title && "bg-primary text-white"
                  )}
                >
                  <h3 className="font-bold text-xl">{item.title}</h3>
                  <h3>{item.description}</h3>
                  <h4 className="font-medium text-lg">Pricing</h4>
                  <ul className="w-full list-disc flex flex-col items-center justify-between">
                    {item.prices.map((price, pIdx) => (
                      <>
                        {selectedCarType === price.carType && (
                          <span className="text-2xl font-bold">
                            ${price.price}
                          </span>
                        )}
                      </>
                      // <li
                      //   className="flex items-center justify-between w-full"
                      //   key={pIdx}
                      // >
                      //   <div className="flex items-center">
                      //     <Dot />
                      //     <span>{price.carType}</span>
                      //   </div>
                      //   <span className="font-semibold text-lg">
                      //     ${price.price}
                      //   </span>
                      // </li>
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
                          <span className={cn("")}>{service}</span>
                        </div>
                        {/* <span>${service.}</span> */}
                      </li>
                    ))}
                  </ul>
                  {/* <Button
                  size={"lg"}
                  className="w-full text-foreground font-bold text-base"
                >
                  Select
                </Button> */}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="font-bold text-2xl">
              Pick a date and we will contact you to agree on a set time on that
              day!
            </h2>
            <DatePickerDemo />
          </div>
          <div className="space-y-2">
            <h2 className="font-bold text-2xl">Your Information</h2>
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone number" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="text-base font-bold" size={"lg"} type="submit">
            Proceed to Payment
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BookForm;
