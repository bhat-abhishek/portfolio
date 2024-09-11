import React from "react";
import { Michroma } from "next/font/google";
import "./hero.styles.css";
import BinaryLine from "./BinaryLine";
import BinaryLineReverse from "./BinaryLineReverse";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });

import ContactIcons from "./ContactIcons";
import TextGenerateEffectDemo from "./TextGenerate";
import { TypewriterEffectSmoothDemo } from "./Title";
import MovingBorderButton from "./Button";

const Hero = () => {
  return (
    <div className="relative px-4 flex pt-16 pb-10">
      <section className="w-full flex flex-col justify-center space-y-10 lg:basis-1/2">
        <div className="space-y-5 flex flex-col justify-center">
          <p className="text-2xl">Hey , I am Abhishek Bhat</p>
          <TypewriterEffectSmoothDemo />
          <TextGenerateEffectDemo words="My passion lies in transitioning from working with engineering hardware to developing software. I have been working as a full-stack developer in the software industry for the past year." />
          <div className="space-x-5">
            <MovingBorderButton buttonText="Know more" />
            <MovingBorderButton buttonText="Contact" />
          </div>
        </div>
        <ContactIcons />
      </section>
      <section className="absolute lg:relative lg:flex lg:basis-1/2 justify-end space-x-3">
        <div className="flex max-h-[80vh] justify-end w-full overflow-hidden">
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
      </section>
    </div>
  );
};

export default Hero;
