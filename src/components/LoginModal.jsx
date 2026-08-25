import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Phone, ArrowLeft, Calendar, Sparkles, MessageSquare, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function LoginModal({ isOpen, onClose, onOpenTerms }) {
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState('phone'); // 'phone' | 'unregistered' | 'otp'
  const [imgErr, setImgErr] = useState(false);

  // Pre-registered test numbers
  const registeredNumbers = ['9876543210', '9999999999', '7799012354'];

  const handleSubmitPhone = (e) => {
    e.preventDefault();
    const cleanNum = phone.replace(/\D/g, '');
    if (!cleanNum || cleanNum.length < 10) return;

    if (registeredNumbers.includes(cleanNum)) {
      setStep('otp');
    } else {
      // Unregistered flow conversion
      setStep('unregistered');
    }
  };

  const handleReset = () => {
    setStep('phone');
    setPhone('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative w-full max-w-[540px] bg-white rounded-[32px] shadow-2xl border border-slate-100 p-6 sm:p-8 my-auto overflow-hidden text-center"
        >
          {/* Close Modal Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer z-20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* STEP 1: PHONE NUMBER INPUT */}
          {step === 'phone' && (
            <div className="space-y-6 pt-2">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#635BFF] flex items-center justify-center mx-auto mb-3 font-bold">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                  Welcome to Apteazy
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                  Enter your mobile number to access your apartment society portal.
                </p>
              </div>

              <form onSubmit={handleSubmitPhone} className="space-y-4 max-w-md mx-auto">
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-sm font-bold text-slate-500 border-r border-slate-200 pr-3">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full pl-16 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-semibold text-sm placeholder-slate-400 focus:outline-none focus:border-[#635BFF] focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#635BFF] hover:bg-[#5249E0] text-white font-bold text-sm shadow-[0_6px_20px_rgba(99,91,255,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="pt-2 text-[11.5px] text-slate-400">
                <span>By continuing, you agree to Apteazy’s </span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onOpenTerms) onOpenTerms();
                  }}
                  className="text-[#635BFF] underline hover:text-[#5249E0] cursor-pointer"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: UNREGISTERED COMMUNITY CONVERSION FLOW (MATCHES PROMPT & 3D IMAGE) */}
          {step === 'unregistered' && (
            <div className="space-y-5 pt-1">
              {/* 3D Illustration matching reference image */}
              <div className="relative max-w-[260px] mx-auto overflow-hidden rounded-2xl">
                {!imgErr ? (
                  <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src="/assets/login-unregistered-3d.png"
                    alt="Community not found"
                    className="w-full h-auto object-contain max-h-56 mx-auto drop-shadow-sm"
                    onError={() => setImgErr(true)}
                  />
                ) : (
                  <div className="text-5xl py-6">🏢❓</div>
                )}
              </div>

              {/* Exact Prompt Headline */}
              <div className="space-y-2">
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight leading-snug">
                  Looks like your community isn't using Apteazy yet.
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 max-w-md mx-auto leading-relaxed">
                  Bring Apteazy to your apartment society for automated maintenance billing, instant 1-tap gate security, and resident helpdesk!
                </p>
              </div>

              {/* 3 Conversion Action Buttons (Matching Prompt Specs) */}
              <div className="flex flex-col gap-2.5 pt-2 max-w-sm mx-auto">
                {/* Button 1: Start Free Trial */}
                <button
                  onClick={() => openWhatsApp('Hi, I want to start a 60-day free trial of Apteazy for my apartment')}
                  className="w-full py-3 px-6 rounded-full bg-[#635BFF] hover:bg-[#5249E0] text-white font-bold text-xs sm:text-sm shadow-[0_6px_18px_rgba(99,91,255,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start Free Trial</span>
                </button>

                {/* Button 2: Book Demo */}
                <button
                  onClick={() => openWhatsApp('Hi, I want to book a demo of Apteazy for my apartment')}
                  className="w-full py-3 px-6 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#635BFF]" />
                  <span>Book Demo</span>
                </button>

                {/* Button 3: Contact Sales */}
                <button
                  onClick={() => openWhatsApp('Hi, I want to speak with sales regarding Apteazy for my apartment')}
                  className="w-full py-3 px-6 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact Sales</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="text-xs font-semibold text-slate-400 hover:text-[#635BFF] inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Try another phone number</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: OTP VERIFICATION FOR REGISTERED NUMBERS */}
          {step === 'otp' && (
            <div className="space-y-6 pt-2">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-[#0F172A]">
                  Enter Verification Code
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  We sent a 6-digit OTP to <span className="font-bold text-slate-900">+91 {phone}</span>
                </p>
              </div>

              <div className="flex justify-center gap-2 py-2">
                {[1, 2, 3, 4, 5, 6].map((idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    defaultValue={idx === 1 ? '4' : idx === 2 ? '2' : ''}
                    className="w-10 h-12 text-center text-lg font-bold bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#635BFF]"
                  />
                ))}
              </div>

              <button
                onClick={() => alert('Successfully verified! Directing to society dashboard...')}
                className="w-full py-3.5 rounded-full bg-[#635BFF] hover:bg-[#5249E0] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                Verify & Enter Portal
              </button>

              <div>
                <button
                  onClick={handleReset}
                  className="text-xs font-semibold text-slate-400 hover:text-[#635BFF] inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to phone input</span>
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
