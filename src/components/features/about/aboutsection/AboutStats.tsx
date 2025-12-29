import { useCounter } from '../../../../hooks/useCounter';

const AboutStats = () => {
    const projects = useCounter({ end: 500 });
    const experience = useCounter({ end: 15 });
    const clients = useCounter({ end: 50 });
    const success = useCounter({ end: 98 });

    const stats = [
        { value: projects, suffix: '+', label: 'مشروع ناجح' },
        { value: experience, suffix: '+', label: 'سنة خبرة' },
        { value: clients, suffix: '+', label: 'عميل سعيد' },
        { value: success, suffix: '%', label: 'نسبة النجاح' },
    ];

    return (
        <div className="about-stats">
            <div className="stats-grid-about">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-item-about">
                        <div className="stat-value-about">
                            {stat.value}{stat.suffix}
                        </div>
                        <div className="stat-label-about">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutStats;
