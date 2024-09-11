import React from "react";
import { Michroma } from "next/font/google";
import "./hero.styles.css";
import BinaryLine from "./BinaryLine";
import BinaryLineReverse from "./BinaryLineReverse";
const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
import { BsGithub, BsLinkedin, BsReddit } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import ContactIcons from "./ContactIcons";
import TextGenerateEffectDemo from "./TextGenerate";
import { TypewriterEffectSmoothDemo } from "./Title";

const Hero = () => {
  return (
    <div className="relative h-[90vh] flex">
      <section className="w-full basis-1/2  flex flex-col justify-center space-y-20">
        <div className="space-y-5 flex flex-col justify-center -mt-40">
          <p className="text-2xl">Hey , I am Abhishek Bhat</p>
          <TypewriterEffectSmoothDemo />
          <TextGenerateEffectDemo words=" I am an Electronics and communication engineering graduate . My passion lies with the engineering from designing hardware systems to developing softwares. Currently working as a full stack developer in the software industry from the past one year." />
          <div className="space-x-5">
            <button className="bg-[#66fcf1] text-[#0B0c10] px-2 py-1 rounded-md">
              Know more
            </button>
            <button className="bg-[#66fcf1]  text-[#0B0c10] px-2 py-1 rounded-md">
              Contact
            </button>
          </div>
        </div>
        <div className="text-lg flex space-x-8 mt-20">
          <ContactIcons />
        </div>

      </section>
      <div className="moving-text-wrapper flex justify-end h-full basis-1/2 space-x-3">
        <BinaryLine animationDelay="0.9s" />
        <BinaryLineReverse animationDelay="0.8s" />
        <BinaryLine animationDelay="0.7s" />
        <BinaryLineReverse animationDelay="0.6s" />
        <BinaryLine animationDelay="0.5s" />
        <BinaryLineReverse animationDelay="0.7s" />
        <BinaryLine animationDelay="0.7s" />
        <BinaryLineReverse animationDelay="0.8s" />
        <BinaryLine animationDelay="0.9s" />
      </div>
    </div>
  );
};

export default Hero;
