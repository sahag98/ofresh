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
import Loading from "./Loading";

const BookForm = () => {
  const dateRef = useRef<LegacyRef<InlineWidget> | undefined>();

  return (
    <div className="flex flex-col">
      <h2 className="font-medium text-xl text-center">
        Please select the service you are interested in.
      </h2>
      <InlineWidget
        ref={dateRef}
        pageSettings={{
          primaryColor: "#00B4E6",
          hideGdprBanner: true,
          hideLandingPageDetails: true,
        }}
        url="https://calendly.com/arzsahag"
      />
    </div>
  );
};

export default BookForm;
