# LTech Sakshi Devathara — Official React Website (Black & Gold Luxury Edition) 🏆✨

A modern, high-performance, responsive React website built for government exam aspirant and study content creator **Sakshi Devathara** ([@ltech_sakshi_devathara](https://www.instagram.com/ltech_sakshi_devathara/)).

> *"One Journey. One Goal. Continuous Growth. 🇮🇳📚"*  
> *"Dream Big. Study Smart. Stay Consistent. Achieve Your Goals. 🎯📚"*

---

## 🎨 Theme: Luxury Black & Royal Gold

- **Dark Mode (Default)**: Deep Obsidian base (`#070709`), rich surface glass (`rgba(18, 18, 24, 0.78)`), metallic gold gradients (`#d4af37`, `#f6e58d`, `#ffd700`, `#aa771c`), and ambient gold particle dust.
- **Light Mode (Optional Toggle)**: Royal Ivory (`#f8f6f0`) and Antique Champagne Gold (`#b38728`, `#8c6314`).
- **Typography**: Cinzel (luxury serif titles), Poppins (clean headers), Inter (crisp readable body).

---

## ⚡ React Architecture & Features

### 1. Modern Header & Navigation
- Sticky glass navbar with blur and dynamic scroll elevation.
- Royal gold monogram badge (`SD`) with verified checkmark.
- 8 streamlined navigation links with active scroll spy indicator.
- Morphing hamburger drawer for mobile viewports (<1040px) with backdrop blur.
- Instant Dark / Light mode toggle with `localStorage` persistence.

### 2. 3D Tilt Hero & Ambient Particles
- Interactive 3D tilt card responding dynamically to cursor position.
- Floating 3D chips (`Geography Notes`, `B.Sc. Distinction`, `Gujarat CCE`).
- Lightweight HTML5 canvas particle dust engine with gold float dynamics.

### 3. Study Routine & 3D Flip Subject Cards
- Sakshi's 6-step daily study architecture timeline (06:00 AM - 10:30 PM).
- 9 3D subject cards that flip 180° (`rotateY`) on click or hover to reveal high-yield topics, weightage, and strategic exam tips.

### 4. Strategic Preparation Rules & Mistakes Alert
- 9 numbered golden strategy cards.
- Prominent *5 Costly Mistakes Beginners Must Avoid* alert card.

### 5. Academic Milestones
- B.Sc. Microbiology with University Top 5 Distinction.
- Top 10 Rank in Medical Laboratory Technology (MLT).
- OT Management training at U. N. Mehta Institute & Ahmedabad Civil Hospital.
- Gujarat CCE Merit scorecard milestone.

### 6. 3D Coverflow Instagram Reels Showcase
- Interactive 3D coverflow carousel featuring the 3 official Instagram reels:
  1. **Mock Test Analysis & Mistake Notebook Guide**: [Watch Reel](https://www.instagram.com/reel/Dc8S6PcN09r/?obrf=MTlheTd0ZDl6cWc5eg==)
  2. **Polity & Constitution High-Yield Revision Framework**: [Watch Reel](https://www.instagram.com/p/DbybguIDVOw/?srtk=MWt6NWMxb3k1cGo1)
  3. **CCE Preparation Strategy & Geography Study Routine**: [Watch Reel](https://www.instagram.com/reel/Dc9SttqtDPs/?cplk=MTRlc284MnpoeTNqag==)
- Play/pause toggle, auto-progress bar (4.5s advance), and direct links.

### 7. Authentic Study Materials & Honest Clarification
- **Clarity Notice**: Transparently clarifies that daily quizzes and mock test subscriptions are **not** available, warning against unauthorized portals.
- **Official Verified PDF**: Direct download for **`GEO BY SAKSHI DEVATHARA.pdf`** hosted on [Google Drive](https://drive.google.com/file/d/17EtVk-3UMIjkB8mk5zUtjEqKQkOJW-6o/view?usp=sharing), paired with the official [Instagram explanation reel](https://www.instagram.com/reel/Dc9SttqtDPs/?cplk=MTRlc284MnpoeTNqag==).
- **Upcoming Notes**: Polity, Gujarat History, Science & Tech, and Schemes tagged with `In Preparation ⏳`.

### 8. Gujarat Exam Alerts
- Real-time updates and direct portals for GSSSB CCE and GPSC announcements.

### 9. Connect & Doubt Submission Form
- Direct channels: Instagram, YouTube, WhatsApp Channel, and Email.
- Interactive student doubt submission form with instant feedback.

---

## 🛠️ Getting Started & Development

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Run Locally
```bash
# Install dependencies (already installed)
npm install

# Start local development server
npm run dev
```

### Production Build
```bash
# Build optimized static bundle
npm run build

# Preview production build locally
npm run preview
```

The output bundle will be generated in the `dist/` folder, ready for deployment to Vercel, Netlify, GitHub Pages, or any static hosting server.

### Standalone Offline HTML
For convenience, an offline standalone vanilla HTML version is preserved at `standalone.html` which can be opened directly without a Node server.

---

## 📁 Project Directory

```text
sakshi-devathara-website/
├── dist/                   # Production build output
├── public/                 # Static assets (profile & reel thumbnails)
│   ├── profile.jpg
│   ├── reel1.jpg
│   ├── reel2.jpg
│   └── reel3.jpg
├── src/
│   ├── components/
│   │   ├── Achievements.jsx
│   │   ├── BrandIcons.jsx
│   │   ├── Contact.jsx
│   │   ├── ExamUpdates.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Journey.jsx
│   │   ├── MotivationalBanner.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticlesCanvas.jsx
│   │   ├── PreparationTips.jsx
│   │   ├── RoutineAndSubjects.jsx
│   │   ├── StudyMaterial.jsx
│   │   ├── Toast.jsx
│   │   └── TrainingReels.jsx
│   ├── data/
│   │   └── siteConfig.js   # Centralized data store (reels, notes, subjects)
│   ├── App.jsx             # Main application layout & theme engine
│   ├── index.css           # Black & Gold luxury design system
│   └── main.jsx            # React 19 application entry point
├── index.html              # Vite HTML template
├── standalone.html         # Standalone vanilla backup
├── vite.config.js          # Vite React bundler configuration
└── package.json            # Project dependencies & scripts
```

---
© 2026 Sakshi Devathara (LTech). All rights reserved.
