import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import EventsPage from './pages/EventsPage';

import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import WeeklyMeeting from './pages/WeeklyMeeting';
import StarLeaders from './pages/StarLeaders';
import Chapters from './pages/Chapters';
import ChapterDetail from './pages/ChapterDetail';
import EventDetail from './pages/EventDetail';
import Membership from './pages/Membership';
import Franchise from './pages/Franchise';
import Policies from './pages/Policies';
import TermsAndConditions from './pages/TermsAndConditions';


// Import CSS
import './assets/css/styles.css';
import './assets/css/space-button.css';
import './assets/css/founder-premium.css';
import './assets/css/partners.css';
import './assets/css/gallery-premium.css';
import './assets/css/membership-premium.css';
import './assets/css/contact-premium.css';
import './assets/css/faq-premium.css';
import './assets/css/weekly-meeting-premium.css';
import './assets/css/Star-leaders-premium.css';
import './assets/css/franchise-premium.css';
import './assets/css/policies-premium.css';
import './assets/css/terms-premium.css';


function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/membership" element={<Membership />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/weekly-meeting" element={<WeeklyMeeting />} />
                    <Route path="/Star-leaders" element={<StarLeaders />} />
                    <Route path="/chapters" element={<Chapters />} />
                    <Route path="/franchise" element={<Franchise />} />
                    <Route path="/policies" element={<Policies />} />
                    <Route path="/terms" element={<TermsAndConditions />} />
                    <Route path="/chapter-detail/:id" element={<ChapterDetail />} />
                    <Route path="/event-detail/:id" element={<EventDetail />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
