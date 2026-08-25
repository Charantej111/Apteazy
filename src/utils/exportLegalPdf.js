/**
 * Apteazy Official Legal Document PDF Generator
 * Renders publication-grade legal documents with official Apteazy corporate letterhead,
 * document reference numbers, metadata blocks, and digital sign-off seals for export to PDF.
 */

export function exportLegalPdf(documentType = 'privacy') {
  const titles = {
    privacy: 'Privacy Policy (DPDP Act 2023 & IT Act 2000 Compliant)',
    terms: 'Terms of Service (Housing Society SaaS Agreement)',
    compliance: 'RWA & Statutory Compliance Charter',
    all: 'Complete Legal, Privacy & Compliance Master Document',
  };

  const docRefs = {
    privacy: 'APTZ/POL/2026/DPDP-v2.4',
    terms: 'APTZ/TOS/2026/SAAS-v3.1',
    compliance: 'APTZ/RWA/2026/COMP-v2.0',
    all: 'APTZ/LEGAL/2026/MASTER-v3.0',
  };

  const docTitle = titles[documentType] || titles.privacy;
  const docRef = docRefs[documentType] || docRefs.privacy;
  const issueDate = 'August 25, 2026';
  const effectiveDate = 'August 25, 2026 (Annual Review Cycle 2026–2027)';

  // Build the specific document body
  let bodyContent = '';

  if (documentType === 'privacy' || documentType === 'all') {
    bodyContent += `
      <div class="legal-section">
        <div class="section-badge">SECTION I: DATA PROTECTION & PRIVACY</div>
        <h2>1. Statutory Scope & Governance Framework</h2>
        <p>
          This Privacy Policy (“Policy”) sets forth the principles governing the collection, processing, transfer, storage, and protection of personal data by <strong>Apteazy</strong> (operated by <strong>Ofzen Technologies Private Limited</strong>, hereinafter referred to as “Apteazy”, “Company”, “we”, or “us”).
        </p>
        <p>
          This document is enacted under and complies strictly with the <strong>Digital Personal Data Protection Act, 2023 (“DPDP Act”)</strong>, the Information Technology Act, 2000 (as amended), and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (“SPDI Rules”).
        </p>

        <h2>2. Data Fiduciary vs. Data Processor Structure</h2>
        <div class="callout-box">
          <strong>Legal Distinction of Roles:</strong>
          <ul>
            <li><strong>Data Fiduciary:</strong> The Resident Welfare Association (RWA), Cooperative Housing Society (CHS), or Apartment Owners Association (AOA) determines the operational purposes of processing resident, tenant, and gate entry records.</li>
            <li><strong>Data Processor:</strong> Apteazy functions strictly as a contracted Data Processor executing software functions on behalf of the Data Fiduciary. Apteazy never assumes data ownership and never commercializes personal data.</li>
          </ul>
        </div>

        <h2>3. Categories of Personal Data Processed</h2>
        <table class="legal-table">
          <thead>
            <tr>
              <th style="width: 28%;">Data Category</th>
              <th style="width: 42%;">Specific Data Elements</th>
              <th style="width: 30%;">Statutory Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Resident & Owner Records</strong></td>
              <td>Full Name, Apartment/Flat Number, Mobile Number, Email Address, Ownership/Tenancy status, Emergency Contacts, Vehicle Registration Numbers.</td>
              <td>Society directory, maintenance invoicing, automated receipting, digital notice delivery.</td>
            </tr>
            <tr>
              <td><strong>Gate & Visitor Logs</strong></td>
              <td>Visitor Name, Entry/Exit Timestamp, Host Flat, Delivery Service Company, Vehicle/Cab Number. (Optional Name-Only mode for guests).</td>
              <td>Perimeter gate security, resident 1-tap pre-approvals, delivery tracking.</td>
            </tr>
            <tr>
              <td><strong>Financial & Billing Data</strong></td>
              <td>Invoiced Dues, GST Breakdown, Transaction Reference IDs, Payment Status, Bank Settlement Timestamps. <em>(Zero storage of Card Numbers or UPI PINs)</em>.</td>
              <td>Statutory double-entry ledger bookkeeping, RBI-compliant payment reconciliation.</td>
            </tr>
            <tr>
              <td><strong>Helpdesk & Facility Data</strong></td>
              <td>Complaint tickets, facility photos, clubhouse reservations, digital AGM/EGM voting logs.</td>
              <td>Community maintenance tracking and democratic AGM quorum compliance.</td>
            </tr>
          </tbody>
        </table>

        <h2>4. Non-Monetization & Zero Third-Party Advertising</h2>
        <p>
          Apteazy guarantees that it does not sell, lease, rent, trade, or monetize personal data or visitor records to third-party data brokers, advertising networks, or lead generators. Data access is governed strictly by Role-Based Access Control (RBAC) configured by the Society Management Committee.
        </p>

        <h2>5. Data Retention & Mandatory Auto-Purge Cycles</h2>
        <ul>
          <li><strong>Visitor & Security Logs:</strong> Automatically permanently purged from active production servers on a rolling <strong>180-day cycle</strong> (or custom retention period configured by the RWA).</li>
          <li><strong>Resident Profile Records:</strong> Maintained for the tenure of residency; permanently deleted or de-linked within 30 days upon verified tenancy completion or unit sale.</li>
          <li><strong>Financial Audit Ledgers:</strong> Preserved for statutory retention periods mandated under State Cooperative Societies Acts and the Income Tax Act (7 to 8 financial years).</li>
        </ul>

        <h2>6. Data Principal Rights (Under DPDP Act 2023)</h2>
        <p>Residents and users retain comprehensive statutory rights:</p>
        <ul>
          <li><strong>Right to Access & Summary:</strong> Right to obtain a summary of personal data processed by the platform.</li>
          <li><strong>Right to Correction & Updating:</strong> Right to modify inaccurate or incomplete profile or vehicle data.</li>
          <li><strong>Right to Erasure (Right to be Forgotten):</strong> Right to request deletion of personal data subject to statutory society obligations.</li>
          <li><strong>Right of Grievance Redressal:</strong> Direct statutory recourse to Apteazy’s designated Grievance Redressal Officer.</li>
        </ul>

        <h2>7. Grievance Redressal & Contact Officer</h2>
        <div class="officer-box">
          <p><strong>Designated Grievance Redressal Officer:</strong> Data Protection & Compliance Officer</p>
          <p><strong>Entity:</strong> Ofzen Technologies Private Limited (Apteazy)</p>
          <p><strong>Official Contact Email:</strong> privacy@ofzen.in | support@apteazy.ofzen.in</p>
          <p><strong>Registered Address:</strong> Tech Park Hub, HITEC City, Hyderabad / Bengaluru, Republic of India</p>
          <p><strong>Statutory SLA:</strong> Acknowledgment within 24 hours; complete resolution within 15 business days.</p>
        </div>
      </div>
    `;
  }

  if (documentType === 'terms' || documentType === 'all') {
    bodyContent += `
      <div class="legal-section ${documentType === 'all' ? 'page-break' : ''}">
        <div class="section-badge">SECTION II: TERMS OF SERVICE & SAAS AGREEMENT</div>
        <h2>1. Contractual Parties & Scope</h2>
        <p>
          These Terms of Service (“Agreement”) constitute a binding legal agreement between <strong>Ofzen Technologies Private Limited</strong> (“Apteazy”) and the <strong>Customer</strong> (the Resident Welfare Association, Cooperative Housing Society, or Apartment Management Committee) and authorized End Users.
        </p>

        <h2>2. Grant of SaaS License</h2>
        <p>
          Apteazy grants the Society a non-exclusive, non-transferable, revocable license to access and utilize the Apteazy Cloud ERP platform, Resident Mobile App (iOS/Android), and Gatekeeper Security Module for the administration of the designated residential complex.
        </p>

        <h2>3. 60-Day Free Trial & Subscription Pricing</h2>
        <ul>
          <li><strong>60-Day Unconditional Free Trial:</strong> All newly registered housing societies receive an initial 60-day full-featured free trial period without any advance payment or credit card obligation.</li>
          <li><strong>Progressive Slab Pricing Structure:</strong>
            <ul>
              <li>• Tier 1 (1–20 flats): ₹15 per flat / month (max ₹300/mo)</li>
              <li>• Tier 2 (21–50 flats): ₹12 per additional flat / month</li>
              <li>• Tier 3 (51–100 flats): ₹10 per additional flat / month</li>
              <li>• Tier 4 (101+ flats): ₹8 per additional flat / month</li>
            </ul>
          </li>
          <li><strong>Annual Commitment Incentive:</strong> Annual billing plans include 2 months free subscription discount (calculated at <code>10 × Monthly Total</code>).</li>
          <li><strong>Optional Modular Add-Ons:</strong> Gate Security (+₹99/mo) and Facility Management (+₹49/mo) may be enabled or disabled at billing renewals.</li>
        </ul>

        <h2>4. Dues Collection, 0% UPI & RBI Compliance</h2>
        <p>
          Online maintenance dues payments are processed through RBI-authorized payment aggregators. Funds are settled directly into the designated bank account of the Housing Society. Apteazy does not hold, pool, or escrow resident maintenance funds. Standard UPI maintenance collections carry a 0% platform transaction surcharge.
        </p>

        <h2>5. 100% Society Data Ownership & Portability</h2>
        <p>
          The Housing Society retains exclusive, perpetual ownership of all financial ledgers, member registries, and society records. The Society reserves the unconditional right to export complete historical records in standard Tally/CSV/Excel format at any time.
        </p>

        <h2>6. Service Level Agreement (SLA) & Uptime Guarantee</h2>
        <p>
          Apteazy guarantees a <strong>99.5% service availability</strong> for core billing, gate check-in, and resident communication infrastructure, excluding notified scheduled maintenance.
        </p>

        <h2>7. Limitation of Liability & Governing Law</h2>
        <p>
          This Agreement is governed by the substantive laws of the Republic of India. Any dispute arising hereunder shall be resolved through binding arbitration pursuant to the Arbitration and Conciliation Act, 1996, with exclusive seat of arbitration in Hyderabad / Bengaluru. Aggregate liability of Apteazy shall not exceed subscription fees paid by the customer in the preceding twelve (12) months.
        </p>
      </div>
    `;
  }

  if (documentType === 'compliance' || documentType === 'all') {
    bodyContent += `
      <div class="legal-section ${documentType === 'all' ? 'page-break' : ''}">
        <div class="section-badge">SECTION III: RWA & STATUTORY COMPLIANCE CHARTER</div>
        <h2>1. Compliance with State Apartment Ownership & Society Acts</h2>
        <p>
          Apteazy is engineered to fulfill statutory governance and financial requirements across major Indian state legislations, including:
        </p>
        <ul>
          <li>Maharashtra Co-operative Societies Act, 1960 and Model Bye-laws</li>
          <li>Karnataka Apartment Ownership Act, 1972 (KAOA) & KOA Rules</li>
          <li>Telangana & Andhra Pradesh Apartments (Promotion of Construction and Ownership) Acts</li>
          <li>Delhi Cooperative Societies Act, 2003 & RWA Guidelines</li>
          <li>Tamil Nadu Apartment Ownership Act</li>
        </ul>

        <h2>2. Audit-Ready Bookkeeping & GST Invoicing Rules</h2>
        <p>
          The platform enforces standardized double-entry accounting with separate chart of accounts for General Maintenance, Sinking Reserve Funds, and Repair Contingencies. Automatic GST threshold segregation is applied for maintenance dues exceeding statutory limits (e.g. ₹7,500/month per member limit under CBIC circulars).
        </p>

        <h2>3. Cloud Infrastructure & Security Standards</h2>
        <p>
          Data is hosted on ISO 27001:2022, SOC 2 Type II, and PCI-DSS Level 1 certified Tier-4 cloud infrastructure located within the sovereign territory of the Republic of India (Data Localization Compliance). All data is secured with AES-256 encryption at rest and TLS 1.3 encryption in transit.
        </p>
      </div>
    `;
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${docTitle} — Apteazy Official Legal Document</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
      <style>
        @page {
          size: A4 portrait;
          margin: 18mm 16mm 20mm 16mm;
          @bottom-right {
            content: "Page " counter(page);
            font-size: 8pt;
            color: #64748b;
          }
        }
        
        * {
          box-sizing: border-box;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        body {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #0f172a;
          background: #ffffff;
          margin: 0;
          padding: 24px;
          font-size: 9.5pt;
          line-height: 1.55;
        }

        /* LETTERHEAD HEADER */
        .letterhead {
          border-bottom: 2.5px solid #635BFF;
          padding-bottom: 14px;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-block {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-logo {
          height: 38px;
          width: auto;
        }

        .brand-title {
          font-size: 16pt;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.02em;
          margin: 0;
          line-height: 1.1;
        }

        .brand-subtitle {
          font-size: 8pt;
          color: #64748b;
          font-weight: 600;
          margin-top: 2px;
        }

        .doc-meta {
          text-align: right;
          font-size: 8pt;
          color: #475569;
        }

        .doc-meta strong {
          color: #0f172a;
        }

        .doc-ref-badge {
          display: inline-block;
          background: #F4F0FF;
          color: #635BFF;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
          font-size: 7.5pt;
          margin-bottom: 4px;
          border: 1px solid #E8DEFF;
        }

        /* DOCUMENT TITLE BANNER */
        .doc-banner {
          background: #FAF8FF;
          border: 1px solid #E9E4F8;
          border-left: 4px solid #635BFF;
          border-radius: 8px;
          padding: 12px 16px;
          margin-bottom: 18px;
        }

        .doc-banner h1 {
          font-size: 13pt;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 4px 0;
          line-height: 1.25;
        }

        .doc-banner-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          font-size: 7.5pt;
          color: #64748b;
          margin-top: 6px;
          padding-top: 6px;
          border-top: 1px solid #ECE7F8;
        }

        .doc-banner-grid span strong {
          color: #1e293b;
        }

        /* CONTENT STYLES */
        .legal-section {
          margin-bottom: 24px;
        }

        .page-break {
          page-break-before: always;
          padding-top: 16px;
        }

        .section-badge {
          display: inline-block;
          font-size: 7pt;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: #635BFF;
          background: #F4F0FF;
          padding: 2px 7px;
          border-radius: 4px;
          margin-bottom: 6px;
        }

        h2 {
          font-size: 10.5pt;
          font-weight: 800;
          color: #0f172a;
          margin: 14px 0 6px 0;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 3px;
        }

        p {
          margin: 0 0 8px 0;
          color: #334155;
          text-align: justify;
        }

        ul {
          margin: 0 0 10px 0;
          padding-left: 18px;
          color: #334155;
        }

        li {
          margin-bottom: 4px;
        }

        /* TABLES */
        .legal-table {
          width: 100%;
          border-collapse: collapse;
          margin: 10px 0 14px 0;
          font-size: 8pt;
        }

        .legal-table th, .legal-table td {
          border: 1px solid #cbd5e1;
          padding: 6px 8px;
          text-align: left;
          vertical-align: top;
        }

        .legal-table th {
          background-color: #F8F9FC;
          font-weight: 700;
          color: #0f172a;
        }

        /* CALLOUT & OFFICER BOX */
        .callout-box {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-left: 3px solid #3B82F6;
          border-radius: 6px;
          padding: 8px 12px;
          margin: 10px 0;
          font-size: 8.5pt;
        }

        .officer-box {
          background: #FAF9FD;
          border: 1px solid #E8E5F3;
          border-radius: 8px;
          padding: 10px 14px;
          margin-top: 10px;
          font-size: 8pt;
          line-height: 1.45;
        }

        .officer-box p {
          margin: 0 0 3px 0;
        }

        /* SIGNATURE & STAMP BLOCK */
        .sign-block {
          margin-top: 24px;
          padding-top: 14px;
          border-top: 1.5px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          page-break-inside: avoid;
        }

        .sign-col {
          width: 46%;
          font-size: 8pt;
          color: #475569;
        }

        .sign-line {
          border-bottom: 1px dashed #94a3b8;
          height: 36px;
          margin-bottom: 6px;
        }

        .seal-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: #F4F0FF;
          border: 1px solid #635BFF;
          border-radius: 8px;
          color: #635BFF;
          font-weight: 800;
          font-size: 7.5pt;
          text-transform: uppercase;
        }

        /* FOOTER */
        .letterhead-footer {
          margin-top: 20px;
          padding-top: 10px;
          border-top: 1px solid #E2E8F0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 7pt;
          color: #94a3b8;
        }
      </style>
    </head>
    <body>
      <!-- LETTERHEAD -->
      <div class="letterhead">
        <div class="brand-block">
          <img src="/assets/logo.png" alt="Apteazy" class="brand-logo" onerror="this.style.display='none'">
          <div>
            <h1 class="brand-title">Apteazy</h1>
            <div class="brand-subtitle">The Digital Operating System for Housing Societies & Gated Communities</div>
          </div>
        </div>
        <div class="doc-meta">
          <div class="doc-ref-badge">${docRef}</div>
          <div>Entity: <strong>Ofzen Technologies Pvt. Ltd.</strong></div>
          <div>Jurisdiction: <strong>Republic of India</strong></div>
        </div>
      </div>

      <!-- DOCUMENT HEADER BANNER -->
      <div class="doc-banner">
        <h1>${docTitle}</h1>
        <div class="doc-banner-grid">
          <span><strong>Effective Date:</strong> ${effectiveDate}</span>
          <span><strong>Statutory Law:</strong> DPDP Act 2023 / IT Act 2000</span>
          <span><strong>Document Ref:</strong> ${docRef}</span>
        </div>
      </div>

      <!-- BODY CONTENT -->
      ${bodyContent}

      <!-- SIGN OFF & CORPORATE STAMP -->
      <div class="sign-block">
        <div class="sign-col">
          <div class="seal-badge">
            ✓ Digitally Verified & DPDP 2023 Compliant
          </div>
          <p style="margin-top: 6px; font-size: 7.5pt; color: #64748b;">
            Issued under corporate seal of Ofzen Technologies Pvt. Ltd. for statutory society governance.
          </p>
        </div>
        <div class="sign-col" style="text-align: right;">
          <div class="sign-line"></div>
          <strong>Authorized Legal Signatory & Compliance Lead</strong>
          <div style="font-size: 7.5pt; color: #64748b;">Ofzen Technologies Private Limited (Apteazy)</div>
        </div>
      </div>

      <!-- FOOTER -->
      <div class="letterhead-footer">
        <span>© 2026 Ofzen Technologies Pvt. Ltd. All rights reserved. • Apteazy Society OS</span>
        <span>Ref ID: ${docRef} • Issued on ${issueDate}</span>
      </div>
    </body>
    </html>
  `;

  // Render into a clean hidden iframe and trigger print directly
  let iframe = document.getElementById('apteazy-pdf-iframe');
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.id = 'apteazy-pdf-iframe';
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);
  }

  const doc = iframe.contentWindow.document;
  doc.open();
  doc.write(htmlContent);
  doc.close();

  iframe.contentWindow.focus();
  setTimeout(() => {
    iframe.contentWindow.print();
  }, 350);
}
