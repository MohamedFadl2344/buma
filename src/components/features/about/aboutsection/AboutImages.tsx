const AboutImages = () => {
    return (
        <div className="about-images">
            <div className="about-image-grid">
                {/* Row 1 - Left */}
                <div className="about-image-item">
                    <img src="/image/about/about_img2.webp" alt="مكتب" />
                </div>

                {/* Row 1 - Right */}
                <div className="about-image-item">
                    <img src="/image/about/about_img1.webp" alt="اجتماع عمل" />
                    <div className="image-overlay">
                        <span className="image-label">بيئة عمل ملهمة</span>
                    </div>
                </div>

                {/* Row 2 - Left */}
                <div className="about-image-item">
                    <img src="/image/about/about_img3.webp" alt="مصافحة" />
                </div>

                {/* Row 2 - Right */}
                <div className="about-image-item">
                    <img src="/image/about/about_img4.webp" alt="تحليلات" />
                </div>
            </div>
        </div>
    );
};

export default AboutImages;
