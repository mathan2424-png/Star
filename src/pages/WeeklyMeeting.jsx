import React, { useEffect } from 'react';
import '../assets/css/weekly-meeting-premium.css';

const Counter = ({ target, duration }) => {
    const [count, setCount] = React.useState(0);
    const [started, setStarted] = React.useState(false);
    const countRef = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !started) {
                setStarted(true);
            }
        }, { threshold: 0.1 });

        if (countRef.current) observer.observe(countRef.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;

        let start = 0;
        const speed = duration / target;
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= target) clearInterval(timer);
        }, speed);

        return () => clearInterval(timer);
    }, [started, target, duration]);

    return <span ref={countRef}>{count}</span>;
};

const WeeklyMeeting = () => {

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

        document.querySelectorAll('.animate-wm').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="weekly-meeting-page">
            {/* Hero Section */}
            <section className="wm-hero">
                <div className="container">
                    <div className="wm-hero-content animate-wm">
                        <h1>Weekly Chapter Meeting</h1>
                        <p>The heartbeat of the STAR ecosystem, where structured networking meets professional excellence.</p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="wm-overview">
                <div className="container">
                    <div className="wm-card animate-wm">
                        <h2>Chapter Dynamics</h2>
                        <p>
                            Each STAR Chapter maintains a strategic strength of <strong>80 Professionals</strong>.
                            This ecosystem consists of 60 Members representing varied business segments
                            and 20 Entrepreneurs, CEOs, or Owners seeking specialized products and services.
                        </p>
                        <div className="wm-stats-grid">
                            <div className="wm-stat-item">
                                <h3><Counter target={60} duration={1500} /></h3>
                                <p>Business Members</p>
                            </div>
                            <div className="wm-stat-item">
                                <h3><Counter target={20} duration={1500} /></h3>
                                <p>Entrepreneurs</p>
                            </div>
                            <div className="wm-stat-item">
                                <h3><Counter target={80} duration={1500} /></h3>
                                <p>Total Strength</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meeting Fundamentals (Expanded) */}
            <section className="wm-protocol-section">
                <div className="container">
                    <div className="section-title animate-wm">
                        <h2>Meeting Procedure & Fundamentals</h2>
                        <p>Detailed protocols ensuring professional standards and operational excellence.</p>
                    </div>

                    <div className="wm-grid">
                        <div className="wm-info-box animate-wm">
                            <i className="fas fa-calendar-check"></i>
                            <h3>Weekly Meeting</h3>
                            <p>STAR Meetings will be organized during weekdays or weekends as preferred by the Chapter CEO and Core Committee Team, in every week.</p>
                        </div>

                        <div className="wm-info-box animate-wm">
                            <i className="fas fa-hotel"></i>
                            <h3>Meeting Venue</h3>
                            <p>Chapter Meetings will be organized in Banquet facilities of Star Rated Hotels. All expenses are shared among Members and Visitors. Includes Referral Meets, Review Meets, and Training.</p>
                        </div>

                        <div className="wm-info-box animate-wm">
                            <i className="fas fa-network-wired"></i>
                            <h3>Member's Networking</h3>
                            <p>Time is the quintessence. A structured 30-minute networking session precedes every meeting to foster deep professional connections.</p>
                        </div>

                        <div className="wm-info-box animate-wm">
                            <i className="fas fa-envelope-open-text"></i>
                            <h3>Invitations</h3>
                            <p>Circulated 5 days prior via WhatsApp/Email. Features Chapter Logo, Core Team names, Chief Guest photo/topic, and clear venue details.</p>
                        </div>

                        <div className="wm-info-box animate-wm">
                            <i className="fas fa-flag"></i>
                            <h3>Chapter Banner</h3>
                            <p>The prominent Chapter Banner must be displayed visibly behind the Head Table at every meeting.</p>
                        </div>

                        <div className="wm-info-box animate-wm">
                            <i className="fas fa-chair"></i>
                            <h3>Head Table & Seating</h3>
                            <p>Protocol-wise decoration for CEO, Secretary, Chairman, and MDC. Seating follows strictly Professional Conference or U-Type arrangements.</p>
                        </div>

                        <div className="wm-info-box animate-wm">
                            <i className="fas fa-user-check"></i>
                            <h3>Front Desk</h3>
                            <p>Critical for visitor fee collection, database management, and attendance tracking by the Associate Membership Chairman.</p>
                        </div>

                        <div className="wm-info-box animate-wm">
                            <i className="fas fa-bell"></i>
                            <h3>Time Bell</h3>
                            <p>Maintained by the Secretary to ensure strict adherence to time slots for self-introductions and presentations.</p>
                        </div>

                        <div className="wm-info-box animate-wm">
                            <i className="fas fa-user-clock"></i>
                            <h3>Attendance</h3>
                            <p>Registration opens 30 minutes prior to the start. Physical recording at the Front Desk is obligatory for entry.</p>
                        </div>

                        <div className="wm-info-box animate-wm">
                            <i className="fas fa-mobile-alt"></i>
                            <h3>DND Protocol</h3>
                            <p>Strict "Do-Not-Disturb" protocol. All participants must turn mobile phones to silent mode or switch them off during the session.</p>
                        </div>

                        <div className="wm-info-box animate-wm">
                            <i className="fas fa-microphone"></i>
                            <h3>Self Introduction</h3>
                            <p>Max 45 seconds per Member on a First-come-First-served basis, strictly tracked by the attendance time log.</p>
                        </div>

                        <div className="wm-info-box animate-wm">
                            <i className="fas fa-user-tie"></i>
                            <h3>Master of Ceremony</h3>
                            <p>The Secretary presides over the meeting procedure, acting as the Master of Ceremony for every session.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Run Order Section */}
            <section className="wm-run-order">
                <div className="container">
                    <div className="section-title animate-wm">
                        <h2>Meeting Run Order</h2>
                        <p>A rigorous timeline designed for maximum efficiency and professional impact.</p>
                    </div>

                    <div className="timeline-container animate-wm">
                        <div className="timeline-item">
                            <h4>Prayer & Garland</h4>
                            <p>Every STAR Meet starts with a Silent Prayer followed by the Chapter CEO wearing the garland to the Meeting Chairman.</p>
                        </div>
                        <div className="timeline-item">
                            <h4>Welcome & Pledge</h4>
                            <p>Welcome Note by the Secretary (max 2 mins), followed by the STAR Pledge led by the Chapter CEO (1 min).</p>
                        </div>
                        <div className="timeline-item">
                            <h4>STAR Briefing</h4>
                            <p>A concise 1-minute explanation of STAR objectives and vision delivered by the Chapter CEO.</p>
                        </div>
                        <div className="timeline-item">
                            <h4>New Member Inductions</h4>
                            <p>Introduction of new members (2 mins each) and induction ceremony with the STAR Pledge and badge pinning by the CEO or MDC.</p>
                        </div>
                        <div className="timeline-item">
                            <h4>External Speaker</h4>
                            <p>Introduction of the guest speaker by the Meeting Chairman, with a permitted session of 10 to 15 minutes.</p>
                        </div>
                        <div className="timeline-item">
                            <h4>Member Presentations</h4>
                            <p>Focused member presentation sessions with a maximum permitted slot of 45 seconds per Member.</p>
                        </div>
                        <div className="timeline-item">
                            <h4>Visitor Introductions</h4>
                            <p>Introducing up to 10 visitors from varied business segments, permitted with 30-second slots each.</p>
                        </div>
                        <div className="timeline-item">
                            <h4>Referrals & ASK Session</h4>
                            <p>A high-impact 30-minute session for sharing referrals, generating ASKs, and offering gratitude notes.</p>
                        </div>
                        <div className="timeline-item">
                            <h4>Weekly Recognition</h4>
                            <p>10-15 minute session honoring (1) Max Referrals, (2) Max Visitors, (3) Max 1-to-1s, (4) One-time Presence, and (5) Best Self Introduction.</p>
                        </div>
                        <div className="timeline-item">
                            <h4>Closing & Celebration</h4>
                            <p>Formal Vote of Thanks by the Secretary and Birthday & Anniversary celebrations by the Membership Development Team.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Monthly Awards Section */}
            <section className="wm-awards-section">
                <div className="container">
                    <div className="section-title animate-wm">
                        <h2>Monthly Awards</h2>
                        <p>Honored during the second meeting of every month to recognize outstanding contributions.</p>
                    </div>

                    <div className="awards-grid">
                        <div className="award-card animate-wm">
                            <div className="award-icon">
                                <i className="fas fa-star"></i>
                            </div>
                            <h3>Star of the Chapter</h3>
                            <p>Honored to the highest giver of the previous month for their exceptional dedication to chapter growth.</p>
                        </div>

                        <div className="award-card animate-wm">
                            <div className="award-icon">
                                <i className="fas fa-crown"></i>
                            </div>
                            <h3>Captain of the Chapter</h3>
                            <p>Awarded to the best meeting chairman of the last month for maintaining impeccable meeting protocols.</p>
                        </div>

                        <div className="award-card animate-wm">
                            <div className="award-icon">
                                <i className="fas fa-medal"></i>
                            </div>
                            <h3>Ambassador of the Chapter</h3>
                            <p>Presented to the member with the highest number of visitor invitees in the preceding month.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WeeklyMeeting;
