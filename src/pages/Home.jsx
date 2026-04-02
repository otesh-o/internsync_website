import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import DeviceMorph from '../components/DeviceMorph';
import RibbonSection from '../components/RibbonSection';
import Pricing from '../components/Pricing';
import Process from '../components/Process';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <main>
            <Hero />
            <Process />
            <Testimonials />
            <Features />
            <DeviceMorph />
            <RibbonSection />
            <Pricing />
            <CTA />
        </main>
    );
};

export default Home;
