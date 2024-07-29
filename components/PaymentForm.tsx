//@ts-nocheck
"use client";
import React, { LegacyRef, useRef, useState } from "react";
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
import { FaTruckMonster } from "react-icons/fa6";
import { IoCarSportSharp } from "react-icons/io5";
import { HandleCheckout } from "@/actions/checkouAction";

import { InlineWidget } from "react-calendly";
import { generateUUID } from "three/src/math/MathUtils.js";
import Loading from "./Loading";
import { Label } from "./ui/label";
const formSchema = z.object({
  car_type: z.enum(["Sedan", "Midsize", "SUV/Truck"], {
    required_error: "You need to select a car type.",
  }),
  package_type: z.string(),
  // first_name: z.string().min(2).max(50),
  // last_name: z.string().min(2).max(50),
  // email: z.string().email(),
  // phone_number: z.string().min(5).max(20),
});

const PaymentForm = ({ accessCode }) => {
  const [selectedCarType, setSelectedCarType] = useState("Sedan");
  const [isLoading, setIsLoading] = useState(false);
  const dateRef = useRef<LegacyRef<InlineWidget> | undefined>();
  const [selectedDate, setSelectedDate] = useState<Date | null>();
  const [selectedPackage, setSelectedPackage] = useState("O'TRA FRESH");

  const [paymentAccessCode, setPaymentAccessCode] = useState("");

  console.log("date ref: ", dateRef.current);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      car_type: "Sedan",
      package_type: "O'TRA FRESH",
      // first_name: "",
      // last_name: "",
      // email: "",
      // phone_number: "",
    },
  });

  const packages = [
    {
      title: "O'TRA Interior",
      description: "Only Interior detailing",
      services: ["Full vacuum", "full wipedown", "Full shampoo", "Windows"],
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
      description: "All interior and exterior services are included.",
      services: [
        "Full wipedown",
        "Full shampoo",
        "Door/Trunk jabs",
        "Bug Removal",
        "Clay treatment",
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
          carType: "SUV/Trucks",
          price: 400,
        },
      ],
    },
    {
      title: "O'TRA Exterior",
      description: "Only Exterior detailing",
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
      description: "Includes coupes, convertibles, sports cars",
      icon: <IoCarSportSharp size={50} />,
    },
    {
      title: "Midsize",
      description: "Includes Jeeps, Broncos",
      icon: <Car size={50} />,
    },
    {
      title: "SUV/Truck",
      description: "Any 3rd road SUVs and any trucks",
      icon: <FaTruckMonster size={50} />,
    },
  ];

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    console.log("form: ", values);
    const foundPackage = packages.find(
      (value) => value.title === selectedPackage
    );

    const foundPrice = foundPackage?.prices.find(
      (value) => value.carType === selectedCarType
    );
    console.log("found: ", foundPrice?.price);

    const order = {
      order_id: generateUUID(),
      car_type: selectedCarType,
      package_type: foundPackage?.title,
      price: foundPrice?.price,
      // date: selectedDate?.toDateString(),
    };

    try {
      setIsLoading(true);
      await HandleCheckout({ order });
    } catch (error) {
    } finally {
      setIsLoading(false);
    }

    form.reset();
    setSelectedDate(null);
  }

  if (paymentAccessCode !== accessCode) {
    return (
      <div className="flex-1 flex flex-col gap-3 justify-center items-center ">
        <Label className="text-lg" htmlFor="code">
          Enter access code:
        </Label>
        <Input
          value={paymentAccessCode}
          onChange={(e) => setPaymentAccessCode(e.target.value)}
          name="code"
          placeholder=""
        />
      </div>
    );
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
                      <div key={pIdx}>
                        {selectedCarType === price.carType && (
                          <span className="text-2xl font-bold">
                            ${price.price}
                          </span>
                        )}
                      </div>
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
          {/* <div className="space-y-2">
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
              name="last_name"
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
              name="email"
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
              name="phone_number"
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
          </div> */}
          <Button
            disabled={!selectedCarType && !selectedPackage ? true : false}
            className="text-base text-foreground font-bold"
            size={"lg"}
            type="submit"
          >
            {isLoading ? "Please wait..." : "Proceed to Payment"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PaymentForm;
