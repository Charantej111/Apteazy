import React, { useState } from 'react';
import { Shield, Wrench, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { calculateProgressivePrice } from '../utils/pricing';
import { openWhatsApp } from '../utils/whatsapp';

export default function PricingCalculator() {
  const [flats, setFlats] = useState(50);
  const [hasSecurity, setHasSecurity] = useState(true);
  const [hasFacility, setHasFacility] = useState(true);

  const SECURITY_PRICE = 99;
  const FACILITY_PRICE = 49;

  const pricing = calculateProgressivePrice(flats);

  const addonsTotal =
    (hasSecurity ? SECURITY_PRICE : 0) +
    (hasFacility ? FACILITY_PRICE : 0);

  const monthlyTotal = pricing.total + addonsTotal;
  const annualTotal = monthlyTotal * 10;

  const handleStartTrial = () => {
    const activeAddons = [];
    if (hasSecurity) activeAddons.push('Security (₹99/mo)');
    if (hasFacility) activeAddons.push('Facilities (₹49/mo)');
    const addonText = activeAddons.length > 0 ? ` with ${activeAddons.join(', ')}` : '';

    openWhatsApp(
      `Hi, I want to start a 60-day free trial of Apteazy for my society (${flats} flats, Base: ₹${pricing.total}/mo${addonText}, Total: ₹${monthlyTotal}/mo).`
    );
  };

  return (
    <section id="calculator" className="py-16 md:py-20 bg-[#FAFAFC] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Pricing Calculator
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Rates decrease progressively as your society size increases.
                </p>
              </div>

              {/* Slider Box */}
              <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Number of Flats
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-3xl font-extrabold text-[#635BFF]">
                      {flats}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Flats</span>
                  </div>
                </div>

                <input
                  type="range"
                  min="5"
                  max="200"
                  step="1"
                  value={flats}
                  onChange={(e) => setFlats(Math.max(1, Number(e.target.value)))}
                  className="w-full h-2 bg-slate-200 rounded-lg cursor-pointer accent-[#635BFF]"
                  aria-label="Number of flats"
                />

                {/* Slabs ruler */}
                <div className="grid grid-cols-4 text-[11px] font-medium text-slate-400 mt-2 text-center">
                  <span>1–20 (₹15/flat)</span>
                  <span>21–50 (₹12/flat)</span>
                  <span>51–100 (₹10/flat)</span>
                  <span>101+ (₹8/flat)</span>
                </div>

                {/* Quick Presets */}
                <div className="flex flex-wrap items-center gap-2 mt-5 pt-4 border-t border-slate-200">
                  <span className="text-xs font-semibold text-slate-400">Quick select:</span>
                  {[20, 30, 50, 75, 100, 150, 200].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setFlats(val)}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${flats === val
                        ? 'bg-[#635BFF] text-white border-[#635BFF]'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>

                {/* Clear Example Note */}
                <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">How it works: </span>
                  {flats <= 20 ? (
                    <span>{flats} flats × ₹15 = <strong className="text-slate-800">₹{pricing.total}/mo</strong></span>
                  ) : (
                    <span>
                      {pricing.slabs.map((s) => `${s.quantity} × ₹${s.rate}`).join(' + ')} = <strong className="text-slate-800">₹{pricing.total}/mo</strong>
                    </span>
                  )}
                </div>
              </div>

              {/* Module Selection */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Select Modules
                </span>

                {/* Core */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-purple-50/60 border border-purple-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#635BFF] text-white flex items-center justify-center font-bold text-xs">
                      Core
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <span>Core Platform & Accounts</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Invoicing, directory, payments & notice board
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#635BFF] bg-white px-2.5 py-1 rounded-full border border-purple-200">
                    ₹{pricing.total}/mo
                  </span>
                </div>

                {/* Security */}
                <div
                  onClick={() => setHasSecurity(!hasSecurity)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${hasSecurity
                    ? 'bg-blue-50/40 border-blue-200'
                    : 'bg-slate-50/50 border-slate-200 opacity-60'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${hasSecurity ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-500'
                      }`}>
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Gate Security Module</div>
                      <div className="text-[11px] text-slate-500">Guard app, visitor & delivery logs</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-700">+₹99/mo</span>
                    <div className={`w-8 h-4.5 rounded-full transition-colors relative p-0.5 ${hasSecurity ? 'bg-blue-500' : 'bg-slate-300'
                      }`}>
                      <div className={`w-3.5 h-3.5 rounded-full bg-white transition-transform ${hasSecurity ? 'translate-x-3.5' : 'translate-x-0'
                        }`} />
                    </div>
                  </div>
                </div>

                {/* Facilities */}
                <div
                  onClick={() => setHasFacility(!hasFacility)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${hasFacility
                    ? 'bg-emerald-50/40 border-emerald-200'
                    : 'bg-slate-50/50 border-slate-200 opacity-60'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${hasFacility ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'
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
                    <div className={`w-8 h-4.5 rounded-full transition-colors relative p-0.5 ${hasFacility ? 'bg-emerald-500' : 'bg-slate-300'
                      }`}>
                      <div className={`w-3.5 h-3.5 rounded-full bg-white transition-transform ${hasFacility ? 'translate-x-3.5' : 'translate-x-0'
                        }`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Summary Box */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Estimated Total
                </span>

                <div className="flex items-baseline gap-1.5 my-2">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                    ₹{monthlyTotal.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm text-slate-500 font-medium">/ month</span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full mb-5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Effective ~₹{pricing.perFlatRate}/flat per month</span>
                </div>

                {/* Line items */}
                <div className="space-y-2.5 pt-4 border-t border-slate-200 text-xs text-slate-600">
                  <div className="flex justify-between items-center font-medium">
                    <span className="text-slate-800">Core Platform ({flats} flats)</span>
                    <span className="font-bold text-slate-900">₹{pricing.total.toLocaleString('en-IN')}</span>
                  </div>

                  {pricing.slabs.length > 1 && (
                    <div className="space-y-1 pl-2.5 text-[11px] text-slate-500 border-l-2 border-slate-300 my-1">
                      {pricing.slabs.map((s, idx) => (
                        <div key={idx} className="flex justify-between">
                          <span>{s.label} ({s.quantity} × ₹{s.rate})</span>
                          <span>₹{s.amount}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {hasSecurity && (
                    <div className="flex justify-between text-blue-600">
                      <span>Gate Security</span>
                      <span className="font-semibold">+₹{SECURITY_PRICE}</span>
                    </div>
                  )}
                  {hasFacility && (
                    <div className="flex justify-between text-emerald-600">
                      <span>Facility Management</span>
                      <span className="font-semibold">+₹{FACILITY_PRICE}</span>
                    </div>
                  )}

                  <div className="flex justify-between pt-3 border-t border-slate-200 text-slate-600 font-medium">
                    <span className="text-emerald-700 font-semibold">Annual Billing (2 mos free)</span>
                    <span className="font-extrabold text-[#635BFF]">₹{annualTotal.toLocaleString('en-IN')} / year</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handleStartTrial}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#635BFF] hover:bg-[#5249E0] text-white font-semibold text-xs shadow-md shadow-purple-500/20 transition-all cursor-pointer"
                >
                  <span>Start 60-Day Free Trial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <p className="text-center text-[11px] text-slate-400">
                  No credit card required • Instant setup
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
