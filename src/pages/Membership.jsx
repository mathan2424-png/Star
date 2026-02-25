import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';
import '../assets/css/membership-premium.css';

const Membership = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        // Simple entry animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-mem').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="membership-page">

            {/* 1. Hero Section */}
            <section className="mem-hero-section">
                <div className="container">
                    <div className="mem-hero-content animate-mem">
                        <h1 className="mem-headline">Join the Elite Business Network</h1>

                    </div>
                </div>
            </section>

            {/* 4. Join Steps Section */}
            <section className="mem-steps-section animate-mem">
                <div className="container">
                    <div className="section-title-mem">
                        <h2>How to Become a Member</h2>
                        <p>Three simple steps to unlock a world of opportunities.</p>
                    </div>

                    <div className="steps-container">
                        <div className="step-item">
                            <div className="step-number"><span>1</span></div>
                            <h3>Apply Online</h3>
                            <p>Fill out our comprehensive membership application form with your company details.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-number"><span>2</span></div>
                            <h3>Verification</h3>
                            <p>Our audit team reviews your profile to ensure alignment with STAR's quality standards.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-number"><span>3</span></div>
                            <h3>Induction</h3>
                            <p>Attend the induction ceremony and get officially welcomed into your local chapter.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Create Member Form Section */}
            <section id="member-registration" className="create-member-section animate-mem">
                <div className="container">

                    <div className="member-form-card">
                        <form className="member-application-form" onSubmit={(e) => e.preventDefault()}>
                            {/* Basic Information */}
                            <div className="form-section">
                                <h2 className="form-section-title">Basic Information</h2>

                                {/* Data Fields Column */}
                                <div className="fields-col">
                                    <div className="form-row">
                                        <div className="input-box">
                                            <label>Full Name <span>*</span></label>
                                            <input type="text" placeholder="Enter Full Name" required />
                                        </div>
                                        <div className="input-box">
                                            <label>Email Address <span>*</span></label>
                                            <input type="email" placeholder="Enter Email Address" required />
                                        </div>
                                        <div className="input-box">
                                            <label>Phone Number <span>*</span></label>
                                            <input type="tel" placeholder="Enter Phone Number" required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="input-box">
                                            <label>Company Name <span>*</span></label>
                                            <input type="text" placeholder="Enter Company Name" required />
                                        </div>
                                        <div className="input-box">
                                            <label>Date of Birth</label>
                                            <input type="text" placeholder="DD/MM/YYYY" />
                                        </div>
                                        <div className="input-box">
                                            <label>Position</label>
                                            <input type="text" placeholder="Enter Position" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-row full-width-row">
                                    <div className="input-box">
                                        <label>Business Category</label>
                                        <input type="text" placeholder="Enter Category" />
                                    </div>
                                    <div className="input-box">
                                        <label>Referred By</label>
                                        <input type="text" placeholder="Enter Referrer Name" />
                                    </div>
                                    <div className="input-box">
                                        <label>Anniversary</label>
                                        <input type="text" placeholder="DD/MM/YYYY" />
                                    </div>
                                </div>
                            </div>

                            {/* Office Address */}
                            <div className="form-section">
                                <div className="form-row">
                                    <div className="input-box">
                                        <label>Door No (New No)</label>
                                        <input type="text" placeholder="Enter Door No" />
                                    </div>
                                    <div className="input-box">
                                        <label>Street</label>
                                        <input type="text" placeholder="Enter Street Name" />
                                    </div>
                                    <div className="input-box">
                                        <label>Area</label>
                                        <input type="text" placeholder="Enter Area" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-box">
                                        <label>City</label>
                                        <input type="text" placeholder="Enter City" />
                                    </div>
                                    <div className="input-box">
                                        <label>State</label>
                                        <input type="text" placeholder="Enter State" />
                                    </div>
                                    <div className="input-box">
                                        <label>Pincode</label>
                                        <input type="text" placeholder="6-digit pincode" />
                                    </div>
                                </div>
                            </div>

                            {/* Form Footer */}
                            <div className="member-form-footer">
                                <label className="update-checkbox">
                                    <input type="checkbox" />
                                    <span>I wish to receive updates via SMS and E-Mail</span>
                                </label>
                                <button type="submit" className="btn-primary-mem submit-form">Create Member Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Membership;
