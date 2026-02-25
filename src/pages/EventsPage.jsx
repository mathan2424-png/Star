import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/styles.css';
import '../assets/css/events-premium.css';

// Import images - Reusing available premium assets or placeholders
const heroBg = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';
const eventImg1 = 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
const eventImg2 = 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
const eventImg3 = 'https://images.unsplash.com/photo-1475721027187-40ae001099ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
const EventsPage = () => {
    const navigate = useNavigate();
    const [eventBanner, setEventBanner] = React.useState('https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
    const [eventBannerTitle, setEventBannerTitle] = React.useState('Chennai Central Chapter');
    const [isRegisterModalOpen, setIsRegisterModalOpen] = React.useState(false);
    const [selectedEventForReg, setSelectedEventForReg] = React.useState('');

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

        return () => observer.disconnect();
    }, []);

    return (
        <div className="events-page-arch">

            {/* New Upcoming Events Section */}
            <section className="upcoming-events-section animate-on-scroll">
                <div className="container">

                    {/* Interactive Event Banner */}
                    <div className="hq-banner animate-on-scroll" style={{ marginBottom: '2rem' }}>
                        <div className="hq-banner-bg" style={{ backgroundImage: `url(${eventBanner})`, filter: 'brightness(0.6)' }}></div>
                        <div className="hq-content">
                            <h2 className="hq-title">{eventBannerTitle}</h2>
                            <p className="hq-subtitle">Featured Highlights</p>
                        </div>
                    </div>

                    <div className="event-grid">
                        <div className="event-card"
                            onMouseEnter={() => {
                                setEventBanner('https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
                                setEventBannerTitle('Chennai Central Chapter: Founders Meetup');
                            }}
                            onClick={() => navigate('/event-detail/founders-meetup')}>
                            <div className="event-image">
                                <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Networking Event" />
                            </div>
                            <div className="event-content">
                                <h3>Chennai Central Chapter: Founders Meetup</h3>
                                <div className="event-meta">
                                    <span><i className="far fa-clock"></i> 07:30 AM</span>
                                    <span><i className="fas fa-map-marker-alt"></i> Hotel Savera</span>
                                </div>
                                <button className="cta-button">Read More</button>
                            </div>
                        </div>

                        {/* Event 2 */}
                        <div className="event-card"
                            onMouseEnter={() => {
                                setEventBanner('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
                                setEventBannerTitle('Coimbatore Innovation Expo 2024');
                            }}
                            onClick={() => navigate('/event-detail/coimbatore-expo')}>
                            <div className="event-image">
                                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Business Expo" />
                            </div>
                            <div className="event-content">
                                <h3>Coimbatore Innovation Expo 2024</h3>
                                <div className="event-meta">
                                    <span><i className="far fa-clock"></i> 10:00 AM</span>
                                    <span><i className="fas fa-map-marker-alt"></i> CODISSIA Complex</span>
                                </div>
                                <button className="cta-button">Read More</button>
                            </div>
                        </div>

                        {/* Event 3 */}
                        <div className="event-card"
                            onMouseEnter={() => {
                                setEventBanner('https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
                                setEventBannerTitle('Successful Chennai\'s Business Elite');
                            }}
                            onClick={() => navigate('/event-detail/leadership-summit')}>
                            <div className="event-image">
                                <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Leadership Summit" />
                            </div>
                            <div className="event-content">
                                <h3>Successful Chennai's Business Elite</h3>
                                <div className="event-meta">
                                    <span><i className="far fa-clock"></i> 09:30 AM</span>
                                    <span><i className="fas fa-map-marker-alt"></i> The Residency Towers</span>
                                </div>
                                <button className="cta-button">Read More</button>
                            </div>
                        </div>

                        {/* Event 4 */}
                        <div className="event-card"
                            onMouseEnter={() => {
                                setEventBanner('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
                                setEventBannerTitle('Chennai Galaxy: Business Expansion Expo');
                            }}
                            onClick={() => navigate('/event-detail/business-meet')}>
                            <div className="event-image">
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Business Meet" />
                            </div>
                            <div className="event-content">
                                <h3>Chennai Galaxy: Business Expansion Expo</h3>
                                <div className="event-meta">
                                    <span><i className="far fa-clock"></i> 08:30 AM</span>
                                    <span><i className="fas fa-map-marker-alt"></i> ITC Grand Chola</span>
                                </div>
                                <button className="cta-button">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Leadership Presence */}
            <section className="arch-presence-section">
                <div className="container">
                    <div className="section-title-arch animate-on-scroll">
                        <h2><span className="highlight-text-bg">Leadership</span> Presence at the Event</h2>
                    </div>
                    <div className="presence-grid animate-on-scroll">
                        <div className="presence-card">
                            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Morning Session" />
                        </div>
                        <div className="presence-card">
                            <img src="https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Afternoon Session" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Why STAR Connect Exists */}
            <section className="why-arch-section">
                <div className="container">
                    <div className="section-title-arch animate-on-scroll">
                        <h2>Why <span className="highlight-text-bg">STAR CONNECT</span> Exists</h2>
                    </div>

                    <div className="why-arch-grid">
                        {/* Card 1 */}
                        <div className="why-card animate-on-scroll">
                            <div className="card-number">1</div>
                            <h3>For STAR Members</h3>
                            <p className="card-motto">"Your Network, Your Net Worth!"</p>
                            <p>Business leaders play a pivotal role in the professional ecosystem. This project specifically targets DECISION MAKERS, offering an opportunity to pitch your business directly to them. We created this platform to facilitate direct face-to-face interaction, reducing the cold calling effort and maximizing conversion potential.</p>
                            <button className="btn-details">Read More</button>
                        </div>

                        {/* Card 2 */}
                        <div className="why-card animate-on-scroll">
                            <div className="card-number">2</div>
                            <h3>For Entrepreneurs</h3>
                            <p className="card-motto">"Quality inputs for Superior output"</p>
                            <p>You realize that sourcing reliable partners is crucial for project success. This event brings 40 top-tier vendors under one roof. These networking interactions ensure you have multiple options for every business requirement, ensuring quality, cost-effectiveness, and timely delivery.</p>
                            <button className="btn-details">Read More</button>
                        </div>

                        {/* Card 3 */}
                        <div className="why-card animate-on-scroll">
                            <div className="card-number">3</div>
                            <h3>For the Industry</h3>
                            <p className="card-motto">"Bridging Gaps, Building Future"</p>
                            <p>Bringing the giants of business under one roof fosters collaboration, innovation, and trust. STAR CONNECT is more than an event; it's a movement to streamline the industry's supply chain and create an ecosystem of mutual growth and support for the next decade.</p>
                            <button className="btn-details">Read More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Business Future Split */}
            <section className="construction-future-section">
                <div className="container future-grid">
                    <div className="future-image animate-on-scroll">
                        <img src={eventImg1} alt="STAR Event Collage" />
                    </div>
                    <div className="future-content animate-on-scroll">
                        <div className="logo" style={{ marginBottom: '1.5rem' }}>
                            <div className="logo-link">
                                <img src="/star_logo.png" alt="Star Business Forum" style={{ height: '80px', width: 'auto' }} />
                            </div>
                        </div>
                        <h2>India's <br />Business Future</h2>
                        <p className="future-tagline">The Nation's Premier Business Network - 50+ Chapters Strong</p>
                        <p>For over a decade, Star Business Forum (STAR) has been the framework supporting India's professional revolution. From Chennai's bustling commercial districts to Mumbai's corporate hubs, STAR's 50+ specialized chapters have orchestrated partnerships worth over ₹10,000 crores in successful business outcomes.</p>
                        <p><strong>We don't just connect businesses—we architect the relationships that build nations.</strong></p>
                        <p>As India's most trusted business ecosystem, STAR has consistently delivered what others only promise: direct access to decision-makers, quality-verified partnerships, and measurable business growth. Our network includes the country's most influential leaders, premier manufacturers, trusted contractors, and innovative solution providers who collectively shape India's future.</p>

                        <button className="btn-future">Fetch your invites here</button>
                    </div>
                </div>
            </section>

            {/* 8. Registration Modal */}
            {isRegisterModalOpen && (
                <div className="leader-modal-overlay" onClick={() => setIsRegisterModalOpen(false)}>
                    <div className="leader-modal-content registration-modal visitor-form-modal" onClick={e => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setIsRegisterModalOpen(false)}>
                            <i className="fas fa-times"></i>
                        </button>

                        <div className="visitor-form-header">
                            <div className="v-header-left">
                                <h1 className="visitor-title" style={{ color: '#e11d48' }}>VISITOR'S INTEREST FORM</h1>
                            </div>
                        </div>

                        <form className="visitor-interest-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="v-form-row">
                                <label>Name</label>
                                <span className="v-colon">:</span>
                                <input type="text" placeholder="................................................................................................................" required />
                            </div>
                            <div className="v-form-row">
                                <label>Business Category</label>
                                <span className="v-colon">:</span>
                                <input type="text" placeholder="................................................................................................................" required />
                            </div>
                            <div className="v-form-row">
                                <label>Name of the Company</label>
                                <span className="v-colon">:</span>
                                <input type="text" placeholder="................................................................................................................" required />
                            </div>
                            <div className="v-form-row align-start">
                                <label>Address</label>
                                <span className="v-colon">:</span>
                                <div className="address-lines">
                                    <input type="text" placeholder="................................................................................................................" required />
                                    <input type="text" placeholder="................................................................................................................" />
                                </div>
                            </div>
                            <div className="v-form-row">
                                <label>Mobile No</label>
                                <span className="v-colon">:</span>
                                <input type="tel" placeholder="................................................................................................................" required />
                            </div>
                            <div className="v-form-row">
                                <label>Email Id</label>
                                <span className="v-colon">:</span>
                                <input type="email" placeholder="................................................................................................................" required />
                            </div>
                            <div className="v-form-row">
                                <label>Invited by</label>
                                <span className="v-colon">:</span>
                                <input type="text" placeholder="................................................................................................................" required />
                            </div>

                            <div className="visitor-survey-container">
                                <div className="survey-box">
                                    <p className="survey-question">Are you Interested to become a Member of STAR ?</p>
                                    <div className="survey-options">
                                        <label className="checkbox-item">
                                            <input type="radio" name="membership" /> <span className="box"></span> Yes
                                        </label>
                                        <label className="checkbox-item">
                                            <input type="radio" name="membership" /> <span className="box"></span> May be
                                        </label>
                                        <label className="checkbox-item">
                                            <input type="radio" name="membership" /> <span className="box"></span> No
                                        </label>
                                    </div>
                                </div>

                                <div className="survey-box">
                                    <p className="survey-question">How was your Experience in this Meeting ?</p>
                                    <div className="survey-options">
                                        <label className="checkbox-item">
                                            <input type="radio" name="experience" /> <span className="box"></span> Fair
                                        </label>
                                        <label className="checkbox-item">
                                            <input type="radio" name="experience" /> <span className="box"></span> Good
                                        </label>
                                        <label className="checkbox-item">
                                            <input type="radio" name="experience" /> <span className="box"></span> Excellent
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="cta-button confirm-btn">Confirm Registration</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventsPage;
