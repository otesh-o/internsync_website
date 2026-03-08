import { useState } from 'react';
import './CTA.css';

const CTA = () => {
    const [email, setEmail] = useState('');

    return (
        <section className="cta-section">
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
                        <button className="cta-btn">Try it free</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
