import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const projects = [
  {
    name: "Scalable Chatting Application",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem minus facilis quia repudiandae quisquam, deleniti iure quos ipsumvoluptates commodi tenetur, sit laudantium distinctio rerum aliasvoluptatem nemo autem itaque, officiis totam magni repellat.",
    techStack: ["TypeScript", "NextJs", "NodeJs", "Websockets"],
  },
  {
    name: "Playlist recommendation system",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem minus facilis quia repudiandae quisquam, deleniti iure quos ipsumvoluptates commodi tenetur, sit laudantium distinctio rerum aliasvoluptatem nemo autem itaque, officiis totam magni repellat.",
    techStack: ["Python", "Pandas", "Keras", "NodeJs"],
  },
  
  {
    name: "AWS Simple Email Service Open Source alternative",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem minus facilis quia repudiandae quisquam, deleniti iure quos ipsumvoluptates commodi tenetur, sit laudantium distinctio rerum aliasvoluptatem nemo autem itaque, officiis totam magni repellat.",
    techStack: ["Golang", "Apache Kafka", "Docker", "Kubernetes"],
  },
  {
    name: "Private Block-chain from scratch",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem minus facilis quia repudiandae quisquam, deleniti iure quos ipsumvoluptates commodi tenetur, sit laudantium distinctio rerum aliasvoluptatem nemo autem itaque, officiis totam magni repellat.",
    techStack: ["Golang", "Apache Kafka", "Docker", "Kubernetes"],
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

export function ProjectDetails() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {projects.map((project, index) => {
        return (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="text-xl">
              {project.name}
            </AccordionTrigger>
            <AccordionContent>
              <p> {project.details}</p>
              <div className="flex space-x-2 text-lg">
                <p>Technologies :</p>
                {project.techStack.map((technology, index) => (
                  <p key={index}>{technology}</p>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
