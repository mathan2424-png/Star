import React, { useEffect } from 'react';
import '../assets/css/franchise-premium.css';

const Franchise = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="franchise-page">
            {/* Hero Section */}
            <section className="franchise-hero">
                <div className="container">
                    <h1>Become a STAR Franchise Partner</h1>
                    <p>India’s premier business networking forum is expanding. Join a proven leadership network that drives ₹3,500+ Cr in referrals.</p>
                </div>
            </section>

            {/* Visionary Partnerships Content Section - Redesigned for Premium Look */}
            <section className="partnership-intro-section" style={{ padding: '5rem 0', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
                <div className="container">
                    <div className="partnership-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '5rem', alignItems: 'start' }}>
                        {/* Left Side: Branding & Context */}
                        <div className="partnership-branding">
                            <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#101828', lineHeight: '1.1', marginBottom: '2rem', textAlign: 'left' }}>
                                Welcome <br /><span style={{ color: '#e11d48' }}>To STAR</span>
                            </h2>
                            <div style={{ width: '80px', height: '6px', background: '#fbbf24', borderRadius: '3px', marginBottom: '2.5rem' }}></div>
                            <p style={{ fontSize: '1.25rem', color: '#1e293b', fontWeight: '500', lineHeight: '1.6', marginBottom: '2rem' }}>
                                STAR is expanding its national presence through exclusive, high-potential franchise partnerships.
                            </p>
                            <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '30px', borderLeft: '8px solid #e11d48' }}>
                                <p style={{ fontSize: '1.1rem', color: '#445566', margin: 0, fontStyle: 'italic' }}>
                                    "STAR is opening doors for visionary business owners and industry leaders across India. We are offering exclusive State and Territory Franchise Partnerships for growth-driven leaders who aspire to..."
                                </p>
                            </div>
                        </div>

                        {/* Right Side: The Aspiration List */}
                        <div className="partnership-aspiration-box">
                            <div className="aspiration-vertical-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    "Build strong influence within the business and infrastructure ecosystem.",
                                    "Become the central networking hub in their region.",
                                    "Connect and engage with hundreds of verified, industry-specific businesses.",
                                    "Drive high-value referrals, collaborations, and strategic alliances."
                                ].map((item, idx) => (
                                    <div key={idx} className="aspiration-item-premium" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1.5rem',
                                        padding: '1.5rem 2rem',
                                        borderRadius: '20px',
                                        background: '#f8fafc',
                                        border: '1px solid #e2e8f0',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            background: '#e11d48',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fff',
                                            fontSize: '0.8rem',
                                            flexShrink: 0
                                        }}>
                                            <i className="fas fa-chevron-right"></i>
                                        </div>
                                        <span style={{ fontSize: '1.05rem', fontWeight: '600', color: '#334155' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="leadership-banner" style={{
                        marginTop: '5rem',
                        background: 'linear-gradient(rgba(16, 24, 40, 0.92), rgba(16, 24, 40, 0.98)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000")',
                        backgroundSize: 'cover',
                        padding: '4rem',
                        borderRadius: '40px',
                        textAlign: 'center',
                        color: '#fff',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.2)'
                    }}>
                        <h3 style={{ fontSize: '2.2rem', fontWeight: '800', margin: 0, letterSpacing: '-0.5px', color: '#fff' }}>
                            STAR is expanding its national presence through <br />
                            <span style={{ color: '#fbbf24' }}>exclusive, high-potential franchise partnerships</span>
                        </h3>
                    </div>
                </div>
            </section>

            {/* Why Partner Section */}
            <section className="pillar-section">
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'center' }}>
                        <span className="section-subtitle">Why Partner with STAR?</span>
                        <h2>A Gateway to Long-term Success</h2>
                    </div>

                    <div className="pillar-grid">
                        <div className="pillar-card">
                            <div className="pillar-icon"><i className="fas fa-building"></i></div>
                            <h3>India’s Premier Professional Networking Forum</h3>
                            <p>
                                STAR stands as the country’s most specialized networking ecosystem dedicated to business growth. With 50+ chapters and ₹3,500+ Cr in referrals, we offer unmatched market access.
                            </p>
                        </div>
                        <div className="pillar-card">
                            <div className="pillar-icon"><i className="fas fa-shield-alt"></i></div>
                            <h3>Zero Risk. Low Investment. High Returns</h3>
                            <p>
                                STAR offers a proven, performance-driven franchise model that eliminates uncertainties. Launch quickly with minimal investment and begin generating scalable, high-margin returns from day one.
                            </p>
                        </div>
                        <div className="pillar-card">
                            <div className="pillar-icon"><i className="fas fa-plug"></i></div>
                            <h3>100% Plug & Play Branding Model</h3>
                            <p>
                                Benefit from a battle-tested ecosystem. Everything from brand identity and marketing assets to digital platforms is perfected and ready for immediate deployment—no complex setup required.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Revenue Section */}
            <section className="revenue-section">
                <div className="container">
                    <div className="revenue-box">
                        <div className="revenue-visual">
                            <img src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Success" />
                            <div className="revenue-overlay">
                                <h3>Active & Passive Revenue</h3>
                                <p style={{ color: "white" }}>Diverse income channels designed for long-term stability</p>
                            </div>
                        </div>

                        <div className="revenue-items">
                            <div className="revenue-item">
                                <div className="rev-icon"><i className="fas fa-hand-holding-usd"></i></div>
                                <div className="rev-text">
                                    <h4>Active Income</h4>
                                    <p>Standardized membership subscriptions and renewal cycles from a growing member base.</p>
                                </div>
                            </div>
                            <div className="revenue-item">
                                <div className="rev-icon"><i className="fas fa-chart-line"></i></div>
                                <div className="rev-text">
                                    <h4>Passive Income</h4>
                                    <p>Organically generated revenue through event sponsorships and local ecosystem partnerships.</p>
                                </div>
                            </div>
                            <div className="revenue-item">
                                <div className="rev-icon"><i className="fas fa-network-wired"></i></div>
                                <div className="rev-text">
                                    <h4>High Retention</h4>
                                    <p>Our structured referral engine ensures membership loyalty and predictable annual growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* National Expansion */}
            <section className="pillar-section" style={{ background: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                        <i className="fas fa-project-diagram" style={{ fontSize: '3rem', color: '#e11d48', marginBottom: '2rem' }}></i>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>National & International Reach</h2>
                        <p style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: '1.8' }}>
                            STAR opens the doors to powerful collaboration across India and beyond. As a franchise partner, you gain access to a rapidly expanding national network of business professionals, industry leaders, and business innovators. This ecosystem enables you to build strategic alliances, exchange opportunities across states, and explore cross-border collaborations with global partners connected through STAR’s ecosystem. A single platform that elevates your business visibility, influence, and reach—far beyond your local market.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Franchise;
