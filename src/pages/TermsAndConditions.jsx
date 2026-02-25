import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/terms-premium.css';

const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            {/* Hero Section */}
            <section className="terms-hero">
                <div className="container">
                    <h1>Terms and Conditions</h1>
                    <p>Understanding the rules and guidelines for participating in the Star Business Forum ecosystem.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="terms-content-wrap">
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div className="last-updated">Last Updated: February 23, 2026</div>

                    {/* Acceptance of Terms */}
                    <div className="terms-block">
                        <h2><i className="fas fa-check-circle"></i> Acceptance of Terms</h2>
                        <div className="terms-text">
                            <p>By accessing or using the Star Business Forum website and its services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or participate in our forum activities.</p>
                            <p>These terms apply to all visitors, users, and members who access or use the Service.</p>
                        </div>
                    </div>

                    {/* Membership and Eligibility */}
                    <div className="terms-block">
                        <h2><i className="fas fa-user-shield"></i> Membership and Eligibility</h2>
                        <div className="terms-text">
                            <p>To be eligible for membership in Star Business Forum, you must be a business professional or owner. Membership is subject to approval by the Board of Management and the respective Chapter's Core Committee.</p>
                            <ul className="terms-list">
                                <li>Membership is individual and non-transferable.</li>
                                <li>Only one representative from each business category is permitted per chapter to avoid conflicts of interest.</li>
                                <li>Members must maintain a high standard of professional and ethical conduct.</li>
                                <li>The Forum reserves the right to refuse or terminate membership at any time for violation of these terms or our code of ethics.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Intellectual Property */}
                    <div className="terms-block">
                        <h2><i className="fas fa-copyright"></i> Intellectual Property</h2>
                        <div className="terms-text">
                            <p>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Star Business Forum or its content suppliers and is protected by international copyright laws.</p>
                            <p>The "STAR" logo and brand name are trademarks of Prompt Trade Fairs (I) Pvt Ltd. Unauthorized use of these trademarks is strictly prohibited.</p>
                        </div>
                    </div>

                    {/* Limitation of Liability */}
                    <div className="terms-block">
                        <h2><i className="fas fa-shield-alt"></i> Limitation of Liability</h2>
                        <div className="terms-text">
                            <p>Star Business Forum acts solely as a facilitator for business networking and referral sharing. We do not guarantee the quality, accuracy, or reliability of any business transactions or services provided by our members.</p>
                            <ul className="terms-list">
                                <li>Star Business Forum shall not be liable for any financial losses, damages, or disputes arising from transactions between members.</li>
                                <li>We do not warrant that the website will be error-free or uninterrupted.</li>
                                <li>The Forum's total liability for any claim arising out of these terms shall not exceed the amount of membership fees paid by the user.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Referral Policy */}
                    <div className="terms-block">
                        <h2><i className="fas fa-handshake"></i> Referral Policy</h2>
                        <div className="terms-text">
                            <p>Members are encouraged to share quality referrals with fellow members. However, the Forum does not guarantee that participation will result in a specific number of referrals or business growth.</p>
                            <p>Referrals should be made in good faith and with the intention of fostering genuine business opportunities.</p>
                        </div>
                    </div>

                    {/* Privacy and Data Protection */}
                    <div className="terms-block">
                        <h2><i className="fas fa-lock"></i> Privacy</h2>
                        <div className="terms-text">
                            <p>Your privacy is important to us. Our use of your personal information is governed by our <Link to="/policies" style={{ color: '#e11d48', fontWeight: '600' }}>Privacy Policy</Link>. By using our services, you consent to the collection and use of your data as described in that policy.</p>
                        </div>
                    </div>

                    {/* Governing Law */}
                    <div className="terms-block">
                        <h2><i className="fas fa-gavel"></i> Governing Law</h2>
                        <div className="terms-text">
                            <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.</p>
                        </div>
                    </div>

                    {/* Changes to Terms */}
                    <div className="terms-block">
                        <h2><i className="fas fa-sync-alt"></i> Changes to Terms</h2>
                        <div className="terms-text">
                            <p>Star Business Forum reserves the right to modify or replace these Terms and Conditions at any time. We will notify members of any significant changes via email or through a notice on our website.</p>
                            <p>Continued use of the service after such changes constitute your acceptance of the new terms.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsAndConditions;
