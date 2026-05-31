import React from "react";
import { FloatingDock } from "../ui/FloatingDock";
import { socials } from "@/lib/config";

import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandMedium,
} from "@tabler/icons-react";

const iconMap: Record<string, React.ReactNode> = {
  github: <IconBrandGithub className="h-full w-full text-muted-foreground" />,
  linkedin: <IconBrandLinkedin className="h-full w-full text-muted-foreground" />,
  medium: <IconBrandMedium className="h-full w-full text-muted-foreground" />,
  leetcode: <IconBrandLeetcode className="h-full w-full text-muted-foreground" />,
};

const ContactIcons = () => {
  const links = socials.map((social) => ({
    title: social.label,
    icon: iconMap[social.icon],
    href: social.href,
  }));

  return (
    <div className="flex justify-start w-full">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
};

export default ContactIcons;
