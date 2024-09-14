"use client";
import { SelectArticle } from "@/db/schema/articles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Textstyles from "@/utils/textstyles";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface ArticleLinkProps {
  article: SelectArticle;
  className?: any;
}

export default function ArticleLink({ article }: ArticleLinkProps) {
  const [fillColor, setFillColor] = useState("#A0A0A0");
  return (
    <div
      className={"group/link"}
      onMouseOver={() => setFillColor("#FD6401")}
      onMouseLeave={() => setFillColor("#A0A0A0")}
    >
      <Button variant={"hoverlink"} asChild>
        <Link
          href={article.link}
          className={twMerge(Textstyles.Tag, "!items-center flex !p-0 hover")}
        >
          <div
            className={
              "flex group-hover/link:text-secondary text-grey items-center"
            }
          >
            <div className={"pr-1"}>
              <Icon name={"link-tag"} fill={fillColor} />
            </div>
            {article.title}
          </div>
        </Link>
      </Button>
    </div>
  );
}
