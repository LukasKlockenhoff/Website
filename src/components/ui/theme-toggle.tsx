"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { Button } from "@/components/ui/button";
import { SunIcon } from "@radix-ui/react-icons";
import { MoonIcon } from "@radix-ui/react-icons";
import TextStyles from "@/utils/textstyles";
import { twMerge } from "tailwind-merge";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className={"hover:cursor-pointer"}>
      <Button
        variant="ghost"
        className={twMerge(
          TextStyles.LinkText,
          "flex items-center rounded-3xl dark:hidden text-darkgrey px-6",
        )}
        onClick={() => setTheme("dark")}
      >
        <SunIcon />
      </Button>
      <Button
        variant="ghost"
        className={twMerge(
          TextStyles.LinkText,
          "dark:flex items-center hidden rounded-3xl px-6 text-grey",
        )}
        onClick={() => setTheme("light")}
      >
        <MoonIcon />
      </Button>
    </div>
  );
}
