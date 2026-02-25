import React from 'react';
import { useNavigate } from 'react-router-dom';
const eventImg2 = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
const eventImg3 = 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
const eventImg4 = '/madurai_expo.png';

const Events = () => {
    const navigate = useNavigate();

    return (
        <section id="events">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <h2>Networking Events</h2>
                </div>
                <div className="event-grid">
                    {/* Event 1 */}
                    <div className="event-card animate-on-scroll">
                        <div className="event-image">
                            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                                alt="Chennai Central Chapter: Founders Meetup" />
                        </div>
                        <div className="event-content">
                            <span className="event-category">Business Growth</span>
                            <h3>Chennai Central Chapter: Founders Meetup</h3>
                            <div className="event-meta">
                                <span><i className="fas fa-clock"></i> 07:30 AM</span>
                                <span><i className="fas fa-map-marker-alt"></i> Hotel Savera</span>
                            </div>
                            <button className="cta-button" onClick={() => navigate('/events')}>Read More</button>
                        </div>
                    </div>

                    {/* Event 2 */}
                    <div className="event-card animate-on-scroll">
                        <div className="event-image">
                            <img src={eventImg2} alt="Innovation Expo" />
                        </div>
                        <div className="event-content">
                            <span className="event-category">Innovation</span>
                            <h3>Coimbatore Innovation Expo 2024</h3>
                            <div className="event-meta">
                                <span><i className="fas fa-clock"></i> 10:00 AM</span>
                                <span><i className="fas fa-map-marker-alt"></i> CODISSIA Complex</span>
                            </div>
                            <button className="cta-button" onClick={() => navigate('/events')}>Read More</button>
                        </div>
                    </div>

                    {/* Event 3 */}
                    <div className="event-card animate-on-scroll">
                        <div className="event-image">
                            <img src={eventImg3} alt="Leadership Seminar" />
                        </div>
                        <div className="event-content">
                            <span className="event-category">Leadership</span>
                            <h3>Annual Business Leadership Summit</h3>
                            <div className="event-meta">
                                <span><i className="fas fa-clock"></i> 09:00 AM</span>
                                <span><i className="fas fa-map-marker-alt"></i> The Residency</span>
                            </div>
                            <button className="cta-button" onClick={() => navigate('/events')}>Read More</button>
                        </div>
                    </div>

                    {/* Event 4 */}
                    <div className="event-card animate-on-scroll">
                        <div className="event-image">
                            <img src={eventImg4} alt="Madurai Expansion Expo" />
                        </div>
                        <div className="event-content">
                            <span className="event-category">Expansion</span>
                            <h3>Madurai Business Expansion & Real Estate Expo</h3>
                            <div className="event-meta">
                                <span><i className="fas fa-clock"></i> 11:00 AM</span>
                                <span><i className="fas fa-map-marker-alt"></i> Madurai Trade Center</span>
                            </div>
                            <button className="cta-button" onClick={() => navigate('/events')}>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;
