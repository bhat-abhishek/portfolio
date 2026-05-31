"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  company: string;
  role: string;
  period?: string;
  location?: string;
  current?: boolean;
  content: React.ReactNode;
}

const CurrentDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
  </span>
);

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full" ref={containerRef}>
      <div className="pb-10">
        <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-8 bg-accent/50" />
          Career
        </span>
        <h2 className="mt-4 font-display text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Experience
        </h2>
        <p className="mt-4 max-w-sm text-sm text-muted-foreground md:text-base">
          A look at where I&apos;ve worked and what I&apos;ve built along the
          way.
        </p>
      </div>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-foreground p-2" />
              </div>
              <div className="hidden md:block md:pl-20">
                <h3 className="font-display text-xl md:text-5xl font-medium tracking-tight text-foreground">
                  {item.company}
                </h3>
                <p className="mt-1 text-lg font-medium text-muted-foreground">
                  {item.role}
                </p>
                {item.period && (
                  <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    {item.current && <CurrentDot />}
                    {item.period}
                  </p>
                )}
                {item.location && (
                  <p className="mt-0.5 text-sm text-muted-foreground/80">
                    {item.location}
                  </p>
                )}
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="mb-5 md:hidden">
                <h3 className="font-display text-2xl font-medium tracking-tight text-foreground">
                  {item.company}
                </h3>
                <p className="mt-1 font-medium text-muted-foreground">
                  {item.role}
                </p>
                {item.period && (
                  <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    {item.current && <CurrentDot />}
                    {item.period}
                  </p>
                )}
              </div>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-border to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-accent via-accent/40 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
