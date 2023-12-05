import TextStyles from "@/utils/textstyles";
import Textstyles from "@/utils/textstyles";
import { twMerge } from "tailwind-merge";
import ExperienceCard from "@/components/about/experience-card";
import textstyles from "@/utils/textstyles";
import Image from "next/image";
import LandingPageImage from "@/assets/LandingPageImage.png";

export default async function Legal() {
  return (
    <div
      className={"w-full h-full bg-white dark:bg-background overflow-x-clip"}
    >
      <div
        className={
          "flex flex-col w-[90%] sm:w-1/2 mx-auto gap-y-4 justify-center pt-6 md:pt-14 overflow-hidden"
        }
      >
        <h1
          className={twMerge(
            TextStyles.H3Gradient,
            "flex justify-center bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-300 to-emerald-100",
          )}
        >
          Legal
        </h1>
        <div
          className={
            "flex flex-col sm:w-2/3 justify-center gap-y-5 text-leading"
          }
        >
          <div>Site notice / Imprint</div>
          <div>Information in accordance with Section 5 TMG</div>
          <div className={"flex flex-col"}>
            <div>
              Lukas Klockenhoff
              <br />
              Bredower Straße 16
              <br />
              14612 Falkensee
            </div>
            <div>Contact E-Mail: l@lukaskl.com</div>
            <div>
              Person responsible for editorial
              <br />
              Lukas Klockenhoff
              <br />
              Bredower Straße
              <br />
              16
              <br />
              14612 Falkensee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
