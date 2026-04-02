import { useState } from 'react';
import './Footer.css';

const Footer = ({ onInvestorClick }) => {
    const [showContact, setShowContact] = useState(false);

    return (
        <footer className="footer">
            <div className="footer-brand">
                <h2 className="footer-logo-large">InternSync</h2>
            </div>
            <div className="footer-content">
                <div className="footer-left">
                    <p className="copyright">© 2026 InternSync. All rights reserved.</p>
                </div>
                <div className="footer-right">
                    <span 
                        className="footer-link" 
                        onClick={() => setShowContact(!showContact)}
                        style={{ cursor: 'pointer', display: 'inline-flex', gap: '6px', alignItems: 'center' }}
                    >
                        {showContact ? (
                            <>
                                <a href="mailto:support@internsync.net" style={{ color: 'inherit', textDecoration: 'none' }}>support@internsync.net</a>
                                <span>|</span>
                                <a href="tel:+14699610586" style={{ color: 'inherit', textDecoration: 'none' }}>+1 (469) 961-0586</a>
                            </>
                        ) : (
                            "Contact Support"
                        )}
                    </span>
                    <a href="#" className="footer-link">Privacy Policy</a>
                    <a href="#" className="footer-link">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
