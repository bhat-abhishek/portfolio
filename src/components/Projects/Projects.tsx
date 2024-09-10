import React from "react";
import { Michroma } from "next/font/google";
import { ProjectDetails } from "./ProjectDetails";
import ProjectIFrame from "./ProjectIFrame";

interface Props {}
const michroma = Michroma({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});

const Projects: React.FC<Props> = () => {
  return (
    <section className="h-[90vh] py-10">
      <p className={`${michroma.className} py-10 text-3xl`}>Projects</p>
      <div className="flex space-x-5">
        <div className="basis-1/2 text-2xl space-y-5">
          <ProjectDetails />
        </div>
        <div className="basis-1/2 bg-blue-700 rounded-md">
          <ProjectIFrame projectSrc="https://www.seedicon.com" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
