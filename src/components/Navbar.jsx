import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.04)] border-b border-[#E8E5F3]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px]">
          
          {/* Logo containing icon + Apteazy name */}
          <a href="#" className="flex items-center group flex-shrink-0">
            <img
              src="/assets/logo.png"
              alt="Apteazy"
              className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-[14px] font-semibold text-slate-700">
            <a href="#features" className="flex items-center gap-1 hover:text-[#4F46E5] transition-colors">
              <span>Product</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </a>
            <a href="#solutions" className="flex items-center gap-1 hover:text-[#4F46E5] transition-colors">
              <span>Solutions</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </a>
            <a href="#pricing" className="hover:text-[#4F46E5] transition-colors">
              Pricing
            </a>
            <a href="#calculator" className="flex items-center gap-1 hover:text-[#4F46E5] transition-colors">
              <span>Resources</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => openWhatsApp('Hi, I want to start a free trial of Apteazy for my apartment')}
              className="text-[13.5px] font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 px-5 py-2 rounded-xl transition-all shadow-subtle hover:border-slate-400 cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => openWhatsApp('Hi, I want to start a free trial of Apteazy for my apartment')}
              className="inline-flex items-center gap-1.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-[13.5px] font-bold px-5 py-2.5 rounded-full shadow-[0_4px_14px_rgba(79,70,229,0.3)] transition-all duration-150 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E8E5F3] px-6 py-5 space-y-3 shadow-xl">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-700 hover:text-[#635BFF] py-1.5"
          >
            Product
          </a>
          <a
            href="#solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-700 hover:text-[#635BFF] py-1.5"
          >
            Solutions
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-700 hover:text-[#635BFF] py-1.5"
          >
            Pricing
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-700 hover:text-[#635BFF] py-1.5"
          >
            Resources
          </a>
          <div className="pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp('Hi, I want to start a free trial of Apteazy for my apartment');
              }}
              className="text-center py-2 text-sm font-bold text-slate-800 border border-slate-300 rounded-xl cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp('Hi, I want to start a free trial of Apteazy for my apartment');
              }}
              className="text-center py-2.5 text-sm font-bold bg-[#4F46E5] text-white rounded-full shadow-md cursor-pointer"
            >
              Start Free Trial →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
