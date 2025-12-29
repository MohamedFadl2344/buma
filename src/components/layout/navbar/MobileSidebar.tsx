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
            />

            {/* Sidebar */}
            <div className={`mobile-sidebar ${isOpen ? 'active' : ''}`}>
                <div className="mobile-sidebar-header">
                    <div className="mobile-brand">
                        <div className="brand-icon">
                            <FaBriefcase />
                        </div>
                        <span className="brand-name">التزام للإدارة</span>
                    </div>
                    <button className="mobile-close-btn" onClick={onClose}>
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
