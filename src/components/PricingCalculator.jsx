import React, { useState } from 'react';
import { Shield, Wrench, MessageSquare, ArrowRight, BarChart3, CheckCircle2, Sparkles } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function PricingCalculator() {
  const [flats, setFlats] = useState(40);
  const [hasSecurity, setHasSecurity] = useState(true);
  const [hasFacility, setHasFacility] = useState(true);
  const [hasWhatsapp, setHasWhatsapp] = useState(false);

  const SECURITY_PRICE = 99;
  const FACILITY_PRICE = 49;
  const WHATSAPP_PRICE = 49;

  // Base price dynamically computed based on flat count tiers
  const isEnterprise = flats > 100;
  
  const getCoreBasePrice = (flatCount) => {
    if (flatCount <= 20) return 299;
    if (flatCount <= 50) return 499;
    if (flatCount <= 100) return 899;
    return null;
  };

  const getTierLabel = (flatCount) => {
    if (flatCount <= 20) return 'Up to 20 Flats Tier';
    if (flatCount <= 50) return '21–50 Flats Tier';
    if (flatCount <= 100) return '51–100 Flats Tier';
    return '100+ Flats Enterprise';
  };

  const coreBasePrice = getCoreBasePrice(flats);

  const addonsTotal =
    (hasSecurity ? SECURITY_PRICE : 0) +
    (hasFacility ? FACILITY_PRICE : 0) +
    (hasWhatsapp ? WHATSAPP_PRICE : 0);

  const monthlyTotal = isEnterprise ? null : coreBasePrice + addonsTotal;
  const annualTotal = isEnterprise ? null : monthlyTotal * 10;
  const perFlatMonthly = isEnterprise ? null : (monthlyTotal / flats).toFixed(2);

  const handleWhatsAppTrial = () => {
    if (isEnterprise) {
      openWhatsApp(`Hi, I am interested in Enterprise pricing for Apteazy for my apartment complex with ${flats}+ flats.`);
    } else {
      const activeAddons = [];
      if (hasSecurity) activeAddons.push('Gate Security (₹99)');
      if (hasFacility) activeAddons.push('Facilities (₹49)');
      if (hasWhatsapp) activeAddons.push('WhatsApp Alerts (₹49)');
      const addonStr = activeAddons.length > 0 ? ` with ${activeAddons.join(', ')}` : '';
      openWhatsApp(
        `Hi, I want to start a 30-day free trial of Apteazy for my apartment (${flats} flats, Base: ₹${coreBasePrice}/mo${addonStr}, Total: ₹${monthlyTotal}/mo).`
      );
    }
  };

  return (
    <section id="calculator" className="py-12 md:py-16 bg-[#FAFAFC] overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        
        {/* Main Calculator Card */}
        <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-[#E5E7EB] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Controls */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#635BFF]">
                    Interactive Estimator
                  </span>
                  <span className="text-[10px] font-bold bg-purple-100 text-[#635BFF] px-2 py-0.5 rounded-full">
                    Auto-scaling Base Price
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0F172A] tracking-tight">
                  Pricing Calculator
                </h3>
                <p className="text-[13px] text-slate-500 mt-0.5">
                  Base rate adjusts automatically based on flat count. Toggle optional modules as needed.
                </p>
              </div>

              {/* Slider Block */}
              <div className="bg-[#F8F9FA] rounded-[20px] p-5 border border-[#E5E7EB]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#635BFF]" />
                    <span className="text-xs font-bold text-slate-800">Flats / Units Count</span>
                    <span className="text-[10.5px] font-semibold text-[#635BFF] bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-full">
                      {getTierLabel(flats)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4 text-[#635BFF]" />
                    <span className="font-display text-2xl font-extrabold text-[#635BFF]">
                      {flats > 100 ? '100+' : flats}
                    </span>
                    <span className="text-xs font-medium text-slate-500">Flats</span>
                  </div>
                </div>

                <input
                  type="range"
                  min="10"
                  max="110"
                  step="5"
                  value={flats}
                  onChange={(e) => setFlats(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg cursor-pointer accent-[#635BFF]"
                />

                <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-2 px-0.5">
                  <span className={flats <= 20 ? 'text-[#635BFF] font-bold' : ''}>≤20 (₹299)</span>
                  <span className={flats > 20 && flats <= 50 ? 'text-[#635BFF] font-bold' : ''}>21–50 (₹499)</span>
                  <span className={flats > 50 && flats <= 100 ? 'text-[#635BFF] font-bold' : ''}>51–100 (₹899)</span>
                  <span className={flats > 100 ? 'text-[#635BFF] font-bold' : ''}>100+ (Custom)</span>
                </div>

                {/* Quick Presets */}
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-200/70">
                  <span className="text-[10.5px] font-semibold text-slate-400 uppercase tracking-wider">
                    Quick Pick:
                  </span>
                  {[
                    { label: '15 Flats', val: 15 },
                    { label: '35 Flats', val: 35 },
                    { label: '75 Flats', val: 75 },
                    { label: '100+ Flats', val: 110 },
                  ].map((p) => (
                    <button
                      key={p.val}
                      onClick={() => setFlats(p.val)}
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                        flats === p.val || (p.val === 110 && flats > 100)
                          ? 'bg-[#635BFF] text-white border-[#635BFF]'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Module Toggles */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Select Modules
                </div>

                {/* Core (Included) */}
                <div className="flex items-center justify-between p-3.5 rounded-[16px] bg-purple-50/60 border border-purple-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#635BFF] text-white flex items-center justify-center font-bold text-[11px] shadow-xs">
                      Core
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <span>Core Platform & Accounts</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Invoicing, directory, UPI payments & notice board
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-[#635BFF] bg-white px-3 py-1 rounded-full border border-purple-200 shadow-xs">
                    {isEnterprise ? 'Custom Pricing' : `₹${coreBasePrice}/mo Included`}
                  </span>
                </div>

                {/* Security Access */}
                <div
                  onClick={() => setHasSecurity(!hasSecurity)}
                  className={`flex items-center justify-between p-3.5 rounded-[16px] border cursor-pointer transition-all duration-150 ${
                    hasSecurity
                      ? 'bg-blue-50/40 border-blue-200 shadow-xs'
                      : 'bg-slate-50/50 border-slate-200 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      hasSecurity ? 'bg-blue-500 text-white shadow-xs' : 'bg-slate-200 text-slate-500'
                    }`}>
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Security Module (Access)</div>
                      <div className="text-[11px] text-slate-500">Guard app, visitor & delivery logs</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-700">+₹99/mo</span>
                    <div className={`w-8 h-4.5 rounded-full transition-colors relative p-0.5 ${
                      hasSecurity ? 'bg-blue-500' : 'bg-slate-300'
                    }`}>
                      <div className={`w-3.5 h-3.5 rounded-full bg-white transition-transform ${
                        hasSecurity ? 'translate-x-3.5' : 'translate-x-0'
                      }`} />
                    </div>
                  </div>
                </div>

                {/* Facilities */}
                <div
                  onClick={() => setHasFacility(!hasFacility)}
                  className={`flex items-center justify-between p-3.5 rounded-[16px] border cursor-pointer transition-all duration-150 ${
                    hasFacility
                      ? 'bg-emerald-50/40 border-emerald-200 shadow-xs'
                      : 'bg-slate-50/50 border-slate-200 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      hasFacility ? 'bg-emerald-500 text-white shadow-xs' : 'bg-slate-200 text-slate-500'
                    }`}>
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Facility Module</div>
                      <div className="text-[11px] text-slate-500">Clubhouse bookings & ticket tracker</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-700">+₹49/mo</span>
                    <div className={`w-8 h-4.5 rounded-full transition-colors relative p-0.5 ${
                      hasFacility ? 'bg-emerald-500' : 'bg-slate-300'
                    }`}>
                      <div className={`w-3.5 h-3.5 rounded-full bg-white transition-transform ${
                        hasFacility ? 'translate-x-3.5' : 'translate-x-0'
                      }`} />
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div
                  onClick={() => setHasWhatsapp(!hasWhatsapp)}
                  className={`flex items-center justify-between p-3.5 rounded-[16px] border cursor-pointer transition-all duration-150 ${
                    hasWhatsapp
                      ? 'bg-amber-50/40 border-amber-200 shadow-xs'
                      : 'bg-slate-50/50 border-slate-200 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      hasWhatsapp ? 'bg-amber-500 text-white shadow-xs' : 'bg-slate-200 text-slate-500'
                    }`}>
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">WhatsApp & SMS Notifications</div>
                      <div className="text-[11px] text-slate-500">Instant invoice & defaulter reminder alerts</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-700">+₹49/mo</span>
                    <div className={`w-8 h-4.5 rounded-full transition-colors relative p-0.5 ${
                      hasWhatsapp ? 'bg-amber-500' : 'bg-slate-300'
                    }`}>
                      <div className={`w-3.5 h-3.5 rounded-full bg-white transition-transform ${
                        hasWhatsapp ? 'translate-x-3.5' : 'translate-x-0'
                      }`} />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Dynamic Price Output Box */}
            <div className="lg:col-span-5 bg-[#FAFAFC] rounded-[24px] p-6 border border-[#E5E7EB] flex flex-col justify-between">
              
              <div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Estimated Monthly Total
                </div>

                {isEnterprise ? (
                  <div className="my-3 py-2">
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                      Enterprise Quote
                    </span>
                    <p className="text-xs text-slate-500 mt-1">
                      Custom volume discount for societies with 100+ flats
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-baseline gap-1 my-2">
                      <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                        ₹{monthlyTotal}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/ month</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-semibold bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full mb-4">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>~₹{perFlatMonthly} per flat / month</span>
                    </div>
                  </>
                )}

                {/* Line items */}
                <div className="space-y-2.5 pt-3 border-t border-slate-200/80 text-xs text-slate-600 mb-5">
                  <div className="flex justify-between">
                    <span>
                      Core Platform ({isEnterprise ? '100+ flats' : `${flats} flats`})
                    </span>
                    <span className="font-bold text-slate-900">
                      {isEnterprise ? 'Custom' : `₹${coreBasePrice}`}
                    </span>
                  </div>
                  {hasSecurity && (
                    <div className="flex justify-between text-blue-600">
                      <span>Access & Gate Security</span>
                      <span className="font-semibold">+₹{SECURITY_PRICE}</span>
                    </div>
                  )}
                  {hasFacility && (
                    <div className="flex justify-between text-emerald-600">
                      <span>Facility & Helpdesk</span>
                      <span className="font-semibold">+₹{FACILITY_PRICE}</span>
                    </div>
                  )}
                  {hasWhatsapp && (
                    <div className="flex justify-between text-amber-600">
                      <span>WhatsApp & SMS Alerts</span>
                      <span className="font-semibold">+₹{WHATSAPP_PRICE}</span>
                    </div>
                  )}
                  
                  {!isEnterprise && (
                    <div className="flex justify-between pt-2.5 border-t border-slate-200/60 text-slate-600 font-medium">
                      <span className="text-emerald-700 font-semibold">Annual Plan (2 mos FREE)</span>
                      <span className="font-extrabold text-[#635BFF]">₹{annualTotal} / year</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleWhatsAppTrial}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#635BFF] hover:bg-[#5249E0] text-white font-semibold text-xs shadow-md shadow-purple-500/20 transition-all duration-150 cursor-pointer"
                >
                  <span>{isEnterprise ? 'Contact Enterprise Sales' : 'Start 30-Day Free Trial'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="text-center text-[10.5px] text-slate-400">
                  No credit card required • Instant setup on WhatsApp
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Enterprise Strip */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            <span className="text-slate-500">
              Need custom gate hardware integration, RFID boom barriers, or have 100+ flats?
            </span>
            <button
              onClick={() => openWhatsApp('Hi, I want to talk to enterprise sales for custom society setup.')}
              className="font-bold text-[#635BFF] hover:text-[#5249E0] flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0"
            >
              <span>Contact Enterprise Sales</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
