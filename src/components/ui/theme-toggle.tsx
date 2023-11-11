"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className={"hover:cursor-pointer flex"}>
      <Button
        variant="outline"
        size="icon"
        className={"rounded-full dark:hidden block text-secondary"}
        onClick={() => setTheme("dark")}
      >
        <LightModeIcon />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className={
          "rounded-full hidden dark:block hover:text-black text-border"
        }
        onClick={() => setTheme("light")}
      >
        <DarkModeIcon />
      </Button>
    </div>
  );
}
