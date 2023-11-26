"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className={"hover:cursor-pointer"}>
      <Button
        variant="outline"
        size="icon"
        className={"flex items-center rounded-3xl dark:hidden text-grey px-6"}
        onClick={() => setTheme("dark")}
      >
        <LightModeIcon />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className={
          "dark:flex items-center hidden rounded-3xl px-6 hover:text-black text-border"
        }
        onClick={() => setTheme("light")}
      >
        <DarkModeIcon />
      </Button>
    </div>
  );
}
