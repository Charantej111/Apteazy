import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Check, Play, Volume2, Maximize2, MoreVertical } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function Hero() {
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[#FAF9F6] overflow-hidden">
      
      {/* Subtle Warm Natural Back-Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-emerald-100/50 via-teal-100/30 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* CENTERED HERO CONTENT STAGE */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-5"
        >
          
          {/* Centered Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-[#0A261D] tracking-[-0.03em] leading-[1.08] max-w-3xl mx-auto"
          >
            Run the apartment.
            <br />
            <span className="text-[#047857] font-playfair italic">Not the paperwork.</span>
          </motion.h1>

          {/* Centered Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-normal pt-1"
          >
            Apteazy unifies billing, gate access, communication and facility management so life feels simpler for everyone.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3.5 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openWhatsApp('Hi, I want to start a free trial of Apteazy for my apartment')}
              className="px-7 py-3.5 rounded-full bg-[#047857] hover:bg-[#03543F] text-white font-bold text-sm shadow-[0_8px_20px_rgba(4,120,87,0.3)] hover:shadow-[0_12px_28px_rgba(4,120,87,0.4)] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Start 30–Day Free Trial</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openWhatsApp('Hi, I want to book a demo of Apteazy for my apartment')}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-emerald-50/50 text-[#0A261D] font-semibold text-sm shadow-xs border border-emerald-200/80 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#047857]" />
              <span>Book a Demo</span>
            </motion.button>
          </motion.div>

          {/* Micro Checkmark Badges */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs font-medium text-slate-600"
          >
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#047857] stroke-[3]" />
              <span>Setup in under 10 minutes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#047857] stroke-[3]" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#047857] stroke-[3]" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>

        </motion.div>

        {/* REALISTIC LAPTOP SHOWCASE MOCKUP */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-12 sm:mt-16 max-w-[980px] mx-auto relative px-2 sm:px-4"
        >
          
          {/* Outer Aluminum Unibody Display Shell */}
          <div className="relative z-10 rounded-t-[28px] sm:rounded-t-[36px] bg-[#0A261D] p-2.5 sm:p-3 sm:pb-0 shadow-[0_35px_80px_rgba(6,78,59,0.2)] border border-emerald-900/60">
            
            {/* Display Bezel Frame */}
            <div className="relative rounded-t-[20px] sm:rounded-t-[26px] overflow-hidden bg-slate-950 border border-slate-800 aspect-[16/10] group">
              
              {/* MacBook Notch Camera Sensor Pod */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-3.5 bg-[#0A261D] rounded-b-xl z-30 flex items-center justify-center gap-2 border-b border-emerald-900/80">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                  <div className="w-0.5 h-0.5 rounded-full bg-emerald-400" />
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-800" />
              </div>

              {/* Glass Lens Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] via-transparent to-transparent pointer-events-none z-20" />

              {/* Video / PNG Display - Zoomed 14% to crop out watermarks cleanly */}
              {!videoError ? (
                <video
                  src="/assets/hero-building-3d.mp4"
                  autoPlay
                  loop
                  muted={!isPlaying}
                  playsInline
                  className="w-full h-full object-cover scale-[1.14] origin-center"
                  onError={() => setVideoError(true)}
                />
              ) : (
                <img
                  src="/assets/hero-building-3d.png"
                  alt="Apteazy Society OS"
                  className="w-full h-full object-cover scale-[1.14] origin-center"
                />
              )}

              {/* CENTERED PLAY BUTTON OVERLAY */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/15 group-hover:bg-slate-950/25 transition-colors z-20 pointer-events-none">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white hover:bg-white/95 text-[#047857] flex items-center justify-center shadow-2xl transition-transform duration-300 cursor-pointer"
                  aria-label="Play Video"
                >
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#047857] translate-x-[2px]" />
                </motion.button>
              </div>

              {/* BOTTOM VIDEO PLAYER CONTROL BAR OVERLAY */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-3 text-white flex items-center justify-between text-xs z-20">
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-300">
                  <Play className="w-3 h-3 fill-white text-white" />
                  <span>0:00 / 0:45</span>
                </div>
                {/* Progress Scrubber Line */}
                <div className="flex-1 mx-4 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-[#047857] rounded-full" />
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Volume2 className="w-3.5 h-3.5" />
                  <Maximize2 className="w-3.5 h-3.5" />
                  <MoreVertical className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          </div>

          {/* Anodized Hinge Bar */}
          <div className="relative z-20 h-1.5 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 w-full" />

          {/* REALISTIC MACBOOK BOTTOM BASE CHASSIS & NOTCH */}
          <div className="relative z-20 w-[104%] -ml-[2%] h-4 sm:h-5 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 rounded-b-2xl shadow-2xl border-t border-slate-200/80 flex items-start justify-center">
            {/* Center Opening Thumb Notch */}
            <div className="w-20 sm:w-28 h-2 bg-slate-500/70 rounded-b-lg mx-auto shadow-inner" />
          </div>

          {/* Laptop Base Bottom Organic Floor Shadow */}
          <div className="w-[92%] h-5 bg-[#047857]/20 blur-md rounded-full mx-auto -mt-2.5 pointer-events-none" />

        </motion.div>

      </div>
    </section>
  );
}
