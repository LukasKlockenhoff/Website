import { twMerge } from "tailwind-merge";
import Textstyles from "@/utils/textstyles";
import { useEffect, useState } from "react";
import { SpotlightCirlce } from "@/components/not-found/spotlights-cirlce";

import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export default function NotFound() {
  return (
    <div
      className={
        "w-full h-full justify-center dark:bg-background bg-white overflow-x-clip !cursor-none"
      }
    >
      <div
        className={
          "w-[90%] h-full sm:w-2/3 2xl:w-2/3 xl:w-[80%] mx-auto flex flex-col justify-center my-3 !cursor-none relative"
        }
      >
        <SpotlightCirlce position="fixed" />
        <div
          className={twMerge(
            "max-w-[600px] justify-center mx-auto w-full !cursor-none select-none z-10",
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
            {lorem.generateParagraphs(7)}
          </div>
        </div>
      </div>
      <SpotlightCirlce position="absolute" />
    </div>
  );
}
