import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

import Hero from '../components/Hero';
import Founder from '../components/Founder';
import Stats from '../components/Stats';
import About from '../components/About';
import Events from '../components/Events';
import News from '../components/News';
import Advantage from '../components/Advantage';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';

const Home = () => {
    useScrollAnimation();

    return (
        <main>
            <Hero />
            <Founder />
            <Stats />
            <About />
            <Events />
            <News />
            <Advantage />
            <Clients />
            <Testimonials />
            <Gallery />
        </main>
    );
};

export default Home;
