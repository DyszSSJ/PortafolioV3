import React, { useContext } from "react";
import "./Intro.css";
import glassesimoji from "../../img/glassesimoji.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import hermano from "../../img/hermano.png";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hola soy</span>
          <span>Axel David Téllez Álvarez</span>
          <span>
            Soy desarrollador Front End Developer con experiencia en desarrollo,
            diseño de aplicaciones web y moviles.
          </span>
        </div>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/DyszSSJ" target="_blanck">
            <Gitub color={"rgb(64, 184, 168)"} size={"6rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/axel-david-tellez-alvarez-63b0871b7/"
            target="_blanck"
          >
            <Linkedin color={"rgb(64, 184, 168)"} size={"6rem"} />
          </a>
          <a href="https://www.instagram.com/axel__tellez__/" target="_blanck">
            <Insta size={"6rem"} color={"rgb(64, 184, 168)"} />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img className="imgPrincipal" src={hermano} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-46%" }}
          whileInView={{ left: "-14%" }}
          transition={transition}
          src={glassesimoji}
          className="emogiImg"
          alt=""
        />

        <motion.div
          initial={{ top: "4%", left: "104%" }}
          whileInView={{ left: "70%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv
            img={crown}
            text1="Web"
            text2="Developer"
            className="imgCrown"
          />
        </motion.div>

        <div className="blur" style={{ background: "#caf0f8" }}></div>
        <div
          className="blur"
          style={{
            background: "#caf0f8",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
