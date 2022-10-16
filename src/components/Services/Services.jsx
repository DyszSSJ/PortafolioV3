import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }} className="span1">
          Mis
        </span>
        <span className="span2">Tecnologías </span>
        <spane className="span3">
          Todas las tecnologias que uso para desarrollar mis proyectos
        </spane>
        {/* <div className="blur s-blur1" style={{ background: "#caf0f8" }}></div> */}
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "18rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Diseño"}
            detail={
              "CSS, SASS, Bootstrap, Material UI, Tailwindcss, Headless UI"
            }
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "1rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={
              "HTML, JavaScript, React, Express, Next JS, MongoDB, Prisma, Remix, Strapi, Socket IO, Flutter, Dart"
            }
          />
        </motion.div>
        {/* <div className="blur s-blur2" style={{ background: "#caf0f8" }}></div> */}
      </div>
    </div>
  );
};

export default Services;
