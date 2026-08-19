import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-stretch max-w-[1180px] mx-auto">
          
          {/* Left Card: Without Apteazy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 bg-[#FFF5F5] rounded-[28px] p-6 sm:p-7 border border-[#FED7D7] shadow-sm flex flex-col justify-between relative overflow-hidden group min-h-[300px]"
          >
            {/* Ambient Radial Glow */}
            <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-red-200/50 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-4 relative z-10">
              <span className="font-display text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Without
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-end justify-between gap-4 relative z-10">
              {/* Bullet list */}
              <div className="space-y-2.5 flex-1 self-center w-full mb-2 sm:mb-0">
                {withoutItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                      <X className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="text-[12.5px] sm:text-[13px] font-medium text-slate-700 leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Natural Bottom-Anchored Receipts Illustration */}
              <div className="flex-shrink-0 flex flex-col items-center justify-end self-end pt-2">
                {!receiptErr ? (
                  <div className="relative flex flex-col items-center">
                    <motion.img
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      src="/assets/receipts-mess.png"
                      alt="Paperwork clutter"
                      className="max-h-36 sm:max-h-40 w-auto object-contain relative z-10"
                      onError={() => setReceiptErr(true)}
                    />
                    {/* Natural Ground Soft Floor Shadow */}
                    <div className="w-3/4 h-2 bg-red-900/15 blur-[3px] rounded-[100%] mx-auto -mt-1 pointer-events-none" />
                  </div>
                ) : (
                  <div className="text-4xl">🧾</div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Center Connector: Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex items-center justify-center gap-1 my-2 lg:my-0 relative z-10"
          >
            {/* Left Doodle Arrow */}
            <div className="hidden lg:block text-[#635BFF] flex-shrink-0 -mr-2">
              <svg className="w-10 h-10 transform -rotate-12" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 25 C 20 8, 40 8, 52 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="4 3"/>
                <path d="M42 22 L 53 23 L 50 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Phone Screen Mockup */}
            <div className="w-[160px] sm:w-[180px] flex-shrink-0 flex flex-col items-center">
              {!phoneErr ? (
                <div className="relative flex flex-col items-center">
                  <img
                    src="/assets/phone-screen-center.png"
                    alt="Apteazy Mobile App"
                    className="w-full h-auto object-contain relative z-10"
                    onError={() => setPhoneErr(true)}
                  />
                  {/* Natural Phone Base Contact Shadow */}
                  <div className="w-3/4 h-3 bg-[#635BFF]/20 blur-[4px] rounded-[100%] mx-auto -mt-2 pointer-events-none" />
                </div>
              ) : (
                <div className="bg-slate-900 rounded-[28px] p-4 text-white text-center text-xs">
                  📱 App
                </div>
              )}
            </div>

            {/* Right Doodle Arrow */}
            <div className="hidden lg:block text-[#635BFF] flex-shrink-0 -ml-2">
              <svg className="w-10 h-10 transform rotate-12" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 22 C 20 8, 40 8, 55 25" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="4 3"/>
                <path d="M45 25 L 56 26 L 53 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>

          {/* Right Card: With Apteazy */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 bg-[#F0FDF4] rounded-[28px] p-6 sm:p-7 border border-[#BBF7D0] shadow-sm flex flex-col justify-between relative overflow-hidden group min-h-[300px]"
          >
            {/* Ambient Radial Glow */}
            <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-emerald-200/50 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-4 relative z-10">
              <span className="font-display text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                With Apteazy
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-end justify-between gap-4 relative z-10">
              {/* Bullet list */}
              <div className="space-y-2.5 flex-1 self-center w-full mb-2 sm:mb-0">
                {withItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="text-[12.5px] sm:text-[13px] font-medium text-slate-700 leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Natural Bottom-Anchored Plant Illustration */}
              <div className="flex-shrink-0 flex flex-col items-center justify-end self-end pt-2">
                {!plantErr ? (
                  <div className="relative flex flex-col items-center">
                    <motion.img
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      src="/assets/peace-plant.png"
                      alt="Peace of mind"
                      className="max-h-36 sm:max-h-40 w-auto object-contain relative z-10"
                      onError={() => setPlantErr(true)}
                    />
                    {/* Natural Ground Soft Floor Shadow */}
                    <div className="w-3/4 h-2 bg-emerald-900/15 blur-[3px] rounded-[100%] mx-auto -mt-1 pointer-events-none" />
                  </div>
                ) : (
                  <div className="text-4xl">🪴</div>
                )}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
