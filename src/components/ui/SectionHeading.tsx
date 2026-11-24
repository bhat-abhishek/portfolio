import React from "react";
import { sections, type SectionKey } from "@/lib/config";
import SectionLabel from "./SectionLabel";

type SectionHeadingProps = {
  section: SectionKey;
};

const SectionHeading = ({ section }: SectionHeadingProps) => {
  const { refdes, label, title } = sections[section];
  return (
    <div className="flex flex-col gap-4">
      <SectionLabel refdes={refdes}>{label}</SectionLabel>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
