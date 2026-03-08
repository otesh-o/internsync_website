import './Pricing.css';

const Pricing = () => {
    const plans = [
        {
            name: "Free",
            price: "$0",
            period: "forever",
            description: "Perfect for getting started",
            features: [
                "5 applications per month",
                "Basic job matching",
                "Resume builder",
                "Email notifications",
                "Community support"
            ],
            cta: "Get Started",
            highlighted: false
        },
        {
            name: "Pro",
            price: "$8",
            period: "/month",
            description: "For serious job seekers",
            features: [
                "Unlimited applications",
                "AI-powered matching",
                "Priority visibility",
                "Advanced analytics",
                "1-click apply",
                "24/7 priority support"
            ],
            cta: "Upgrade to Pro",
            highlighted: true
        }
    ];

    return (
        <section className="pricing-section">
            <div className="pricing-container">
                <h2 className="pricing-title">
                    Simple, transparent <span className="highlight">pricing</span>
                </h2>
                <p className="pricing-subtitle">
                    Choose the plan that works best for you
                </p>

                <div className="pricing-grid">
                    {plans.map((plan, i) => (
                        <div key={i} className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
                            {plan.highlighted && <div className="popular-badge">Most Popular</div>}
                            <h3 className="plan-name">{plan.name}</h3>
                            <div className="plan-price">
                                <span className="price">{plan.price}</span>
                                <span className="period">{plan.period}</span>
                            </div>
                            <p className="plan-description">{plan.description}</p>
                            <ul className="plan-features">
                                {plan.features.map((feature, j) => (
                                    <li key={j}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                            <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={`plan-cta ${plan.highlighted ? 'primary' : 'secondary'}`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
