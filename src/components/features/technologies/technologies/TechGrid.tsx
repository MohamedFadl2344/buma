import { FaReact, FaStripe } from 'react-icons/fa';
import { SiStrapi, SiEthereum, SiNextdotjs } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

interface TechItemProps {
    icon: React.ReactNode;
    name: string;
}

const TechItem = ({ icon, name }: TechItemProps) => {
    return (
        <div className="tech-item">
            <div className="tech-icon">{icon}</div>
            <span className="tech-name">{name}</span>
        </div>
    );
};

const TechGrid = () => {
    const technologies = [
        { icon: <FaReact size={24} />, name: 'React' },
        { icon: <SiStrapi size={24} />, name: 'Strapi' },
        { icon: <FaStripe size={24} />, name: 'Stripe' },
        { icon: <SiEthereum size={24} />, name: 'Ethereum' },
        { icon: <TbBrandFramerMotion size={24} />, name: 'Framer' },
        { icon: <SiNextdotjs size={24} />, name: 'Next.js' },
    ];

    return (
        <div className="tech-grid">
            {technologies.map((tech, index) => (
                <TechItem key={index} icon={tech.icon} name={tech.name} />
            ))}
        </div>
    );
};

export default TechGrid;
