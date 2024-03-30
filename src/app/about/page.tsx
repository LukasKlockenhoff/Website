import TextStyles from "@/utils/textstyles";
import { twMerge } from "tailwind-merge";
import ExperienceCard from "@/components/about/experience-card";
import db from "@/db";
import textstyles from "@/utils/textstyles";

// fixes prerender Error
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function About() {
  const experiences = (await db.query.experiences.findMany()).reverse();

  return (
    <div
      className={
        "w-full h-full justify-center dark:bg-background bg-white overflow-x-clip"
      }
    >
      <div className={"2xl:w-2/3 xl:w-[80%] lg:w-full mx-auto"}>
        <h1 className={twMerge("flex justify-center m-fit")}>
          <span className={TextStyles.H3Gradient}>About</span>
        </h1>
        <div
          className={twMerge(
            textstyles.BigHint,
            "flex justify-center text-center mx-auto w-[90%] md:w-[70%] lg:w-[60%] xl:w-1/2 my-3",
          )}
        >
          I have been a lover of technology and science since I can remember.
          Computer Science and the art of solving problems with code is my
          passion. Below you can find my professional experience and my
          education - a list that I am constantly working on expanding.
        </div>
      </div>
      <div
        className={
          "w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-1/2 2xl:w-1/3 md:w- flex flex-col items-center mx-auto"
        }
      >
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
}
