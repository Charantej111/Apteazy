import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, Link } from 'lucide-react';

export default function ReferralBanner() {
  const [copied, setCopied] = useState(false);
  const [imgErr, setImgErr] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('https://apteazy.ofzen.in/?ref=community');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hey! Check out Apteazy for automating apartment society operations & billing: https://apteazy.ofzen.in'
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent('Modern society management platform: Apteazy');
    const body = encodeURIComponent(
      'Hi,\n\nI recommend checking out Apteazy for automating society operations: https://apteazy.ofzen.in'
    );
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  return (
    <section id="referral" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Referral Card with Clean Light Background */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="bg-[#FAF8FF] rounded-[32px] p-8 sm:p-10 lg:p-12 border border-[#E9E4F8] shadow-sm relative overflow-hidden"
        >
          
          {/* Subtle Decorative Circular Arc Rings at bottom-left */}
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full border-[18px] border-purple-100/50 pointer-events-none z-0" />
          <div className="absolute -bottom-28 -left-28 w-80 h-80 rounded-full border-[14px] border-purple-50/40 pointer-events-none z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Heading, Copy & CTAs */}
            <div className="lg:col-span-7 space-y-5 text-left">
              
              <div className="space-y-1">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0A261D] tracking-[-0.025em] leading-[1.15]">
                  <span className="text-[#047857]">Love Apteazy?</span>
                  <br />
                  <span>Share with another apartment.</span>
                </h2>
              </div>

              <p className="text-[14px] sm:text-[15px] text-slate-600 max-w-lg leading-relaxed font-normal">
                Refer a neighboring apartment society and both communities receive 2 months free subscription when they onboard.
              </p>

              {/* 3 Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                
                {/* Official WhatsApp Share Button */}
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-sm transition-colors"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>WhatsApp</span>
                </motion.button>

                {/* Copy Link Button */}
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-200 shadow-sm transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                      <span className="text-emerald-600">Copied Link!</span>
                    </>
                  ) : (
                    <>
                      <Link className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy link</span>
                    </>
                  )}
                </motion.button>

                {/* Email Button */}
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleEmail}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-purple-50 hover:bg-purple-100 text-[#635BFF] font-bold text-xs border border-purple-200 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#635BFF]" />
                  <span>Email</span>
                </motion.button>

              </div>
            </div>

            {/* Right Column: Character Illustration with Gentle Float */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-end relative">
              <div className="w-full max-w-[340px] relative z-10">
                {!imgErr ? (
                  <motion.img
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4.5, ease: 'easeInOut', repeat: Infinity }}
                    src="/assets/referral-characters.png"
                    alt="Refer another apartment society"
                    className="w-full h-auto object-contain drop-shadow-sm"
                    onError={() => setImgErr(true)}
                  />
                ) : (
                  <div className="aspect-[4/3] rounded-3xl bg-white p-6 flex flex-col items-center justify-center text-center border border-purple-100">
                    <div className="text-4xl">👥</div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
