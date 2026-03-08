import './Header.css';

const Header = ({ onInvestorClick }) => {
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
                    <span className="header-pill">Contact us</span>
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
