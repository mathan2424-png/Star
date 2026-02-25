import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={isScrolled ? 'header-scrolled' : ''}>
            <div className="container nav-container">
                <nav className={isScrolled ? 'nav-scrolled' : ''}>
                    <div className="logo">
                        <Link to="/" className="logo-link">
                            <img src="/star_logo.png" alt="Star Business Forum" className="main-logo-img" />
                        </Link>
                    </div>
                    <input
                        type="checkbox"
                        id="menu-checkbox"
                        checked={isMenuOpen}
                        onChange={(e) => setIsMenuOpen(e.target.checked)}
                    />
                    <label htmlFor="menu-checkbox" className="menu-toggle"></label>
                    <ul className="nav-links">
                        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About STAR</Link></li>
                        <li><Link to="/chapters" className={location.pathname === '/chapters' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Chapters</Link></li>
                        <li><Link to="/Star-leaders" className={location.pathname === '/Star-leaders' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Leaders</Link></li>
                        <li><Link to="/events" className={location.pathname === '/events' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Events</Link></li>
                        <li className="dropdown">
                            <Link to="#" className="dropdown-toggle">Our Groups</Link>
                            <ul className="dropdown-menu">
                                <li><a href="https://prompttradefairs.com/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>TRADE FAIRS</a></li>
                                <li><a href="https://www.buildersline.in/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>PUBLICATION</a></li>
                                <li><a href="https://www.promptdigimart.com/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>DIGI MART</a></li>
                            </ul>
                        </li>
                        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
