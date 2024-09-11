import React from "react";
import { Michroma } from "next/font/google";

const michroma = Michroma({ subsets: ["latin","latin-ext"], weight: ["400",] });
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



const Skills = () => {
  return (
    <section className="max-w-7xl p-10 h-[100vh]">
      <h2 className={`text-4xl ${michroma.className} py-10`}>
        My world revolves around
      </h2>
      <div className={`flex py-5 ${michroma.className}`}>
        <div className="basis-1/2 grid grid-cols-3 gap-10">
          <div className="flex space-x-2 items-center">
            <SiJavascript className="text-4xl" />
            <p>JavaScript</p>
          </div>
          <div className="flex space-x-2 items-center">
            <FaGolang className="text-4xl" />
            <p>Golang</p>
          </div>
          <div className="flex space-x-2 items-center">
            <SiPython className="text-4xl" />
            <p>Python</p>
          </div>
          <div className="flex space-x-2 items-center">
            <SiNextdotjs className="text-4xl" />
            <p>NextJS</p>
          </div>
          <div className="flex space-x-2 items-center">
            <SiReact className="text-4xl" />
            <p>ReactJS</p>
          </div>
          <div className="flex space-x-2 items-center">
            <SiRedux className="text-4xl" />
            <p>Redux</p>
          </div>
          <div className="flex space-x-2 items-center">
            <SiMongodb className="text-4xl" />
            <p>MongoDB</p>
          </div>{" "}
          <div className="flex space-x-2 items-center">
            <SiPostgresql className="text-4xl" />
            <p>Postgres</p>
          </div>{" "}
          <div className="flex space-x-2 items-center">
            <SiRedis className="text-4xl" />
            <p>Redis</p>
          </div>
          <div className="flex space-x-2 items-center">
            <SiDocker className="text-4xl" />
            <p>Docker</p>
          </div>
          <div className="flex space-x-2 items-center">
            <SiKubernetes className="text-4xl" />
            <p>Kubernetes</p>
          </div>
        </div>
        <GlobeDemo/>
      </div>
    </section>
  );
};

export default Skills;
