import React from "react";
import { Michroma, Roboto } from "next/font/google";
import Project from "./Project";

interface Props {}
const michroma = Michroma({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});
const projects = [
  {
    name: "Playlist recommendation system",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem minus facilis quia repudiandae quisquam, deleniti iure quos ipsumvoluptates commodi tenetur, sit laudantium distinctio rerum aliasvoluptatem nemo autem itaque, officiis totam magni repellat.",
    techStack: ["Python", "Pandas", "Keras", "NodeJs"],
  },
  {
    name: "Video Chatting/Streaming Application",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem minus facilis quia repudiandae quisquam, deleniti iure quos ipsumvoluptates commodi tenetur, sit laudantium distinctio rerum aliasvoluptatem nemo autem itaque, officiis totam magni repellat.",
    techStack: ["Python", "Pandas", "Keras", "NodeJs"],
  },
  {
    name : 'Self hosted SMTP Server',
    details : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem minus facilis quia repudiandae quisquam, deleniti iure quos ipsumvoluptates commodi tenetur, sit laudantium distinctio rerum aliasvoluptatem nemo autem itaque, officiis totam magni repellat.',
    techStack : ['Golang','Apache Kafka','Docker','Kubernetes']
  },
  {
    name : 'Private Block-chain from scratch',
    details : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem minus facilis quia repudiandae quisquam, deleniti iure quos ipsumvoluptates commodi tenetur, sit laudantium distinctio rerum aliasvoluptatem nemo autem itaque, officiis totam magni repellat.',
    techStack : ['Golang','Apache Kafka','Docker','Kubernetes']
  },
  {
    name: "CLI application",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem minus facilis quia repudiandae quisquam, deleniti iure quos ipsumvoluptates commodi tenetur, sit laudantium distinctio rerum aliasvoluptatem nemo autem itaque, officiis totam magni repellat.",
    techStack: ["Python", "Pandas", "Keras", "NodeJs"],
  },
  {
    name: "Blogging website",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem minus facilis quia repudiandae quisquam, deleniti iure quos ipsumvoluptates commodi tenetur, sit laudantium distinctio rerum aliasvoluptatem nemo autem itaque, officiis totam magni repellat.",
    techStack: ["Python", "Pandas", "Keras", "NodeJs"],
  },

];
const Projects: React.FC<Props> = () => {
  return (
    <section className="h-[90vh] py-10">
      <p className={`${michroma.className} py-10 text-3xl`}>Projects</p>
      <div className="flex h-full space-x-5">
        <div className="basis-1/2 text-2xl space-y-5">
          {projects.map((project, index: number) => (
            <Project
              key={index}
              name={project.name}
              techStack={project.techStack}
              details={project.details}
            />
          ))}
        </div>
        <div className=" basis-1/2 bg-blue-700 h-full">
          <div className="">project i frame</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
