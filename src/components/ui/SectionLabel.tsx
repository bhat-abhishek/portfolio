import React from "react";
import { cn } from "@/lib/utils";

type SectionLabelProps = {
  refdes?: string;
  children: React.ReactNode;
  className?: string;
};

// Silkscreen-style eyebrow: "U1 ── ABOUT"
const SectionLabel = ({ refdes, children, className }: SectionLabelProps) => (
  <span
    className={cn(
      "inline-flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground",
      className
    )}
  >
    {refdes && <span className="text-accent">{refdes}</span>}
    <span className="h-px w-8 bg-accent/50" aria-hidden="true" />
    {children}
  </span>
);

export default SectionLabel;
