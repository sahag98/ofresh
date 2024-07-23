import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import BookForm from "@/components/BookForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import PaymentForm from "@/components/PaymentForm";

const myFont = localFont({
  src: "../quayside-font.otf",
  display: "swap",
});

const PaymentPage = () => {
  return (
    <div className="min-h-screen lg:px-48 md:px-28 py-5 px-4 space-y-10 w-full">
      <Link href={"/"}>
        <Button className="flex items-center gap-3">
          <ArrowLeft />
          Back to Home
        </Button>
      </Link>
      <h1 className={cn("font-bold text-center text-7xl", myFont.className)}>
        Payment
      </h1>
      <PaymentForm />
    </div>
  );
};

export default PaymentPage;
