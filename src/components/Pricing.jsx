import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Shield, Wrench, Building, Check } from 'lucide-react';

export default function Pricing() {
  const [entErr, setEntErr] = useState(false);

  const plans = [
    {
      id: 'core',
      name: 'Core',
      badge: 'Base Module',
      icon: Layers,
      iconColor: 'bg-purple-100 text-[#635BFF]',
      price: '₹299',
      unit: '/ month',
      subtitle: 'Base society management & automated accounting.',
      features: [
        'Resident & flat directory',
        'Automated maintenance billing',
        'Online UPI / card payments',
        'Official digital notice board',
      ],
      ctaText: 'Get Started Free',
      ctaClass: 'bg-[#635BFF] hover:bg-[#5249E0] text-white shadow-[0_2px_10px_rgba(99,91,255,0.25)]',
    },
    {
      id: 'access',
      name: 'Access',
      badge: 'Add-On Module',
      icon: Shield,
      iconColor: 'bg-blue-100 text-[#3B82F6]',
      price: '+₹99',
      unit: '/ month',
      subtitle: 'Visitor management & smart gatekeeper security.',
      features: [
        'Instant visitor pre-approvals',
        'Delivery & cab gate passes',
        'Dedicated guard mobile app',
        'Overnight vehicle parking logs',
      ],
      ctaText: 'Add to Plan',
      ctaClass: 'bg-white hover:bg-slate-50 text-slate-700 border border-[#E8E5F3]',
    },
    {
      id: 'facilities',
      name: 'Facilities',
      badge: 'Add-On Module',
      icon: Wrench,
      iconColor: 'bg-emerald-100 text-[#10B981]',
      price: '+₹49',
      unit: '/ month',
      subtitle: 'Amenity booking & maintenance ticket resolution.',
      features: [
        'Clubhouse & amenity booking',
        'Photo-enabled ticket helpdesk',
        'Vendor & AMC contract manager',
        'Asset preventive schedules',
      ],
      ctaText: 'Add to Plan',
      ctaClass: 'bg-white hover:bg-slate-50 text-slate-700 border border-[#E8E5F3]',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      badge: 'Custom Module',
      icon: Building,
      iconColor: 'bg-amber-100 text-[#F59E0B]',
      price: 'Enterprise',
      unit: '',
      subtitle: 'Tailored for large townships & multi-tower campuses.',
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
            Simple. <span className="text-[#635BFF]">Modular.</span> Transparent.
          </h2>
          <p className="text-[15px] text-slate-500 font-normal">
            Pay only for what your society needs. Add or remove modules anytime.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(99,91,255,0.08)" }}
                className="bg-white rounded-[24px] p-6 border border-[#E8E5F3] shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon / Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${plan.iconColor}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {plan.name}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-lg font-bold text-[#0F172A] mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-[11.5px] text-slate-500 leading-relaxed mb-4 min-h-[34px]">
                    {plan.subtitle}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 my-3">
                    <span className="font-display text-3xl font-extrabold text-[#0F172A] tracking-tight">
                      {plan.price}
                    </span>
                    {plan.unit && (
                      <span className="text-xs text-slate-400 font-medium">{plan.unit}</span>
                    )}
                  </div>

                  {/* Enterprise Graphic if applicable */}
                  {plan.id === 'enterprise' && (
                    <div className="w-full h-16 flex items-center justify-center p-2 mb-3">
                      {!entErr ? (
                        <img
                          src={plan.image}
                          alt="Enterprise Building"
                          className="max-h-full max-w-full object-contain"
                          onError={() => setEntErr(true)}
                        />
                      ) : (
                        <Building className="w-8 h-8 text-amber-500" />
                      )}
                    </div>
                  )}

                  {/* Feature Bullets */}
                  <div className="space-y-2.5 pt-4 border-t border-[#F1EFF9] mb-6">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11.5px] text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#635BFF] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#calculator"
                  className={`w-full py-2.5 px-4 rounded-full font-semibold text-[12.5px] text-center transition-all duration-150 block ${plan.ctaClass}`}
                >
                  {plan.ctaText}
                </motion.a>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
