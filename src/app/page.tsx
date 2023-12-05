import Image from "next/image";
import { twMerge } from "tailwind-merge";
import LandingPageImage from "@/assets/LandingPageImage.png";
import Textstyles from "@/utils/textstyles";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const Socials = () => {
  return (
    <div className={"flex w-full gap-x-10"}>
      <Link href={"https://www.github.com/lukasklockenhoff"}>
        <GitHubIcon
          className={"w-7 h-7 text-grey dark:hover:text-white hover:text-black"}
        />
      </Link>
      <Link href={"https://www.x.com/lukasklff"}>
        <TwitterIcon
          className={"w-7 h-7 text-grey dark:hover:text-white hover:text-black"}
        />
      </Link>
      <Link href={"https://www.linkedin.com/in/lukas-klockenhoff-334700244"}>
        <LinkedInIcon
          className={"w-7 h-7 text-grey dark:hover:text-white hover:text-black"}
        />
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
          "flex flex-col w-[90%] sm:w-2/3 mx-auto gap-y-4 justify-center pt-6 md:pt-14 overflow-hidden"
        }
      >
        <Image
          src={LandingPageImage}
          alt={""}
          width={"150"}
          className={"pb-5 sm:mx-0 w-32 sm:w-[150px]"}
          draggable={false}
        />
        <div
          className={
            "flex flex-col w-full justify-center gap-y-5 mx-auto text-leading"
          }
        >
          <p className={twMerge(Textstyles.BigText, "!text-grey")}>
            Hi, I am Lukas Klockenhoff
          </p>
          <h1 className={twMerge(Textstyles.H3, "pb-2")}>
            Future Talent Dev at{" "}
            <span className={twMerge(Textstyles.H3Gradient)}>Tesla</span>{" "}
            Gigafactory Berlin
          </h1>
        </div>
        <div className={"flex w-full gap-x-20  m-0 sm:m-5"}>
          <Socials />
        </div>
      </div>
    </div>
  );
}
