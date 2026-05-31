"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowUpRight } from "@tabler/icons-react";

type Project = {
  title: string;
  description: string;
  link: string;
};

const normalizeHref = (link: string) =>
  /^https?:\/\//.test(link) ? link : `https://${link}`;

export const ProjectsGrid = ({ items }: { items: Project[] }) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.5,
            delay: Math.min(index * 0.07, 0.35),
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          <Link
            href={normalizeHref(project.link)}
            target="_blank"
            className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-xl text-foreground">
                {project.title}
              </h3>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                <IconArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
