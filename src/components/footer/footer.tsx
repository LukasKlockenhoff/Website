import React from "react";
import TextStyles from "@/utils/textstyles";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

const links = [
  {
    name: "Contact",
    url: "https://mailto:l@lukaskl.com",
  },
  {
    name: "Privacy",
    url: "/privacy",
  },
  {
    name: "Legal",
    url: "/legal",
  },
];

export default async function Footer() {
  return (
    <div className="w-full md:flex-row items-center mx-auto min-h-fit md:justify-between px-24 bg-white dark:bg-background justify-end sm:pb-0">
      <div
        className={
          "flex flex-col sm:flex-row-reverse 2xl:w-2/3 xl:w-[80%] lg:w-full mx-auto justify-between pb-10"
        }
      >
        <div
          className={
            "flex flex-col sm:flex-row items-center justify-evenly md:gap-x-20 w-full md:w-1/3"
          }
        >
          {links.map((link) => (
            <Button
              asChild
              variant={"ghost"}
              key={link.name}
              className={"w-1/3"}
            >
              <Link
                href={link.url}
                key={link.name}
                className={TextStyles.LinkText}
              >
                {link.name}
              </Link>
            </Button>
          ))}
        </div>
        <div
          className={twMerge(
            "flex w-full md:w-1/3 text-center md:text-left",
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
