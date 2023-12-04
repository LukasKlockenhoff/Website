import Textstyles from "@/utils/textstyles";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import textstyles from "@/utils/textstyles";
import Icon from "@/components/ui/icon";
import { SelectExperience } from "../../db/schema/experiences";
import db from "@/db";
import { articles, SelectArticle } from "@/db/schema/articles";
import { eq } from "drizzle-orm";
import { Badge } from "@/components/ui/badge";
import { techToExperience } from "@/db/schema/techs-to-experience";
import React from "react";
import ArticleLink from "@/components/about/article-link";

interface ExperienceCardProps {
  experience: SelectExperience;
}

export default async function ExperienceCard({
  experience: { id, slug, title, description, startDate, endDate, link },
}: ExperienceCardProps) {
  const experienceArticles = await db.query.articles.findMany({
    where: eq(articles.experienceId, id),
  });

  const skills = await db.query.techToExperience.findMany({
    where: eq(techToExperience.experienceId, id),
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
            {startDate} - <br />
            {endDate}
          </div>
          <div className={"w-3/4"}>
            <div className={"relative flex flex-col"}>
              <div
                className={twMerge(
                  textstyles.BigText,
                  "mb-2 group-hover:text-secondary",
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
              {experienceArticles.length > 0 ? (
                <div className={"relative flex gap-x-6 mt-3"}>
                  {experienceArticles.map((article) => (
                    <ArticleLink key={article.id} article={article} />
                  ))}
                </div>
              ) : null}
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
