"use client";
import React, { useState } from "react";
import { Michroma } from "next/font/google";
import NavLink from "./NavLink";
import "./navlink.styles.css";

import { IconMenu2, IconSquareRoundedX } from "@tabler/icons-react";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
interface Props {
  activeSection: string;
}

const DesktopNav : React.FC<Props> = ( { activeSection} ) => {
  return (
    <nav
      className={`hidden lg:flex fixed z-50 top-0 right-0 left-0 text-lg space-x-8 mx-auto w-full justify-end py-5 items-center ${michroma.className} max-w-[1400px] bg-[#0A0919] text-white`}
    >
      <NavLink navigation="home" />
      <NavLink navigation="skills" />
      <NavLink navigation="projects" />
      <NavLink navigation="experience" />
      <NavLink navigation="contact" />
      
    </nav>
  );
};
// const MobileNav = () => {
//   const [navbar, setNavbar] = useState(false);

//   const toggleMobileNav = () => {
//     setNavbar((prev) => !prev);
//   };

//   return (
//     <div className="hidden sticky top-0 right-0 left-0 flex-col text-white">
//       <div className="fixed top-0 right-0 w-full flex justify-end bg-purple-950 px-5 py-2 mb-5">
//         <button onClick={toggleMobileNav}>{!navbar && <IconMenu2 />}</button>
//       </div>
//       {navbar && (
//         <nav className="fixed top-0 right-0 flex flex-col h-dvh w-[70vw] z-50 p-2 bg-purple-900 text-white">
//           {navbar && (
//             <button
//               onClick={toggleMobileNav}
//               className="w-full flex justify-end p-2"
//             >
//               <IconSquareRoundedX />
//             </button>
//           )}
//           <NavLink navigation="home" />
//           <NavLink navigation="skills" />
//           <NavLink navigation="projects" />
//           <NavLink navigation="experience" />
//           <NavLink navigation="contact" />
//         </nav>
//       )}
//     </div>
//   );
// };

const Navbar: React.FC<Props> = ( { activeSection} ) => {
  return (
    <>
      <DesktopNav activeSection={activeSection}/>
      {/* <MobileNav /> */}
    </>
  );
};

export default Navbar;
