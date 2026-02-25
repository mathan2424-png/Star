import React, { useEffect, useRef } from 'react';

const Stats = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const observerOptions = { threshold: 0.5 };
        const counters = containerRef.current.querySelectorAll('.counter');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000; // 2 seconds animation
                    const stepTime = 30;
                    const steps = duration / stepTime;
                    const inc = target / steps;

                    let currentCount = 0;

                    const updateCount = () => {
                        currentCount += inc;
                        if (currentCount < target) {
                            counter.innerText = Math.ceil(currentCount);
                            setTimeout(updateCount, stepTime);
                        } else {
                            counter.innerText = target;
                        }
                    };

                    updateCount();
                    observer.unobserve(counter);
                }
            });
        }, observerOptions);

        counters.forEach((counter) => observer.observe(counter));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="stats-section" ref={containerRef}>
            <div className="container">
                <div className="stat-grid">
                    <div className="stat-card animate-on-scroll">
                        <div className="stat-number"><span className="counter" data-target="2200">0</span> +</div>
                        <div className="stat-label">Members</div>
                    </div>
                    <div className="stat-card animate-on-scroll">
                        <div className="stat-number"><span className="counter" data-target="45">0</span> +</div>
                        <div className="stat-label">Chapters</div>
                    </div>
                    <div className="stat-card animate-on-scroll">
                        <div className="stat-number"><span className="counter" data-target="2400">0</span> Cr</div>
                        <div className="stat-label">Converted Business</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
