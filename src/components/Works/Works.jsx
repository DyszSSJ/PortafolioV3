import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import VelaOne from "../../img/VelaOne.jpg";
import Proficient from "../../img/proficient.png";

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Mi
          </span>
          <span style={{ color: darkMode ? "white" : "" }}>
            {" "}
            experiencia laboral
          </span>
        </div>
        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <a href="https://www.vela1.com/es/inicio-sistemas-de-punto-de-venta/">
              <img className="imageVela" src={VelaOne} alt="" />
            </a>
          </div>{" "}
          <div className="w-secCircle">
            <a href="https://weareproficient.com/">
              <img className="imageVela" src={Proficient} alt="" />
            </a>
          </div>{" "}
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
