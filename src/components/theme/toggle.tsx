'use client'

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Toggle } from "@/components/ui/toggle";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Toggle
      aria-label="Toggle theme"
      variant="ghost"
      className="p-2"
      size="icon"
      checked={theme === "dark"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <Moon className="hidden h-5 w-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Toggle>
  );
}