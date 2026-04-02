import { useState } from 'react';
import './Header.css';

const Header = ({ onInvestorClick }) => {
    const [showContact, setShowContact] = useState(false);

    return (
        <header className="header">
            <div className="header-container">
                <a href="/" className="logo">InternSync</a>

                {/* Center Nav Pills */}
                <div className="header-nav-pills">
                    <span className="header-pill active">
                        <span className="header-pill-dot"></span>
                        Mobile App
                    </span>
                    <span 
                        className="header-pill" 
                        onClick={() => setShowContact(!showContact)}
                        style={{ cursor: 'pointer', display: 'flex', gap: '6px', alignItems: 'center', transition: 'all 0.3s ease' }}
                    >
                        {showContact ? (
                            <>
                                <a href="mailto:support@internsync.net" style={{ color: 'inherit', textDecoration: 'none' }}>support@internsync.net</a>
                                <span>|</span>
                                <a href="tel:+14699610586" style={{ color: 'inherit', textDecoration: 'none' }}>+1 (469) 961-0586</a>
                            </>
                        ) : (
                            "Contact us"
                        )}
                    </span>
                </div>

                <nav className="nav">
                    <button onClick={onInvestorClick} className="btn-primary">
                        View Pitch Deck
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
