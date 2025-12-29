import { Link } from 'react-router-dom';
import { FaBriefcase, FaExclamationTriangle } from 'react-icons/fa';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notfound-page">
            <div className="notfound-background"></div>

            <div className="notfound-content">
                <div className="notfound-card">
                    <div className="error-icon">
                        <FaExclamationTriangle />
                    </div>

                    <h1 className="error-code">404</h1>

                    <h2 className="error-title">عذراً، الصفحة غير موجودة</h2>

                    <p className="error-message">
                        يبدو أن الرابط الذي تحاول الوصول إليه غير صحيح أو تمت إزالته.
                        <br />
                        لا تقلق، يمكنك العودة إلى مسارك الصحيح.
                    </p>

                    <Link to="/" className="btn-home">
                        <span>العودة للصفحة الرئيسية</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15 10H5M5 10L10 15M5 10L10 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                <div className="notfound-footer">
                    <div className="footer-brand">
                        <div className="brand-icon">
                            <FaBriefcase />
                        </div>
                        <span className="brand-name">التزام للإدارة</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
