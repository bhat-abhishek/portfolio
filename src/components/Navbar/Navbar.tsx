import React from "react";
import { Michroma } from "next/font/google";
import NavLink from "./NavLink";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const Navbar = () => {
  return (
    <nav
      className={`flex text-lg space-x-8 mx-auto w-full justify-end py-5  items-center ${michroma.className} max-w-7xl bg-[#0A0919] text-white`}
    >
      <NavLink navigation="Home" />
      <NavLink navigation="Skills" />
      <NavLink navigation="Projects" />
      <NavLink navigation="Experience" />
      <NavLink navigation="Contact" />
    </nav>
  );
};

export default Navbar;
