import { Link, useLocation } from 'react-router-dom';

interface NavLinksProps {
    isMobile?: boolean;
    onLinkClick?: () => void;
}

const NavLinks = ({ isMobile = false, onLinkClick }: NavLinksProps) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const navLinks = [
        { name: 'الرئيسية', href: '/', isRoute: true },
        { name: 'من نحن', href: '#about' },
        { name: 'الخدمات', href: '#services' },
        { name: 'تواصل معنا', href: '#contact' },
    ];

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            // Only prevent default and scroll if we're on home page
            if (isHomePage) {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // If not on home page, navigate to home first
                window.location.href = '/' + href;
            }
        }
        onLinkClick?.();
    };

    return (
        <ul className={isMobile ? 'mobile-nav-links' : 'nav-links'}>
            {navLinks.map((link, index) => (
                <li key={index}>
                    {link.isRoute ? (
                        <Link to={link.href} onClick={onLinkClick}>
                            {link.name}
                        </Link>
                    ) : (
                        <a
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                        >
                            {link.name}
                        </a>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
