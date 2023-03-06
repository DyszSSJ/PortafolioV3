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
        <SwiperSlide>
          <a href="https://citas-react-proyecto.netlify.app">
            <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://pokedex-project-axel.netlify.app">
            <img src={Pokedex} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://nostalgic-curran-400b31.netlify.app">
            <img src={MusicApp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://control-gastos-proyect.netlify.app">
            <img src={HOC} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
