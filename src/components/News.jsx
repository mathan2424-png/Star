import React, { useState } from 'react';
const mainBannerImg = 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
const covaiImg = 'https://images.unsplash.com/photo-1596422846543-75c6fc18a593?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
const maduraiImg = 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
const erodeImg = 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
const chennaiImg = 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
const thajaiImg = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
const velloreImg = 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';


const News = () => {
    const [mainContent, setMainContent] = useState({
        img: mainBannerImg,
        title: 'CHENNAI, INDIA',
        subtitle: 'Global Headquarters'
    });
    const [fade, setFade] = useState(false);

    const locations = [
        { img: covaiImg, name: 'COIMBATORE' },
        { img: maduraiImg, name: 'MADURAI' },
        { img: erodeImg, name: 'ERODE' },
        { img: chennaiImg, name: 'CHENNAI' },
        { img: thajaiImg, name: 'THANJAI' },
        { img: velloreImg, name: 'VELLORE' }
    ];

    const handleLocationClick = (loc) => {
        setFade(true);
        setTimeout(() => {
            setMainContent({
                img: loc.img,
                title: `${loc.name}, INDIA`,
                subtitle: 'Regional Office'
            });
            setFade(false);
        }, 400);
    };

    return (
        <section id="news">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <h2>STAR Regional Highlights</h2>
                </div>
                {/* Global News / Location Style Layout */}
                <div className="news-hero-location animate-on-scroll">
                    <img
                        src={mainContent.img}
                        alt="Global Headquarters"
                        id="main-news-img"
                        style={{ opacity: fade ? 0.3 : 1, transition: 'opacity 0.4s ease' }}
                    />
                    <div className="location-overlay-hero">
                        <h3 id="main-news-title">{mainContent.title}</h3>
                        <span id="main-news-subtitle">{mainContent.subtitle}</span>
                    </div>
                </div>

                <div className="global-news-grid animate-on-scroll">
                    {locations.map((loc, index) => (
                        <div className="news-location-card" key={index} onClick={() => handleLocationClick(loc)}>
                            <img src={loc.img} alt={loc.name} />
                            <div className="location-card-text">
                                <h4>{loc.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
