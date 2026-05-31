"use client";
import React from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";

const ThemeToggle = () => {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <IconMoon className="block h-4 w-4 dark:hidden" />
      <IconSun className="hidden h-4 w-4 dark:block" />
    </button>
  );
};

export default ThemeToggle;
