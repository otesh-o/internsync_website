import { useState } from 'react';
import './InvestorModal.css';

const InvestorModal = ({ isOpen, onClose }) => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === 'internsync2026') {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Incorrect password');
            setPassword('');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>

                {!isAuthenticated ? (
                    <div className="login-view">
                        <h2>Investor Access</h2>
                        <p>Please enter the password to view the pitch deck.</p>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={error ? 'error' : ''}
                                autoFocus
                            />
                            {error && <div className="error-message">{error}</div>}
                            <button type="submit" className="submit-btn" style={{ fontWeight: 'bold' }}>Access Deck</button>
                        </form>
                    </div>
                ) : (
                    <div className="deck-view">
                        <h2>InternSync Pitch Deck</h2>
                        <div className="deck-placeholder">
                            <div className="pdf-preview-icon">📄</div>
                            <h3>InternSync Pitch Deck (Final)</h3>
                            <p>Q1 2026 Investor Presentation</p>
                        </div>
                        <div className="deck-actions">
                            <a
                                href="/InternSync Pitch Deck(Final)-4.pdf"
                                target="_blank"
                                className="action-btn primary"
                                style={{ textDecoration: 'none' }}
                            >
                                View Deck
                            </a>
                            <a
                                href="/InternSync Pitch Deck(Final)-4.pdf"
                                download
                                className="action-btn secondary"
                                style={{ textDecoration: 'none' }}
                            >
                                Download PDF
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InvestorModal;
