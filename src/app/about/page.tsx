import TextStyles from "@/utils/textstyles";
import { twMerge } from "tailwind-merge";
import ExperienceCard from "@/components/about/experience-card";
import db from "@/db";

export default async function About() {
  const experiences = (await db.query.experiences.findMany()).reverse();

  return (
    <div className={"w-full h-full justify-center dark:bg-background bg-white"}>
      <h1
        className={twMerge(
          TextStyles.H3Gradient,
          "flex justify-center bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-300 to-emerald-100",
        )}
      >
        About
      </h1>
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
