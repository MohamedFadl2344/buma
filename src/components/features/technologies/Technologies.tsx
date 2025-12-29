import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import TechGrid from './technologies/TechGrid';
import './Technologies.css';

const Technologies = () => {
    const techRef = useScrollAnimation({ threshold: 0.2 });

    return (
        <section className="technologies-section" ref={techRef}>
            <div className="container">
                <div className="section-header text-center mb-5">
                    <p className="section-subtitle">التقنيات التي نستخدمها</p>
                </div>

                <TechGrid />
            </div>
        </section>
    );
};

export default Technologies;
