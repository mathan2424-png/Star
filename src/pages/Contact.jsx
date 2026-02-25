import React, { useEffect } from 'react';
import '../assets/css/styles.css';
import '../assets/css/contact-premium.css';
const cbeImg = 'https://images.unsplash.com/photo-1596422846543-75c6fc18a593?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
const maduraiImg = 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
const trichyImg = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
const erodeImg = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        // Simple entry animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-contact').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="contact-page-v2">

            {/* 1. Premium Hero Section */}
            <section className="contact-hero-v2">
                <div className="container">
                    <h1 className="animate-contact">Connect with STAR</h1>
                    <p className="animate-contact">Have a question or want to join India's premium business networking platform? Our team is ready to assist you.</p>
                </div>
            </section>

            {/* 2. Main Contact Grid (Split Form & Info) */}
            <section className="contact-main-section">
                <div className="container">
                    <div className="contact-split-grid">

                        {/* Left Side: Premium Form */}
                        <div className="contact-form-wrapper animate-contact">
                            <div className="form-card-v2">
                                <h2>Send us a Message</h2>
                                <p>Fill out the form below for inquiries regarding Membership, Franchising, or Business Support.</p>

                                <form className="premium-form" onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-group-v2">
                                        <input type="text" placeholder="Your Name" required />
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="form-group-v2">
                                        <input type="email" placeholder="Email Address" required />
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="form-group-v2 full-width">
                                        <input type="tel" placeholder="Mobile Number" />
                                        <i className="fas fa-phone"></i>
                                    </div>

                                    <div className="form-group-v2 full-width">
                                        <textarea placeholder="Tell us how we can help your business grow..." required></textarea>
                                        <i className="fas fa-comment-alt"></i>
                                    </div>
                                    <button type="submit" className="submit-btn-v2">
                                        Send Message <i className="fas fa-paper-plane"></i>
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Right Side: Headquarters Info */}
                        <div className="contact-info-wrapper animate-contact">
                            <div className="hq-detail-card">
                                <div className="hq-header">
                                    <span className="badge-v2">Star Business Solutions</span>
                                    <h3>Prompt Tower</h3>
                                </div>

                                <div className="hq-body">
                                    <div className="hq-info-row">
                                        <div className="row-icon"><i className="fas fa-map-marked-alt"></i></div>
                                        <div className="row-text">
                                            <h4>Head Office</h4>
                                            <p>Plot No : 324, Ram Nagar South Extension, 12 Street, Off 200 Feet Radial Road, Near Kamakshi Hospital, Pallikaranai, Chennai - 600 100</p>
                                        </div>
                                    </div>

                                    <div className="hq-info-row">
                                        <div className="row-icon"><i className="fas fa-phone-volume"></i></div>
                                        <div className="row-text">
                                            <h4>Inquiry Hotline</h4>
                                            <p><a href="tel:+919342008371">+91 93420 08371</a></p>
                                        </div>
                                    </div>

                                    <div className="hq-info-row">
                                        <div className="row-icon"><i className="fas fa-envelope-open-text"></i></div>
                                        <div className="row-text">
                                            <h4>Corporate Email</h4>
                                            <p><a href="mailto:starbusiness.intl@gmail.com">starbusiness.intl@gmail.com</a></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="social-connect-box">
                                    <h4>Connect with the Forum</h4>
                                    <div className="social-circles">
                                        <a href="#" className="sc-icon"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#" className="sc-icon"><i className="fab fa-instagram"></i></a>
                                        <a href="#" className="sc-icon"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#" className="sc-icon"><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. Regional Presence (Redesigned Locations) */}
            <section className="regional-presence-section">
                <div className="container">
                    <div className="presence-header animate-contact">
                        <h2>Regional Presence</h2>
                        <div className="title-underline"></div>
                        <p>Bridging gaps across major cities in Tamil Nadu</p>
                    </div>

                    <div className="regions-grid-v2">
                        {/* Coimbatore */}
                        <div className="region-card-v2 animate-contact">
                            <div className="city-img-placeholder">
                                <img src={cbeImg} alt="Coimbatore" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
                            </div>
                            <h3>Coimbatore</h3>
                            <p>54 D, 1st Floor, Jayavarthanavelu Nagar, Masakkalipalayam Road, Peelamedu, CBE - 641004.</p>
                            <a href="#" className="map-link">View on Map <i className="fas fa-external-link-alt"></i></a>
                        </div>

                        {/* Madurai */}
                        <div className="region-card-v2 animate-contact">
                            <div className="city-img-placeholder">
                                <img src={maduraiImg} alt="Madurai" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
                            </div>
                            <h3>Madurai</h3>
                            <p># 279, 1st, East Main Road, Anna Nagar, Madurai - 625020.</p>
                            <a href="#" className="map-link">View on Map <i className="fas fa-external-link-alt"></i></a>
                        </div>

                        {/* Trichy */}
                        <div className="region-card-v2 animate-contact">
                            <div className="city-img-placeholder">
                                <img src={trichyImg} alt="Trichy" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
                            </div>
                            <h3>Trichy</h3>
                            <p>No.135, Ponnagar, Near Adjacent Swarna Vinayagar Temple, Trichy - 620001.</p>
                            <a href="#" className="map-link">View on Map <i className="fas fa-external-link-alt"></i></a>
                        </div>

                        {/* Erode */}
                        <div className="region-card-v2 animate-contact">
                            <div className="city-img-placeholder">
                                <img src={erodeImg} alt="Erode" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
                            </div>
                            <h3>Erode</h3>
                            <p>Nachimuthu Complex, Second Floor, Perundurai Main Road, Erode - 638012.</p>
                            <a href="#" className="map-link">View on Map <i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
