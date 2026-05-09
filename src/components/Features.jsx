import './Features.css';

const SmartMatchingIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
    </svg>
);

const SwipeApplyIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5z" />
        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
    </svg>
);

const TrackingIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
);

const Features = () => {
    const features = [
        {
            title: "Smart Matching",
            description: "AI-powered job matching that learns your preferences and suggests the perfect opportunities for your career goals.",
            icon: <SmartMatchingIcon />
        },
        {
            title: "One-Swipe Apply",
            description: "Apply to internships with a single swipe. Your profile auto-fills applications, saving you hours of repetitive work.",
            icon: <SwipeApplyIcon />
        }
    ];

    return (
        <section id="features-section" className="features-section">
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
                        <button
                            className="features-cta"
                            onClick={() => document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            See All Features
                        </button>
                    </div>
                </div>

                {/* Features Row */}
                <div className="features-grid">
                    {features.map((feature, i) => (
                        <div key={i} className="feature-card">
                            <div className="feature-icon-wrapper">
                                <div className="feature-icon">{feature.icon}</div>
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                            <span className="feature-arrow">→</span>
                        </div>
                    ))}

                    {/* Highlighted Card */}
                    <div className="feature-card highlighted">
                        <div className="feature-icon-wrapper highlighted-icon">
                            <div className="feature-icon"><TrackingIcon /></div>
                        </div>
                        <h3 className="feature-title">Instant Application<br />Tracking</h3>
                        <p className="feature-description">
                            Track all your applications in real-time
                            with status updates and notifications
                        </p>
                        <button
                            className="feature-btn"
                            onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Start Applying Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
