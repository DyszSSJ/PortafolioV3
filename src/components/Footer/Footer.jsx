import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import arrow from "../../img/arrow.png";
import wave_turquesa from "../../img/wave-turquesa.webp";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <img src={wave_turquesa} alt="" style={{ width: "100%", height: "35rem", marginTop: "-10rem"  }} />
      <div className="f-content">
        <span>adtellezalvarez@gmail.com</span>
        <div className="divFlex">
          <div className="f-icons">
            <a
              href="https://www.instagram.com/axel__tellez__/"
              target="_blanck"
            >
              <Insta size={"3rem"} color={"rgba(19, 19, 19, 0.692)"} />
            </a>
            <a
              href="https://www.facebook.com/david.tellezalvarez.7/"
              target="_blanck"
            >
              <Facebook color={"rgba(22, 22, 22, 0.692)"} size={"3rem"} />
            </a>
            <a href="https://github.com/DyszSSJ" target="_blanck">
              <Gitub color={"rgba(22, 22, 22, 0.692)"} size={"3rem"} />
            </a>
          </div>
          <div className="btnRefresh">
            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
              <img src={arrow} alt="img" className="iconFlecha" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
