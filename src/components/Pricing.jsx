import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Check, Shield, Wrench, MessageSquare, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function Pricing() {
  const [entErr, setEntErr] = useState(false);

  const plans = [
    {
      id: 'tier-20',
      flats: 'Up to 20 Flats',
      name: 'Starter',
      price: '₹ 299',
      unit: '/month',
      billedYearly: '₹2,990 billed yearly',
      popular: false,
      features: [
        'Resident & flat directory',
        'Automated maintenance billing',
        'Online UPI / card payments',
        'Official digital notice board',
      ],
      ctaText: 'Start free trial',
      ctaClass: 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm',
    },
    {
      id: 'tier-50',
      flats: '21–50 Flats',
      name: 'Growth',
      badge: 'MOST POPULAR',
      price: '₹ 499',
      unit: '/month',
      billedYearly: '₹4,990 billed yearly',
      popular: true,
      features: [
        'Everything in Starter',
        'Automated billing & invoices for 50 flats',
        'Defaulter tracking & reminders',
        'Community notices & polls',
      ],
      ctaText: 'Start free trial',
      ctaClass: 'bg-[#635BFF] hover:bg-[#5249E0] text-white shadow-[0_2px_10px_rgba(99,91,255,0.25)]',
    },
    {
      id: 'tier-100',
      flats: '51–100 Flats',
      name: 'Pro',
      price: '₹ 899',
      unit: '/month',
      billedYearly: '₹8,990 billed yearly',
      popular: false,
      features: [
        'Everything in Growth',
        'Multi-admin roles & permissions',
        'Bulk ledger & Tally-ready exports',
        'Priority email & chat support',
      ],
      ctaText: 'Start free trial',
      ctaClass: 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm',
    },
    {
      id: 'enterprise',
      flats: '100+ Flats',
      name: 'Enterprise',
      price: 'Custom',
      unit: '',
      billedYearly: 'Volume discounts & SLAs',
      popular: false,
      image: '/assets/enterprise-building.svg',
      features: [
        'Dedicated account manager',
        'Custom ERP & Tally sync',
        '24/7 SLA & priority phone support',
        'Multi-gate hardware integration',
      ],
      ctaText: 'Talk to Sales',
      ctaClass: 'bg-slate-900 hover:bg-slate-800 text-white',
    },
  ];

  const addons = [
    {
      name: 'Access & Security',
      price: '+₹99/mo',
      desc: 'Guard app, instant visitor approvals, delivery passes & vehicle logs',
      icon: Shield,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      name: 'Facility & Helpdesk',
      price: '+₹49/mo',
      desc: 'Clubhouse booking, photo ticket tracker, vendor AMC contracts',
      icon: Wrench,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      name: 'WhatsApp & SMS Alerts',
      price: '+₹49/mo',
      desc: 'Instant invoice & payment link alerts directly on residents\' WhatsApp',
      icon: MessageSquare,
      color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-2"
        >
          <span className="text-[11.5px] font-bold uppercase tracking-widest text-[#635BFF]">
            PRICING
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-[-0.02em]">
            Simple. <span className="text-[#635BFF]">Flat-Based.</span> Transparent.
          </h2>
          <p className="text-[15px] text-slate-500 font-normal">
            Fair, scalable pricing tailored to your apartment's unit count. No hidden setup fees.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 items-stretch">
          {plans.map((plan, idx) => {
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(99,91,255,0.08)" }}
                className={`relative bg-white rounded-[24px] p-6 transition-all duration-300 flex flex-col justify-between ${
                  plan.popular
                    ? 'border-2 border-[#635BFF] shadow-lg shadow-purple-500/10'
                    : 'border border-[#E8E5F3] shadow-sm'
                }`}
              >
                {/* Most Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#635BFF] text-white text-[10.5px] font-bold uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Flat Count Header */}
                  <div className="mb-3">
                    <span className="text-sm font-semibold text-slate-600 block">
                      {plan.flats}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 my-1">
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                      {plan.price}
                    </span>
                    {plan.unit && (
                      <span className="text-sm text-slate-400 font-medium">{plan.unit}</span>
                    )}
                  </div>

                  {/* Yearly Billing */}
                  <p className="text-xs text-slate-400 font-medium mb-5">
                    {plan.billedYearly}
                  </p>

                  {/* Enterprise Graphic if applicable */}
                  {plan.id === 'enterprise' && (
                    <div className="w-full h-12 flex items-center justify-center p-1 mb-2">
                      {!entErr ? (
                        <img
                          src={plan.image}
                          alt="Enterprise Building"
                          className="max-h-full max-w-full object-contain"
                          onError={() => setEntErr(true)}
                        />
                      ) : (
                        <Building2 className="w-7 h-7 text-amber-500" />
                      )}
                    </div>
                  )}

                  {/* Feature Bullets */}
                  <div className="space-y-2.5 pt-4 border-t border-[#F1EFF9] mb-6">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-[12px] text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#635BFF] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openWhatsApp(`Hi, I want to start a free trial of Apteazy for my apartment (${plan.flats} Plan)`)}
                  className={`w-full py-2.5 px-4 rounded-full font-semibold text-[13px] text-center transition-all duration-150 block cursor-pointer ${plan.ctaClass}`}
                >
                  {plan.ctaText}
                </motion.button>

              </motion.div>
            );
          })}
        </div>

        {/* Modular Add-Ons Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-[24px] bg-[#FAF9FD] border border-[#E8E5F3]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#635BFF]">
                Optional Add-Ons
              </span>
              <h3 className="font-display text-xl font-bold text-[#0F172A]">
                Power up with modular add-ons
              </h3>
              <p className="text-xs text-slate-500">
                Attach security, clubhouse booking, or WhatsApp alerts to any base flat tier.
              </p>
            </div>
            <a
              href="#calculator"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#635BFF] hover:text-[#5249E0] transition-colors"
            >
              <span>Calculate exact total in calculator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {addons.map((addon, i) => {
              const Icon = addon.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-[18px] p-4 border border-[#EBE8F5] shadow-xs flex items-start gap-3.5"
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border ${addon.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="text-xs font-bold text-slate-900">{addon.name}</span>
                      <span className="text-xs font-extrabold text-[#635BFF]">{addon.price}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {addon.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
