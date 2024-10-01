"use client";

import { twMerge } from "tailwind-merge";
import Textstyles from "@/utils/textstyles";
import { useEffect, useState } from "react";
import { SpotlightCirlce } from "@/components/not-found/spotlights-cirlce";

export default function NotFound() {
  return (
    <div className="w-full h-full dark:bg-background bg-white flex justify-center items-center flex-col gap-y-10 absolute lg:cursor-none select-none">
      <h2
        className={twMerge(
          Textstyles.SerifHeader,
          "lg:dark:text-background lg:text-white z-20 dark:text-white text-black",
        )}
      >
        This page does not exist (yet).
      </h2>
      <SpotlightCirlce />
    </div>
  );
}
