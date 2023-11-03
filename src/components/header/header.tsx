import { twMerge } from "tailwind-merge";
import Textstyles from "@/utils/textstyles";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className={"flex w-full bg-black h-[100px] items-center relative"}>
      <div className={"absolute pl-10 hidden sm:flex"}>
        <a href={"/"} className={Textstyles.H2}>
          Lukas K.
        </a>
      </div>
      <div className={"flex  mx-auto"}>
        <div className={"flex gap-x-20"}>
          <Button asChild variant={"link"}>
            <Link href={"/cv"}>CV</Link>
          </Button>
          <Button asChild variant={"link"}>
            <Link href={"/projects"}>Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
