import './Legal.css';

const PrivacyPolicy = () => {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <h1 className="legal-title">Privacy Policy</h1>
                <p className="legal-date">Last Updated: May 8, 2026</p>

                <div className="legal-content">
                    <section className="legal-section">
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to InternSync. We respect your privacy and are committed to protecting your personal data.
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                            you use our website and mobile application.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>2. Information We Collect</h2>
                        <p>We may collect the following types of information:</p>
                        <ul>
                            <li><strong>Personal Information:</strong> Name, email address, phone number, and resume details.</li>
                            <li><strong>Profile Information:</strong> Skills, interests, career goals, education history, and work experience.</li>
                            <li><strong>Usage Data:</strong> How you interact with our app, including pages visited, features used, and time spent.</li>
                            <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>3. How We Use Your Information</h2>
                        <p>We use your information to:</p>
                        <ul>
                            <li>Provide and maintain our services</li>
                            <li>Match you with relevant internship opportunities</li>
                            <li>Communicate with you about applications and opportunities</li>
                            <li>Improve our AI-powered matching algorithms</li>
                            <li>Send you updates, newsletters, and promotional materials (with your consent)</li>
                            <li>Ensure security and prevent fraud</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>4. Sharing Your Information</h2>
                        <p>
                            We do not sell your personal information. We may share your information with:
                        </p>
                        <ul>
                            <li><strong>Employers/Companies:</strong> When you apply to an internship through our platform.</li>
                            <li><strong>Service Providers:</strong> Third parties that help us operate our business (hosting, analytics, email delivery).</li>
                            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>5. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal data
                            against unauthorized access, alteration, disclosure, or destruction. However, no method of
                            transmission over the Internet is 100% secure.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>6. Your Rights</h2>
                        <p>Depending on your location, you may have the right to:</p>
                        <ul>
                            <li>Access the personal data we hold about you</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Object to or restrict processing of your data</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                        <p>To exercise these rights, contact us at <a href="mailto:support@internsync.net">support@internsync.net</a>.</p>
                    </section>

                    <section className="legal-section">
                        <h2>7. Cookies</h2>
                        <p>
                            We use cookies and similar technologies to enhance your experience, analyze usage,
                            and deliver personalized content. You can manage cookie preferences through your browser settings.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>8. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at
                            <a href="mailto:support@internsync.net">support@internsync.net</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
