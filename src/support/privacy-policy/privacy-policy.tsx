import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import useScrollToTop from '../../hooks/useScrollToTop';
import './privacy-policy.css';

const PrivacyPolicy = () => {
    useScrollToTop();

    return (
        <>
            <Navbar />

            <section className="privacy-hero">
                <div className="privacy-hero-overlay"></div>
                <div className="container">
                    <div className="privacy-hero-content">
                        <span className="privacy-badge">سياسة ومبادئ</span>
                        <h1 className="privacy-title">سياسة الخصوصية</h1>
                        <p className="privacy-date">آخر تحديث: 1 أغسطس 2025</p>
                    </div>
                </div>
            </section>

            <section className="privacy-content">
                <div className="container">
                    <div className="privacy-container">

                        <div className="privacy-section">
                            <div className="section-header">
                                <span className="section-number">1</span>
                                <h2 className="section-title">مقدمة</h2>
                            </div>
                            <p className="section-text">
                                في "التزام للإدارة"، نلتزم بحماية خصوصيتك وأمان بياناتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية المعلومات الشخصية التي تقدمها لنا عند استخدام خدماتنا الاستشارية ومنصاتنا الرقمية. نحن نلتزم بالامتثال لجميع القوانين واللوائح المعمول بها المتعلقة بحماية البيانات والخصوصية، بما في ذلك قانون حماية البيانات الشخصية.
                            </p>
                        </div>

                        <div className="privacy-section">
                            <div className="section-header">
                                <span className="section-number">2</span>
                                <h2 className="section-title">المعلومات التي نجمعها</h2>
                            </div>
                            <p className="section-text">
                                قد نجمع عدة أنواع من المعلومات، بما في ذلك معلومات شخصية تُستخدم لتحديد هويتك وتقديم خدماتنا بشكل فعال. تشمل هذه المعلومات:
                            </p>
                            <ul className="section-list">
                                <li><strong>معلومات الهوية:</strong> الاسم، البريد الإلكتروني، رقم الهاتف، وأي معلومات أخرى تقدمها طوعاً.</li>
                                <li><strong>بيانات الاستخدام:</strong> معلومات حول كيفية استخدامك لموقعنا الإلكتروني أو خدماتنا، بما في ذلك عنوان IP، نوع المتصفح، ووقت الزيارة.</li>
                                <li><strong>معلومات المعاملات:</strong> تفاصيل المعاملات المالية والخدمات التي طلبتها، بما في ذلك تفاصيل الدفع والفواتير.</li>
                            </ul>
                        </div>

                        <div className="privacy-section">
                            <div className="section-header">
                                <span className="section-number">3</span>
                                <h2 className="section-title">كيف نستخدم معلوماتك</h2>
                            </div>
                            <p className="section-text">
                                نستخدم المعلومات التي نجمعها للأغراض التالية:
                            </p>
                            <div className="info-grid">
                                <div className="info-card">
                                    <h3 className="info-title">تحسين الخدمات</h3>
                                    <p className="info-text">لفهم احتياجاتك بشكل أفضل وتحسين خدماتنا الاستشارية وتجربة المستخدم.</p>
                                </div>
                                <div className="info-card">
                                    <h3 className="info-title">تقديم الخدمات</h3>
                                    <p className="info-text">لتوفير وإدارة الخدمات التي طلبتها، بما في ذلك معالجة المدفوعات والتواصل معك.</p>
                                </div>
                                <div className="info-card">
                                    <h3 className="info-title">الامتثال</h3>
                                    <p className="info-text">للامتثال للالتزامات القانونية وحماية حقوقنا وحقوق عملائنا.</p>
                                </div>
                                <div className="info-card">
                                    <h3 className="info-title">التواصل</h3>
                                    <p className="info-text">للتواصل معك بشأن الخدمات، التحديثات، العروض الخاصة، أو أي معلومات أخرى قد تهمك.</p>
                                </div>
                            </div>
                        </div>

                        <div className="privacy-section">
                            <div className="section-header">
                                <span className="section-number">4</span>
                                <h2 className="section-title">ملفات تعريف الارتباط (Cookies)</h2>
                            </div>
                            <p className="section-text">
                                نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتحسين تجربة المستخدم على موقعنا الإلكتروني. تساعدنا ملفات تعريف الارتباط في تذكر تفضيلاتك، فهم كيفية استخدامك للموقع، وتقديم محتوى مخصص. يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك، ولكن تعطيلها قد يؤثر على وظائف الموقع.
                            </p>
                        </div>

                        <div className="privacy-section">
                            <div className="section-header">
                                <span className="section-number">5</span>
                                <h2 className="section-title">أمن البيانات</h2>
                            </div>
                            <p className="section-text">
                                نحن نتخذ تدابير أمنية صارمة لحماية معلوماتك الشخصية من الوصول غير المصرح به، الكشف، التعديل، أو الإتلاف. نستخدم تقنيات التشفير، جدران الحماية، والبروتوكولات الأمنية الأخرى لضمان سلامة بياناتك. ومع ذلك، لا يمكن ضمان أمان نقل البيانات عبر الإنترنت بنسبة 100%، لذا نشجعك على اتخاذ احتياطاتك الخاصة.
                            </p>
                        </div>

                        <div className="privacy-section">
                            <div className="section-header">
                                <span className="section-number">6</span>
                                <h2 className="section-title">مشاركة البيانات</h2>
                            </div>
                            <p className="section-text">
                                لن نقوم ببيع أو تأجير أو مشاركة معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:
                            </p>
                            <ul className="section-list">
                                <li>عندما يكون ذلك ضرورياً لتقديم الخدمات التي طلبتها (مثل معالجات الدفع).</li>
                                <li>عندما نكون ملزمين قانونياً بالكشف عن المعلومات (مثل الامتثال لأمر قضائي).</li>
                                <li>لحماية حقوقنا، ممتلكاتنا، أو سلامة عملائنا والآخرين.</li>
                                <li>في حالة اندماج الشركة أو بيعها أو إعادة هيكلتها، قد يتم نقل بياناتك إلى الكيان الجديد.</li>
                            </ul>
                        </div>

                        <div className="privacy-section">
                            <div className="section-header">
                                <span className="section-number">7</span>
                                <h2 className="section-title">اتصل بنا</h2>
                            </div>
                            <p className="section-text">
                                إذا كان لديك أي أسئلة أو استفسارات حول سياسة الخصوصية هذه، أو إذا كنت ترغب في ممارسة حقوقك المتعلقة ببياناتك الشخصية، يرجى التواصل معنا عبر:
                            </p>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <strong>البريد الإلكتروني:</strong>
                                    <a href="mailto:privacy@edara-pro.com">privacy@edara-pro.com</a>
                                </div>
                                <div className="contact-item">
                                    <strong>الهاتف:</strong>
                                    <a href="tel:+966123456789">+966 12 345 6789</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="privacy-cta">
                        <h3 className="cta-title">هل لديك المزيد من الأسئلة؟</h3>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-outline">تواصل معنا</a>
                            <a href="/" className="btn btn-primary-custom">العودة للرئيسية</a>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
};

export default PrivacyPolicy;
