import React from 'react';
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

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#0A261D] font-sans selection:bg-emerald-100 selection:text-emerald-800">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemSolution />
        <FourPillars />
        <AppShowcase />
        <Pricing />
        <PricingCalculator />
        <ReferralBanner />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
