import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";
import seediconHomePage from "../../../public/assets/seedicon-homepage.png";
import seedicongLandingPage from "../../../public/assets/seedicon-landing-page.png";
import pbLandingPage from '../../../public/assets/pb-landing-page.png'
import pbEventsPage from '../../../public/assets/pb-events.png';

const Experiences = () => {
  const data = [
    {
      company: "FWC Inc",
      role: "Software Developer",
      content: (
        <div>
          <p className="dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <span className="font-bold text-lg">
              Founding Engineer at Seedicon
            </span>{" "}
            – Played a key role in building and scaling the platform&apos;s
            backend architecture from the ground up.
          </p>
          <p className=" dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <span className="font-bold text-lg">Backend Development</span> -
            Designed and implemented a scalable backend system to handle
            high-traffic demands, ensuring smooth and efficient performance.
          </p>
          <p className=" text-xs md:text-sm font-normal mb-8">
            <span className="font-bold text-lg">
              {" "}
              Cloud Infrastructure and DevOps
            </span>{" "}
            - Leveraged cloud services and automated DevOps pipelines to enhance
            deployment efficiency and system reliability.
          </p>
          <p className="text-xs md:text-sm font-normal mb-8">
            <span className="font-bold text-lg">
              Collaborative Problem-Solving
            </span>{" "}
            – Worked closely with management and cross-functional teams to
            deliver innovative solutions, driving the success of Seedicon&apos;s
            core features.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={seedicongLandingPage}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={seediconHomePage}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      company: "Technolab Softwares",
      role: "Machine learning engineer intern",
      content: (
        <div className="text-white">
          <p className="text-xs md:text-sm font-normal mb-8">
            <span className="font-bold text-lg">API-based Web Scraping</span> –
            Utilized an API-based web scraping technique to obtain a dataset of
            10,000+ playlists from Spotify.
          </p>

          <p className="text-xs md:text-sm font-normal mb-8">
            <span className="font-bold text-lg">
              Data Processing and Analysis
            </span>{" "}
            – Processed and analyzed the data to uncover meaningful insights.
            Applied data exploration, cleaning techniques, and feature
            engineering to prepare the dataset for modeling.
          </p>

          <p className="text-xs md:text-sm font-normal mb-8">
            <span className="font-bold text-lg">
              Recommendation System Development
            </span>{" "}
            – Implemented cosine similarity and collaborative filtering
            algorithms to build a recommendation system based on the Spotify
            playlists dataset.
          </p>
        </div>
      ),
    },
    {
      company: "PRAKASH BHARATI",
      role: "Webmaster Intern",
      content: (
        <div>
          <div className="mb-8">
            <p className="text-xs md:text-sm font-normal mb-8">
              <span className="font-bold text-lg">Website Development</span> –
              Developed and designed the website&apos;s frontend and backend,
              ensuring a user-friendly interface and robust functionality.
            </p>

            <p className="text-xs md:text-sm font-normal mb-8">
              <span className="font-bold text-lg">Content Management</span> –
              Managed website content updates and maintenance, including
              creating and editing web pages to keep information current and
              relevant.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={pbLandingPage}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={pbEventsPage}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="px-4">
      <Timeline data={data} />
    </div>
  );
};

export default Experiences;
