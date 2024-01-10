import React from "react";

import "./footer.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem"> Terms Of Use </li>
          <li className="menuItem"> Privacy-Policy </li>
          <li className="menuItem"> About </li>
          <li className="menuItem"> Blog </li>
          <li className="menuItem"> FAQ </li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          perspiciatis delectus ea ad assumenda tempore nam doloribus est
          nostrum ullam vero harum hic omnis deserunt, veniam temporibus nulla
          pariatur maiores necessitatibus facilis aliquam. Vitae quibusdam,
          ipsam eius ullam impedit illum perspiciatis quam rem ut modi?
        </div>
        <div className="socialIcons">
          <span className="icon"> <FaFacebook/> </span>
          <span className="icon">  <FaInstagram/> </span>
          <span className="icon">  <FaTwitter/> </span>
          <span className="icon"> <FaLinkedin/> </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
