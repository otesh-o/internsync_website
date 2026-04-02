import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const phoneNumber = "+1 (469) 961-0586";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(phoneNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-header">
                    <h1 className="contact-title">Contact InternSync</h1>
                    <p className="contact-subtitle">
                        Have questions? Our team is here to help.
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info-item">
                        <span className="contact-label">Email</span>
                        <a href="mailto:support@internsync.net" className="contact-value">support@internsync.net</a>
                    </div>

                    <div className="contact-info-item">
                        <span className="contact-label">Phone</span>
                        <div className="phone-wrapper">
                            <a href="tel:+14699610586" className="contact-value">{phoneNumber}</a>
                            <button 
                                onClick={copyToClipboard} 
                                className={`copy-button ${copied ? 'copied' : ''}`}
                                title="Copy to clipboard"
                            >
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
