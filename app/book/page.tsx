import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import BookForm from "@/components/BookForm";

const myFont = localFont({
  src: "../quayside-font.otf",
  display: "swap",
});

const BookingPage = () => {
  return (
    <div className="min-h-screen lg:px-48 md:px-28 py-5 px-4 space-y-10 w-full">
      <h1 className={cn("font-bold text-center text-7xl", myFont.className)}>
        Book
      </h1>
      <BookForm />
    </div>
  );
};

export default BookingPage;
