import { FaBars, FaTimes } from 'react-icons/fa';

interface MobileMenuButtonProps {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
}

const MobileMenuButton = ({ isOpen, onClick, className = '' }: MobileMenuButtonProps) => {
    return (
        <button
            className={`mobile-menu-btn d-lg-none ${className}`}
            onClick={onClick}
            aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-sidebar"
        >
            {isOpen ? <FaTimes /> : <FaBars />}
        </button>
    );
};

export default MobileMenuButton;
