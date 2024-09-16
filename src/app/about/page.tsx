import TextStyles from "@/utils/textstyles";
import { twMerge } from "tailwind-merge";
import ExperienceCard from "@/components/about/experience-card";
import db from "@/db";
import textstyles from "@/utils/textstyles";
import { text } from "stream/consumers";
import { siteConfig } from "@/siteconfig";

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
      <div
        className={
          "w-[90%] sm:w-2/3 2xl:w-2/3 xl:w-[80%] mx-auto flex flex-col justify-center my-3"
        }
      >
        <div className={twMerge("max-w-[600px] justify-center mx-auto w-full")}>
          <div className={twMerge(textstyles.Elevated, "!text-2xl")}>About</div>
          <div className={twMerge(textstyles.BigHint)}>
            {siteConfig.pages.about.text}
          </div>
        </div>
      </div>
      <div
        className={
          "w-[90%] sm:w-2/3 2xl:w-2/3 xl:w-[80%] mx-auto flex flex-col justify-center"
        }
      >
        <div className={twMerge("max-w-[600px] justify-center mx-auto w-full")}>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
