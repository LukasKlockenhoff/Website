import TextStyles from "@/utils/textstyles";
import { twMerge } from "tailwind-merge";
import ExperienceCard from "@/components/about/experience-card";
import db from "@/db";

export default async function About() {
  const experiences = await db.query.experiences.findMany();

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
      <div className={"w-[60%] flex flex-col items-center mx-auto"}>
        <ExperienceCard experience={experiences[0]} />
      </div>
    </div>
  );
}
