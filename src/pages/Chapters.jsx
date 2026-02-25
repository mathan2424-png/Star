import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Star-leaders-premium.css';
import chapterBgImg from '../assets/images/businessman_star_official_1771562311038.png';
const chennaiImg = chapterBgImg;
const maduraiImg = chapterBgImg;
const trichyImg = chapterBgImg;
const coimbatoreImg = chapterBgImg;
const erodeImg = chapterBgImg;
const velloreImg = chapterBgImg;
const defaultChapterImg = chapterBgImg;

const ChapterCounter = ({ target }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.5 });

        if (counterRef.current) observer.observe(counterRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 2000; // 2 seconds
        const stepTime = Math.abs(Math.floor(duration / target));

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === target) clearInterval(timer);
        }, stepTime);

        return () => clearInterval(timer);
    }, [isVisible, target]);

    return <div ref={counterRef}>{count}</div>;
};

const chapterData = [
    "Chennai Aspire", "Chennai Crown", "Chennai Vibrant", "Karaikudi Chapter", "Trichy Dynamic", "Trichy Galaxy",
    "Thanjavur Chapter", "Madurai Chapter", "Madurai Galaxy", "Madurai Prestige",
    "Dindigal Chapter", "Sivakasi Chapter", "Coimbatore Chapter", "Coimbatore Galaxy",
    "Coimbatore Capital", "Avinashi Chapter", "Vellore", "Erode Chapter", "Coimbatore Crown",
    "Erode Galaxy", "Pudukkottai Chapter", "Madurai Sunrise", "Chennai Ultimate",
    "Chennai Royal Kings", "Chennai Champions",
    "Chennai Phoenix", "Chennai Green City", "Salem Chapter", "Pondicherry Chapter",
    "Chennai Inspire", "Chennai Bench Mark", "Chennai Galaxy", "Chennai Sunrise",
    "Chennai Prestige", "Chennai Royal", "Tambaram Chapter"
];

const Chapters = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredChapters, setFilteredChapters] = useState(chapterData);

    const handleSearch = () => {
        const results = chapterData.filter(chapter =>
            chapter.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredChapters(results);
    };

    // Trigger search on Enter key
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSearch();
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Re-run observer whenever filtered list changes
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.animate-roster');
        elements.forEach(el => {
            // Only hide if not already visible to prevent flashing
            if (!el.classList.contains('visible')) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
            }
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, [filteredChapters]); // Fix: Re-observe when list updates

    useEffect(() => {
        const results = chapterData.filter(chapter =>
            chapter.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredChapters(results);
    }, [searchTerm]);

    const getChapterImage = (name) => {
        const lowerName = name.toLowerCase();
        if (lowerName.includes('chennai') || lowerName.includes('tambaram')) return chennaiImg;
        if (lowerName.includes('madurai') || lowerName.includes('karaikudi') || lowerName.includes('dindigal') || lowerName.includes('sivakasi') || lowerName.includes('pudukkottai')) return maduraiImg;
        if (lowerName.includes('trichy') || lowerName.includes('thanjavur')) return trichyImg;
        if (lowerName.includes('coimbatore') || lowerName.includes('avinashi')) return coimbatoreImg;
        if (lowerName.includes('erode') || lowerName.includes('salem')) return erodeImg;
        if (lowerName.includes('vellore') || lowerName.includes('pondicherry')) return velloreImg;
        return defaultChapterImg;
    };



    return (
        <div className="chapters-page" style={{ paddingBottom: '100px' }}>
            {/* Chapters Hero Section */}
            <section className="chapters-hero-section">
                <div className="chapters-hero-content">
                    <h1 className="chapters-hero-title">Our Chapters</h1>
                    <p className="chapters-hero-subtitle">A powerful network of business professionals across different regions, driving innovation and collaboration.</p>
                </div>
            </section>


            {/* Chapter Stats Section */}
            <section className="chapter-stats-section" style={{ padding: '4rem 0 0', background: '#f8fafc' }}>
                <div className="container">
                    <div style={{
                        background: 'linear-gradient(rgba(20, 20, 40, 0.6), rgba(20, 20, 40, 0.6)), url("https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 30%',
                        padding: '4rem 3rem',
                        borderRadius: '30px',
                        textAlign: 'center',
                        color: '#fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        position: 'relative',
                        overflow: 'hidden',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        {/* Sunset Glow Overlay */}
                        <div style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            background: 'linear-gradient(45deg, rgba(225, 29, 72, 0.3), rgba(251, 191, 36, 0.2))',
                            zIndex: '1',
                            mixBlendMode: 'overlay'
                        }}></div>

                        <div style={{ position: 'relative', zIndex: '2' }}>
                            <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '700', marginBottom: '1.5rem', opacity: '0.9', color: '#eec0c0' }}>Global Network Strength</h2>
                            <div style={{ fontSize: '5.5rem', fontWeight: '900', marginBottom: '1rem', lineHeight: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                                <ChapterCounter target={45} />+
                            </div>
                            <p style={{
                                fontSize: '1.8rem',
                                fontWeight: '700',
                                letterSpacing: '2px',
                                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                                color: '#eec0c0'
                            }}>Active Chapters Across INDIA</p>
                        </div>
                    </div>  
                </div>
            </section>

            {/* Chapters Directory Section */}
            <section className="chapters-directory-section" style={{ background: '#f8fafc', padding: '60px 0 100px' }}>
                <div className="container">
                    <div className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#e11d48', position: 'relative', display: 'inline-block' }}>
                            Explore Our Regions
                            <div style={{ height: '4px', width: '60px', background: 'var(--leader-secondary)', margin: '0.5rem auto 0', borderRadius: '2px' }}></div>
                        </h2>

                        {/* Search Bar Section */}
                        <div className="chapter-search-container" style={{
                            maxWidth: '500px',
                            margin: '3rem auto 0',
                            position: 'relative',
                            display: 'flex',
                            gap: '0',
                            background: '#fff',
                            borderRadius: '100px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            padding: '5px'
                        }}>
                            <div style={{ position: 'relative', flexGrow: 1 }}>
                                <i className="fas fa-search" style={{
                                    position: 'absolute',
                                    left: '20px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: '#64748b'
                                }}></i>
                                <input
                                    type="text"
                                    placeholder="Search Chapter..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem 1.2rem 0.8rem 3.5rem',
                                        borderRadius: '100px',
                                        border: 'none',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        background: 'transparent'
                                    }}
                                    className="chapter-search-input"
                                />
                            </div>
                            <button
                                onClick={handleSearch}
                                style={{
                                    background: 'var(--leader-secondary)',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '100px',
                                    padding: '0 1.5rem',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontSize: '0.9rem'
                                }}>
                                Search
                            </button>
                        </div>
                    </div>

                    <div className="chapters-grid">
                        {filteredChapters.length > 0 ? (
                            filteredChapters.map((chapter, index) => {
                                const chapterId = chapter.toLowerCase().replace(/ /g, '-');
                                return (
                                    <div key={chapterId} className="chapter-card-premium animate-roster"
                                        onClick={() => navigate(`/chapter-detail/${chapterId}`)}
                                        style={{
                                            backgroundImage: `url(${getChapterImage(chapter)})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}>
                                        <div className="chapter-overlay-new">
                                            <div className="chapter-details">
                                                <h3>{chapter}</h3>
                                                <p>Star Business Forum</p>
                                                <span className="read-more-link">Read More</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div style={{
                                gridColumn: '1 / -1',
                                textAlign: 'center',
                                padding: '3rem',
                                background: '#fff',
                                borderRadius: '20px',
                                border: '1px dashed #cbd5e1'
                            }}>
                                <i className="fas fa-search-minus" style={{ fontSize: '3rem', color: '#cbd5e1', marginBottom: '1rem' }}></i>
                                <h4 style={{ color: '#64748b', fontWeight: '600' }}>No chapters found matching "{searchTerm}"</h4>
                                <button
                                    onClick={() => setSearchTerm('')}
                                    style={{
                                        marginTop: '1rem',
                                        color: 'var(--leader-secondary)',
                                        fontWeight: '700',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    Clear Search
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Chapters;
