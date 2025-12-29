import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase } from 'react-icons/fa';
import NavLinks from './navbar/NavLinks';
import MobileMenuButton from './navbar/MobileMenuButton';
import MobileSidebar from './navbar/MobileSidebar';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>
            <nav className={`navbar-custom ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
                <div className="container">
                    <div className="navbar-content">
                        {/* Logo */}
                        <Link to="/" className="navbar-brand" aria-label="التزام للإدارة - الصفحة الرئيسية">
                            <div className="brand-icon" aria-hidden="true">
                                <FaBriefcase />
                            </div>
                            <span className="brand-name">التزام للإدارة</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="d-none d-lg-block">
                            <NavLinks />
                        </div>

                        {/* CTA Button */}
                        <div className="navbar-actions d-none d-lg-flex">
                            <a href="#contact" className="btn btn-primary-custom">
                                ابدأ الآن
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <MobileMenuButton
                            isOpen={isMobileMenuOpen}
                            onClick={toggleMobileMenu}
                            className={isMobileMenuOpen ? 'd-none' : ''}
                        />
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <MobileSidebar isOpen={isMobileMenuOpen} onClose={closeMobileMenu}>
                <NavLinks isMobile onLinkClick={closeMobileMenu} />
                <div className="mobile-cta mt-4">
                    <a href="#contact" className="btn btn-primary-custom w-100" onClick={closeMobileMenu}>
                        ابدأ الآن
                    </a>
                </div>
            </MobileSidebar>
        </>
    );
};









export default Navbar;
