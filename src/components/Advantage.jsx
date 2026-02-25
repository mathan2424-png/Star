import React from 'react';
const advImg1 = 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
const advImg2 = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
const advImg3 = 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
const advImg4 = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

const Advantage = () => {
    return (
        <section id="advantage" className="advantage-section">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1 }}>
                        STAR <span style={{ color: 'var(--primary-color)' }}>BUSINESS</span> FORUM
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '850px', margin: '2rem auto 0', fontSize: '1.2rem', lineHeight: '1.6' }}>
                        Breaking the traditional boxy networking mold with a fluid ecosystem designed for the modern professional and evolving entrepreneurs.
                    </p>
                </div>

                <div className="advantage-grid">
                    {/* Advantage 1 */}
                    <div className="advantage-item animate-on-scroll">
                        <div className="advantage-circle-img">
                            <img src={advImg1} alt="Referral Excellence" />
                        </div>
                        <div className="advantage-content">
                            <h3>Referral Excellence</h3>
                            <p>Generate high-value, consistent sales referrals that work for your business through an engaging and accurate lead system.</p>
                        </div>
                    </div>

                    {/* Advantage 2 */}
                    <div className="advantage-item animate-on-scroll">
                        <div className="advantage-circle-img">
                            <img src={advImg2} alt="Strategic Synergy" />
                        </div>
                        <div className="advantage-content">
                            <h3>Strategic Synergy</h3>
                            <p>Maximize your product visibility and market reach through targeted direct promotions within our elite professional network.</p>
                        </div>
                    </div>

                    {/* Advantage 3 */}
                    <div className="advantage-item animate-on-scroll">
                        <div className="advantage-circle-img">
                            <img src={advImg3} alt="Accelerated Growth" />
                        </div>
                        <div className="advantage-content">
                            <h3>Accelerated Growth</h3>
                            <p>Develop and establish long-lasting, profitable relationships with well-matched business professionals for exponential scaling.</p>
                        </div>
                    </div>

                    {/* Advantage 4 */}
                    <div className="advantage-item animate-on-scroll">
                        <div className="advantage-circle-img">
                            <img src={advImg4} alt="Professional Mastery" />
                        </div>
                        <div className="advantage-content">
                            <h3>Professional Mastery</h3>
                            <p>Nurture and enhance your executive leadership and business skills through direct interaction with industry pioneers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantage;
