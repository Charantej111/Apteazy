import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Check, Shield, Wrench, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function Pricing() {
  const [entErr, setEntErr] = useState(false);

  const plans = [
    {
      id: 'tier-20',
      name: 'Starter',
      flats: '1–20 Flats',
      rate: '₹15',
      unit: '/ flat / mo',
      desc: 'Up to ₹300/month',
      popular: false,
      features: [
        'Resident & flat directory',
        'Automated maintenance billing',
        'Online UPI / card payments',
        'Digital notice board',
      ],
      ctaText: 'Start free trial',
      ctaClass: 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm',
    },
    {
      id: 'tier-50',
      name: 'Growth',
      flats: '21–50 Flats',
      badge: 'MOST POPULAR',
      rate: '₹12',
      unit: '/ flat / mo',
      desc: '₹312 – ₹660/month',
      popular: true,
      features: [
        'Everything in Starter',
        'Automated billing & invoices',
        'Defaulter tracking & reminders',
        'Community notices & polls',
      ],
      ctaText: 'Start free trial',
      ctaClass: 'bg-[#635BFF] hover:bg-[#5249E0] text-white shadow-[0_2px_10px_rgba(99,91,255,0.25)]',
    },
    {
      id: 'tier-100',
      name: 'Pro',
      flats: '51–100 Flats',
      rate: '₹10',
      unit: '/ flat / mo',
      desc: '₹670 – ₹1,160/month',
      popular: false,
      features: [
        'Everything in Growth',
        'Multi-admin roles & permissions',
        'Bulk ledger & Tally-ready exports',
        'Priority email & phone support',
      ],
      ctaText: 'Start free trial',
      ctaClass: 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm',
    },
    {
      id: 'tier-enterprise',
      name: 'Scale',
      flats: '101+ Flats',
      rate: '₹8',
      unit: '/ flat / mo',
      desc: 'From ₹1,168/month',
      popular: false,
      image: '/assets/enterprise-building.svg',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        'Custom ERP & Tally sync',
        'Multi-gate hardware support',
      ],
      ctaText: 'Start free trial',
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
      name: 'Facilities',
      price: '+₹49/mo',
      desc: 'Clubhouse booking, photo ticket tracker, vendor AMC contracts',
      icon: Wrench,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
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
          className="text-center max-w-2xl mx-auto mb-10 space-y-2"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-[-0.02em]">
            Simple, transparent pricing.
          </h2>
          <p className="text-base text-slate-500 font-normal">
            Pay less per flat as your community grows. Rates apply progressively per bracket.
          </p>

          {/* Simple Example Callout */}
          <div className="pt-2">
            <span className="inline-block text-xs text-slate-500 bg-slate-100 rounded-full px-4 py-1.5 font-medium">
              Example: A 50-flat society pays <strong className="text-slate-800">20 × ₹15</strong> + <strong className="text-slate-800">30 × ₹12</strong> = <strong className="text-[#635BFF]">₹660/month</strong>
            </span>
          </div>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2 items-stretch">
          {plans.map((plan, idx) => {
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(99,91,255,0.08)' }}
                className={`relative bg-white rounded-[24px] p-6 transition-all duration-300 flex flex-col justify-between ${plan.popular
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
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      {plan.name}
                    </span>
                    <span className="text-sm font-bold text-slate-800 block mt-0.5">
                      {plan.flats}
                    </span>
                  </div>

                  {/* Rate */}
                  <div className="flex items-baseline gap-1 my-1">
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                      {plan.rate}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{plan.unit}</span>
                  </div>

                  {/* Subtext */}
                  <p className="text-xs font-semibold text-slate-500 mb-5">
                    {plan.desc}
                  </p>

                  {/* Enterprise Graphic if applicable */}
                  {plan.image && (
                    <div className="w-full h-10 flex items-center justify-center p-1 mb-2">
                      {!entErr ? (
                        <img
                          src={plan.image}
                          alt="Enterprise Building"
                          className="max-h-full max-w-full object-contain"
                          onError={() => setEntErr(true)}
                        />
                      ) : (
                        <Building2 className="w-6 h-6 text-amber-500" />
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
                  onClick={() =>
                    openWhatsApp(
                      `Hi, I want to start a 60-day free trial of Apteazy for my apartment (${plan.flats} ${plan.name} Plan)`
                    )
                  }
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
              <h3 className="font-display text-xl font-bold text-[#0F172A]">
                Optional Add-Ons
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Attach security or facility management to your core plan.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            {addons.map((addon, i) => {
              const Icon = addon.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-[18px] p-4 border border-[#EBE8F5] shadow-xs flex items-start gap-3.5"
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border ${addon.color}`}
                  >
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
