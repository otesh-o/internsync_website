import './Process.css';

const Process = () => {
    const steps = [
        {
            title: "Discover",
            items: ["Profile Setup", "Skills Assessment", "Career Goals"]
        },
        {
            title: "Match",
            items: ["AI-Powered Matching", "Curated Opportunities", "Smart Filters"]
        },
        {
            title: "Apply",
            items: ["One-Swipe Apply", "Auto-Fill Forms", "Track Progress"]
        },
        {
            title: "Land",
            items: ["Interview Prep", "Offer Management"]
        }
    ];

    return (
        <section className="process-section">
            <div className="process-container">
                <div className="process-steps">
                    {steps.map((step, i) => (
                        <div key={i} className="process-step">
                            <div className="step-circle">
                                <div className="step-content">
                                    <h3 className="step-title">{step.title}</h3>
                                    <ul className="step-items">
                                        {step.items.map((item, j) => (
                                            <li key={j}>- {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {i < steps.length - 1 && (
                                <span className="step-arrow">→</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
