"use client";

import { twMerge } from "tailwind-merge";
import Textstyles from "@/utils/textstyles";
import { SpotlightCirlce } from "@/components/not-found/spotlights-cirlce";

import { LoremIpsum } from "lorem-ipsum";
import { useState } from "react";

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

const text =
  "Enim occaecat pariatur officia ad duis mollit pariatur magna esse culpa tempor proident. Sunt aliqua dolore ex eiusmod do id aliqua laboris exercitation reprehenderit ea cupidatat non. Ea labore ea ad cillum velit duis cillum. Aute enim cupidatat laborum veniam tempor occaecat exercitation in pariatur commodo cupidatat. \
Dolor reprehenderit qui in enim cupidatat. Ad magna tempor dolore enim duis ut id voluptate quis dolor. Deserunt ullamco ut eiusmod eu aute non commodo sunt. Laborum magna adipisicing labore adipisicing. Fugiat ea fugiat eu sit ipsum velit quis culpa occaecat nostrud consequat. Pariatur nisi anim amet laboris minim ad in. \
Proident fugiat exercitation sit exercitation sunt labore occaecat laborum commodo aute commodo anim. Fugiat laborum aute adipisicing fugiat reprehenderit id id tempor proident. Id exercitation mollit veniam occaecat culpa laborum ipsum nostrud culpa cupidatat veniam et. Elit qui nisi velit officia ex consequat nisi commodo nulla. Nisi officia laboris consequat eiusmod duis voluptate aliqua eu do culpa amet non mollit non. Id anim qui irure dolore anim sit dolor labore officia. \
Consequat sit pariatur adipisicing nostrud magna sunt amet proident consequat. Commodo adipisicing nulla laboris sunt laboris enim quis proident Lorem aliquip reprehenderit esse do. Ipsum cillum laborum anim amet do commodo labore cillum deserunt. Dolore cupidatat exercitation ea sit velit anim in nostrud magna fugiat officia minim consequat. Sint dolor culpa non sit enim nostrud ut irure minim ullamco aliqua esse. Enim sunt deserunt tempor ex officia voluptate nulla est consectetur velit irure velit amet esse. Reprehenderit laborum culpa excepteur amet ut culpa. \
Sunt esse anim ullamco adipisicing aute reprehenderit fugiat deserunt sit. Ullamco ipsum commodo exercitation sit proident mollit labore. Dolore do nostrud amet cillum consectetur esse aliqua qui dolor exercitation exercitation velit enim. Dolor enim in pariatur amet aliqua aliquip tempor ullamco aliquip eiusmod mollit et occaecat aliquip. Adipisicing quis in enim consectetur ea fugiat cillum consectetur reprehenderit. Ullamco eu irure sit culpa. Id ad qui laboris magna esse cupidatat. Aliquip officia laboris reprehenderit. \
Incididunt esse labore laboris irure occaecat elit fugiat. Excepteur excepteur anim sint. Velit qui deserunt nulla est id est veniam aliquip cupidatat velit aliquip aute aliqua incididunt incididunt. Id ipsum ea et. \
Duis aute pariatur laborum reprehenderit veniam ea ut quis nostrud consequat magna aliqua nisi. Culpa aliquip dolore est elit id ullamco minim. Qui sint nulla voluptate minim sint sunt ipsum. Incididunt ea sint dolor occaecat reprehenderit occaecat cupidatat consectetur amet nulla esse sit.";

export default function Page() {
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
            {text}
          </div>
        </div>
      </div>
      <SpotlightCirlce position="absolute" />
    </div>
  );
}
