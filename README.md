# Apteazy 🏢✨

> **"Run the apartment. Not the paperwork."**

Apteazy is a modern, high-performance web application and landing experience for **Apteazy** — the operating system for housing societies and gated communities. Built with React 18, Vite 6, Tailwind CSS, and Framer Motion, it features rich interactive components, ambient glassmorphism visuals, micro-animations, and dynamic calculators.

---

## 🚀 Key Features & Modules

- **✨ Dynamic Hero Section**: Character blur-in typography animations, video/3D visual stage, ambient backdrop glows, and interactive CTAs.
- **⚡ Problem vs. Solution Matrix**: Side-by-side comparative breakdown showcasing traditional society management pain points vs. Apteazy's automated digital workflow.
- **🏛️ The 4 Core Pillars**:
  - **Financial Management**: Automated maintenance billing, instant UPI collection, expense ledgers, and defaulter auto-reminders.
  - **Security & Gate Access**: 1-tap visitor pre-approvals, delivery/cab tracking, digital gate passes, and guard app integration.
  - **Community Engagement**: Digital notice board, online polling & voting, resident directory, and event updates.
  - **Facility & Helpdesk**: Amenity slot booking, photo complaint logging, real-time tracking, and vendor desk.
- **📱 App Showcase**: Interactive tabbed showcase highlighting resident and admin mobile application capabilities.
- **💎 Interactive Pricing & Cost Calculator**: Dynamic flat-count calculator that updates estimates in real-time based on society size (Starter, Professional, Enterprise).
- **🎁 Referral Banner & Rewards**: Dedicated referral program UI component.
- **🌐 Responsive Glassmorphism Design**: Fully responsive layout tailored for desktop, tablet, and mobile browsers with custom typography (`Playball`, `Playfair Display`, `Plus Jakarta Sans`).

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (*Playball*, *Playfair Display*, *Plus Jakarta Sans*)

---

## 📁 Project Structure

```text
Apteazy/
├── public/                  # Static assets (3D renders, video mockups, SVGs)
├── src/
│   ├── components/          # Modular UI components
│   │   ├── Navbar.jsx               # Header navigation & CTA
│   │   ├── Hero.jsx                 # Main Hero banner with Framer Motion text effects
│   │   ├── ProblemSolution.jsx      # Pain point comparison matrix
│   │   ├── FourPillars.jsx          # Feature pillars breakdown
│   │   ├── AppShowcase.jsx          # Interactive mobile app preview
│   │   ├── Pricing.jsx              # Pricing tier cards
│   │   ├── PricingCalculator.jsx    # Real-time flat pricing calculator
│   │   ├── ReferralBanner.jsx       # Referral promotion CTA
│   │   └── Footer.jsx               # Site footer & links
│   ├── App.jsx              # Main App entry layout
│   ├── main.jsx             # React DOM root render
│   └── index.css            # Global CSS, font imports, custom utility classes
├── index.html               # Main HTML entry point & SEO meta tags
├── tailwind.config.js       # Tailwind CSS theme & font extension configuration
├── postcss.config.js        # PostCSS build configuration
├── vite.config.js           # Vite configuration
├── package.json             # Scripts & dependency definitions
└── .gitignore               # Ignored git files and build outputs
```

---

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Charantej111/Apteazy.git
   cd Apteazy
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running Locally

To launch the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Building for Production

To generate an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📄 License

This project is proprietary and all rights are reserved.

---

Made with ❤️ for modern housing societies.
