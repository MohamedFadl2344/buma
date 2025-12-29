import { FaTimes, FaBriefcase } from 'react-icons/fa';

interface MobileSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const MobileSidebar = ({ isOpen, onClose, children }: MobileSidebarProps) => {
    return (
        <>
            {/* Overlay */}
            <div
                className={`mobile-overlay ${isOpen ? 'active' : ''}`}
                onClick={onClose}
                aria-hidden={!isOpen}
            />

            {/* Sidebar */}
            <div
                className={`mobile-sidebar ${isOpen ? 'active' : ''}`}
                id="mobile-sidebar"
                role="dialog"
                aria-label="Mobile navigation menu"
                aria-hidden={!isOpen}
            >
                <div className="mobile-sidebar-header">
                    <div className="mobile-brand">
                        <div className="brand-icon" aria-hidden="true">
                            <FaBriefcase />
                        </div>
                        <span className="brand-name">التزام للإدارة</span>
                    </div>
                    <button
                        className="mobile-close-btn"
                        onClick={onClose}
                        aria-label="Close mobile menu"
                    >
                        <FaTimes />
                    </button>
                </div>
                <div className="mobile-sidebar-content">
                    {children}
                </div>
            </div>
        </>
    );
};

export default MobileSidebar;
