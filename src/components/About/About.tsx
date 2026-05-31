import React from "react";
import { about } from "@/lib/config";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const About = () => {
  return (
    <div className="px-4 py-24 lg:py-28">
      <Reveal>
        <SectionHeading label="About" title="A bit about me" />
      </Reveal>
      <div className="mt-10 max-w-2xl space-y-6">
        {about.paragraphs.map((paragraph, index) => (
          <Reveal key={index} delay={0.08 * (index + 1)}>
            <p
              className={
                index === 0
                  ? "text-xl font-light leading-relaxed text-foreground/90 md:text-2xl"
                  : "text-lg leading-relaxed text-muted-foreground"
              }
            >
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default About;
