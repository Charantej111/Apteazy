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
    <div className="min-h-screen flex flex-col bg-[#FAF8FF] text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-700">
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
