import React from "react";
import { Timeline } from "../ui/timeline";
import { experiences } from "@/lib/config";

const Experiences = () => {
  const data = experiences.map((exp) => ({
    company: exp.company,
    role: exp.role,
    period: exp.period,
    location: exp.location,
    current: exp.current,
    content: (
      <div>
        <ul className="space-y-2.5">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
              <span className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
        {exp.tech.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {exp.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    ),
  }));

  return (
    <div className="px-4 py-12">
      <Timeline data={data} />
    </div>
  );
};

export default Experiences;
