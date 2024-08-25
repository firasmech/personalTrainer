import { Link } from 'react-router-dom';
import image from './img/IMG_1417.JPG';
import c from './img/c.png';
import cplus from './img/cplus.png';
import java from './img/java.png';
import './styles/About.css';

const About = () => {
    return (
        <section className="about section">
            <h2 className="section__title">
                My Personal<br></br>
                Information
            </h2>

            <div className="about__container about__page container grid">
                <div className="about__perfil perfil">
                    <div className="perfil__content">
                        <img src={image} alt="Profile" className="perfil__img" />
                    </div>
                </div>
                <div className="about__content grid">
                    <div className="about__data grid">
                        <div className="about__info grid">
                            <h1 className="about__name">Algerian In Ottawa</h1>
                            <h2 className="about__profession">Web & Visual Designer</h2>
                            <p className="about__description">
                                As a passionate <b>Software Developer</b> with a strong foundation in <b>Computer Science</b> and <b>Computer Engineering Technology</b>, I specialize in crafting cutting-edge web pages and applications with a keen focus on <b>UI/UX design</b>. With extensive experience in both frontend and backend development, I bring a holistic approach to every project I undertake.
                            </p>
                            <p className="about__description">
                                Proficient in multiple programming languages and web technologies, I have successfully developed a range of projects from blockchain systems to e-commerce platforms. Fluent in Arabic, French, and English, I excel in collaborating with diverse teams to bring ideas to life. My clients are consistently satisfied with the innovative and efficient solutions I deliver.
                            </p>
                        </div>
                        <Link to="/contact" className="about__button button">Contact Me</Link>
                    </div>
                    <div className="about__skills">
                        <h3 className="about__skills-title">My Skills</h3>
                        <div className="about__skills-content grid">
                            <img src={java} alt="Java" className="about__skills-img" />
                            <img src={c} alt="C" className="about__skills-img" />
                            <img src={cplus} alt="C++" className="about__skills-img" />
                            {/* Add other skill images similarly */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
