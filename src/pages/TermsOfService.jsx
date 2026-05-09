import './Legal.css';

const TermsOfService = () => {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <h1 className="legal-title">Terms of Service</h1>
                <p className="legal-date">Last Updated: May 8, 2026</p>

                <div className="legal-content">
                    <section className="legal-section">
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using InternSync, you agree to be bound by these Terms of Service.
                            If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>2. Description of Service</h2>
                        <p>
                            InternSync is a platform that connects students and job seekers with internship opportunities.
                            We provide tools for job discovery, application tracking, resume building, and career matching.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>3. User Accounts</h2>
                        <p>To use certain features, you must create an account. You agree to:</p>
                        <ul>
                            <li>Provide accurate and complete information</li>
                            <li>Maintain the security of your account credentials</li>
                            <li>Notify us immediately of any unauthorized access</li>
                            <li>Be responsible for all activity under your account</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>4. User Conduct</h2>
                        <p>You agree not to:</p>
                        <ul>
                            <li>Use the service for any illegal or unauthorized purpose</li>
                            <li>Post false, misleading, or fraudulent content</li>
                            <li>Harass, abuse, or harm other users</li>
                            <li>Attempt to gain unauthorized access to our systems</li>
                            <li>Use automated systems to access or scrape our platform</li>
                            <li>Upload viruses, malware, or harmful code</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>5. Content and Intellectual Property</h2>
                        <p>
                            You retain ownership of content you submit to InternSync (resumes, profiles, applications).
                            By submitting content, you grant us a license to use, display, and share it as necessary
                            to provide our services.
                        </p>
                        <p>
                            All InternSync branding, software, and content are our intellectual property.
                            You may not copy, modify, or distribute our materials without permission.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>6. Job Listings and Applications</h2>
                        <p>
                            InternSync provides a platform for connecting users with employers. We do not guarantee
                            the accuracy of job listings, the availability of positions, or the outcome of applications.
                            Employers are responsible for the content of their listings and their hiring decisions.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>7. Payments and Subscriptions</h2>
                        <p>
                            Some features require payment. By subscribing, you agree to our pricing and billing terms.
                            Subscriptions automatically renew unless cancelled. Refunds are handled on a case-by-case basis.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>8. Termination</h2>
                        <p>
                            We reserve the right to suspend or terminate your account at any time for violations of these
                            terms or for any other reason. You may also delete your account at any time through your settings.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>9. Disclaimer of Warranties</h2>
                        <p>
                            InternSync is provided "as is" without warranties of any kind. We do not guarantee
                            that our service will be uninterrupted, secure, or error-free. We are not responsible
                            for any decisions made by employers or outcomes of job applications.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>10. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, InternSync shall not be liable for any indirect,
                            incidental, special, or consequential damages arising from your use of our services.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>11. Changes to Terms</h2>
                        <p>
                            We may update these Terms of Service at any time. Continued use of our services after changes
                            constitutes acceptance of the new terms. We will notify users of significant changes.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>12. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms of Service, please contact us at
                            <a href="mailto:support@internsync.net">support@internsync.net</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
