import './PhoneMockup.css';

const PhoneMockup = ({ children }) => {
    return (
        <div className="phone-frame">
            {/* Hardware buttons */}
            <div className="phone-button volume-up"></div>
            <div className="phone-button volume-down"></div>
            <div className="phone-button power"></div>

            <div className="phone-notch"></div>
            <div className="phone-screen">
                {children || (
                    <div className="phone-placeholder">
                        <span>App Preview</span>
                        <span className="phone-subtext">Coming Soon</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PhoneMockup;
