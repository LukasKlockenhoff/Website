import Image from "next/image";
import {twMerge} from "tailwind-merge";
import LandingPageImage from "@/assets/LandingPageImage.png";
import Textstyles from "@/utils/textstyles";
import textstyles from "@/utils/textstyles";
import {socials} from "@/components/footer/footer";
import Link from "next/link";
import Icon from "@/components/ui/icon";

export default function Home() {
    return (
        <div className={"w-full h-full dark:bg-background bg-white"}>
            <div
                className={
                    "flex flex-col w-2/3 items-start gap-y-4 sm:ml-24 pt-14 sm:pt-24 overflow-hidden"
                }
            >
                <Image
                    src={LandingPageImage}
                    alt={""}
                    width={"200"}
                    className={"pb-10 mx-auto sm:mx-0"}
                />
                <div
                    className={
                        "flex flex-col w-full justify-center gap-y-5 mx-auto text-leading"
                    }
                >
                    <p className={twMerge(twMerge(textstyles.BigText, "!text-grey"))}>Hi, I am Lukas Klockenhoff</p>
                    <h1 className={twMerge(Textstyles.H2, "!leading-tighter")}>
                        Future Talent Dev at <span
                        className={twMerge(Textstyles.H2Gradient, "bg-clip-text bg-gradient-to-r from-red-800 via-red-600 to-red-400")}>Tesla</span> Gigafactory
                        Berlin
                    </h1>
                    <div className={"flex self-end w-1/2"}>
                        <p className={twMerge(Textstyles.BigText, "!text-grey")}>
                            I am a Computer Science Student in Tesla’s Future Talents Program I
                            like programming things, playing the violin and piano, reading
                            philosophy and travelling with my Girlfriend.
                        </p>
                    </div>
                </div>
            </div>
            <div className={"flex w-full gap-x-20 mx-auto justify-center m-10"}>
                {socials.map((social) => (
                    <Link href={social.url} key={social.name}>
                        {social.icon}
                    </Link>
                ))}
            </div>
        </div>
    );
}
