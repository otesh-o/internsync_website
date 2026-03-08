import demoVideo from '../assets/WhatsApp Video 2025-10-14 at 16.03.01.mp4';
import './DeviceMorph.css';

const DeviceMorph = () => {
    return (
        <section className="device-morph-section">
            <div className="device-morph-container">
                {/* Left Content - Opportunities */}
                <div className="opportunities-content">
                    <h2 className="opportunities-title">
                        Get access to<br />
                        over <span className="highlight">7,000+</span><br />
                        opportunities
                    </h2>
                    <p className="opportunities-description">
                        Connect with leading companies, startups, and organizations
                        offering internships across tech, finance, marketing, and more—
                        boosting your career and opening new doors
                    </p>
                </div>

                {/* Right - Video Card */}
                <div className="video-card">
                    <div className="laptop-toolbar">
                        <div className="toolbar-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="toolbar-url">internsync.app/dashboard</div>
                    </div>
                    <div className="laptop-screen-content">
                        <video
                            src={demoVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="laptop-video"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeviceMorph;
