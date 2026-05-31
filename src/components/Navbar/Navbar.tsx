"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import "./navlink.styles.css";
import ThemeToggle from "../ui/ThemeToggle";

import { IconMenu2, IconSquareRoundedX } from "@tabler/icons-react";
interface Props {
  activeSection: string;
}

const DesktopNav: React.FC<Props> = ({ activeSection }) => {
  return (
    <nav className="hidden lg:block fixed z-50 top-0 inset-x-0 bg-background/70 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto flex max-w-[1400px] items-center justify-end gap-7 px-8 py-4 font-display text-sm text-foreground">
        <NavLink navigation="home" activeSection={activeSection} />
        <NavLink navigation="about" activeSection={activeSection} />
        <NavLink navigation="experience" activeSection={activeSection} />
        <NavLink navigation="projects" activeSection={activeSection} />
        <NavLink navigation="skills" activeSection={activeSection} />
        <NavLink navigation="contact" activeSection={activeSection} />
        <ThemeToggle />
      </div>
    </nav>
  );
};

const MobileNav: React.FC<Props> = ({ activeSection }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <div className="fixed top-0 right-0 w-full flex items-center justify-end gap-3 bg-background/70 backdrop-blur-md border-b border-border/60 px-5 py-3 z-50">
        <ThemeToggle />
        <button onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
          {open ? <IconSquareRoundedX className="text-foreground w-6 h-6" /> : <IconMenu2 className="text-foreground w-6 h-6" />}
        </button>
      </div>
      {open && (
        <nav
          className="fixed top-0 right-0 flex flex-col h-dvh w-[72vw] z-40 pt-16 px-6 gap-1 bg-background/95 backdrop-blur-md border-l border-border text-foreground font-display"
          onClick={() => setOpen(false)}
        >
          <NavLink navigation="home" activeSection={activeSection} />
          <NavLink navigation="about" activeSection={activeSection} />
          <NavLink navigation="experience" activeSection={activeSection} />
          <NavLink navigation="projects" activeSection={activeSection} />
          <NavLink navigation="skills" activeSection={activeSection} />
          <NavLink navigation="contact" activeSection={activeSection} />
        </nav>
      )}
    </div>
  );
};

const Navbar: React.FC<Props> = ({ activeSection }) => {
  return (
    <>
      <DesktopNav activeSection={activeSection} />
      <MobileNav activeSection={activeSection} />
    </>
  );
};

export default Navbar;
