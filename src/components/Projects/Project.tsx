"use client";
import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import './projects.styles.css'

interface Props {
  name: string;
  details: string;
  techStack: string[];
}

const Project: React.FC<Props> = ({ name, details, techStack }) => {
  const [dropDown, setDropdown] = useState(false);

  const handleClick = ()=> setDropdown(prev => !prev);

  return (
    <div className="border-b-[1px] border-[#66fcf1] space-y-2 py-2">
      <div className="text-2xl flex items-center justify-between cursor-pointer transition" onClick={handleClick}>
        <p>{name}</p>
        <p>
          {" "}
          <BiChevronRight className="text-2xl" />
        </p>
      </div>
      {dropDown && (
        <div className="dropdown space-y-2">
          <p className="text-sm text-justify">
            {details}
          </p>
          <div className="text-lg flex space-x-2">
            <p>Tech Stack :</p> 
            <div className="flex space-x-2">{techStack.map( tech => ( 
                <p>{tech}</p>
            ))}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
