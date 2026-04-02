import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onInvestorClick }) => {
    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">InternSync</Link>

                {/* Center Nav Pills */}
                <div className="header-nav-pills">
                    <Link to="/" className="header-pill active">
                        <span className="header-pill-dot"></span>
                        Mobile App
                    </Link>
                    <Link to="/contact" className="header-pill" style={{ textDecoration: 'none' }}>
                        Contact us
                    </Link>
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
