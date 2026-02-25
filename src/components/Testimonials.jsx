import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "S. Krishnan",
            title: "Area Marketing Manager, HITACHI",
            quote: "I on behalf of the Hitachi Team extend my heartiest congratulations to Prompt for organizing. what I thought to be a successful exhibition. Looking forward to being invited in upcoming expo.",
        },
        {
            name: "Mr. Raja",
            title: "Regional Manager, Snowcem Paints",
            quote: "We are so happy to appreciate to organizers for taking the enormous steps to conduct a huge exhibition & have pleasure to inform you that we have received good response.",
        },
        {
            name: "Mr. Govindarajan",
            title: "Managing Directors, GMS",
            quote: "We have pleasure to inform you that we have received very good response and good volume of business enquires. We thank you very much for conducting the IIBE Expo-2013.",
        },
        {
            name: "Mr. K. Biju",
            title: "Head - Solar, Honeywell",
            quote: "The initiative taken by M/s Prompt Trade Fairs towards making the event success was awesome. Good captain will always give better results. We are extremely satisfied with the outcomes.",
        },
        {
            name: "S. Charulatha",
            title: "Head-Training, KKM SOFT (P) Ltd.",
            quote: "We are happy with the response we got & Business Value in the Build Expo-2011. We Look forward to continuing our business relationship Thanks for your effort & excellent services.",
        },
        {
            name: "R. Vinayakam",
            title: "Sr. Manager, Reliance",
            quote: "It was well organized exhibition to the core satisfaction of the exhibitors. Very good quality visitors visited the expo.",
        },
        {
            name: "Ms. Nioma Aranha",
            title: "Vice President - Mktg, Alliance Group",
            quote: "We are happy to state that we have generated good enquiries, thanks to the quality crowd that came in. The exhibition was well organized and the venue ideally located.",
        },
        {
            name: "Arun Mn",
            title: "Founder & Managing Director, Casagrand",
            quote: "Our participating in this exhibition is very useful for our business improvements. We have received more than 100 enquires for our project segment.",
        },
        {
            name: "Dr. R. KUMAR",
            title: "Managing Director, Navin Housing",
            quote: "Well organised Exhibition with good ad Campaign which resulted more patronage to our Residential Projects. Truly professional management.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section id="testimonials" className="section-padding" style={{ background: 'var(--bg-color)', overflow: 'hidden', padding: '44px 0px' }}>
            <div className="container">
                <div className="testimonial-section-header animate-on-scroll">
                    <span className="client-script">Client</span>
                    <h2 className="testimonial-main-heading">Testimonial</h2>
                </div>

                <div className="testimonial-viewport-framed animate-on-scroll">
                    <div className="testimonial-track-framed" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {testimonials.map((item, index) => (
                            <div className="testimonial-item-framed" key={index}>
                                <div className="testimonial-card-framed">
                                    <div className="frame-quote quote-top-left"><i className="fas fa-quote-left"></i></div>
                                    <h3 className="author-name-framed">{item.name}</h3>
                                    <p className="author-title-framed">{item.title}</p>
                                    <div className="star-rating">
                                        {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                                    </div>
                                    <p className="testimonial-text-framed">"{item.quote}"</p>
                                    <div className="frame-quote quote-bottom-right"><i className="fas fa-quote-right"></i></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="testimonial-dots-framed">
                        {testimonials.map((_, index) => (
                            <span
                                key={index}
                                className={`dot-framed ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                                data-index={index}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
