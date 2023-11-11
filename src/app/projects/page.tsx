import TextStyles from "@/utils/textstyles";
import ProjectCard from "@/components/projects/project-card";
import { twMerge } from "tailwind-merge";
import db from "@/db";
import { SelectProjects } from "@/db/schema/projects";

export default async function Projects() {
  const projects: SelectProjects = await db.query.projects.findMany();

  return (
    <div className={"w-full h-full justify-center dark:bg-background bg-white"}>
      <h1 className={twMerge(TextStyles.H3, "flex justify-center")}>
        Projects
      </h1>
      <div
        className={
          "grid grid-cols-1 lg:grid-cols-2 gap-y-12 sm:gap-y-16 2xl:w-[60%] xl:w-[80%] lg:w-full mx-auto mt-20 justify-items-center"
        }
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
