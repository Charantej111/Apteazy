import React, { useState } from 'react';
import { ArrowRight, Check, Send } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function Footer({ onOpenLogin, onOpenLegal }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const handleLegalClick = (e, tab) => {
    e.preventDefault();
    if (onOpenLegal) {
      onOpenLegal(tab);
    } else {
      window.location.hash = `#${tab}`;
    }
  };

  return (
    <footer className="bg-[#0B0F19] text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <div className="bg-white/95 rounded-xl px-2.5 py-1.5 inline-block shadow-sm">
                <img
                  src="/assets/logo.png"
                  alt="Apteazy"
                  className="h-7 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
              The modern digital operating system for housing societies, gated communities, and residential complexes.
            </p>

            <div className="pt-2">
              <button
                onClick={() => openWhatsApp('Hi, I want to start a 60-day free trial of Apteazy for my apartment')}
                className="inline-flex items-center gap-2 bg-[#635BFF] hover:bg-[#5249E0] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm cursor-pointer"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-200">Product</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-white transition-colors">Accounting & Billing</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Gatekeeper Security</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Facility Booking</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Resident Directory</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Modular Pricing</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-200">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#referral" className="hover:text-white transition-colors">Referral Program</a></li>
              <li>
                {onOpenLogin ? (
                  <button onClick={onOpenLogin} className="hover:text-white transition-colors text-left cursor-pointer">
                    Resident Portal Login
                  </button>
                ) : (
                  <a href="#contact" className="hover:text-white transition-colors">Contact Support</a>
                )}
              </li>
              <li>
                <button
                  onClick={(e) => handleLegalClick(e, 'compliance')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Security & DPDP Overview
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-200">Stay Connected</h4>
            <p className="text-xs text-slate-400">
              Get product updates, society management guides, and compliance best practices.
            </p>

            <form onSubmit={handleSubscribe} className="flex items-center gap-2 pt-1">
              <input
                type="email"
                required
                placeholder="Enter your committee email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-800/80 border border-slate-700 rounded-full px-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#635BFF] flex-1"
              />
              <button
                type="submit"
                className="bg-[#635BFF] hover:bg-[#5249E0] text-white p-2.5 rounded-full transition-colors flex-shrink-0 cursor-pointer"
                aria-label="Subscribe"
              >
                {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
              </button>
            </form>
            {subscribed && (
              <div className="text-[11px] text-emerald-400 font-medium">
                ✓ Thank you for subscribing!
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Apteazy Inc. Built for better communities.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={(e) => handleLegalClick(e, 'privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={(e) => handleLegalClick(e, 'terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={(e) => handleLegalClick(e, 'compliance')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              RWA Compliance
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
