import TextStyles from "@/utils/textstyles";
import ProjectCard, { CardFallback } from "@/components/projects/project-card";
import { twMerge } from "tailwind-merge";
import db from "@/db";
import { SelectProjects } from "@/db/schema/projects";
import textstyles from "@/utils/textstyles";
import { siteConfig } from "@/siteconfig";
import { Resume, ResumeLink } from "@/components/about/resume";
import { Suspense } from "react";

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
      <div
        className={
          "w-[90%] sm:w-2/3 2xl:w-2/3 xl:w-[80%] mx-auto flex flex-col justify-center my-3"
        }
      >
        <div className={twMerge("max-w-[600px] justify-center mx-auto w-full")}>
          <div className={twMerge(textstyles.SerifHeader)}>Projects</div>
          <div className={twMerge(textstyles.BigHint)}>
            {siteConfig.pages.projects.text}
          </div>
          <ResumeLink />
        </div>
      </div>
      <div
        className={
          "w-full sm:w-2/3 2xl:w-2/3 xl:w-[80%] mx-auto flex flex-col justify-center"
        }
      >
        <div className={twMerge("max-w-[600px] justify-center mx-auto w-full")}>
          {sortedProjects.map((project) => (
            <Suspense fallback={<CardFallback />} key={project.id}>
              <ProjectCard key={project.id} project={project} />
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
}
