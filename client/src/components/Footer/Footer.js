import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Facebook from "../../assets/facebook.png";

import Logo from "../../assets/logoGray.png";
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f"></div>
      <div className="blur blur-f"></div>
    </div>
  );
};

export default Footer;
