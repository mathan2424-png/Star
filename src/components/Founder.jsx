import React from 'react';
import '../assets/css/leadership-premium.css';

const Leadership = () => {
    const leaders = [
        {
            name: "Mr. E. Udayakumar",
            role: "FOUNDER"
        },
        {
            name: "Mr. K.K.V. Arul",
            role: "FOUNDER"
        },
        {
            name: "Dr. Soma Valliappan",
            role: "TRAINING DIRECTOR"
        },
        {
            name: "Mr. V.K. Amardeep",
            role: "APP DIRECTOR"
        }
    ];

    return (
        <section id="leadership" className="leadership-section">
            <div className="leadership-container">
                <div className="leadership-header animate-on-scroll">
                    <h2>Visionary Leadership</h2>
                    <p>The driving force behind the Star Business Forum ecosystem.</p>
                </div>

                <div className="leadership-grid">
                    {leaders.map((leader, index) => (
                        <div
                            key={index}
                            className="leadership-card animate-on-scroll"
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="leader-image-wrapper">
                                <i className="fas fa-user-tie leader-icon-main"></i>
                            </div>

                            <div className="leader-card-body">
                                <h3 className="leader-name">{leader.name}</h3>
                                <p className="leader-role">{leader.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
