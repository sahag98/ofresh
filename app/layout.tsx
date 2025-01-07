import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { FloatingNavDemo } from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Mr. O Fresh",
  authors: [
    {
      name: "Mr. O Fresh",
      url: "https://mrofresh.com/",
    },
  ],
  icons: ["/logo-nobg.png"],
  description:
    "I offer top-tier mobile car detailing services to keep your vehicle looking showroom-fresh. Contact now to get started!",
  keywords: [
    "Car detailing near me",
    "Auto detailing service",
    "Professional car detailing",
    "Full-service car detailing",
    "Mobile car detailing",
    "Car cleaning services",
    "Interior car detailing",
    "Exterior car detailing",
    "Paint correction service",
    "Car waxing and polishing",
    "Ceramic coating for cars",
    "Headlight restoration",
    "Auto detailing packages",
  ],
  metadataBase: new URL("https://mrofresh.com/"),
  creator: "Mr. O Fresh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mrofresh.com/",
    title: "From Filth to Fresh",
    description:
      "I offer top-tier mobile car detailing services to keep your vehicle looking showroom-fresh. Contact now to get started!",
    siteName: "Mr. O Fresh",
    images: [
      {
        url: "/detailing.jpeg",
        width: 1200,
        height: 630,
        alt: "Detailing service near you",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" suppressHydrationWarning lang="en">
      <body className={roboto.className}>
        <FloatingNavDemo />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
