import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { FaLock } from 'react-icons/fa';
import './CTA.css';

const CTA = () => {
    const ctaRef = useScrollAnimation({ threshold: 0.2 });

    return (
        <section className="cta-section" ref={ctaRef}>
            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">جاهز لنقل أعمالك إلى المستوى التالي؟</h2>
                    <p className="cta-description">
                        احجز استشارتك المجانية اليوم ودعنا نساعدك في وضع خطة عمل واضحة لتحقيق النجاح المستدام.
                    </p>

                    <div className="cta-form">
                        <input
                            type="email"
                            className="cta-input"
                            placeholder="بريدك الإلكتروني"
                        />
                        <button className="cta-button">
                            تواصل معنا
                        </button>
                    </div>

                    <p className="cta-note">
                        <FaLock className="lock-icon" />
                        لن نشارك بياناتك مع أي جهات خارجية أبداً
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTA;
