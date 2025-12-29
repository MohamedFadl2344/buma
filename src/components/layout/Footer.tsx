import { FaBriefcase } from 'react-icons/fa';
import SocialLinks from './footer/SocialLinks';
import FooterLinks from './footer/FooterLinks';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                {/* Footer Top */}
                <div className="footer-top">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="footer-brand">
                                <div className="brand-icon">
                                    <FaBriefcase />
                                </div>
                                <span className="brand-name">التزام للإدارة</span>
                            </div>
                            <p className="footer-tagline">
                                شريكك الموثوق في عالم الأعمال والتطوير
                            </p>
                        </div>
                        <div className="col-lg-6 text-lg-start">
                            <SocialLinks />
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="footer-middle mb-5">
                    <FooterLinks />
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-end mb-3 mb-md-0">
                            <p className="footer-copyright">
                                © {currentYear} التزام للإدارة. جميع الحقوق محفوظة.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-start">
                            <p className="footer-made">
                                صنع بـ ❤️ في المملكة العربية السعودية
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
