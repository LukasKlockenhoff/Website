import Image from "next/image";
import { twMerge } from "tailwind-merge";
import LandingPageImage from "@/assets/LandingPageImage.png";
import Textstyles from "@/utils/textstyles";

export default function Home() {
  return (
    <div className={"w-full h-full dark:bg-background bg-white"}>
      <div
        className={
          "flex flex-col w-[80%] sm:w-auto mx-auto gap-y-4 sm:ml-24 pt-14 sm:pt-24 overflow-hidden"
        }
      >
        <Image
          src={LandingPageImage}
          alt={""}
          width={"200"}
          className={"pb-10 mx-auto sm:mx-0"}
        />
        <div
          className={
            "flex flex-col justify-center font-michroma text-base sm:text-md md:w-2/5 gap-y-5"
          }
        >
          <h1 className={twMerge(Textstyles.H2)}>
            Hi, I am Lukas Klockenhoff 👋
          </h1>
          <p className={twMerge(Textstyles.BigText)}>
            I am a Computer Science Student in Tesla’s Future Talents Program I
            like programming things, playing the violin and piano, reading
            philosophy and travelling with my Girlfriend.
          </p>
          <p className={twMerge(Textstyles.BigText)}>Welcome to my Page.</p>
        </div>
      </div>
    </div>
  );
}
