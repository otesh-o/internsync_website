import './Features.css';

const Features = () => {
    const features = [
        {
            title: "Smart Matching",
            description: "AI-powered job matching that learns your preferences and suggests the perfect opportunities for your career goals."
        },
        {
            title: "One-Swipe Apply",
            description: "Apply to internships with a single swipe. Your profile auto-fills applications, saving you hours of repetitive work."
        }
    ];

    return (
        <section className="features-section">
            <div className="features-container">
                {/* Header Row */}
                <div className="features-header">
                    <div className="features-title-area">
                        <h2 className="features-title">
                            Comprehensive<br />
                            Feature Suite
                        </h2>
                    </div>
                    <div className="features-description-area">
                        <p className="features-description">
                            Get everything you need for effortless job hunting,
                            application tracking, and career growth in one
                            powerful platform
                        </p>
                        <a href="#" className="features-cta">See All Features</a>
                    </div>
                </div>

                {/* Features Row */}
                <div className="features-grid">
                    {features.map((feature, i) => (
                        <div key={i} className="feature-card">
                            <div className="feature-icon-wrapper">
                                <div className="feature-icon"></div>
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                            <span className="feature-arrow">→</span>
                        </div>
                    ))}

                    {/* Highlighted Card */}
                    <div className="feature-card highlighted">
                        <div className="feature-icon-wrapper highlighted-icon">
                            <div className="feature-icon"></div>
                        </div>
                        <h3 className="feature-title">Instant Application<br />Tracking</h3>
                        <p className="feature-description">
                            Track all your applications in real-time
                            with status updates and notifications
                        </p>
                        <a href="#" className="feature-btn">Start Applying Now</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
