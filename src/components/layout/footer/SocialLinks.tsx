import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div className="social-links" role="list" aria-label="روابط التواصل الاجتماعي">
            <a href="#" className="social-link" aria-label="Facebook" role="listitem">
                <FaFacebookF />
            </a>
            <a href="#" className="social-link" aria-label="Twitter" role="listitem">
                <FaTwitter />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn" role="listitem">
                <FaLinkedinIn />
            </a>
            <a href="#" className="social-link" aria-label="Instagram" role="listitem">
                <FaInstagram />
            </a>
        </div>
    );
};

export default SocialLinks;
