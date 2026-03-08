import Marquee from './Marquee';
import TestimonialCard from './TestimonialCard';
import './Testimonials.css';

const testimonials = [
    {
        quote: "InternSync made finding my dream internship so easy. Just swipe and apply!",
        name: "Emma Wilson",
        role: "CS Student, Stanford"
    },
    {
        quote: "I landed 3 interviews in my first week. The swipe-to-apply feature is genius.",
        name: "Lucas Chen",
        role: "Engineering Major, MIT"
    },
    {
        quote: "Finally, job hunting that doesn't feel like a chore. Love this app!",
        name: "Sophia Martinez",
        role: "Design Student, RISD"
    },
    {
        quote: "Applied to 20 internships during my commute. InternSync is a game changer.",
        name: "Oliver Thompson",
        role: "Business Major, NYU"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <Marquee duration={40}>
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        quote={testimonial.quote}
                        name={testimonial.name}
                        role={testimonial.role}
                    />
                ))}
            </Marquee>
        </section>
    );
};

export default Testimonials;
