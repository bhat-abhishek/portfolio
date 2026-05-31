import React from "react";

type SectionHeadingProps = {
  label: string;
  title: string;
};

const SectionHeading = ({ label, title }: SectionHeadingProps) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        <span className="h-px w-8 bg-accent/50" />
        {label}
      </span>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
