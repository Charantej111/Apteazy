import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText, CheckCircle2, Building, Scale, Lock, ArrowLeft, ExternalLink, Printer, Download, FileDown, Sparkles } from 'lucide-react';
import { exportLegalPdf } from '../utils/exportLegalPdf';

export default function LegalModal({ isOpen, onClose, defaultTab = 'privacy' }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab);
    }
  }, [defaultTab]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative w-full max-w-4xl bg-white rounded-3xl sm:rounded-[32px] shadow-2xl border border-slate-200 my-auto flex flex-col max-h-[90vh] overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-slate-100 bg-[#FAF9FD]/80 backdrop-blur-sm flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-100 text-[#635BFF] flex items-center justify-center font-bold">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-extrabold text-[#0F172A]">
                  Apteazy Legal & Compliance Center
                </h3>
                <p className="text-[11.5px] text-slate-500 font-medium">
                  Last Updated: August 25, 2026 • Compliant with DPDP Act 2023 & IT Act 2000
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => exportLegalPdf(activeTab)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all shadow-xs cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" />
                <span>Download PDF</span>
              </button>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-200 bg-slate-50/70 px-6 sm:px-8 gap-2 sm:gap-4 overflow-x-auto flex-shrink-0">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${activeTab === 'privacy'
                  ? 'border-[#635BFF] text-[#635BFF]'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={() => setActiveTab('terms')}
              className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${activeTab === 'terms'
                  ? 'border-[#635BFF] text-[#635BFF]'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
            >
              <FileText className="w-4 h-4" />
              <span>Terms of Service</span>
            </button>

            <button
              onClick={() => setActiveTab('compliance')}
              className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${activeTab === 'compliance'
                  ? 'border-[#635BFF] text-[#635BFF]'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
            >
              <Building className="w-4 h-4" />
              <span>RWA & DPDP Compliance</span>
            </button>
          </div>

          {/* Document Content Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 text-slate-700 text-sm leading-relaxed space-y-8 select-text">

            {/* ===================== TAB 1: PRIVACY POLICY ===================== */}
            {activeTab === 'privacy' && (
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="bg-purple-50/70 border border-purple-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-xs text-purple-900 leading-relaxed">
                  <Lock className="w-5 h-5 text-[#635BFF] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block text-sm mb-0.5 text-[#0F172A]">Privacy Summary & Commitment:</strong>
                    Apteazy does not sell, rent, or trade resident or visitor information to advertisers or brokers. Your apartment society’s Resident Welfare Association (RWA) remains the statutory <strong>Data Fiduciary</strong>, and Apteazy acts as the dedicated <strong>Data Processor</strong> with 256-bit AES encryption and ISO 27001 certified cloud infrastructure in India.
                  </div>
                </div>

                <section className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">1. Introduction and Governance</h4>
                  <p>
                    This Privacy Policy (“Policy”) explains how <strong>Apteazy</strong> (operated by Ofzen Technologies, hereinafter referred to as “Apteazy”, “we”, “our”, or “us”) collects, uses, processes, stores, and protects personal data when housing societies, residents, committee members, visitors, and facility staff interact with our web and mobile applications (collectively, the “Platform”).
                  </p>
                  <p>
                    This Policy is established in strict adherence to India’s <strong>Digital Personal Data Protection Act, 2023 (“DPDP Act”)</strong>, the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (“SPDI Rules”).
                  </p>
                </section>

                <section className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">2. Fiduciary Relationship & Roles</h4>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Data Fiduciary:</strong> The Resident Welfare Association (RWA), Cooperative Housing Society (CHS), or Apartment Owners Association (AOA) determines the purpose and means of collecting resident and gate records.
                    </li>
                    <li>
                      <strong>Data Processor:</strong> Apteazy processes records strictly on behalf of and according to instructions given by the Data Fiduciary to facilitate society accounting, billing, gate access, and community governance.
                    </li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">3. Categories of Information Collected</h4>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block font-semibold mb-1">A. Resident & Owner Data:</strong>
                      Full name, apartment unit number, verified mobile number, email address, ownership or tenancy status, vehicle registration identifiers, and emergency contact details provided during society onboarding.
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block font-semibold mb-1">B. Gate & Visitor Records:</strong>
                      Guest name, entry/exit timestamp, host flat number, delivery service provider identifier, and cab/vehicle numbers. <em>(Note: Societies may configure Name-Only guest verification without mandating phone numbers)</em>.
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block font-semibold mb-1">C. Financial & Maintenance Records:</strong>
                      Invoiced maintenance dues, payment transaction IDs, UPI reference numbers, receipt generation timestamps, and payment statuses. <strong>We do not store debit/credit card numbers or UPI PINs</strong>; payments are tokenized and processed via RBI-authorized, PCI-DSS compliant payment gateways.
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block font-semibold mb-1">D. Helpdesk, Facilities & Voting Data:</strong>
                      Maintenance complaint tickets, uploaded photos of facility repairs, clubhouse booking requests, and digital voting poll choices.
                    </div>
                  </div>
                </section>

                <section className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">4. Purpose & Lawful Basis of Processing</h4>
                  <p>We process personal data solely for legitimate societal functions, including:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li>Automating monthly/quarterly maintenance bill generation, ledger sync, and automated digital receipts.</li>
                    <li>Providing 1-tap gate security pre-approvals and staff check-in logs.</li>
                    <li>Enabling resident intercom calls with number masking (protecting phone numbers between neighbors and guards).</li>
                    <li>Publishing official digital notice board announcements and statutory AGM notifications.</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">5. Data Retention & Auto-Purge Cycles</h4>
                  <p>
                    Apteazy adheres to strict data minimization principles:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li><strong>Visitor & Gate Logs:</strong> Automatically purged on a rolling 180-day cycle, or the customized retention schedule mandated by the society’s RWA.</li>
                    <li><strong>Resident Account Data:</strong> Maintained for the duration of the resident's stay; deleted or de-linked upon verified move-out/unit handover.</li>
                    <li><strong>Financial Audit Logs:</strong> Maintained for statutory audit periods (typically 7 to 8 financial years) as mandated under State Cooperative Societies Acts and Income Tax laws.</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">6. Resident Rights under the DPDP Act 2023</h4>
                  <p>Every resident whose data is processed on Apteazy has the legal right to:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <strong>Right to Access:</strong> View a summary of all personal data held about you in the app.
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <strong>Right to Correction:</strong> Update outdated vehicle, phone, or tenant details.
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <strong>Right to Erasure:</strong> Request deletion of personal records upon relocation or tenancy end.
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <strong>Right of Grievance Redressal:</strong> Direct escalation to our designated Grievance Officer.
                    </div>
                  </div>
                </section>

                <section className="space-y-3 pt-2">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">7. Grievance Officer & Contact</h4>
                  <p>
                    For inquiries, data requests, or compliance concerns under the DPDP Act, contact our designated Grievance Redressal Officer:
                  </p>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-1 text-slate-800">
                    <p><strong>Name:</strong> Grievance Redressal Officer, Apteazy</p>
                    <p><strong>Email:</strong> privacy@ofzen.in | support@apteazy.ofzen.in</p>
                    <p><strong>Address:</strong> Ofzen Technologies, Kakinada, India</p>
                    <p><strong>Response SLA:</strong> Statutory acknowledgment within 24 hours, resolution within 15 business days.</p>
                  </div>
                </section>
              </div>
            )}

            {/* ===================== TAB 2: TERMS OF SERVICE ===================== */}
            {activeTab === 'terms' && (
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-xs text-blue-900 leading-relaxed">
                  <Scale className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block text-sm mb-0.5 text-[#0F172A]">Contract Summary:</strong>
                    These Terms govern the SaaS subscription between your Housing Society (RWA/Management Committee) and Apteazy. You enjoy a 60-day unconditional free trial, 100% society data ownership, zero platform late fee surcharges on UPI, and 99.5% service uptime commitment.
                  </div>
                </div>

                <section className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">1. Agreement and Parties</h4>
                  <p>
                    These Terms of Service (“Terms”) constitute a legally binding agreement between <strong>Ofzen Technologies</strong> (“Apteazy”, “Company”, “we”) and the <strong>Customer</strong> (the Housing Society, Resident Welfare Association, or Apartment Management Committee executing this agreement) as well as authorized individual users (Residents, Tenants, Security Guards, and Administrators).
                  </p>
                </section>

                <section className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">2. License & Service Scope</h4>
                  <p>
                    Apteazy grants the Society a non-exclusive, non-transferable, revocable license to access and use the Apteazy Cloud ERP platform, Resident Mobile App, and Gate Security Application for community operations and administration.
                  </p>
                </section>

                <section className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">3. 60-Day Free Trial & Subscription Billing</h4>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>60-Day Free Trial:</strong> All newly onboarded housing societies are entitled to a full-featured 60-day free trial. No credit card is required to begin.
                    </li>
                    <li>
                      <strong>Progressive Slab Pricing:</strong> Post-trial subscriptions are calculated progressively per bracket:
                      <ul className="list-circle pl-5 mt-1 space-y-1 text-xs text-slate-600">
                        <li>• First 20 flats: ₹15 / flat / month</li>
                        <li>• Flats 21–50: ₹12 / additional flat / month</li>
                        <li>• Flats 51–100: ₹10 / additional flat / month</li>
                        <li>• Flats 101+: ₹8 / additional flat / month</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Annual Billing Benefit:</strong> Annual billing plans include 2 months free subscription discount (billed at <code>10 × monthly total</code>).
                    </li>
                    <li>
                      <strong>Modular Add-ons:</strong> Optional Gate Security (+₹99/mo) and Facility Management (+₹49/mo) can be toggled on or off at billing cycle renewals.
                    </li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">4. Society Dues & Payment Gateway Processing</h4>
                  <p>
                    Apteazy enables automated online payment collection via authorized payment aggregators (e.g., Razorpay, Cashfree) complying with Reserve Bank of India (RBI) directions:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li><strong>Direct Settlement:</strong> Resident payments are settled directly into the RWA’s nodal/designated society bank account. Apteazy does not hold or pool society maintenance funds.</li>
                    <li><strong>0% UPI Collections:</strong> Standard UPI payments incur zero platform transaction surcharges.</li>
                    <li><strong>Audit Ledger:</strong> Every successful, failed, or refunded transaction is recorded in real-time on the society’s exportable double-entry ledger.</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">5. Society Data Ownership & Portability</h4>
                  <p>
                    <strong>The Housing Society retains 100% exclusive ownership of all resident, financial, and society records.</strong>
                  </p>
                  <p>
                    Upon request or upon contract termination, the Society has the unconditional right to export all historical records, ledgers, and resident directories in standard Tally/CSV/Excel formats within 30 business days.
                  </p>
                </section>

                <section className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">6. Service Level Agreement (SLA) & Uptime</h4>
                  <p>
                    Apteazy targets a minimum <strong>99.5% service uptime</strong> for core platform capabilities (including gate check-in, maintenance invoicing, and resident directory access), excluding scheduled maintenance windows notified in advance.
                  </p>
                </section>

                <section className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">7. Limitation of Liability</h4>
                  <p>
                    Apteazy provides the digital operating system for community coordination. To the maximum extent permitted by applicable law, Apteazy shall not be liable for internal disputes between residents and management committees, physical security incidents at gates, or downstream bank server outages. Total aggregate liability is limited to the subscription fees paid by the society in the twelve (12) months preceding the claim.
                  </p>
                </section>

                <section className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">8. Governing Law & Dispute Resolution</h4>
                  <p>
                    These Terms are governed by the laws of India. Any disputes arising out of or related to this agreement shall be submitted to binding arbitration in accordance with the Arbitration and Conciliation Act, 1996, with courts in Hyderabad / Bengaluru possessing exclusive jurisdiction.
                  </p>
                </section>
              </div>
            )}

            {/* ===================== TAB 3: RWA COMPLIANCE ===================== */}
            {activeTab === 'compliance' && (
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-xs text-emerald-900 leading-relaxed">
                  <Building className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block text-sm mb-0.5 text-[#0F172A]">RWA Governance & Statutory Standards:</strong>
                    Apteazy is built specifically for Indian Housing Societies, Apartment Owners Associations (AOA), and RWAs to ensure 100% compliance with State Apartment Ownership Acts, Cooperative Societies Bye-laws, and GST invoicing standards.
                  </div>
                </div>

                <section className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">1. State Cooperative Society Act & Bye-law Compliance</h4>
                  <p>
                    Apteazy’s accounting and governance modules adhere to statutory bookkeeping rules outlined in:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li>Maharashtra Co-operative Societies Act & Model Bye-Laws</li>
                    <li>Karnataka Apartment Ownership Act (KAOA) & KOA Rules</li>
                    <li>Telangana / Andhra Pradesh Apartment (Promotion of Construction and Ownership) Acts</li>
                    <li>Delhi Cooperative Societies Act & RWA Model Guidelines</li>
                    <li>Tamil Nadu Apartment Ownership Act</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">2. Audit-Ready Society Accounting</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block mb-1">Double-Entry Ledger:</strong>
                      Standardized chart of accounts for maintenance funds, sinking funds, repair reserves, and cultural funds.
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block mb-1">GST Invoicing Rules:</strong>
                      Automatic calculation and segregation of GST for monthly maintenance billing exceeding statutory threshold limits (e.g. ₹7,500/month per member).
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block mb-1">Defaulter Transparency:</strong>
                      Automated non-judgmental WhatsApp/Email reminders and itemized interest on overdue balances strictly according to society bye-law caps.
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block mb-1">Tally & ERP Export:</strong>
                      Single-click export format compatible with chartered accountant audit requirements.
                    </div>
                  </div>
                </section>

                <section className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">3. Digital Quorum & Polling Integrity</h4>
                  <p>
                    For Annual General Meetings (AGM) and Extraordinary General Meetings (EGM), Apteazy provides tamper-proof digital voting trails with 1-unit-1-vote verification to maintain statutory democratic records.
                  </p>
                </section>

                <section className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">4. ISO 27001 & Data Security Standards</h4>
                  <p>
                    Apteazy’s infrastructure is hosted on ISO 27001, SOC 2 Type II, and PCI-DSS Level 1 certified data centers situated within India. All resident communications and gate records are protected with 256-bit SSL encryption and automated offsite backups.
                  </p>
                </section>
              </div>
            )}

          </div>

          {/* Footer Bar */}
          <div className="px-6 sm:px-8 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between flex-shrink-0">
            <span className="text-xs text-slate-500">
              Questions? Reach us at <a href="mailto:privacy@ofzen.in" className="text-[#635BFF] underline">privacy@ofzen.in</a>
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
