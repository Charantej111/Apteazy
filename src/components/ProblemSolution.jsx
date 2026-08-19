import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, Smartphone } from 'lucide-react';

export default function ProblemSolution() {
  const [receiptErr, setReceiptErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [plantErr, setPlantErr] = useState(false);

  const withoutItems = [
    'Manual paper registers',
    'Confusion at the main gate',
    'Late fee collection delays',
    'Slow dispute resolution',
    'Chaotic WhatsApp groups',
  ];

  const withItems = [
    '100% digital bookkeeping',
    'Instant visitor gate approvals',
    'Online 0% UPI collection',
    'Tracked helpdesk tickets',
    'Peace of mind for MC',
  ];

  return (
    <section id="solutions" className="py-16 md:py-24 bg-[#F9F9FB] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-[-0.025em]">
            From Chaos to Clarity
          </h2>
          <p className="text-[14.5px] sm:text-[15.5px] text-slate-500 font-normal leading-relaxed">
            See how Apteazy transforms disjointed processes into a unified, seamless experience.
          </p>
        </motion.div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-[1180px] mx-auto">
          
          {/* Left Card: Without Apteazy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 bg-[#FFF5F5] rounded-[28px] p-6 sm:p-7 border border-[#FED7D7] shadow-sm flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Ambient Back Glow */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-red-200/40 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <span className="font-display text-lg font-bold text-slate-900 tracking-tight">
                  Without Apteazy
                </span>
                <span className="text-[11px] font-semibold text-red-600 bg-red-100 px-2.5 py-1 rounded-full">
                  Manual Chaos
                </span>
              </div>

              {/* Bullet list */}
              <div className="space-y-3 mb-6">
                {withoutItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <div className="w-4.5 h-4.5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                      <X className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-[13px] sm:text-[13.5px] font-medium text-slate-700 leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grounded Illustration Stage / Desk Box */}
            <div className="relative z-10 mt-2 bg-white/75 backdrop-blur-sm rounded-2xl p-4 border border-red-100 flex flex-col items-center justify-center shadow-inner">
              {!receiptErr ? (
                <div className="relative flex flex-col items-center justify-center w-full">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    src="/assets/receipts-mess.png"
                    alt="Paperwork clutter"
                    className="max-h-32 sm:max-h-36 w-auto object-contain relative z-10 drop-shadow-[0_10px_15px_rgba(220,38,38,0.18)]"
                    onError={() => setReceiptErr(true)}
                  />
                  {/* Solid Contact Shadow Base */}
                  <div className="w-4/5 h-3 bg-gradient-to-r from-transparent via-red-900/20 to-transparent blur-xs rounded-[100%] -mt-2 z-0 pointer-events-none" />
                </div>
              ) : (
                <div className="text-4xl py-4">🧾</div>
              )}
              <span className="text-[11px] font-medium text-red-500/90 mt-1">Disorganized Paperwork & Receipts</span>
            </div>
          </motion.div>

          {/* Center Connector: Phone Mockup Podium */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-[28px] p-5 border border-[#E8E5F3] shadow-[0_8px_30px_rgba(99,91,255,0.08)] flex flex-col items-center justify-between relative overflow-hidden my-2 lg:my-0"
          >
            {/* Top Badge */}
            <div className="flex items-center gap-1.5 bg-purple-50 border border-purple-100 text-[#635BFF] px-3 py-1 rounded-full text-[11px] font-bold">
              <Smartphone className="w-3 h-3" />
              <span>Apteazy OS</span>
            </div>

            {/* Phone Grounded Podium Stage */}
            <div className="my-4 relative flex flex-col items-center justify-center w-full">
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, ease: 'easeInOut', repeat: Infinity }}
                className="w-[145px] sm:w-[160px] relative z-10"
              >
                {!phoneErr ? (
                  <img
                    src="/assets/phone-screen-center.png"
                    alt="Apteazy Mobile App"
                    className="w-full h-auto object-contain drop-shadow-[0_14px_28px_rgba(99,91,255,0.22)]"
                    onError={() => setPhoneErr(true)}
                  />
                ) : (
                  <div className="bg-slate-900 rounded-[24px] p-4 text-white text-center text-xs">
                    📱 App
                  </div>
                )}
              </motion.div>
              {/* Phone Grounded Pedestal Shadow */}
              <div className="w-3/4 h-3.5 bg-gradient-to-r from-transparent via-[#635BFF]/30 to-transparent blur-xs rounded-[100%] -mt-3 z-0 pointer-events-none" />
            </div>

            <span className="text-[11px] font-semibold text-slate-500 text-center">
              1-Tap Control
            </span>
          </motion.div>

          {/* Right Card: With Apteazy */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 bg-[#F0FDF4] rounded-[28px] p-6 sm:p-7 border border-[#BBF7D0] shadow-sm flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Ambient Back Glow */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <span className="font-display text-lg font-bold text-slate-900 tracking-tight">
                  With Apteazy
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                  Automated Operating System
                </span>
              </div>

              {/* Bullet list */}
              <div className="space-y-3 mb-6">
                {withItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-[13px] sm:text-[13.5px] font-medium text-slate-700 leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grounded Illustration Stage / Desk Box */}
            <div className="relative z-10 mt-2 bg-white/75 backdrop-blur-sm rounded-2xl p-4 border border-emerald-100 flex flex-col items-center justify-center shadow-inner">
              {!plantErr ? (
                <div className="relative flex flex-col items-center justify-center w-full">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    src="/assets/peace-plant.png"
                    alt="Peace of mind"
                    className="max-h-32 sm:max-h-36 w-auto object-contain relative z-10 drop-shadow-[0_10px_15px_rgba(16,185,129,0.18)]"
                    onError={() => setPlantErr(true)}
                  />
                  {/* Solid Contact Shadow Base */}
                  <div className="w-4/5 h-3 bg-gradient-to-r from-transparent via-emerald-900/20 to-transparent blur-xs rounded-[100%] -mt-2 z-0 pointer-events-none" />
                </div>
              ) : (
                <div className="text-4xl py-4">🪴</div>
              )}
              <span className="text-[11px] font-medium text-emerald-600/90 mt-1">Peace of Mind & Total Clarity</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
