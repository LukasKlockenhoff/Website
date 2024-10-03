"use client";
import Textstyles from "@/utils/textstyles";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

interface HeaderProps {
  links: PageLink[];
}

export default function Header({ links }: HeaderProps) {
  const currentPath = usePathname();
  return (
    <div className={"w-full mx-auto sticky top-0 z-30 backdrop-blur-lg"}>
      <div
        className={
          "flex max-w-[600px] max-h-fit py-4 w-[90%] sm:w-2/3 2xl:w-2/3 xl:w-[80%] items-center mx-auto gap-x-6"
        }
      >
        {links.map((link) => (
          <Link href={link.url} key={link.title}>
            <p
              className={twMerge(
                Textstyles.LinkText,
                currentPath === link.url
                  ? "!underline decoration-secondary decoration-1"
                  : "",
              )}
            >
              {link.title}
            </p>
          </Link>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
}
