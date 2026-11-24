import React from "react";
interface Props {
  navigation: string;
  activeSection: string;
  // Optional real-page link (e.g. /blog). Defaults to an in-page #anchor.
  href?: string;
}
import Link from "next/link";
import "./navlink.styles.css";

const NavLink: React.FC<Props> = ({ navigation, activeSection, href }) => {
  const isActive = activeSection === navigation;
  return (
    <li className={`${isActive ? "nav-link active" : "nav-link"} cursor-pointer capitalize my-2 lg:my-0`}>
      <Link href={href ?? `#${navigation}`}>
        <span className="cursor-pointer">{navigation}</span>
      </Link>
    </li>
  );
};

export default NavLink;
