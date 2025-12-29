import { FaChartLine, FaHandshake, FaGavel, FaBitcoin, FaMobileAlt, FaCalculator } from 'react-icons/fa';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-card">
                <div className="service-icon">{icon}</div>
                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description}</p>
                <a href="#contact" className="service-link">
                    اعرف المزيد
                    <span className="arrow">←</span>
                </a>
            </div>
        </div>
    );
};

const ServicesGrid = () => {
    const services = [
        {
            icon: <FaChartLine size={40} />,
            title: 'استراتيجية الأعمال',
            description: 'نساعدك في وضع استراتيجيات فعالة تضمن لك النمو والتطور في السوق',
        },
        {
            icon: <FaHandshake size={40} />,
            title: 'دعم التمويل',
            description: 'نوفر لك الدعم الكامل في الحصول على التمويل اللازم لمشروعك',
        },
        {
            icon: <FaGavel size={40} />,
            title: 'التمثيل القانوني',
            description: 'فريق قانوني متخصص لحماية حقوقك ومصالحك التجارية',
        },
        {
            icon: <FaBitcoin size={40} />,
            title: 'التمويل الرقمي',
            description: 'حلول تمويل رقمية مبتكرة تواكب التطور التكنولوجي',
        },
        {
            icon: <FaMobileAlt size={40} />,
            title: 'تطوير التطبيقات',
            description: 'تطوير تطبيقات احترافية تلبي احتياجات عملك وعملائك',
        },
        {
            icon: <FaCalculator size={40} />,
            title: 'الاستشارات المالية',
            description: 'استشارات مالية متخصصة لضمان الإدارة المثلى لأموالك',
        },
    ];

    return (
        <div className="row">
            {services.map((service, index) => (
                <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                />
            ))}
        </div>
    );
};

export default ServicesGrid;
