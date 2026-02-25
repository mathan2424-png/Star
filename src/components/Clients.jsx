import React from 'react';

const Clients = () => {
    return (
        <section id="clients" className="section-padding" style={{ background: 'var(--surface-color)', padding: '60px 0' }}>
            <div className="container">
                <h2 className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Trusted Partners</h2>
            </div>

            <div className="partners-marquee-wrapper">
                <div className="partners-marquee">
                    {/* Row 1: Original Logos */}
                    <ClientItems />

                    {/* Repeat Logos for seamless loop */}
                    <ClientItems />
                </div>
            </div>
        </section>
    );
};

const ClientItems = () => (
    <>
        <div className="client-logo-item">
            <div className="marquee-logo-inner">
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: '50px', height: '50px', border: '2px solid #eb7125', transform: 'rotate(45deg)' }}>
                    <div style={{ width: '30px', height: '30px', border: '2px solid #2d4f7c', position: 'absolute', transform: 'rotate(0deg)' }}></div>
                    <span style={{ transform: 'rotate(-45deg)', fontWeight: 800, color: '#2d4f7c', fontSize: '1rem' }}>A</span>
                </div>
                <div style={{ fontWeight: 700, color: '#2d4f7c', marginTop: '5px', fontSize: '0.8rem' }}>ALLIANCE GROUP</div>
            </div>
        </div>

        <div className="client-logo-item">
            <div className="marquee-logo-inner">
                <div style={{ fontFamily: 'serif', fontWeight: 700, fontSize: '1.3rem', color: '#000' }}>
                    CASAGR<span style={{ color: '#ffd700' }}>A</span>ND
                </div>
            </div>
        </div>

        <div className="client-logo-item">
            <div className="marquee-logo-inner">
                <div style={{ background: '#000', padding: '5px 12px', display: 'inline-block' }}>
                    <h4 style={{ color: '#d32f2f', fontFamily: 'serif', fontWeight: 700, fontSize: '1.4rem', lineHeight: 1, margin: 0 }}>NAVIN'S</h4>
                    <span style={{ color: '#fff', fontSize: '0.5rem', display: 'block' }}>"The Home Makers Who Care"</span>
                </div>
            </div>
        </div>

        <div className="client-logo-item">
            <div className="marquee-logo-inner">
                <img src="https://cdn.simpleicons.org/hitachi/E60012" alt="Hitachi" style={{ height: '40px' }} />
                <span style={{ display: 'block', color: '#888', fontSize: '0.6rem', marginTop: '3px', letterSpacing: '1px' }}>Inspire the Next</span>
            </div>
        </div>

        <div className="client-logo-item">
            <div className="marquee-logo-inner">
                <div style={{ fontFamily: 'sans-serif', fontWeight: 800, fontSize: '1.4rem', borderBottom: '2px solid #ed1c24', display: 'inline-block', lineHeight: 1.2 }}>
                    <span style={{ color: '#004a99' }}>Snowcem</span> <span style={{ color: '#ed1c24' }}>Paints</span>
                </div>
            </div>
        </div>

        <div className="client-logo-item">
            <div className="marquee-logo-inner">
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ width: '70px', height: '35px', border: '2px solid #005aab', borderRadius: '50%', position: 'absolute' }}></div>
                    <h4 style={{ color: '#005aab', fontFamily: 'sans-serif', fontWeight: 900, fontSize: '1.5rem', position: 'relative', zIndex: 1, background: 'var(--surface-color)', padding: '0 5px' }}>GMS</h4>
                </div>
            </div>
        </div>

        <div className="client-logo-item">
            <div className="marquee-logo-inner">
                <h4 style={{ color: '#dc0032', fontFamily: 'sans-serif', fontWeight: 800, fontSize: '1.8rem', margin: 0, letterSpacing: '-1px' }}>Honeywell</h4>
            </div>
        </div>

        <div className="client-logo-item">
            <div className="marquee-logo-inner">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                    <i className="fas fa-globe-asia" style={{ color: '#00a651', fontSize: '1.5rem' }}></i>
                    <div style={{ textAlign: 'left' }}>
                        <h4 style={{ color: '#888', fontFamily: 'sans-serif', fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>KKM SOFT</h4>
                        <span style={{ color: '#666', fontSize: '0.5rem', display: 'block' }}>(P) Ltd.</span>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Clients;
