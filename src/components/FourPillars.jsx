import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FourPillars() {
  const [errors, setErrors] = useState({});

  const handleErr = (id) => {
    setErrors((prev) => ({ ...prev, [id]: true }));
  };

  const pillars = [
    {
      id: 'finance',
      title: 'Financial Management',
      titleColor: 'text-[#635BFF]',
      subtitle: 'Automated billing, instant receipts, expense tracking, and transparent society accounting.',
      image: '/assets/pillar-finance.png',
      features: [
        'Automated maintenance bills',
        'Instant UPI collection',
        'Transparent expense ledger',
        'Defaulter auto-reminders',
      ],
    },
    {
      id: 'security',
      title: 'Security & Gate Access',
      titleColor: 'text-[#10B981]',
      subtitle: 'Effortless visitor management, delivery tracking, and digital gate approvals.',
      image: '/assets/pillar-security.png',
      features: [
        '1-tap visitor pre-approvals',
        'Delivery & cab tracking',
        'Digital gate passes',
        'Guard mobile application',
      ],
    },
    {
      id: 'community',
      title: 'Community Engagement',
      titleColor: 'text-[#F59E0B]',
      subtitle: 'Connect your community with digital notice boards, polls, discussions, and directory.',
      image: '/assets/pillar-community.png',
      features: [
        'Digital notice board',
        'Polls & online voting',
        'Resident directory',
        'Event & amenity updates',
      ],
    },
    {
      id: 'facilities',
      title: 'Facility & Helpdesk',
      titleColor: 'text-[#3B82F6]',
      subtitle: 'Book clubhouses, amenities, and raise maintenance complaints with real-time tracking.',
      image: '/assets/pillar-maintenance.png',
      features: [
        'Amenity slot booking',
        'Photo complaint logging',
        'Real-time status updates',
        'Vendor & staff management',
      ],
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-2"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-[-0.02em]">
            The Four Pillars of Community Harmony
          </h2>
          <p className="text-[15px] text-slate-500 font-normal">
            Everything your community needs to run effortlessly.
          </p>
        </motion.div>

        {/* 4 Cards Row with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(99,91,255,0.08)" }}
              className="bg-white rounded-[24px] p-6 border border-[#E8E5F3] shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Title */}
                <h3 className={`font-display text-base font-bold mb-2 tracking-tight ${pillar.titleColor}`}>
                  {pillar.title}
                </h3>

                {/* Subtitle */}
                <p className="text-[11.5px] text-slate-500 leading-relaxed mb-6">
                  {pillar.subtitle}
                </p>

                {/* 3D Illustration with Gentle Hover Float */}
                <div className="w-full h-32 flex items-center justify-center p-2 mb-6">
                  {!errors[pillar.id] ? (
                    <motion.img
                      whileHover={{ scale: 1.08, y: -4 }}
                      transition={{ duration: 0.3 }}
                      src={pillar.image}
                      alt={pillar.title}
                      className="max-h-full max-w-full object-contain drop-shadow-sm"
                      onError={() => handleErr(pillar.id)}
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 font-bold text-lg">
                      ✦
                    </div>
                  )}
                </div>
              </div>

              {/* Bullet Features */}
              <div className="pt-4 border-t border-[#F1EFF9] space-y-2">
                {pillar.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11.5px] text-slate-600">
                    <span className="text-[#635BFF] font-bold text-xs mt-0.5">•</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
