import React from "react";
import { highlights } from "@/lib/config";

const Highlights = () => {
  return (
    <div className="relative rounded-2xl border border-border bg-card p-6 shadow-soft md:p-7">
      <div className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <p className="mb-5 font-display text-sm text-muted-foreground">
        At a glance
      </p>
      <dl className="space-y-4">
        {highlights.map((item, i) => (
          <div
            key={item.label}
            className={i > 0 ? "border-t border-border/70 pt-4" : ""}
          >
            <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {item.label}
            </dt>
            <dd className="mt-1 font-display text-foreground">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Highlights;
