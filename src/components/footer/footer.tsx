"use client";
import React from "react";
import TextStyles from "@/utils/textstyles";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Contact",
    url: "mailto:l@lukaskl.com",
  },
  {
    name: "Legal",
    url: "/legal",
  },
];

export default function Footer() {
  const currentPath = usePathname();
  return (
    <div className="w-full md:flex-row items-center mx-auto min-h-fit md:justify-between px-24 bg-white dark:bg-background justify-end sm:pb-0">
      <div
        className={
          "flex flex-col-reverse max-w-[600px] max-h-fit py-4 w-[90%] sm:w-2/3 2xl:w-2/3 xl:w-[80%] items-center mx-auto gap-x-6"
        }
      >
        <div className="flex gap-x-5">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.name}
              className={twMerge(TextStyles.LinkText, "!text-lg")}
            >
              {link.name}
            </Link>
          ))}
        </div>
        ̦
        <div
          className={twMerge(
            "flex w-full text-center md:text-center",
            TextStyles.CursiveHint,
          )}
        >
          “Dwell on the beauty of life. Watch the stars, and see yourself
          running with them.”
        </div>
      </div>
    </div>
  );
}
