import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Textstyles from "@/utils/textstyles";
import Link from "next/link";
import textstyles from "@/utils/textstyles";
import { SunIcon } from "@radix-ui/react-icons";
import { siteConfig } from "@/siteconfig";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const Socials = () => {
  return (
    <div className={"flex w-full gap-x-3 text-grey"}>
      <Link href={"https://www.github.com/lukasklockenhoff"}>
        <p className="font-playfare font-thin italic">github</p>
      </Link>
      <p className="font-sans font-extralight italic">/</p>
      <Link href={"https://www.x.com/lukasklff"}>
        <p className="font-playfare font-thin italic">twitter</p>
      </Link>
      <p className="font-sans font-extralight italic">/</p>
      <Link href={"https://www.linkedin.com/in/lukas-klockenhoff-334700244"}>
        <p className="font-playfare font-thin italic">linkedin</p>
      </Link>
    </div>
  );
};

export default function Home() {
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
        <div className={twMerge("max-w-[650px] justify-center mx-auto w-full")}>
          <div className={twMerge(textstyles.Elevated, "!text-2xl")}>
            Hi, I am Lukas Klockenhoff
          </div>
          <div className={twMerge(textstyles.BigHint, "flex font-extralight")}>
            {siteConfig.pages.home.text}
          </div>
          <div className={"flex w-full  m-0 sm:m-5  mx-auto"}>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}
