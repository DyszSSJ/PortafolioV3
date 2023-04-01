import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/BuscadorBebidas.jfif";
import upTask from "../../img/upTask.jpeg";
import GuitarLA from "../../img/GuitarLA.jpeg";
import cotizador from "../../img/cotizadorPrestamos.jpg";
import Perfumes from "../../img/EcommercePerfumes.jpg";
import peliculas from "../../img/trailerPeliculas.jpg";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>
        Algunos de mis proyectos
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
          <a href="https://trailers-peliculas.netlify.app/">
            <img src={peliculas} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={upTask} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GuitarLA} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Perfumes} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://cotizador-de-prestamo.netlify.app/">
            <img src={cotizador} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://buscadordebebidas-proyect.netlify.app">
            <img src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
