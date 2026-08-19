import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function AppShowcase() {
  const [leftErr, setLeftErr] = useState(false);
  const [rightErr, setRightErr] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-[#F8F8FA] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Showcase Card Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-[36px] p-8 sm:p-12 lg:p-14 border border-[#E8E5F3] shadow-[0_4px_24px_rgba(0,0,0,0.03)] relative overflow-hidden"
        >
          
          {/* Dotted Grid Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.35] pointer-events-none z-0"
            style={{
              backgroundImage: 'radial-gradient(#94A3B8 1.2px, transparent 1.2px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Background Wavy Lines SVG */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[480px] h-[360px] pointer-events-none opacity-40 z-0">
            <svg className="w-full h-full stroke-purple-300" fill="none" viewBox="0 0 400 300">
              <path d="M50 300 C 150 200, 250 250, 350 150 C 400 100, 450 50, 500 0" strokeWidth="1.5" strokeDasharray="6 4" />
              <path d="M100 300 C 200 200, 300 220, 400 120 C 450 70, 480 30, 520 -10" strokeWidth="1.5" />
              <path d="M150 300 C 250 180, 350 190, 450 90" strokeWidth="1.5" opacity="0.6" />
            </svg>
          </div>

          {/* Soft Radial Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl pointer-events-none z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center relative z-10">
            
            {/* Left Column: Clean Bold Headline, Subtitle, Buttons, Badges */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              {/* Main Headline */}
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0F172A] tracking-[-0.03em] leading-[1.08]">
                Less chaos.
                <br />
                More community.
                <br />
                <span>That’s </span>
                <span className="text-[#635BFF] font-extrabold">Apteazy.</span>
              </h2>

              {/* Subtitle */}
              <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 max-w-md font-normal leading-relaxed">
                From dues to deliveries, from notices to bookings—manage it all from your phone or desktop.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                {/* Primary Button */}
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openWhatsApp('Hi, I want to start a free trial of Apteazy for my apartment')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#635BFF] hover:bg-[#5249E0] text-white font-bold text-[14px] shadow-[0_4px_16px_rgba(99,91,255,0.3)] transition-colors cursor-pointer"
                >
                  <span>Start 30-Day Free Trial</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </motion.button>

                {/* Secondary Button */}
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openWhatsApp('Hi, I want to book a demo of Apteazy for my apartment')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-[#0F172A] font-bold text-[14px] border border-[#E2E8F0] shadow-xs transition-colors cursor-pointer"
                >
                  <span>Book a Demo</span>
                </motion.button>
              </div>

              {/* Bottom Feature Badges */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-3 text-[12.5px] font-semibold text-slate-600">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-purple-100 text-[#635BFF] flex items-center justify-center">
                    <Clock className="w-2.5 h-2.5 stroke-[2.5]" />
                  </div>
                  <span>No Setup Fee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-purple-100 text-[#635BFF] flex items-center justify-center">
                    <ShieldCheck className="w-2.5 h-2.5 stroke-[2.5]" />
                  </div>
                  <span>No Credit Card</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-purple-100 text-[#635BFF] flex items-center justify-center">
                    <CheckCircle2 className="w-2.5 h-2.5 stroke-[2.5]" />
                  </div>
                  <span>Cancel Anytime</span>
                </div>
              </div>

            </div>

            {/* Right Column: Perfectly Aligned Dual Phone Mockups with Soft Natural Shadows */}
            <div className="lg:col-span-6 flex justify-center items-center gap-4 sm:gap-6 pt-6 lg:pt-0">
              
              {/* Left Phone */}
              <motion.div 
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-1/2 max-w-[230px] flex-shrink-0"
              >
                {!leftErr ? (
                  <img
                    src="/assets/showcase-phone-left.png"
                    alt="Apteazy Resident Home Screen"
                    className="w-full h-auto object-contain filter drop-shadow-[0_14px_28px_rgba(15,23,42,0.1)] transition-all duration-300 hover:drop-shadow-[0_20px_35px_rgba(99,91,255,0.18)]"
                    onError={() => setLeftErr(true)}
                  />
                ) : (
                  <div className="bg-slate-900 rounded-[32px] p-4 text-white text-center text-xs">
                    📱 Left Screen
                  </div>
                )}
              </motion.div>

              {/* Right Phone */}
              <motion.div 
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-1/2 max-w-[230px] flex-shrink-0"
              >
                {!rightErr ? (
                  <img
                    src="/assets/showcase-phone-right.png"
                    alt="Apteazy Notices Screen"
                    className="w-full h-auto object-contain filter drop-shadow-[0_14px_28px_rgba(15,23,42,0.1)] transition-all duration-300 hover:drop-shadow-[0_20px_35px_rgba(99,91,255,0.18)]"
                    onError={() => setRightErr(true)}
                  />
                ) : (
                  <div className="bg-slate-900 rounded-[32px] p-4 text-white text-center text-xs">
                    📱 Right Screen
                  </div>
                )}
              </motion.div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
