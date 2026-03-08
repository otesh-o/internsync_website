import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import DeviceMorph from './components/DeviceMorph';
import Footer from './components/Footer';
import InvestorModal from './components/InvestorModal';
import RibbonSection from './components/RibbonSection';
import Pricing from './components/Pricing';
import Process from './components/Process';
import CTA from './components/CTA';
import './App.css';

function App() {
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);

  return (
    <>
      <Header onInvestorClick={() => setIsInvestorModalOpen(true)} />
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
      <Footer onInvestorClick={() => setIsInvestorModalOpen(true)} />
      <InvestorModal
        isOpen={isInvestorModalOpen}
        onClose={() => setIsInvestorModalOpen(false)}
      />
    </>
  );
}

export default App;
