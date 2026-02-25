import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../assets/css/events-premium.css';
const EventDetail = () => {
    const { id } = useParams();

    const eventData = {
        'founders-meetup': {
            title: "Chennai Central Chapter: Founders Meetup",
            time: "07:30 AM - 11:30 AM",
            venue: "Hotel Savera, Chennai",
            date: "February 28, 2026",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            description: "Join us for an exclusive Founders Meetup hosted by the Chennai Central Chapter. This event is designed to bring together visionary entrepreneurs, industry leaders, and business owners under one roof to foster collaboration and sustainable growth in the business ecosystem."
        },
        'coimbatore-expo': {
            title: "Coimbatore Innovation Expo 2024",
            time: "10:00 AM - 06:00 PM",
            venue: "CODISSIA Complex, Coimbatore",
            date: "March 15, 2026",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            description: "The Coimbatore Innovation Expo is the premier showcase for cutting-edge business solutions and innovations. Explore the latest advancements in technology, infrastructure, and innovative business models that are redefining the commercial landscape in South India."
        },
        'leadership-summit': {
            title: "Successful Chennai's Business Elite",
            time: "09:30 AM - 02:30 PM",
            venue: "The Residency Towers, Chennai",
            date: "April 10, 2026",
            image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            description: "A high-level gathering of Chennai's most successful business leaders. This leadership summit delves into strategic management, financial planning for large-scale enterprises, and the leadership qualities required to navigate the complex global market of the future."
        },
        'business-meet': {
            title: "Chennai Galaxy: Business Expansion Expo",
            time: "08:30 AM - 04:30 PM",
            venue: "ITC Grand Chola, Chennai",
            date: "May 22, 2026",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            description: "Expand your business horizons at the Chennai Galaxy Expo. This event is specifically geared towards providing a platform for SMEs and large-scale entrepreneurs to connect, exchange referrals, and discover massive growth opportunities across the Chennai region."
        }
    };

    const currentEvent = eventData[id] || eventData['founders-meetup'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="event-detail-page" style={{ marginTop: '100px', paddingBottom: '100px' }}>
            <div className="container">
                <div className="back-link" style={{ marginBottom: '2.5rem', paddingTop: '1.5rem' }}>
                    <Link to="/events" className="back-to-events-btn">
                        <i className="fas fa-arrow-left"></i> Back to Events
                    </Link>
                </div>

                <div className="event-detail-header" style={{ marginBottom: '3rem' }}>
                    <div className="detail-hero-image" style={{
                        width: '100%',
                        height: '450px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        marginBottom: '2rem',
                        position: 'relative',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
                    }}>
                        <img src={currentEvent.image} alt={currentEvent.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            right: '0',
                            padding: '3rem',
                            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                            color: '#fff'
                        }}>

                            <h1 style={{ fontSize: '3.5rem', fontWeight: '800', margin: '0' }}>{currentEvent.title}</h1>
                        </div>
                    </div>
                </div>

                <div className="detail-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
                    <div className="detail-main">
                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2rem', color: '#e11d48', marginBottom: '1.5rem', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem' }}>About the Event</h2>
                            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                {currentEvent.description}
                            </p>
                            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                Join STAR for an experience that transcends traditional networking. This gathering is carefully curated to provide maximum value through strategic interactions and industry-leading insights.
                            </p>
                        </section>


                        <section id="registration" style={{
                            marginTop: '3rem',
                            padding: '0'
                        }}>
                            <h2 style={{
                                fontSize: '1.8rem',
                                color: '#e11d48',
                                marginBottom: '1.5rem',
                                borderBottom: '2px solid #e2e8f0',
                                paddingBottom: '0.4rem'
                            }}>Event Registration</h2>

                            <form className="visitor-pill-form" onSubmit={(e) => e.preventDefault()}>
                                {/* Top Section: Basic Info in 3 columns */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.8rem', marginBottom: '1rem' }}>
                                    <div className="v-pill-field" style={{ background: '#fff', borderRadius: '50px', padding: '0.4rem 1.2rem', border: '1px solid #e2e8f0' }}>
                                        <input type="text" placeholder="Name" style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', fontSize: '0.85rem', color: '#1e293b' }} required />
                                    </div>
                                    <div className="v-pill-field" style={{ background: '#fff', borderRadius: '50px', padding: '0.4rem 1.2rem', border: '1px solid #e2e8f0' }}>
                                        <input type="email" placeholder="Email Id" style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', fontSize: '0.85rem', color: '#1e293b' }} required />
                                    </div>
                                    <div className="v-pill-field" style={{ background: '#fff', borderRadius: '50px', padding: '0.4rem 1.2rem', border: '1px solid #e2e8f0' }}>
                                        <input type="tel" placeholder="Mobile No" style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', fontSize: '0.85rem', color: '#1e293b' }} required />
                                    </div>
                                    <div className="v-pill-field" style={{ background: '#fff', borderRadius: '50px', padding: '0.4rem 1.2rem', border: '1px solid #e2e8f0' }}>
                                        <input type="text" placeholder="Business Category" style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', fontSize: '0.85rem', color: '#1e293b' }} required />
                                    </div>
                                    <div className="v-pill-field" style={{ background: '#fff', borderRadius: '50px', padding: '0.4rem 1.2rem', border: '1px solid #e2e8f0' }}>
                                        <input type="text" placeholder="Name of the Company" style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', fontSize: '0.85rem', color: '#1e293b' }} required />
                                    </div>
                                    <div className="v-pill-field" style={{ background: '#fff', borderRadius: '50px', padding: '0.4rem 1.2rem', border: '1px solid #e2e8f0' }}>
                                        <input type="text" placeholder="Invited by" style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', fontSize: '0.85rem', color: '#1e293b' }} required />
                                    </div>
                                </div>

                                {/* Middle Section: Address */}
                                <div className="v-pill-field" style={{
                                    background: '#fff',
                                    borderRadius: '16px',
                                    padding: '0.6rem 1.2rem',
                                    border: '1px solid #e2e8f0',
                                    marginBottom: '1rem'
                                }}>
                                    <textarea
                                        placeholder="Full Address"
                                        style={{
                                            width: '100%',
                                            height: '50px',
                                            border: 'none',
                                            background: 'transparent',
                                            outline: 'none',
                                            fontSize: '0.85rem',
                                            color: '#1e293b',
                                            resize: 'none',
                                            fontFamily: 'inherit'
                                        }}
                                        required
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.5rem' }}>
                                    <div>
                                        <p style={{ fontWeight: '700', marginBottom: '0.8rem', fontSize: '0.9rem', color: '#e11d48' }}>Are you Interested to become a Member of STAR ?</p>
                                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                                            {['Yes', 'May be', 'No'].map(option => (
                                                <label key={option} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontWeight: '600', fontSize: '0.85rem', color: '#475569' }}>
                                                    <input type="radio" name="membership" style={{ accentColor: '#fbbf24', width: '16px', height: '16px' }} /> {option}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: '700', marginBottom: '0.8rem', fontSize: '0.9rem', color: '#e11d48' }}>How was your Experience in this Meeting ?</p>
                                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                                            {['Fair', 'Good', 'Excellent'].map(option => (
                                                <label key={option} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontWeight: '600', fontSize: '0.85rem', color: '#475569' }}>
                                                    <input type="radio" name="experience" style={{ accentColor: '#fbbf24', width: '16px', height: '16px' }} /> {option}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                                    <button type="submit" style={{
                                        background: '#fbbf24',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '50px',
                                        padding: '0.8rem 2.5rem',
                                        fontSize: '1rem',
                                        fontWeight: '700',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 6px 15px rgba(251, 191, 36, 0.2)'
                                    }}
                                        onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                                        onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}>
                                        Confirm Registration
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>

                    <div className="detail-sidebar">
                        <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '24px', position: 'sticky', top: '120px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#e11d48', marginBottom: '1.5rem' }}>Event Details</h3>

                            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(225, 29, 72, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e11d48' }}>
                                    <i className="far fa-calendar-alt"></i>
                                </div>
                                <div>
                                    <p style={{ margin: '0', fontSize: '0.85rem', color: '#64748b', fontWeight: '600' }}>Date</p>
                                    <p style={{ margin: '0', fontSize: '1.05rem', color: '#e11d48', fontWeight: '700' }}>{currentEvent.date}</p>
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(225, 29, 72, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e11d48' }}>
                                    <i className="far fa-clock"></i>
                                </div>
                                <div>
                                    <p style={{ margin: '0', fontSize: '0.85rem', color: '#64748b', fontWeight: '600' }}>Time</p>
                                    <p style={{ margin: '0', fontSize: '1.05rem', color: '#e11d48', fontWeight: '700' }}>{currentEvent.time}</p>
                                </div>
                            </div>

                            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(225, 29, 72, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e11d48' }}>
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <p style={{ margin: '0', fontSize: '0.85rem', color: '#64748b', fontWeight: '600' }}>Venue</p>
                                    <p style={{ margin: '0', fontSize: '1.05rem', color: '#e11d48', fontWeight: '700' }}>{currentEvent.venue}</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EventDetail;
