import React from "react";
interface Props {
  navigation: string;
}
import Link from "next/link";
import "./navlink.styles.css";

const NavLink: React.FC<Props> = ({ navigation }) => {
  return (
    <li className={`nav-link cursor-pointer capitalize my-2 lg:my-0`}>
      <Link href={`#${navigation}`} >
        <span className="cursor-pointer">{navigation}</span>
      </Link>
    </li>
  );
};

export default NavLink;
