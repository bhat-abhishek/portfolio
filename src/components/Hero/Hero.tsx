'use client'
import React, { useState, useEffect } from "react";
import { Michroma } from "next/font/google";
import "./hero.styles.css";
import BinaryLine from "./BinaryLine";
import BinaryLineReverse from "./BinaryLineReverse";
const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });

import ContactIcons from "./ContactIcons";
import TextGenerateEffectDemo from "./TextGenerate";
import { TypewriterEffectSmoothDemo } from "./Title";
import MovingBorderButton from "./Button";
import { HoverBorderGradientButton } from "./HoverBorderButton";

const Hero = () => {

  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    // Function to handle window resize and update state
    const handleResize = () => {
      setMobileView(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Add event listener
    window.addEventListener("resize", handleResize);
    // Initial check
    handleResize();

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="relative px-4 flex lg:pt-16 pb-10">
      <div className="w-full pt-10 flex z-10 flex-col justify-center space-y-10 lg:basis-1/2">
        <div className="space-y-5 flex flex-col justify-center">
          <p className="text-2xl">Hey , I am Abhishek Bhat</p>
          <TypewriterEffectSmoothDemo />
          {/* <div className="text-4xl font-bold text-center">
            <div className="typewriter-container">
              <div className="typewriter">Innovation.</div>
              <div className="typewriter">Growth.</div>
              <div className="typewriter">Success.</div>
            </div>
          </div> */}
          <TextGenerateEffectDemo words="My passion lies in transitioning from working with engineering hardware to developing software. I have been working as a full-stack developer in the software industry for the past year." />
          <div className="space-x-5">
            <MovingBorderButton buttonText="Know more" />
          </div>
        </div>
        <ContactIcons />
      </div>
      <div
        className={`absolute -z-10 w-full lg:relative lg:flex lg:basis-1/2 justify-end space-x-3 ${
          mobileView ? "opacity-20" : "opacity-100"
        }`}
      >
        <div className="flex max-h-[90vh] lg:max-h-[80vh] justify-end w-full overflow-hidden">
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
    </div>
  );
};

export default Hero;
