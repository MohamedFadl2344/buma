import { Link } from 'react-router-dom';

const FooterLinks = () => {
    const footerSections = [
        {
            title: 'روابط سريعة',
            links: [
                { name: 'الرئيسية', href: '/', isRoute: true },
                { name: 'من نحن', href: '#about' },
                { name: 'الخدمات', href: '#services' },
                { name: 'تواصل معنا', href: '#contact' },
            ],
        },
        {
            title: 'الخدمات',
            links: [
                { name: 'الإدارة المالية', href: '#services' },
                { name: 'التمويل الرقمي', href: '#services' },
                { name: 'الاستشارات', href: '#services' },
                { name: 'التطوير', href: '#services' },
            ],
        },
        {
            title: 'الدعم',
            links: [
                { name: 'سياسة الخصوصية', href: '/privacy-policy', isRoute: true },
                { name: 'الشروط والأحكام', href: '/terms-conditions', isRoute: true },
                { name: 'شروط المستخدم', href: '/terms', isRoute: true },
            ],
        },
    ];

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="row">
            {footerSections.map((section, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                    <h3 className="footer-heading">{section.title}</h3>
                    <ul className="footer-links-list">
                        {section.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                                {link.isRoute ? (
                                    <Link to={link.href}>{link.name}</Link>
                                ) : (
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href)}
                                    >
                                        {link.name}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default FooterLinks;
