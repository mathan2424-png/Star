import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            <footer className="footer-v2">
                <div className="container">
                    {/* Brand Column */}
                    <div className="footer-brand-v2">
                        <Link to="/" className="logo-link" style={{ marginBottom: '1.5rem' }}>
                            <img src="/footer_star_logo.png" alt="Star Business Forum" className="footer-logo-img" />
                        </Link>
                        <p>Star Business Forum is India's most reputable business networking platform, connecting innovators and leaders. We provide a wide range of services, including business development, networking events, professional training, and collaborative growth modules.</p>
                        <div className="social-strip-v2">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col-v2">
                        <h3>Quick Links</h3>
                        <ul className="footer-links-v2">
                            <li><Link to="/"><i className="fas fa-angle-double-right"></i> Home</Link></li>
                            <li><Link to="/about"><i className="fas fa-angle-double-right"></i> About STAR</Link></li>
                            <li><Link to="/membership"><i className="fas fa-angle-double-right"></i> Membership</Link></li>
                            <li><Link to="/events" className="footer-links-item"><i className="fas fa-angle-double-right"></i> Events</Link></li>
                            <li><Link to="/contact"><i className="fas fa-angle-double-right"></i> Contact Us</Link></li>
                            <li><Link to="/faq"><i className="fas fa-angle-double-right"></i> FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Member Links */}
                    <div className="footer-col-v2">
                        <h3>Member Links</h3>
                        <ul className="footer-links-v2">
                            <li><Link to="/weekly-meeting"><i className="fas fa-angle-double-right"></i> Weekly Meeting</Link></li>
                            <li><Link to="/Star-leaders"><i className="fas fa-angle-double-right"></i> Star Leaders</Link></li>
                            <li><Link to="/chapters"><i className="fas fa-angle-double-right"></i> Star Chapters</Link></li>
                            <li><Link to="/franchise"><i className="fas fa-angle-double-right"></i> Franchise</Link></li>
                            <li><Link to="/policies"><i className="fas fa-angle-double-right"></i> Star Policies</Link></li>
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div className="footer-col-v2">
                        <h3>Contacts</h3>
                        <div className="contact-box-v2">
                            <div className="contact-icon-v2"><i className="fas fa-map-marker-alt"></i></div>
                            <div className="contact-details-v2">
                                <strong>Address:</strong>
                                <p>Prompt Tower, Plot No : 324, Ram Nagar South Extension, 12 Street, Off 200 Feet Radial Road, Near Kamakshi Hospital, Pallikaranai, Chennai - 600 100</p>
                            </div>
                        </div>
                        <div className="contact-box-v2">
                            <div className="contact-icon-v2"><i className="fas fa-envelope"></i></div>
                            <div className="contact-details-v2">
                                <strong>Email:</strong>
                                <p>starbusiness.intl@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-box-v2">
                            <div className="contact-icon-v2"><i className="fas fa-phone-alt"></i></div>
                            <div className="contact-details-v2">
                                <strong>Phone:</strong>
                                <p>+91 93420 08371</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-v2">
                    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ textAlign: 'left', margin: 0 }}>
                            <Link to="/terms" style={{ color: 'inherit', transition: 'color 0.3s' }}>Terms and Conditions</Link>
                        </p>

                        <p style={{ textAlign: 'center', margin: 0 }}>© 2026 Star Business Forum. All rights reserved.</p>

                        <p style={{ textAlign: 'right', margin: 0 }}>Designed by <span
                            style={{ color: '#e11d48' }}><a href="https://www.oceansoftwares.com"
                                style={{ color: 'inherit', transition: 'color 0.3s' }}> Ocean Softwares</a></span></p>
                    </div>
                </div>
            </footer>

            <button
                onClick={scrollToTop}
                className={`back-to-top ${isVisible ? 'visible' : ''}`}
                title="Scroll to Top"
                style={{ border: 'none', cursor: 'pointer' }}
            >
                <i className="fas fa-arrow-up"></i>
            </button>
        </>
    );
};

export default Footer;
