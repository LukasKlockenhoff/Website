"use client";
import Textstyles from "@/utils/textstyles";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

export default function Header() {
  const currentPath = usePathname();
  return (
    <div className={"w-full dark:bg-background bg-white mx-auto"}>
      <div className={"dark:hidden block blur"}></div>
      <div className={"hidden dark:block dark-blur"}></div>
      <div
        className={
          "flex py-10 w-[90%] sm:w-2/3 2xl:w-2/3 xl:w-[80%] items-center justify-between mx-auto"
        }
      >
        <div className={"w-1/3 hidden md:flex"}>
          <div className={"flex w-2/3 gap-x-4 lg:gap-x-0"}>
            <Button asChild variant={"ghost"} className={"w-1/2"}>
              <Link href={"/"}>
                <p
                  className={twMerge(
                    Textstyles.LinkText,
                    currentPath === "/"
                      ? "!underline decoration-secondary decoration-1"
                      : "",
                  )}
                >
                  Home
                </p>
              </Link>
            </Button>
            <Button asChild variant={"ghost"} className={"w-1/2"}>
              <Link href={"/about"}>
                <p
                  className={twMerge(
                    Textstyles.LinkText,
                    currentPath === "/about"
                      ? "!underline decoration-secondary decoration-1"
                      : "",
                  )}
                >
                  About
                </p>
              </Link>
            </Button>
            <Button asChild variant={"ghost"} className={"w-1/2"}>
              <Link href={"/projects"}>
                <p
                  className={twMerge(
                    Textstyles.LinkText,
                    currentPath === "/projects"
                      ? "!underline decoration-secondary decoration-1"
                      : "",
                  )}
                >
                  Projects
                </p>
              </Link>
            </Button>
            <Button asChild variant={"ghost"} className={"w-1/2"}>
              <Link href={"/photos"}>
                <p
                  className={twMerge(
                    Textstyles.LinkText,
                    currentPath === "/photos"
                      ? "!underline decoration-secondary decoration-1"
                      : "",
                  )}
                >
                  Photos
                </p>
              </Link>
            </Button>
          </div>
        </div>
        <div className={"w-full justify-start md:hidden flex"}>
          <div className={"w-1/3 flex md:hidden"}>
            <div className={"flex w-2/3 gap-x-4 lg:gap-x-0"}>
              <Button asChild variant={"ghost"} className={"w-1/2"}>
                <Link href={"/"}>
                  <p
                    className={twMerge(
                      Textstyles.LinkText,
                      currentPath === "/"
                        ? "!underline decoration-secondary decoration-1"
                        : "",
                    )}
                  >
                    Home
                  </p>
                </Link>
              </Button>
              <Button asChild variant={"ghost"} className={"w-1/2"}>
                <Link href={"/about"}>
                  <p
                    className={twMerge(
                      Textstyles.LinkText,
                      currentPath === "/about"
                        ? "!underline decoration-secondary decoration-1"
                        : "",
                    )}
                  >
                    About
                  </p>
                </Link>
              </Button>
              <Button asChild variant={"ghost"} className={"w-1/2"}>
                <Link href={"/projects"}>
                  <p
                    className={twMerge(
                      Textstyles.LinkText,
                      currentPath === "/projects"
                        ? "!underline decoration-secondary decoration-1"
                        : "",
                    )}
                  >
                    Projects
                  </p>
                </Link>
              </Button>
              <Button asChild variant={"ghost"} className={"w-1/2"}>
                <Link href={"/photos"}>
                  <p
                    className={twMerge(
                      Textstyles.LinkText,
                      currentPath === "/photos"
                        ? "!underline decoration-secondary decoration-1"
                        : "",
                    )}
                  >
                    Photos
                  </p>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className={"flex w-1/4 md:w-1/3 justify-end"}>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
