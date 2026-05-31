"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

import { SiJavascript, SiPostgresql } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import {
  SiPython,
  SiNextdotjs,
  SiRedux,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiReact,
  SiKubernetes,
} from "react-icons/si";

const techSkills = [
  { name: "JavaScript", icon: <SiJavascript className="text-2xl" /> },
  { name: "Golang", icon: <FaGolang className="text-2xl" /> },
  { name: "Python", icon: <SiPython className="text-2xl" /> },
  { name: "React", icon: <SiReact className="text-2xl" /> },
  { name: "NextJs", icon: <SiNextdotjs className="text-2xl" /> },
  { name: "ReduxJs", icon: <SiRedux className="text-2xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-2xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-2xl" /> },
  { name: "Redis", icon: <SiRedis className="text-2xl" /> },
  { name: "Docker", icon: <SiDocker className="text-2xl" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-2xl" /> },
];

const Skills = () => {
  return (
    <div className="px-4 py-24 lg:py-28">
      <Reveal>
        <SectionHeading label="Toolkit" title="Tech I work with" />
      </Reveal>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {techSkills.map((skill, index) => (
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
            className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lift"
          >
            <span className="text-foreground/70 transition-colors duration-300 group-hover:text-accent">
              {skill.icon}
            </span>
            <span className="font-display text-sm text-foreground">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
