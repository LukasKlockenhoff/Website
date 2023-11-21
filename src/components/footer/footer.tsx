import React from "react";
import Icon, {IconName} from "@/components/ui/icon";
import TextStyles from "@/utils/textstyles";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {twMerge} from "tailwind-merge";
import {GithubIcon, LinkedinIcon, XIcon} from "lucide-react";

export interface socialIconProps {
    name: string;
    icon: any;
    url: string;
}

export const socials: socialIconProps[] = [
    {
        name: "Github",
        icon: "github",
        url: "https://www.github.com/lukasklockenhoff",
    },
    {
        name: "X",
        icon: "X",
        url: "https://www.x.com/lukasklff",
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://www.linkedin.com/in/lukas-klockenhoff-334700244",
    },
];

const Socials = () => {
    return (
        <div className={"flex w-full gap-x-20 mx-auto justify-center m-10"}>
            <GithubIcon className={"w-10 h-10"}/>
            <XIcon className={"w-10 h-10"}/>
            <LinkedinIcon className={"w-10 h-10"}/>
        </div>
    );
}

const links = [
    {
        name: "Contact",
        url: "mailto:lukasklockenhoff@icloud.com",
    },
    {
        name: "Privacy Policy",
        url: "/privacy",
    },
    {
        name: "Legal",
        url: "/legal",
    },
];

export default async function Footer() {
    return (
        <div
            className="flex w-full flex-col md:flex-row items-center mx-auto h-[100px] md:justify-between px-24 bg-white dark:bg-background justify-end pb-10 sm:pb-0">
            <div className={"xl:flex hidden"}>
                <a href={"/"} className={twMerge(TextStyles.H4, "font-bold")}>
                    Lukas Klockenhoff
                </a>
            </div>
            <div className={"flex gap-x-10"}>
                {socials.map((social) => (
                    <Link href={social.url} key={social.name}>
                        <Icon
                            name={social.icon}
                            fill={"white"}
                            className={"hidden dark:block"}
                        />
                        <Icon
                            name={social.icon}
                            fill={"black"}
                            className={"block dark:hidden"}
                        />
                    </Link>
                ))}
            </div>
            <div className={"flex justify-evenly md:gap-x-20"}>
                {links.map((link) => (
                    <Button asChild variant={"link"} key={link.name}>
                        <Link href={link.url} key={link.name}>
                            {link.name}
                        </Link>
                    </Button>
                ))}
            </div>
        </div>
    );
}
