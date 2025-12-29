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
            aria-label="Toggle menu"
        >
            {isOpen ? <FaTimes /> : <FaBars />}
        </button>
    );
};

export default MobileMenuButton;
