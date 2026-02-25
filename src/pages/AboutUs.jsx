import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';
import '../assets/css/about-premium.css'; // Created this file as requested

// Import images
const introImg = 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
const benefitsImg = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

const AboutUs = () => {

    useEffect(() => {
        // Scroll Animation Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });

        // Cleanup observer on unmount
        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-page">
            {/* 1. Hero Section */}
            <section className="about-hero-section">
                <div className="about-hero-content">
                    <h1 className="about-hero-title">STAR PROFESSIONAL BUSINESS NETWORKING FORUM</h1>
                    <p className="about-hero-subtitle">"The Business Forum For Evolving Entrepreneurs"</p>
                </div>
                <div className="hero-geometric-shape"></div>
            </section>

            {/* 2. Introduction: About STAR */}
            <section className="intro-section">
                <div className="container">
                    <div className="intro-container">
                        <div className="intro-text animate-on-scroll">
                            <h2>ABOUT <span className="text-primary-star">STAR</span></h2>
                            <p>Our journey began in the year 2000 with the launch of <strong>Builders Line Magazine</strong>, a pioneering publication dedicated to the construction industry. This marked the foundation of our commitment to industry growth, knowledge sharing, and meaningful connections.</p>
                            <p>In 2002, we expanded our vision with the establishment of <strong>Prompt Trade Fair India Private Limited</strong>, creating industry-wide platforms that brought industry stakeholders together and enabled business opportunities on a large scale. Building on this momentum, <strong>Star (Construction Network of India)</strong> was launched in 2007, further strengthening our footprint and influence within the construction ecosystem.</p>
                            <p>we transitioned the Star to rebrand as <strong>Star Business Forum</strong> — a dynamic and evolution-driven business forum designed to reflect, collaborate, and empower entrepreneurs and professionals in the construction sector. Our objective is unique for interacting for business growth, fostering trust-based professional networking and business relationships.</p>
                        </div>
                        <div className="intro-image-wrapper animate-on-scroll">
                            <div className="intro-bg-accent" style={{ backgroundColor: '#e11d48' }}></div>
                            <img src={introImg} alt="Star Business Forum" className="intro-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Milestones */}
            <section className="milestone-section py-20 bg-light">
                <div className="container">
                    <div className="section-title-center animate-on-scroll">
                        <h2 className="milestone-title">MILESTONE</h2>
                        <div className="milestone-underline"></div>
                    </div>
                    <div className="milestone-grid animate-on-scroll">
                        <div className="milestone-item">
                            <div className="milestone-year">2000</div>
                            <p>Launching of BUILDERS LINE Magazine</p>
                        </div>
                        <div className="milestone-item">
                            <div className="milestone-year">2002</div>
                            <p>Established PROMPT TRADE FAIRS (INDIA) PVT LTD</p>
                        </div>
                        <div className="milestone-item">
                            <div className="milestone-year">2007</div>
                            <p>Star (Construction Network of India) was Launched</p>
                        </div>
                        <div className="milestone-item">
                            <div className="milestone-year">2020</div>
                            <p>We expanded our Chapter Operations into Tamilnadu & Across INDIA as Star Business Forum</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Mission & Vision */}
            <section className="mission-vision-section">
                <div className="container mission-vision-grid">
                    <div className="mission-card animate-on-scroll">
                        <div className="card-icon"><i className="fas fa-bullseye"></i></div>
                        <h3>OUR MISSION</h3>
                        <p>To empower business owners by fostering meaningful connections, leadership growth, and knowledge sharing — creating a trusted platform that drives collaboration, quality referrals, and sustainable success for members and the wider community.</p>
                    </div>
                    <div className="vision-card animate-on-scroll">
                        <div className="card-icon"><i className="fas fa-eye"></i></div>
                        <h3>OUR VISION</h3>
                        <p>To build a global connected community of business leaders rooted in trust and collaboration, enabling excellence, growth, cross-border opportunities, and positive impact on the industry worldwide.</p>
                    </div>
                </div>
            </section>

            {/* 5. Why Collaborate With Us? */}
            <section className="why-star-section bg-dark text-white py-20">
                <div className="container">
                    <div className="why-star-grid">
                        <div className="why-star-content animate-on-scroll">
                            <h2>Why Collaborate With Us?</h2>
                            <ul className="why-star-list">
                                <li>
                                    <div className="why-icon"><i className="fas fa-users"></i></div>
                                    <div className="why-text">
                                        <h4>TRUSTED BUSINESS COMMUNITY</h4>
                                        <p>Be part of a network built on mutual trust and professional integrity.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="why-icon"><i className="fas fa-handshake"></i></div>
                                    <div className="why-text">
                                        <h4>QUALITY NETWORKING OPPORTUNITIES</h4>
                                        <p>Connect with high-caliber professionals and industry leaders.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="why-icon"><i className="fas fa-chart-line"></i></div>
                                    <div className="why-text">
                                        <h4>REAL BUSINESS GROWTH</h4>
                                        <p>Generate quality referrals that translate into actual business success.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="why-icon"><i className="fas fa-chess-king"></i></div>
                                    <div className="why-text">
                                        <h4>LEADERSHIP & COLLABORATION</h4>
                                        <p>Develop your leadership skills while collaborating on major projects.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="why-star-image animate-on-scroll">
                            <img src={benefitsImg} alt="Collaboration" className="rounded-xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;