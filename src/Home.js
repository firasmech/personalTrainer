import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoDribbble } from "react-icons/io5";
import "./styles/Home.css";


import image from './img/IMG_1417.JPG'
const Home = () => {
    return (      
    <section className="home section">
        <div className="home__rectangle"></div>

        <div className="home__container container grid">
            <div className="home__perfil perfil">
                <div className="perfil__content">
                    <img src={image} alt="image" className="perfil__img" />
                </div>
            </div>
            <div className="home__content grid">
                <div className="home__data grid">
                    <h1 className="home__name">Algerian In Ottawa</h1>
                    <h2 className="home__profession">Web & Visual Designer</h2>
                    <div className="home__social">
                        <a href="https://github.com" target="_blank" className="home__social-link">
                        <FaGithub />
                        </a>
                        <a href="https://liunkedin.com" target="_blank" className="home__social-link">
                        <FaLinkedin />

                        </a>
                        <a href="https://dribbble.com " target="_blank" className="home__social-link">
                        <IoLogoDribbble />

                         </a>
                    </div>
                </div>
                <a href="./pdf/My_Resume#F.pdf" className="home__button button">Download CV</a>

            </div>
        </div>

    </section>
     );
}

export default Home;