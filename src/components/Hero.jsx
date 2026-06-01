import { useState, useEffect, useRef } from 'react';
import './Hero.css';
import PhoneMockup from './PhoneMockup';
import StoreBadges from './StoreBadges';

const Hero = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [scrollY, setScrollY] = useState(0);
    const phoneRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const parallaxOffset = scrollY * 0.3;

    const scrollToCTA = () => {
        document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleHeroSubmit = () => {
        if (email.trim()) {
            setMessage('Thanks! You have been added to our waitlist.');
            setEmail('');
            setTimeout(() => setMessage(''), 3000);
        } else {
            scrollToCTA();
        }
    };

    return (
        <section className="hero">
            <div className="hero-container">
                {/* Left Content */}
                <div className="hero-content">
                    <div className="hero-welcome">
                        <span className="welcome-text">WELCOME TO</span>
                        <span className="welcome-badge">INTERNSYNC</span>
                    </div>

                    <h1 className="hero-headline">
                        <span className="headline-italic">Swipe</span>
                        {' '}Your
                        <br />
                        Way To Your
                        <br />
                        Dream
                        <br />
                        <span className="headline-italic">Career</span>
                    </h1>

                    <p className="hero-subtitle">
                        Effortlessly discover internships, apply with a swipe,
                        and land your dream role—all in one app
                    </p>

                    <div className="hero-cta-form">
                        <input
                            type="email"
                            placeholder="Enter your email or phone number"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="hero-input"
                        />
                        <button className="hero-cta-btn" onClick={handleHeroSubmit}>Try it free</button>
                    </div>
                    {message && <p className="hero-message">{message}</p>}
                </div>

                {/* Right Phone Section */}
                <div className="hero-phone-section">
                    {/* Rating Card */}
                    <div className="floating-card rating-card">
                        <div className="rating-score">4,9 <span>/5</span></div>
                        <p className="rating-text">our app users<br />feedback</p>
                        <div className="rating-stars">★★★★★</div>
                    </div>

                    {/* Phone */}
                    <div
                        className="hero-phone"
                        ref={phoneRef}
                        style={{ transform: `translateY(${parallaxOffset}px)` }}
                    >
                        <PhoneMockup />
                    </div>

                    {/* Background Card with Text */}
                    <div className="hero-bg-card">
                        <div className="bg-card-text">
                            <h3>Mobile<br />Application</h3>
                            <StoreBadges variant="inline" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom badge */}
            <div className="hero-footer">
                <span>All Rights Reserved</span>
            </div>
        </section>
    );
};

export default Hero;
