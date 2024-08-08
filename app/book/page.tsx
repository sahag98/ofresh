import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import BookForm from "@/components/BookForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const myFont = localFont({
  src: "../quayside-font.otf",
  display: "swap",
});

const BookingPage = () => {
  return (
    <div className="min-h-screen lg:px-40 md:px-10 py-5 px-4 space-y-10 w-full">
      <Link href={"/"}>
        <Button variant={"link"} className="flex items-center gap-3">
          <ArrowLeft />
          Back to Home
        </Button>
      </Link>
      <h1 className={cn("font-bold text-center text-7xl", myFont.className)}>
        Book
      </h1>
      <BookForm />
    </div>
  );
};

export default BookingPage;
