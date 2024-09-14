import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Textstyles from "@/utils/textstyles";
import Link from "next/link";
import textstyles from "@/utils/textstyles";

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
      className={"w-full h-full bg-white dark:bg-background overflow-x-clip"}
    >
      <div
        className={
          "flex flex-col w-[80%] sm:w-1/2 mx-auto gap-y-2 justify-center pt-4 md:pt-14 overflow-hidden"
        }
      >
        <div
          className={
            "flex flex-col sm:w-[60%] justify-center gap-y-3 text-leading mx-auto"
          }
        >
          <p className={twMerge(Textstyles.Elevated, "!text-2xl")}>
            Hi, I am Lukas Klockenhoff
          </p>
          <div
            className={twMerge(textstyles.Hint, "md:hidden  font-extralight")}
          >
            I am a 19-year-old student from Germany. I am currently studying
            Computer Science in cooperation with Tesla in Berlin. By day I
            develop internal Full-Stack applications for Tesla, by night I work
            on my own projects to improve my skills and the remaining time I try
            to spend traveling and exploring the world.
          </div>
          <div
            className={twMerge(
              textstyles.BigHint,
              "hidden md:flex font-extralight",
            )}
          >
            I am a 19-year-old student from Germany. I am currently studying
            Computer Science in cooperation with Tesla in Berlin. By day I
            develop internal Full-Stack applications for Tesla, by night I work
            on my own projects to improve my skills and the remaining time I try
            to spend traveling and exploring the world.
          </div>
          <div className={"flex w-full  m-0 sm:m-5  mx-auto"}>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}
