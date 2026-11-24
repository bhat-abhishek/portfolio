"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

import { skills } from "@/lib/config";
import type { IconType } from "react-icons";
import {
  SiPython,
  SiTypescript,
  SiGo,
  SiFastapi,
  SiNestjs,
  SiNextdotjs,
  SiApachekafka,
  SiRedis,
  SiPostgresql,
  SiMongodb,
  SiClickhouse,
  SiOpentelemetry,
  SiDocker,
  SiTerraform,
} from "react-icons/si";

const ICONS: Record<(typeof skills)[number]["icon"], IconType> = {
  python: SiPython,
  typescript: SiTypescript,
  go: SiGo,
  fastapi: SiFastapi,
  nestjs: SiNestjs,
  nextjs: SiNextdotjs,
  kafka: SiApachekafka,
  redis: SiRedis,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  clickhouse: SiClickhouse,
  opentelemetry: SiOpentelemetry,
  docker: SiDocker,
  terraform: SiTerraform,
};

const Skills = () => {
  return (
    <div className="px-4 py-24 lg:py-28">
      <Reveal>
        <SectionHeading section="skills" />
      </Reveal>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => {
          const Icon = ICONS[skill.icon];
          return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.4,
              delay: Math.min(index * 0.04, 0.3),
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="group flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3.5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lift"
          >
            <span className="text-foreground/70 transition-colors duration-300 group-hover:text-accent">
              <Icon className="text-2xl" aria-hidden />
            </span>
            <span className="font-mono text-sm text-foreground">
              {skill.name}
            </span>
          </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
