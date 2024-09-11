import React from "react";
import { FloatingDock } from "../ui/FloatingDock";

import {
  IconBrandGithub,
  IconBrandReddit,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandMedium
} from "@tabler/icons-react";
import Image from "next/image";
import { title } from "process";

const ContactIcons = () => {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/bhatabhishek/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Abhi-Bhat18",
    },
    {
      title: "Medium",
      icon: (
        <IconBrandMedium className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://medium.com/@bhatabhishek-ylp",
    },
    {
      title: "Leetcode",
      icon: (
        <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://leetcode.com/u/Abhi-Bhat18/",
    },
    {
      title: "Reddit",
      icon: (
        <IconBrandReddit className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.reddit.com/user/Kind-Attempt8181/",
    },
  ];
  return (
    <div className="flex justify-start w-full">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}

export default ContactIcons;