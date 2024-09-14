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
  const [opactiy, setOpacity] = useState('opacity-20');

  useEffect(() => {
    // Function to handle window resize and update state
    const handleResize = () => {
      setMobileView(window.innerWidth <= 768); 
      
      if(window.innerWidth > 768) { 
        setOpacity('opacity-100')
      }
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
          <TextGenerateEffectDemo words="My passion lies in crafting elegant digital solutions that seamlessly blend form and function. With an insatiable curiosity for technology, I transform ideas into powerful, user-centric applications" />
          <div className="space-x-5">
            <MovingBorderButton buttonText="Know more" />
          </div>
        </div>
        <ContactIcons />
      </div>
      <div
        className={`absolute -z-10 lg:z-0 w-full lg:relative lg:flex lg:basis-1/2 justify-end space-x-3  ${opactiy}`}
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
