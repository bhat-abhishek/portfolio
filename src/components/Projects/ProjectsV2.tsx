import { projects } from "@/lib/config";
import { HoverEffect } from "./Cardhover";
import { michroma } from "../Skills/Skills";

const ProjectsV2 = () => {
  return (
    <>
      <div className="px-4 pt-20">
        <h2 className={`text-2xl lg:text-4xl ${michroma.className}`}>
          Projects
        </h2>
        <HoverEffect items={projects} />
      </div>
    </>
  );
};

export default ProjectsV2;
