import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/BuscadorBebidas.jfif";
import Ecommerce from "../../img/CitasVeterinario.jfif";
import HOC from "../../img/CotizadorAutos.jfif";
import MusicApp from "../../img/Criptomonedas.jfif";
import Pokedex from "../../img/Pokedex.jfif";
import upTask from "../../img/upTask.jpeg";
import peliculasApp from "../../img/peliculasApp.jpeg";
import GuitarLA from "../../img/GuitarLA.jpeg";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>
        Proyectos recientes
      </span>
      <span>Portafolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={upTask} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GuitarLA} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={peliculasApp} alt="" className="peliculasApp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pokedex} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
