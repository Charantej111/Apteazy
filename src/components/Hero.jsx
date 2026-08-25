import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Check, Play, Pause, Volume2, Maximize2, MoreVertical } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function Hero() {
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

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
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#FAF8FF] via-[#F4EFFE] to-[#EFEAFB] overflow-hidden">
      
      {/* Soft Ambient Blur Gradient Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-[#635BFF]/15 via-[#833BFD]/10 to-transparent blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* CENTERED HERO CONTENT STAGE WITH STAGGERED ENTRANCE ANIMATION */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-5"
        >
          
          {/* Centered Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-[#0F172A] tracking-[-0.03em] leading-[1.08] max-w-3xl mx-auto"
          >
            Run the apartment.
            <br />
            <span className="text-[#635BFF] font-playfair italic">Not the paperwork.</span>
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
              onClick={() => openWhatsApp('Hi, I want to start a 60-day free trial of Apteazy for my apartment')}
              className="px-7 py-3.5 rounded-full bg-[#635BFF] hover:bg-[#5249E0] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Start 60-Day Free Trial</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openWhatsApp('Hi, I want to book a demo of Apteazy for my apartment')}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm shadow-xs border border-purple-100 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#635BFF]" />
              <span>Book a Demo</span>
            </motion.button>
          </motion.div>

          {/* Micro Checkmark Badges */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs font-medium text-slate-600"
          >
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#635BFF] stroke-[3]" />
              <span>Setup in under 10 minutes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#635BFF] stroke-[3]" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#635BFF] stroke-[3]" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>

        </motion.div>

        {/* REALISTIC LAPTOP SHOWCASE MOCKUP */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-12 sm:mt-14 max-w-[960px] mx-auto relative px-2 sm:px-4"
        >
          
          {/* Laptop Screen Box */}
          <div className="relative z-10 rounded-t-[22px] sm:rounded-t-[28px] overflow-hidden bg-slate-950 border-[5px] sm:border-[8px] border-slate-900 shadow-[0_25px_60px_rgba(99,91,255,0.2)] aspect-[16/10] group">
            
            {/* Top Webcam Notch Dot */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-800 z-30 flex items-center justify-center">
              <div className="w-0.5 h-0.5 rounded-full bg-slate-600" />
            </div>

            {/* Video Display - Bound to videoRef for Play/Pause toggle */}
            {!videoError ? (
              <video
                ref={videoRef}
                src="/assets/hero-building-3d.mp4"
                poster="/assets/hero-building-3d.png"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
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

            {/* CENTERED PLAY / PAUSE BUTTON OVERLAY */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-20 ${isPlaying ? 'opacity-0 group-hover:opacity-100 bg-slate-950/20' : 'opacity-100 bg-slate-950/30'}`}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white hover:bg-white/95 text-[#635BFF] flex items-center justify-center shadow-2xl transition-transform duration-300 cursor-pointer"
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-[#635BFF] text-[#635BFF]" />
                ) : (
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#635BFF] translate-x-[2px]" />
                )}
              </motion.button>
            </div>

            {/* BOTTOM VIDEO PLAYER CONTROL BAR OVERLAY */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-3 text-white flex items-center justify-between text-xs z-20">
              <button onClick={togglePlay} className="flex items-center gap-2 text-[11px] font-mono text-slate-300 hover:text-white cursor-pointer">
                {isPlaying ? <Pause className="w-3 h-3 fill-white text-white" /> : <Play className="w-3 h-3 fill-white text-white" />}
                <span>{isPlaying ? 'PLAYING' : 'PAUSED'}</span>
              </button>
              {/* Progress Scrubber Line */}
              <div className="flex-1 mx-2.5 sm:mx-4 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className={`h-full bg-[#635BFF] rounded-full transition-all duration-300 ${isPlaying ? 'w-2/3' : 'w-1/3'}`} />
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-slate-300">
                <Volume2 className="w-3.5 h-3.5 opacity-70" />
                <Maximize2 className="w-3.5 h-3.5" />
                <MoreVertical className="w-3.5 h-3.5 hidden sm:block" />
              </div>
            </div>

          </div>

          {/* REALISTIC LAPTOP BOTTOM BASE & NOTCH */}
          <div className="relative z-20 w-[103%] -ml-[1.5%] h-3.5 sm:h-4 bg-slate-300 rounded-b-2xl shadow-md border-t border-slate-200 flex items-start justify-center">
            {/* Center Thumb Notch */}
            <div className="w-16 sm:w-24 h-1.5 bg-slate-400/80 rounded-b-md mx-auto" />
          </div>

          {/* Laptop Base Bottom Contact Shadow */}
          <div className="w-[90%] h-3 bg-purple-900/20 blur-sm rounded-full mx-auto -mt-1 pointer-events-none" />

        </motion.div>

      </div>
    </section>
  );
}
