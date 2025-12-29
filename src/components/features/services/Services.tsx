import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import ServicesGrid from './servicessection/ServicesGrid';
import './Services.css';

const Services = () => {
    const servicesRef = useScrollAnimation({ threshold: 0.1 });

    return (
        <section id="services" className="services-section" ref={servicesRef}>
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">
                        نقدم مجموعة شاملة من <span className="text-accent">الخدمات</span>
                    </h2>
                    <p className="section-description">
                        المصممة خصيصاً لتعزيز نجاح أعمالك
                    </p>
                </div>

                <ServicesGrid />
            </div>
        </section>
    );
};

export default Services;
