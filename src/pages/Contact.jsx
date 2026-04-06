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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-grid">
                    <div className="contact-left">
                        <div className="contact-header">
                            <h1 className="contact-title">Get in touch</h1>
                            <p className="contact-subtitle">
                                feel free to reach out to us with any inquiries or assurance, our dedicated team is here to assist you promptly and effectively. your satisfaction is ourpriority
                            </p>
                        </div>

                        <div className="contact-info">
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

                    <div className="contact-right">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="your@email.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" placeholder="How can we help?" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="submit-button">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
