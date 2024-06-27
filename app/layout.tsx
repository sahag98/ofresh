import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Mr. O Fresh",
  description:
    "Looking to get a nice detail for your car with some TLC? Great! At Mr. O Fresh, our auto detailing packages are a great way to keep your car looking brand new that include a range of services from exterior wash, waxing, interior cleaning, and more. Choose the package that suits your needs and let us care of the rest. Contact us today to schedule an appointment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
