import React from "react";
import Icon, {IconName} from "@/components/ui/icon";
import TextStyles from "@/utils/textstyles";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {twMerge} from "tailwind-merge";


const links = [
    {
        name: "Contact",
        url: "/contact",
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
