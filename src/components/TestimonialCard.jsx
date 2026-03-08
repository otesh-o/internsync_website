import './TestimonialCard.css';

const TestimonialCard = ({ quote, name, role, avatar }) => {
    return (
        <div className="testimonial-card">
            <p className="testimonial-quote">"{quote}"</p>
            <div className="testimonial-author">
                <div className="testimonial-avatar">
                    {avatar ? (
                        <img src={avatar} alt={name} />
                    ) : (
                        <span>{name?.charAt(0) || '?'}</span>
                    )}
                </div>
                <div className="testimonial-info">
                    <span className="testimonial-name">{name}</span>
                    <span className="testimonial-role">{role}</span>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
