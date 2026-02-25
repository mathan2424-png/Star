import React from 'react';

const Gallery = () => {
    return (
        <section id="gallery" className="section-padding" style={{ background: 'var(--surface-color)', marginBottom: '80px' }}>
            <div className="container">
                <div className="section-header animate-on-scroll">
                    {/*<span className="section-subtitle">Visual Showcase</span>*/}
                    <h2>Networking Excellence</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>A glimpse into our vibrant chapter meetings and industry events.</p>
                </div>
                <div className="gallery-grid-premium animate-on-scroll">
                    <div className="gallery-item-premium">
                        <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Chennai Central Chapter: Founders Meetup" />
                        <div className="gallery-overlay-premium">
                            <div className="gallery-overlay-text">
                                <h3>Founders Meetup</h3>
                                <p>Chennai Central Chapter</p>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-item-premium">
                        <img src="https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="International Leadership Summit" />
                        <div className="gallery-overlay-premium">
                            <div className="gallery-overlay-text">
                                <h3>Leadership Summit</h3>
                                <p>Global Networking</p>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-item-premium">
                        <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="National Business Expo Showcase" />
                        <div className="gallery-overlay-premium">
                            <div className="gallery-overlay-text">
                                <h3>Business Expo</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
