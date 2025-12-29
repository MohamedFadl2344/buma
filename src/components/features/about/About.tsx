import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import AboutContent from './aboutsection/AboutContent';
import AboutImages from './aboutsection/AboutImages';
import AboutStats from './aboutsection/AboutStats';
import './About.css';

const About = () => {
    const aboutRef = useScrollAnimation({ threshold: 0.2 });

    return (
        <section id="about" className="about-section" ref={aboutRef}>
            <div className="container">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <AboutContent />
                        <AboutStats />
                    </div>
                    <div className="col-lg-7">
                        <AboutImages />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
