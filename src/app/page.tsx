import Image from "next/image";
import TextStyles from "@/utils/textstyles";
import { twMerge } from "tailwind-merge";
import LandingPageImage from "@/assets/LandingPageImage.png";

export default function Home() {
  return (
    <div className={"w-full h-full bg-background overflow-hidden pt-24"}>
      <div
        className={"flex flex-col h-full gap-y-4 pl-20 pt-24 overflow-hidden"}
      >
        <Image
          src={LandingPageImage}
          alt={""}
          width={"200"}
          className={"pb-10"}
        />
        <h1 className={twMerge("font-michroma text-4xl text-white")}>
          Hi, I am Lukas Klockenhoff 👋
        </h1>
        <div
          className={
            "items-center justify-center font-michroma text-base sm:text-md w-2/5"
          }
        >
          <p>
            I am a Computer Science Student in Tesla’s Future Talents Program I
            like programming things, playing the violin and piano, reading
            philosophy and travelling with my Girlfriend.
          </p>
          <p>Welcome to my Page.</p>
        </div>
      </div>
    </div>
  );
}
