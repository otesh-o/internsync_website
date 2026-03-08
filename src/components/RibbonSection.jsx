import { InfiniteRibbon } from './InfiniteRibbon';
import './RibbonSection.css';

const RibbonSection = () => {
    return (
        <div className="ribbon-section" style={{
            position: 'relative',
            height: '350px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            background: 'linear-gradient(180deg, #ebe5db 0%, var(--color-bg) 100%)'
        }}>
            <InfiniteRibbon rotation={5} className="ribbon-primary" speed={40}>
                Swipe right on your dream career. One application, infinite possibilities. AI-powered job matching.
            </InfiniteRibbon>
            <InfiniteRibbon reverse={true} rotation={-5} className="ribbon-secondary" speed={40}>
                Internships made easy. No more doomscrolling. Your future starts here. Join thousands of students.
            </InfiniteRibbon>
        </div>
    );
};

export default RibbonSection;
