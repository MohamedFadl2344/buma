import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import useScrollToTop from '../../hooks/useScrollToTop';
import './terms.css';

const Terms = () => {
    useScrollToTop();
    return (
        <>
            <Navbar />

            <section className="terms-hero">
                <div className="terms-hero-overlay"></div>
                <div className="container">
                    <div className="terms-hero-content">
                        <span className="terms-badge">الأحكام والشروط</span>
                        <h1 className="terms-title">الأحكام والشروط</h1>
                        <p className="terms-subtitle">
                            يُرجى قراءة هذه الأحكام والشروط بعناية قبل استخدام خدماتنا ومنصاتنا. استخدامك لموقعنا يعني موافقتك على الالتزام بهذه الشروط بالكامل.
                        </p>
                        <p className="terms-date">آخر تحديث: 29 ديسمبر 2025</p>
                    </div>
                </div>
            </section>

            <section className="terms-content">
                <div className="container">
                    <div className="terms-container">

                        <div className="terms-section">
                            <div className="section-header">
                                <span className="section-number">1</span>
                                <h2 className="section-title">مقدمة</h2>
                            </div>
                            <p className="section-text">
                                مرحباً بك في "التزام للإدارة". تحكم هذه الأحكام والشروط استخدامك لموقعنا الإلكتروني وخدماتنا. من خلال الوصول إلى هذا الموقع أو استخدامه، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يُرجى عدم استخدام موقعنا. نحن نحتفظ بالحق في تعديل هذه الشروط في أي وقت دون إشعار مسبق، لذا يُنصح بمراجعتها بانتظام.
                            </p>
                        </div>

                        <div className="terms-section">
                            <div className="section-header">
                                <span className="section-number">2</span>
                                <h2 className="section-title">التعريفات وتفسير المصطلحات</h2>
                            </div>
                            <p className="section-text">
                                في هذه الأحكام والشروط، تُستخدم المصطلحات التالية بالمعاني المحددة لها:
                            </p>
                            <ul className="section-list">
                                <li><strong>"الموقع":</strong> يشير إلى موقع "التزام للإدارة" الإلكتروني وجميع صفحاته وخدماته.</li>
                                <li><strong>"المستخدم":</strong> أي شخص يصل إلى الموقع أو يستخدم خدماتنا.</li>
                                <li><strong>"الخدمات":</strong> جميع الخدمات الاستشارية والمالية والإدارية التي نقدمها عبر الموقع.</li>
                                <li><strong>"المحتوى":</strong> جميع النصوص، الصور، الرسومات، البرمجيات، والمواد الأخرى المتاحة على الموقع.</li>
                                <li><strong>"نحن/الشركة":</strong> يشير إلى "التزام للإدارة" وفريق العمل والإدارة.</li>
                            </ul>
                        </div>

                        <div className="terms-section">
                            <div className="section-header">
                                <span className="section-number">3</span>
                                <h2 className="section-title">الترخيص وحقوق الملكية الفكرية</h2>
                            </div>
                            <p className="section-text">
                                ما لم يُذكر خلاف ذلك، فإن "التزام للإدارة" و/أو المرخصون لها يمتلكون حقوق الملكية الفكرية لجميع المواد الموجودة على هذا الموقع. جميع حقوق الملكية الفكرية محفوظة. يمكنك الوصول إلى المحتوى من الموقع لاستخدامك الشخصي فقط، مع مراعاة القيود المنصوص عليها في هذه الشروط.
                            </p>
                            <p className="section-text">يُحظر عليك القيام بما يلي:</p>
                            <ul className="section-list">
                                <li>إعادة نشر أو بيع أو تأجير أو ترخيص المحتوى من الموقع.</li>
                                <li>إعادة إنتاج أو نسخ أو توزيع المحتوى لأغراض تجارية.</li>
                                <li>تعديل أو تحرير المحتوى بأي شكل من الأشكال.</li>
                                <li>استخدام المحتوى بطريقة قد تضر بسمعة "التزام للإدارة" أو تنتهك حقوق الآخرين.</li>
                            </ul>
                        </div>

                        <div className="terms-section">
                            <div className="section-header">
                                <span className="section-number">4</span>
                                <h2 className="section-title">القيود والمحظورات</h2>
                            </div>
                            <p className="section-text">
                                يُحظر عليك استخدام هذا الموقع بأي طريقة قد تسبب ضرراً للموقع أو تعطل وظائفه أو تؤثر سلباً على تجربة المستخدمين الآخرين. تشمل الأنشطة المحظورة ما يلي:
                            </p>
                            <div className="info-grid">
                                <div className="info-card">
                                    <h3 className="info-title">المحتوى الضار</h3>
                                    <p className="info-text">إرسال أو نشر أي محتوى ضار، مسيء، تشهيري، أو غير قانوني عبر الموقع.</p>
                                </div>
                                <div className="info-card">
                                    <h3 className="info-title">الاختراق والتلاعب</h3>
                                    <p className="info-text">محاولة الوصول غير المصرح به إلى أي جزء من الموقع أو الأنظمة المرتبطة به.</p>
                                </div>
                                <div className="info-card">
                                    <h3 className="info-title">البرمجيات الخبيثة</h3>
                                    <p className="info-text">إرسال فيروسات، برمجيات خبيثة، أو أي كود ضار قد يؤثر على الموقع أو المستخدمين.</p>
                                </div>
                                <div className="info-card">
                                    <h3 className="info-title">الاستخدام غير المشروع</h3>
                                    <p className="info-text">استخدام الموقع لأي غرض غير قانوني أو غير مصرح به أو ينتهك هذه الشروط.</p>
                                </div>
                            </div>
                        </div>

                        <div className="terms-section">
                            <div className="section-header">
                                <span className="section-number">5</span>
                                <h2 className="section-title">حدود المسؤولية</h2>
                            </div>
                            <p className="section-text">
                                لن نكون مسؤولين تجاهك أو تجاه أي طرف ثالث عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية أو خاصة تنشأ عن استخدامك للموقع أو عدم القدرة على استخدامه، حتى لو تم إخطارنا بإمكانية حدوث مثل هذه الأضرار. يشمل ذلك، على سبيل المثال لا الحصر:
                            </p>
                            <ul className="section-list">
                                <li>فقدان البيانات أو الأرباح أو الإيرادات.</li>
                                <li>انقطاع الأعمال أو فقدان المعلومات التجارية.</li>
                                <li>الأضرار الناتجة عن الفيروسات أو البرمجيات الضارة.</li>
                                <li>الأخطاء أو السهو في المحتوى المقدم.</li>
                                <li>أي تأخير أو انقطاع في الخدمة.</li>
                            </ul>
                        </div>

                        <div className="terms-section">
                            <div className="section-header">
                                <span className="section-number">6</span>
                                <h2 className="section-title">معلومات التواصل</h2>
                            </div>
                            <p className="section-text">
                                إذا كان لديك أي استفسارات أو أسئلة حول هذه الأحكام والشروط، يُرجى التواصل معنا عبر:
                            </p>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <strong>البريد الإلكتروني:</strong>
                                    <a href="mailto:info@edara-pro.com">info@edara-pro.com</a>
                                </div>
                                <div className="contact-item">
                                    <strong>الهاتف:</strong>
                                    <a href="tel:+966123456789">+966 12 345 6789</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="terms-cta">
                        <h3 className="cta-title">هل لديك أسئلة إضافية؟</h3>
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

export default Terms;
