import React from 'react';
const aboutImg = 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about-dynamic-layout">
                    <div className="about-image-wrapper animate-on-scroll">
                        <div className="about-shape-bg" style={{ background: 'transparent' }}></div>
                        <div className="about-image-mask" style={{ boxShadow: '0 20px 50px rgba(225, 29, 72, 0.2)' }}>
                            <img src={aboutImg} alt="About Star" />
                        </div>
                    </div>

                    <div className="about-content-fluid animate-on-scroll">
                        <h2>Building a Legacy of <span style={{ color: 'var(--primary-color)' }}>Business Excellence</span></h2>
                        <p>Star Business Forum is a dynamic and evolution-driven business forum designed to reflect, collaborate, and empower entrepreneurs. Our journey began in 2004, marking the foundation of our commitment to industry growth and meaningful connections.</p>
                        <p>Rebranded from Star in 2023, Star Business Forum continues to be a purpose-built platform designed to facilitate direct, efficient, and result-oriented business communication among professionals.</p>
                        <div className="about-legacy-card animate-on-scroll">
                            <div className="legacy-item">
                                <span className="legacy-label">Established</span>
                                <div className="legacy-value primary">2004</div>
                            </div>
                            <div className="legacy-item">
                                <span className="legacy-label">Industry Impact</span>
                                <div className="legacy-value secondary">High Growth</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
