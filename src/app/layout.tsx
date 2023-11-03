import type { Metadata } from "next";
import { Michroma } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Textstyles from "@/utils/textstyles";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const michroma = Michroma({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-michroma",
});

export const metadata: Metadata = {
  title: "Lukas Klockenhoff",
  description: "Created with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={twMerge("h-full w-full overflow-y-scroll", michroma.className)}
    >
      <body className={"h-full w-full"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
