import "./nav.css";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import React, { useState } from "react";

import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const navList = [
    {
      tag: <AiOutlineHome />,
      href: "#",
    },
    {
      tag: <AiOutlineUser />,
      href: "#about",
    },
    {
      tag: <BiBook />,
      href: "#experience",
    },
    {
      tag: <RiServiceLine />,
      href: "#services",
    },
    {
      tag: <BiMessageSquareDetail />,
      href: "#contact",
    },
  ];
  return (
    <nav>
      {navList.map((item) => {
        return (
          <a
            href={item.href}
            onClick={() => setActiveNav(item.href)}
            className={activeNav === item.href ? "active" : ""}
          >
            {item.tag}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
