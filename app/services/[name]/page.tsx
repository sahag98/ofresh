import { services } from "@/data/services";
import React from "react";

import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
const myFont = localFont({
  src: "../../quayside-font.otf",
  display: "swap",
});

const ServicePage = ({ params: { name } }: { params: { name: string } }) => {
  const service = services.find((service) => service.link === name);

  if (!service) {
    throw new Error("You shouldn't be here...");
  }
  return (
    <div className="flex flex-col gap-5 min-h-screen py-10 lg:px-40 md:px-10 px-4">
      <Link href={"/"}>
        <Button variant={"link"} className="flex items-center gap-3">
          <ArrowLeft />
          Back to Home
        </Button>
      </Link>
      <div className="flex flex-col gap-3 w-full">
        <h1 className={cn(myFont.className, "text-5xl")}>{service?.title}</h1>
        <h2 className="font-semibold text-xl">{service?.question}</h2>
        <p className="mb-5">{service?.answer}</p>
        <h3 className="font-medium text-lg">1. {service.subheading1}</h3>
        <p>{service.subheading1description}</p>
        <ul className="list-disc">
          {service.benefits?.map((benefit) => (
            <li key={benefit.title}>
              <h4 className="font-medium">{benefit.title}</h4>
              <p>{benefit.description}</p>
            </li>
          ))}
        </ul>
        {service.subheading2 && (
          <>
            <h3 className="font-medium text-lg">2. {service.subheading2}</h3>
            <p>{service.subheading2description}</p>
          </>
        )}

        <ul className="list-disc">
          {service.ways?.map((way) => (
            <li key={way.title}>
              <h4 className="font-medium">{way.title}</h4>
              <p>{way.description}</p>
            </li>
          ))}
        </ul>
        {service.subheading3 && (
          <>
            <h3 className="font-medium text-lg">3. {service.subheading3}</h3>
            <p>{service.subheading3description}</p>
          </>
        )}

        <ul className="list-disc">
          {service.more?.map((more) => (
            <li key={more.title}>
              <h4 className="font-medium">{more.title}</h4>
              <p>{more.description}</p>
            </li>
          ))}
        </ul>
        {service.subheading4 && (
          <>
            <h3 className="font-medium text-lg">4. {service.subheading4}</h3>
            <p>{service.subheading4description}</p>
          </>
        )}

        <ul className="list-disc">
          {service.more1?.map((more) => (
            <li key={more.title}>
              <h4 className="font-medium">{more.title}</h4>
              <p>{more.description}</p>
            </li>
          ))}
        </ul>
        {service.subheading5 && (
          <>
            <h3 className="font-medium text-lg">5. {service.subheading5}</h3>
            <p>{service.subheading5description}</p>
          </>
        )}

        <ul className="list-disc">
          {service.more2?.map((more) => (
            <li key={more.title}>
              <h4 className="font-medium">{more.title}</h4>
              <p>{more.description}</p>
            </li>
          ))}
        </ul>
        <h2 className="font-semibold mt-5 text-xl">Process</h2>
        <ul className="list-disc">
          {service.process.map((process) => (
            <li key={process.title}>
              <h4 className="font-medium">{process.title}</h4>
              <p>{process.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicePage;
