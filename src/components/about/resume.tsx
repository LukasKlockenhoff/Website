import { RocketIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Resume = () => {
  return (
    <div className={"flex w-full gap-x-3 text-grey"}>
      <Link
        href={
          "https://drive.google.com/file/d/1hxBILrFYihuPWYb13gO7sPuRvnRKnlon/view?usp=sharing"
        }
      >
        <p className="font-playfare font-thin italic flex">
          <RocketIcon className="w-4 text-secondary" />
          find my résumé here
        </p>
      </Link>
    </div>
  );
};

export const ResumeLink = () => {
  return (
    <div className="mt-5 h-full relative">
      <div className="w-10 h-10 bg-white dark:bg-background self-center absolute left-[-2.5rem] z-10"></div>
      <div className="hover:translate-x-[1rem] transition-transform hover:delay-0 delay-500 flex absolute left-[-1rem] items-center">
        <Resume />
      </div>
    </div>
  );
};
