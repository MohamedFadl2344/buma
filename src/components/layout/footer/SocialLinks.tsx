import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
    const socials = [
        { icon: <FaFacebook size={20} />, href: '#' },
        { icon: <FaTwitter size={20} />, href: '#' },
        { icon: <FaLinkedin size={20} />, href: '#' },
        { icon: <FaInstagram size={20} />, href: '#' },
    ];

    return (
        <div className="social-links">
            {socials.map((social, index) => (
                <a key={index} href={social.href} className="social-link">
                    {social.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
