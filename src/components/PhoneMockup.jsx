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
                    <img
                        src="/app-preview.jpeg"
                        alt="InternSync App Preview"
                        className="phone-preview-image"
                    />
                )}
            </div>
        </div>
    );
};

export default PhoneMockup;
