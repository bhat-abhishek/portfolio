import { projects } from "@/lib/config";
import { HoverEffect } from "./Cardhover";

const ProjectsV2 = () => {
    return <div>
        <h2>
            Projects
        </h2>
        <HoverEffect items={projects} />
    </div>
}

export default ProjectsV2;