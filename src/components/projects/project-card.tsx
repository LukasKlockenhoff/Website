import Image from "next/image";
import Textstyles from "@/utils/textstyles";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import LandingPageImage from "@/assets/LandingPageImage.png";
import textstyles from "@/utils/textstyles";
import Icon from "@/components/ui/icon";
import { SelectProject } from "@/db/schema/projects";
import { createClient } from "@supabase/supabase-js";

interface ProjectCardProps {
  project: SelectProject;
}

interface ReadMoreProps {
  className?: any;
}

export default async function ProjectCard({
  project: { title, description, date, slug },
}: ProjectCardProps) {
  const ReadMore = ({ className }: ReadMoreProps) => {
    return (
      <div className={className}>
        <Button variant={"link"} asChild>
          <Link
            href={`/${slug}`}
            className={twMerge(
              Textstyles.SmallText,
              "!text-secondary !items-center flex !p-0",
            )}
          >
            <div className={"pr-1"}>
              <Icon name={"link"} className={"text-secondary"} />
            </div>
            Read more
          </Link>
        </Button>
      </div>
    );
  };

  const supabase = createClient(
    "https://ohyjeaxuwfnnnyzwoeks.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oeWplYXh1d2Zubm55endvZWtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxNTQ2ODcsImV4cCI6MjAxMzczMDY4N30.PWLy-o6aVf23JwcXRU0p79y-HGrugodh-YeJZwEQzH4",
  );

  const { data, error } = await supabase.storage
    .from("project-images")
    .createSignedUrl(`${slug}`, 60);

  if (error) {
    console.log(error);
  }

  return (
    <div className="group relative bg-white dark:bg-background md:rounded-3xl w-[430px] h-[298px] p-8 sm:p-0">
      <div
        className={
          "absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-3xl"
        }
      ></div>
      <div className={"relative flex w-full justify-between"}>
        <Image
          alt="Ellipse"
          src={data?.signedUrl || LandingPageImage}
          width={100}
          height={100}
        />
        <div
          className={twMerge(Textstyles.SmallText, "relative flex justify-end")}
        >
          {date}
        </div>
      </div>
      <div className={"relative flex flex-col w-[90%] pt-2"}>
        <div className={twMerge(textstyles.H3, "")}>{title}</div>
        <div
          className={twMerge(
            Textstyles.SmallText,
            "relative overflow-y-scroll",
          )}
        >
          {description}
        </div>
      </div>
      <ReadMore className={"relative"} />
    </div>
  );
}
