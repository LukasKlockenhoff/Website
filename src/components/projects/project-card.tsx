import Image from "next/image";
import Textstyles from "@/utils/textstyles";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import textstyles from "@/utils/textstyles";
import Icon from "@/components/ui/icon";
import { SelectProject } from "@/db/schema/projects";
import { createClient } from "@supabase/supabase-js";
import env from "@/env";
import React, { Suspense } from "react";
import { Badge } from "@/components/ui/badge";
import ArticleLink from "@/components/about/article-link";
import ReadMoreLink from "@/components/projects/read-more-link";
import db from "@/db";
import { techToProject } from "@/db/schema/tech-to-project";
import { eq } from "drizzle-orm";

interface ProjectCardProps {
  project: SelectProject;
}

interface ReadMoreProps {
  className?: any;
}

const ProjectImageSuspense = () => {
  return <div className={"w-100 h-100 rounded-full bg-grey animate-pulse"} />;
};

export default async function ProjectCard({
  project: { id, title, description, date, slug, link, github },
}: ProjectCardProps) {
  // const supabase = createClient(env.SUPABASE_PUBLIC_URL, env.DB_PUBLIC_KEY);
  const skills = await db.query.techToProject.findMany({
    where: eq(techToProject.projectId, id),
    with: {
      tech: true,
    },
  });
  const TechBadge = ({
    className,
    tech,
  }: {
    className?: any;
    tech: string;
  }) => {
    return (
      <div className={className}>
        <Badge variant={"tech"} className={className}>
          {tech}
        </Badge>
      </div>
    );
  };

  return (
    <div className="group relative bg-white dark:bg-background w-full p-8 sm:p-2 mx-auto mt-14">
      <div
        className={
          "absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-xl"
        }
      ></div>
      <div className={"flex-col"}>
        <div className={"relative flex w-full justify-between gap-x-2"}>
          <div
            className={twMerge(
              Textstyles.SmallText,
              "relative flex justify-end",
            )}
          >
            {date}
          </div>
          <div className={"w-3/4"}>
            <div className={"relative flex flex-col"}>
              {/* <Suspense fallback={<ProjectImageSuspense />}>
                <Image
                  alt=""
                  src={
                    supabase.storage
                      .from("project-images")
                      .getPublicUrl(`${slug}/${slug}.png`).data.publicUrl
                  }
                  width={50}
                  height={50}
                  className={"rounded-full bg-white"}
                />
              </Suspense> */}
              <div
                className={twMerge(
                  textstyles.Elevated,
                  "group-hover:text-secondary",
                )}
              >
                <Link href={link}>
                  {title}
                  <Icon
                    className={
                      "inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    }
                    name={"arrow-link"}
                  />
                </Link>
              </div>
              <div
                className={twMerge(
                  Textstyles.SmallText,
                  "relative overflow-y-scroll",
                )}
              >
                {description}
              </div>
              <div className={"relative flex gap-x-6 mt-3"}>
                <ReadMoreLink key={github} link={github} title={"Github"} />
              </div>
              <div className={"relative flex gap-x-3 gap-y-3 mt-2 flex-wrap"}>
                {skills.map((skill) => (
                  <TechBadge key={skill.techId} tech={skill.tech.title} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const CardFallback = () => {
  return (
    <div className="group relative bg-white dark:bg-background w-full p-8 sm:p-2 mx-auto mt-14">
      <div
        className={
          "absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-xl"
        }
      ></div>
      <div className={"flex-col"}>
        <div className={"relative flex w-full justify-between gap-x-2"}>
          <div
            className={twMerge(
              Textstyles.SmallText,
              "relative flex justify-end",
            )}
          >
            <div className="h-4 w-20 bg-gray-300/50 animate-pulse rounded-lg" />
          </div>
          <div className={"w-3/4"}>
            <div className={"relative flex flex-col gap-3"}>
              <div className="h-4 w-1/3a bg-gray-300/50 animate-pulse rounded-lg" />
              <div className="flex flex-col gap-2">
                <div className="h-4 w-full bg-gray-300/50 animate-pulse rounded-lg" />
                <div className="h-4 w-full bg-gray-300/50 animate-pulse rounded-lg" />
              </div>
              <div className={"relative flex gap-x-2 mt-3"}>
                <div className="h-4 w-16 bg-gray-300/50 animate-pulse rounded-lg" />
                <div className="h-4 w-16 bg-gray-300/50 animate-pulse rounded-lg" />
                <div className="h-4 w-16 bg-gray-300/50 animate-pulse rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
