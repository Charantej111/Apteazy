import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import FourPillars from './components/FourPillars';
import AppShowcase from './components/AppShowcase';
import Pricing from './components/Pricing';
import PricingCalculator from './components/PricingCalculator';
import ReferralBanner from './components/ReferralBanner';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import LoginModal from './components/LoginModal';
import LegalModal from './components/LegalModal';

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [legalModalState, setLegalModalState] = useState({ isOpen: false, tab: 'privacy' });

  const openLegal = (tab = 'privacy') => {
    setLegalModalState({ isOpen: true, tab });
  };

  const closeLegal = () => {
    setLegalModalState((prev) => ({ ...prev, isOpen: false }));
    if (['#privacy', '#terms', '#compliance'].includes(window.location.hash)) {
      history.replaceState(null, '', window.location.pathname);
    }
  };

  // Listen to window hash changes for deep linking to legal documents
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') {
        openLegal('privacy');
      } else if (hash === '#terms') {
        openLegal('terms');
      } else if (hash === '#compliance') {
        openLegal('compliance');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8FF] text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-700">
      <Navbar onOpenLogin={() => setIsLoginOpen(true)} />
      <main className="flex-grow">
        <Hero />
        <ProblemSolution />
        <FourPillars />
        <AppShowcase />
        <Pricing />
        <PricingCalculator />
        <ReferralBanner />
      </main>
      <Footer 
        onOpenLogin={() => setIsLoginOpen(true)} 
        onOpenLegal={openLegal}
      />
      <FloatingWhatsApp />
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onOpenTerms={() => openLegal('terms')}
      />
      <LegalModal 
        isOpen={legalModalState.isOpen} 
        onClose={closeLegal}
        defaultTab={legalModalState.tab}
      />
    </div>
  );
}
