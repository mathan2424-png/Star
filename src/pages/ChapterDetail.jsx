import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../assets/css/Star-leaders-premium.css';
import chapterBgImg from '../assets/images/businessman_star_official_1771562311038.png';
const chennaiAspireBg = chapterBgImg;

const ChapterDetail = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-roster').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Placeholder data - in a real app this would come from an API or shared data file
    const chapterDetails = {
        name: id ? id.replace(/-/g, ' ') : "Karaikudi Chapter",
        location: "Tamil Nadu, India",
        memberCount: "45+",
        meetingDay: "Tuesday",
        venue: "Maha Raja Party Hall",
        tenure: "2024 (III)",
        description: "A leading chapter in the STAR network, known for its strong collaboration between business leaders, entrepreneurs, and industry experts.",
        leaders: [
            { role: "Chapter Trainer", name: "V Muthu" },
            { role: "CEO", name: "T Mohanasundaram" },
            { role: "Secretary", name: "K Thiagarajan" },
            { role: "MDC Chairman", name: "T.Prem Kumar" },
            { role: "Treasurer", name: "Vijayaraghavan" }
        ]
    };

    return (
        <div className="chapter-detail-page" style={{ paddingTop: '1px', minHeight: '100vh', background: '#fcfdfe' }}>

            {/* Premium Chapter Banner */}
            <section className="chapter-detail-hero">
                <div className="hq-banner-bg" style={{
                    backgroundImage: `url(${chennaiAspireBg})`,
                    filter: 'brightness(0.4)',
                    position: 'absolute',
                    inset: 0,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 1
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 5, maxWidth: '1400px', textAlign: 'center' }}>
                    <div className="hero-content-wrapper animate-roster">
                        <h1 style={{ color: '#fff', fontSize: '3.5rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            {chapterDetails.name}
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', fontWeight: '500', marginTop: '1rem' }}>
                            <i className="fas fa-map-marker-alt" style={{ marginRight: '10px', color: '#e11d48' }}></i> {chapterDetails.location}
                        </p>
                    </div>
                </div>
            </section>

            <div className="container" style={{ maxWidth: '1400px', marginTop: '3rem' }}>
                {/* Restored Back Button to Original Position */}
                <div className="back-link animate-roster" style={{ marginBottom: '2.5rem' }}>
                    <Link to="/chapters" className="back-to-events-btn">
                        <i className="fas fa-arrow-left"></i> Back to Chapters
                    </Link>
                </div>

                {/* Leadership Section */}
                <div className="chapter-leaders-section" style={{ marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#e11d48', marginBottom: '4rem', textAlign: 'center' }}>Chapter Leadership</h2>

                    <div className="leadership-display-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(6, 1fr)',
                        gap: '1rem',
                        padding: '1rem'
                    }}>
                        {[
                            { name: "Mr. S. Siddharth Gandhi", role: "EXECUTIVE DIRECTOR", icon: "fa-user-tie" },
                            { name: "Er. B. Karthikeyan", role: "REGIONAL DIRECTOR", icon: "fa-user-tie" },
                            { name: "Mr. P. Balakrishnan", role: "CHAPTER CEO", icon: "fa-user-tie" },
                            { name: "Mr. K. Thiagarajan", role: "MDC CHAIRMAN", icon: "fa-user-tie" },
                            { name: "Mr. D. Shivakumar", role: "SECRETARY", icon: "fa-user-tie" },
                            { name: "Add Lead Trainer", role: "CHAPTER TRAINER", icon: "fa-user-tie" }
                        ].map((leader, index) => (
                            <div
                                key={index}
                                className="leader-card-v2 animate-roster"
                                style={{
                                    padding: '2.5rem 1rem',
                                    textAlign: 'center',
                                    transitionDelay: `${index * 0.1}s`
                                }}
                            >
                                <div className="v-profile-img" style={{
                                    margin: '0 auto 1.5rem',
                                    width: '80px',
                                    height: '80px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%'
                                }}>
                                    <i className={`fas ${leader.icon}`} style={{ fontSize: '1.8rem' }}></i>
                                </div>
                                <h3 style={{
                                    fontSize: '1.05rem',
                                    fontWeight: '800',
                                    color: '#e11d48',
                                    marginBottom: '0.5rem',
                                    minHeight: '2.5rem'
                                }}>{leader.name}</h3>
                                <p style={{
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    color: '#64748b',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    marginBottom: '0.3rem'
                                }}>{leader.role}</p>
                            </div>
                        ))}
                    </div>

                    {/* Section Divider */}
                    <div className="role-divider" style={{ maxWidth: '1400px', marginTop: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ padding: '0 2rem', fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>Chapter Core Leadership</span>
                    </div>

                    <div className="leadership-display-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(6, 1fr)',
                        gap: '1rem',
                        padding: '1rem',
                        marginTop: '2rem'
                    }}>
                        {[
                            { name: "Mr. Vijayaraghavan", role: "TREASURER", icon: "fa-user-tie" },
                            { name: "Mr. M. Palkannan", role: "CHAIRMAN - REFERRALS", icon: "fa-user-tie" },
                            { name: "Mr. S Dhinesh Kumar", role: "CHAIRMAN - ONE TO ONE", icon: "fa-user-tie" },
                            { name: "Mr. R Sivasubramanian", role: "CHAIRMAN - VISITORS", icon: "fa-user-tie" },
                            { name: "Mr. S. Karthick", role: "CHAIRMAN - ATTENDANCE", icon: "fa-user-tie" },
                            { name: "Mr. T Kasi Anand", role: "CHAIRMAN - EVENTS", icon: "fa-user-tie" }
                        ].map((leader, index) => (
                            <div
                                key={index}
                                className="leader-card-v2 animate-roster"
                                style={{
                                    padding: '2.5rem 1rem',
                                    textAlign: 'center',
                                    transitionDelay: `${(index + 6) * 0.1}s`
                                }}
                            >
                                <div className="v-profile-img" style={{
                                    margin: '0 auto 1.5rem',
                                    width: '80px',
                                    height: '80px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%'
                                }}>
                                    <i className={`fas ${leader.icon}`} style={{ fontSize: '1.8rem' }}></i>
                                </div>
                                <h3 style={{
                                    fontSize: '1.05rem',
                                    fontWeight: '800',
                                    color: '#e11d48',
                                    marginBottom: '0.5rem',
                                    minHeight: '2.5rem'
                                }}>{leader.name}</h3>
                                <p style={{
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    color: '#64748b',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    marginBottom: '0.3rem'
                                }}>{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChapterDetail;
