interface HeroContentProps {
    title: string;
    subtitle: string;
    description: string;
}

const HeroContent = ({ title, subtitle, description }: HeroContentProps) => {
    return (
        <div className="hero-content">
            <div className="hero-badge mb-3">
                <span>مرحباً بك في عالم الأعمال الاحترافي</span>
            </div>

            <h1 className="hero-title">
                {title}
                <br />
                <span className="hero-title-accent">{subtitle}</span>
            </h1>

            <p className="hero-description">{description}</p>

            <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary-custom btn-lg">
                    تواصل معنا
                </a>
                <a href="#about" className="btn btn-outline-custom btn-lg">
                    اعرف المزيد
                </a>
            </div>
        </div>
    );
};

export default HeroContent;
