import TextStyles from "@/utils/textstyles";
import ProjectCard from "@/components/projects/project-card";
import { twMerge } from "tailwind-merge";
import db from "@/db";
import { SelectProjects } from "@/db/schema/projects";
import textstyles from "@/utils/textstyles";

export default async function Projects() {
  const projects: SelectProjects = await db.query.projects.findMany();
  const sortedProjects = projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div
      className={
        "w-full h-full justify-center dark:bg-background bg-white overflow-x-clip"
      }
    >
      <div className={"2xl:w-2/3 xl:w-[80%] lg:w-full mx-auto"}>
        <h1 className={twMerge("flex scroll justify-center m-fit")}>
          <span className={TextStyles.H3Gradient}>Projects</span>
        </h1>
        <div
          className={twMerge(
            textstyles.BigHint,
            "flex justify-center text-center mx-auto w-[90%] md:w-[70%] lg:w-[60%] xl:w-1/2 my-3",
          )}
        >
          Next to my studies, I am developing personal projects to improve my
          programming, design, and architecture skills. Here are some of them
          and the technologies I used. You can find the code on my GitHub via
          the provided link.
        </div>
      </div>
      <div
        className={
          "grid grid-cols-1 lg:grid-cols-2 gap-y-12 sm:gap-y-16 2xl:w-7/12 xl:w-[80%] lg:w-[90%] mx-auto mt-20 justify-items-center"
        }
      >
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
