import Image from "next/image";
import { twMerge } from "tailwind-merge";
import LandingPageImage from "@/assets/LandingPageImage.png";
import Textstyles from "@/utils/textstyles";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

export interface socialIconProps {
  name: string;
  icon: any;
  url: string;
}

const Socials = () => {
  return (
    <div className={"flex w-full gap-x-20 mx-auto justify-center m-10"}>
      <Link href={"https://www.github.com/lukasklockenhoff"}>
        <GitHubIcon className={"w-10 h-10 text-black dark:text-white"} />
      </Link>
      <Link href={"https://www.x.com/lukasklff"}>
        <TwitterIcon className={"w-10 h-10 text-black dark:text-white"} />
      </Link>
      <Link href={"https://www.linkedin.com/in/lukas-klockenhoff-334700244"}>
        <LinkedInIcon className={"w-10 h-10 text-black dark:text-white"} />
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
          "flex flex-col w-[90%] sm:w-2/3 mx-auto gap-y-4 justify-center pt-14 overflow-hidden"
        }
      >
        <Image
          src={LandingPageImage}
          alt={""}
          width={"200"}
          className={"pb-10 sm:mx-0"}
          draggable={false}
        />
        <div
          className={
            "flex flex-col w-full justify-center gap-y-5 mx-auto text-leading"
          }
        >
          <p className={twMerge(twMerge(Textstyles.BigText, "!text-grey"))}>
            Hi, I am Lukas Klockenhoff
          </p>
          <h1 className={twMerge(Textstyles.H2, "pb-2")}>
            Future Talent Dev at{" "}
            <span
              className={twMerge(
                Textstyles.H2Gradient,
                "bg-clip-text bg-gradient-to-r from-red-800 via-red-600 to-red-400",
              )}
            >
              Tesla
            </span>{" "}
            Gigafactory Berlin
          </h1>
        </div>
      </div>
      <div
        className={"flex w-full gap-x-20 mx-auto justify-center m-0  sm:m-10"}
      >
        <Socials />
      </div>
    </div>
  );
}
