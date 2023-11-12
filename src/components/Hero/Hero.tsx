import React from "react";
import { Michroma } from "next/font/google";
import "./hero.styles.css";
import BinaryLine from "./BinaryLine";
import BinaryLineReverse from "./BinaryLineReverse";
const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
import { BsGithub, BsLinkedin, BsReddit } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative h-[90vh] flex">
      <section className="w-full basis-1/2  flex flex-col justify-center space-y-20">
        <div className="space-y-5 flex flex-col justify-center -mt-40">
          <p className="text-2xl">Hey , I am Abhishek Bhat</p>
          <p className={`${michroma.className} text-5xl`}>
            Fullstack Developer
          </p>
          <p className="">
          I am an Electronics and communication engineering graduate . My passion lies with the engineering from designing hardware systems to developing softwares. Currently working as a full stack developer in the software industry from the past one year.
          </p>
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
          <BsGithub className="text-3xl cursor-pointer hover:scale-150 transition-all" />
          <BsLinkedin className="text-3xl cursor-pointer hover:scale-150 transition-all" />
          <FaSquareXTwitter className="text-3xl cursor-pointer hover:scale-150 transition-all" />
          <BsReddit
            className="text-3xl hover:scale-150 transition-all cursor-pointer"
          />
        </div>
      </section>
      <div className="moving-text-wrapper flex justify-end h-full basis-1/2 space-x-3">
        {/* <BinaryLine animationDelay={'0.9s'} />
        <BinaryLineReverse animationDelay={"0.9s"} />
        <BinaryLine animationDelay={"0.75s"} />
        <BinaryLineReverse animationDelay={"0.75s"} />
        <BinaryLine animationDelay={"0.5s"} />
        <BinaryLineReverse animationDelay={"0.5s"} />
        <BinaryLine animationDelay={"0.45s"} />
        <BinaryLineReverse animationDelay={"0.45s"} />
        <BinaryLine animationDelay={'0.5s'} />
        <BinaryLineReverse animationDelay={"0.5s"} />
        <BinaryLine animationDelay={"0.75s"} />
        <BinaryLineReverse animationDelay={"0.75s"} />
        <BinaryLine animationDelay={"0.9s"} />
        <BinaryLineReverse animationDelay={"0.9s"} /> */}
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
