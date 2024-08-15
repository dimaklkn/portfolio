import React from "react";
import github from "../images/github.png";
const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/dimaklkn" target="_blank" rel="noreferrer">
        <img src={github} alt="github" />
      </a>
    </div>
  );
};

export default Footer;
