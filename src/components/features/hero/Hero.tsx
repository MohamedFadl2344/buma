import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import HeroContent from './herosection/HeroContent';
import HeroBackground from './herosection/HeroBackground';
import './Hero.css';

const Hero = () => {
    const heroRef = useScrollAnimation({ threshold: 0.2 });

    return (
        <section id="home" className="hero-section" ref={heroRef}>
            <HeroBackground />

            <div className="container">
                <div className="row align-items-center min-vh-100">
                    <div className="col-lg-12">
                        <HeroContent
                            title="قيادة المستقبل:"
                            subtitle="استراتيجيات أعمال متبكرة"
                            description="نساعدك في تحويل رؤيتك إلى واقع ملموس من خلال استراتيجيات مبتكرة وحلول متقدمة تضمن لك التفوق في عالم الأعمال"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
