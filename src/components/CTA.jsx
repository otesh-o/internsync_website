import { useState } from 'react';
import './CTA.css';

const CTA = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (email.trim()) {
            setMessage('Thanks! You have been added to our waitlist.');
            setEmail('');
            setTimeout(() => setMessage(''), 3000);
        } else {
            setMessage('Please enter a valid email or phone number.');
            setTimeout(() => setMessage(''), 3000);
        }
    };

    return (
        <section id="cta-section" className="cta-section">
            <div className="cta-card">
                {/* Decorative Shapes */}
                <div className="cta-shape shape-left"></div>
                <div className="cta-shape shape-right"></div>

                <div className="cta-container">
                    <h2 className="cta-title">Simplify Your Job Search</h2>
                    <p className="cta-description">
                        Enter your email or phone number to get started with InternSync's tools.
                    </p>
                    <div className="cta-form">
                        <input
                            type="email"
                            placeholder="Enter your email or phone number"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="cta-input"
                        />
                        <button className="cta-btn" onClick={handleSubmit}>Try it free</button>
                    </div>
                    {message && <p className="cta-message">{message}</p>}
                </div>
            </div>
        </section>
    );
};

export default CTA;
