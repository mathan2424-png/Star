import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-text-content animate-on-scroll" style={{ marginBottom: '2rem' }}>
                    <h1>STAR BUSINESS FORUM</h1>
                    <p style={{ fontSize: '1.5rem', color: '#fbbf24', marginTop: '1rem', fontWeight: 600, fontStyle: 'italic' }}>
                        "The Business Forum For Evolving Entrepreneurs"
                    </p>
                </div>

                {/* Registration CTA */}
                <div className="registration-cta" style={{ marginTop: '5rem' }}>
                    <a href="#contact" className="cta-button"
                        style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', background: '#af1e21c9', border: 'none', color: '#fff', borderRadius: '50px' }}>
                        Join The Forum
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
