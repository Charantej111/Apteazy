import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Check } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function Hero() {
  const [videoError, setVideoError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.035, delayChildren: 0.08 * i },
    }),
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      filter: 'blur(10px)',
      y: 14,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const line1Text = "Run the apartment";
  const line2Text = "Not the paperwork.!";

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#FAF8FF] via-[#F4EFFE] to-[#EFEAFB] rounded-b-[48px] md:rounded-b-[72px] overflow-hidden shadow-[0_20px_50px_rgba(99,91,255,0.05)]">
      
      {/* Background Ambient Mesh Light Stage */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-[#635BFF]/20 via-[#833BFD]/15 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* CENTERED HERO HEADER STAGE */}
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Centered Headline with Character Blur-In Typewriter Effect */}
          <div className="space-y-1">
            {/* Line 1: "Run the apartment" */}
            <div>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                custom={1}
                className="font-playball font-normal text-5xl sm:text-7xl md:text-8xl lg:text-[92px] leading-[1.05] tracking-normal inline-flex flex-wrap justify-center pb-1"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #833BFD 0%, #635BFF 50%, #0F172A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {line1Text.split('').map((char, index) => (
                  <motion.span variants={letterVariants} key={index} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            
            {/* Line 2: "Not the paperwork.!" */}
            <div>
              <motion.h1 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                custom={2.5}
                className="font-playfair font-bold text-4xl sm:text-6xl md:text-[64px] lg:text-[72px] text-[#0F172A] tracking-[-0.025em] leading-[1.08] mt-1 inline-flex flex-wrap justify-center"
              >
                {line2Text.split('').map((char, index) => (
                  <motion.span variants={letterVariants} key={index} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
          </div>

          {/* Centered Sub-headline */}
          <motion.p 
            initial={{ opacity: 0, filter: 'blur(6px)', y: 10 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[16px] sm:text-[18px] text-slate-600 max-w-2xl mx-auto font-normal leading-[1.65]"
          >
            Apteazy unifies billing, gate access, communication and facility management so life feels simpler for everyone.
          </motion.p>

          {/* Centered Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openWhatsApp('Hi, I want to start a free trial of Apteazy for my apartment')}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#635BFF] hover:bg-[#5249E0] text-white font-bold text-[15px] shadow-[0_8px_24px_rgba(99,91,255,0.35)] hover:shadow-[0_12px_32px_rgba(99,91,255,0.45)] transition-all duration-300 cursor-pointer"
            >
              <span>Start 30–Day Free Trial</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openWhatsApp('Hi, I want to start a free trial of Apteazy for my apartment')}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white/90 hover:bg-white text-[#0F172A] font-bold text-[14.5px] border border-[#E2E8F0] shadow-sm backdrop-blur-md transition-all duration-200 cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full bg-[#635BFF] text-white flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-white text-white translate-x-[0.5px]" />
              </div>
              <span>Book a Demo</span>
            </motion.button>
          </motion.div>

          {/* Centered Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-[13px] font-medium text-slate-600"
          >
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
              <span>Setup in under 30 minutes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>

        </div>

        {/* CENTERED SHOWCASE VISUAL: VIDEO FOR DESKTOP ONLY, IMAGE FOR MOBILE */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-14 relative max-w-[980px] xl:max-w-[1060px] mx-auto"
        >
          
          {/* Ambient Center Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-[#635BFF]/15 blur-[120px] rounded-full pointer-events-none -z-10" />

          {/* Desktop Showcase: 3D Video */}
          <div className="hidden md:block relative z-10">
            {!videoError ? (
              <video
                src="/assets/hero-building-3d.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-contain drop-shadow-[0_28px_60px_rgba(99,91,255,0.18)] rounded-3xl"
                onError={() => setVideoError(true)}
              />
            ) : (
              <img
                src="/assets/hero-building-3d.png"
                alt="Apteazy 3D Society"
                className="w-full h-auto object-contain drop-shadow-[0_28px_60px_rgba(99,91,255,0.18)]"
              />
            )}
          </div>

          {/* Mobile Showcase: Clean PNG Image */}
          <div className="block md:hidden relative z-10">
            <img
              src="/assets/hero-building-3d.png"
              alt="Apteazy 3D Society"
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(99,91,255,0.18)]"
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
}
