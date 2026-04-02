import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = ({ onInvestorClick }) => {
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
                    <a href="#" className="footer-link">Privacy Policy</a>
                    <a href="#" className="footer-link">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
