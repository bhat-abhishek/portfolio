import React from "react";
import { Michroma } from "next/font/google";

export const michroma = Michroma({ subsets: ["latin", "latin-ext"], weight: ["400"] });

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

import { GlobeDemo } from "./Globe";

const techSkills = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-4xl" />,
  },
  {
    name: "Golang",
    icon: <FaGolang className="text-4xl" />,
  },
  {
    name: "Python",
    icon: <SiPython className="text-4xl" />,
  },
  {
    name: "React",
    icon: <SiReact className="text-4xl" />,
  },
  {
    name: "NextJs",
    icon: <SiNextdotjs className="text-4xl" />,
  },
  {
    name: "ReduxJs",
    icon: <SiRedux className="text-4xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-4xl" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-4xl" />,
  },
  {
    name: "Redis",
    icon: <SiRedis className="text-4xl" />,
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-4xl" />,
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes className="text-4xl" />,
  },
];
const Skills = () => {
  return (
    <div className="px-4 pt-20">
      <h2 className={`text-2xl lg:text-4xl ${michroma.className}`}>
        My world revolves around
      </h2>
      <div className={`flex py-5 ${michroma.className} w-full relative`}>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 lg:basis-1/2 ">
          {techSkills.map((skill, index) => {
            return (
              <>
                <div key={index} className="flex space-x-2 items-center">
                  {skill.icon}
                  <p> {skill.name}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="hidden lg:relative lg:basis-1/2 w-full z-0 absolute top-0 left-0  lg:flex">
          <GlobeDemo />
        </div>
      </div>
    </div>
  );
};

export default Skills;
