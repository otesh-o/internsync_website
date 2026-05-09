import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
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
                    <Link to="/contact" className="footer-link">
                        Contact Support
                    </Link>
                    <button className="footer-link" onClick={() => alert('Coming soon!')}>Privacy Policy</button>
                    <button className="footer-link" onClick={() => alert('Coming soon!')}>Terms of Service</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
