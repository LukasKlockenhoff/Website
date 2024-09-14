import TextStyles from "@/utils/textstyles";
import ProjectCard from "@/components/projects/project-card";
import { twMerge } from "tailwind-merge";
import db from "@/db";
import { SelectProjects } from "@/db/schema/projects";
import textstyles from "@/utils/textstyles";

// fixes prerender Error
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

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
        <div
          className={twMerge(
            "flex flex-col justify-center mx-auto w-[90%] md:w-[70%] lg:w-[60%] xl:w-1/2 my-3",
          )}
        >
          <div className={twMerge(textstyles.Elevated, "!text-2xl")}>
            Projects
          </div>
          <div className={twMerge(textstyles.BigHint)}>
            Next to my studies, I am developing personal projects to improve my
            programming, design, and architecture skills. Here are some of them
            and the technologies I used. You can find the code on my GitHub via
            the provided link.
          </div>
        </div>
      </div>
      <div
        className={
          "w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-1/2 2xl:w-1/3 md:w- flex flex-col items-center mx-auto"
        }
      >
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
