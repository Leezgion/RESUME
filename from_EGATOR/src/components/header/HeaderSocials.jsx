import { BsDribbble, BsGithub, BsLinkedin } from "react-icons/bs";

import React from "react";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://dribbble.com" target="_blank" rel="noreferrer">
        <BsDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
