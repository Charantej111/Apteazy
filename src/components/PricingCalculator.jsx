import React, { useState } from 'react';
import { Shield, Wrench, MessageSquare, ArrowRight, BarChart3 } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function PricingCalculator() {
  const [flats, setFlats] = useState(50);
  const [hasSecurity, setHasSecurity] = useState(true);
  const [hasFacility, setHasFacility] = useState(true);
  const [hasWhatsapp, setHasWhatsapp] = useState(false);

  const CORE_BASE_PRICE = 299;
  const SECURITY_PRICE = 99;
  const FACILITY_PRICE = 49;
  const WHATSAPP_PRICE = 49;

  const monthlyTotal =
    CORE_BASE_PRICE +
    (hasSecurity ? SECURITY_PRICE : 0) +
    (hasFacility ? FACILITY_PRICE : 0) +
    (hasWhatsapp ? WHATSAPP_PRICE : 0);

  const annualTotal = monthlyTotal * 10;
  const perFlatMonthly = (monthlyTotal / flats).toFixed(2);

  return (
    <section id="calculator" className="py-12 md:py-16 bg-[#FAFAFC] overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        
        {/* Main Calculator Card */}
        <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-[#E5E7EB] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Controls */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h3 className="font-display text-2xl font-bold text-[#0F172A] tracking-tight">
                  Pricing Calculator
                </h3>
                <p className="text-[13px] text-slate-500 mt-0.5">
                  Calculate estimated monthly plan based on flats and optional modules.
                </p>
              </div>

              {/* Slider Block */}
              <div className="bg-[#F8F9FA] rounded-[18px] p-4 border border-[#E5E7EB]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#635BFF]" />
                    <span className="text-xs font-bold text-slate-800">Flats / Units</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4 text-[#635BFF]" />
                    <span className="font-display text-xl font-extrabold text-[#635BFF]">
                      {flats}
                    </span>
                  </div>
                </div>

                <input
                  type="range"
                  min="10"
                  max="300"
                  step="5"
                  value={flats}
                  onChange={(e) => setFlats(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-[#635BFF]"
                />

                <div className="flex justify-between text-[11px] font-medium text-slate-400 mt-1.5">
                  <span>10 Flats</span>
                  <span>100 Flats</span>
                  <span>200 Flats</span>
                  <span>300+ Flats</span>
                </div>
              </div>

              {/* Module Toggles */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Select Modules
                </div>

                {/* Core (Included) */}
                <div className="flex items-center justify-between p-3 rounded-[14px] bg-purple-50/50 border border-purple-100">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md bg-[#635BFF] text-white flex items-center justify-center font-bold text-[11px]">
                      Core
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Core Platform & Accounts</div>
                      <div className="text-[10.5px] text-slate-500">Invoicing, directory & notice board</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#635BFF] bg-white px-2.5 py-0.5 rounded-full border border-purple-200">
                    ₹299/mo Included
                  </span>
                </div>

                {/* Security Access */}
                <div
                  onClick={() => setHasSecurity(!hasSecurity)}
                  className={`flex items-center justify-between p-3 rounded-[14px] border cursor-pointer transition-all duration-150 ${
                    hasSecurity
                      ? 'bg-blue-50/40 border-blue-200'
                      : 'bg-slate-50/50 border-slate-200 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center ${
                      hasSecurity ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-500'
                    }`}>
                      <Shield className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Security Module (Access)</div>
                      <div className="text-[10.5px] text-slate-500">Guard app, visitor & delivery logs</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-600">+₹99/mo</span>
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
                  className={`flex items-center justify-between p-3 rounded-[14px] border cursor-pointer transition-all duration-150 ${
                    hasFacility
                      ? 'bg-emerald-50/40 border-emerald-200'
                      : 'bg-slate-50/50 border-slate-200 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center ${
                      hasFacility ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'
                    }`}>
                      <Wrench className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Facility Module</div>
                      <div className="text-[10.5px] text-slate-500">Clubhouse bookings & ticket tracker</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-600">+₹49/mo</span>
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
                  className={`flex items-center justify-between p-3 rounded-[14px] border cursor-pointer transition-all duration-150 ${
                    hasWhatsapp
                      ? 'bg-amber-50/40 border-amber-200'
                      : 'bg-slate-50/50 border-slate-200 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center ${
                      hasWhatsapp ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-500'
                    }`}>
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">WhatsApp & SMS Notifications</div>
                      <div className="text-[10.5px] text-slate-500">Defaulter payment link alerts</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-600">+₹49/mo</span>
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

            {/* Right Column: Clean Price Output Box */}
            <div className="lg:col-span-5 bg-[#FAFAFC] rounded-[20px] p-6 border border-[#E5E7EB] flex flex-col justify-between">
              
              <div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Estimated Monthly Total
                </div>

                <div className="flex items-baseline gap-1 my-2">
                  <span className="font-display text-4xl font-extrabold text-[#0F172A] tracking-tight">
                    ₹{monthlyTotal}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">/ month</span>
                </div>

                <div className="text-xs text-emerald-600 font-semibold mb-4">
                  ~₹{perFlatMonthly} per flat / month
                </div>

                {/* Line items */}
                <div className="space-y-2 pt-3 border-t border-slate-200/80 text-xs text-slate-600 mb-5">
                  <div className="flex justify-between">
                    <span>Core Platform</span>
                    <span className="font-bold text-slate-900">₹{CORE_BASE_PRICE}</span>
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
                  <div className="flex justify-between pt-2 border-t border-slate-200/60 text-slate-500 font-medium">
                    <span>Annual Total (2 mos FREE)</span>
                    <span className="font-bold text-[#047857]">₹{annualTotal} / year</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="space-y-1.5 pt-1">
                <button
                  onClick={() => openWhatsApp('Hi, I want to start a free trial of Apteazy for my apartment')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#047857] hover:bg-[#03543F] text-white font-semibold text-xs shadow-sm transition-all duration-150 cursor-pointer"
                >
                  <span>Start 30-Day Free Trial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="text-center text-[10.5px] text-slate-400">
                  No credit card required • Instant setup
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Enterprise Strip */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            <span className="text-slate-500">
              Need custom hardware integration or have 300+ flats?
            </span>
            <button
              onClick={() => openWhatsApp('Hi, I want to start a free trial of Apteazy for my apartment')}
              className="font-bold text-[#047857] hover:text-emerald-900 flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0"
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
