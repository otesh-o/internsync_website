import './Marquee.css';

const Marquee = ({
    children,
    direction = 'left',
    duration = 60,
    repeat = 4,
    className = ''
}) => {
    // Clone children for seamless loop
    const items = Array(repeat).fill(children);

    return (
        <div className={`marquee ${className}`}>
            <div
                className={`marquee-track ${direction === 'right' ? 'reverse' : ''}`}
                style={{ '--duration': `${duration}s` }}
            >
                {items.map((item, index) => (
                    <div key={index} className="marquee-content">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
