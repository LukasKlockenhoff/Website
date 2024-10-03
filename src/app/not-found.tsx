import { twMerge } from "tailwind-merge";
import Textstyles from "@/utils/textstyles";
import { useEffect, useState } from "react";
import { SpotlightCirlce } from "@/components/not-found/spotlights-cirlce";
import { siteConfig } from "@/siteconfig";

export default function NotFound() {
  return (
    <div
      className={
        "w-full h-full justify-center dark:bg-background bg-white overflow-x-clip lg:cursor-none"
      }
    >
      <div
        className={
          "w-[90%] h-full sm:w-2/3 2xl:w-2/3 xl:w-[80%] mx-auto flex flex-col justify-center my-3 lg:!cursor-none relative"
        }
      >
        <SpotlightCirlce position="fixed" />
        <div
          className={twMerge(
            "max-w-[600px] justify-center mx-auto w-full lg:cursor-none z-10",
          )}
        >
          <div
            className={twMerge(
              Textstyles.SerifHeader,
              "!text-white dark:!text-background",
            )}
          >
            This page does not exists (yet)
          </div>
          <div
            className={twMerge(
              Textstyles.BigHint,
              "!text-white dark:!text-background",
            )}
          >
            {siteConfig.pages.notFound.text}
          </div>
        </div>
      </div>
      <SpotlightCirlce position="absolute" />
    </div>
  );
}
