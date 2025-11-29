# Transfusion Master

A comprehensive educational platform for transfusion medicine, designed for pathology residents, hematology-pathology fellows, and transfusion medicine fellows.

## Features

### 10 Comprehensive Learning Modules

1. **Foundations of Immunohematology** - RBC antigens, antibody types, DAT/IAT
2. **Pre-Transfusion Testing** - Type & screen, antibody identification, crossmatch logic
3. **Blood Components & Modifications** - PRBCs, platelets, plasma, irradiated, washed, CMV-safe
4. **Compatibility & Special Matching** - ABO/Rh compatibility, extended matching
5. **Transfusion Reactions** (Core) - AHTR, FNHTR, TRALI, TACO, DHTR, TA-GVHD
6. **Pediatric & Neonatal Transfusion** - HDFN, exchange transfusion, neonatal products
7. **Apheresis** - Therapeutic plasma exchange, red cell exchange, TTP
8. **Donor Screening** - Eligibility criteria, infectious disease testing, NAT
9. **Hemovigilance & Quality Systems** - Error prevention, reaction reporting, QA
10. **Integrated Transfusion Cases** - Full decision-making scenarios

### 4 Interactive Tools

- **ABO Compatibility Simulator** - Explore RBC/plasma compatibility patterns
- **Antibody Screen Interpreter** - Understand antibody screening patterns
- **Reaction Classifier** - Identify transfusion reaction types
- **Product Selector** - Choose appropriate product modifications

### Assessment System

- 10-question comprehensive quiz
- Session-only scoring with immediate feedback
- Detailed explanations for each answer
- No data tracking or persistence

### Key Characteristics

✅ **Mobile-First Design** - Optimized for smartphones and tablets
✅ **Dark Mode Default** - Easy on the eyes for extended study sessions
✅ **Offline-Capable** - Progressive Web App with Service Worker
✅ **Zero Tracking** - No user accounts, no data collection, session-only
✅ **Educational Focus** - Synthetic data only, not for clinical use

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build for Production

```bash
# Build the app
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Zustand** - State management (session-only)
- **Vite PWA** - Offline support

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/          # Base UI components (Button, Card, etc.)
│   └── Layout.tsx   # Main app layout
├── pages/           # Page components
│   ├── modules/     # 10 educational modules
│   ├── tools/       # 4 interactive tools
│   ├── Home.tsx     # Landing page
│   ├── Settings.tsx # Settings page
│   └── Assessment.tsx # Quiz page
├── store/           # Zustand stores
│   ├── useThemeStore.ts      # Dark/light mode
│   └── useAssessmentStore.ts # Session-only quiz state
├── lib/             # Utilities
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Important Disclaimers

⚠️ **Educational Use Only** - This application is designed exclusively for educational purposes and is NOT intended for medical decision-making or patient care.

⚠️ **Synthetic Data Only** - All cases and scenarios use synthetic data. No real patient information is used or should be entered.

⚠️ **No Clinical Recommendations** - This app does not provide clinical recommendations, dosing information, or treatment protocols.

⚠️ **Session-Only Data** - No user data, scores, or progress is stored, tracked, or transmitted. All data is session-only and cleared when you close the application.

⚠️ **Consult Current Guidelines** - Always refer to current AABB standards, CAP guidelines, FDA recommendations, and institutional policies.

## Learning Objectives

After completing this course, learners should be able to:

- Understand ABO/Rh and antigen-antibody principles
- Perform and interpret type-and-screen and crossmatch logic
- Recognize and classify transfusion reactions
- Select appropriate blood components and modifications
- Navigate transfusion algorithms and decision-making pathways
- Understand apheresis indications and procedures

## Browser Support

Modern browsers with ES2020 support:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License

This is an educational project. All content is for educational purposes only.

## Credits

Built with excellence and attention to detail for pathology residents and transfusion medicine fellows.

---

**Version:** 1.0.0
**Last Updated:** 2024
