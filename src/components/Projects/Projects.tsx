import { projects } from "@/lib/config";
import { ProjectsGrid } from "./Cardhover";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const Projects = () => {
  return (
    <div className="px-4 py-24 lg:py-28">
      <Reveal>
        <SectionHeading label="Work" title="Selected projects" />
      </Reveal>
      <div className="mt-10">
        <ProjectsGrid items={projects} />
      </div>
    </div>
  );
};

export default Projects;
