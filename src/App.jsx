import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import RoutineAndSubjects from './components/RoutineAndSubjects';
import PreparationTips from './components/PreparationTips';
import Achievements from './components/Achievements';
import TrainingReels from './components/TrainingReels';
import StudyMaterial from './components/StudyMaterial';
import ExamUpdates from './components/ExamUpdates';
import MotivationalBanner from './components/MotivationalBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ParticlesCanvas from './components/ParticlesCanvas';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('sd-theme') || 'dark';
  });

  const [activeSection, setActiveSection] = useState('home');
  const [toast, setToast] = useState({ message: '', visible: false });

  // Manage theme in HTML document attribute & storage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sd-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message) => {
    setToast({ message, visible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3500);
  };

  // Scroll spy to detect active section
  useEffect(() => {
    const sectionIds = ['home', 'journey', 'subjects', 'tips', 'achievements', 'reels', 'notes', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop - offset;
          if (scrollY >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-root">
      {/* Ambient background gold glow orbs */}
      <div className="ambient-gold-orb orb-1" />
      <div className="ambient-gold-orb orb-2" />
      <div className="ambient-gold-orb orb-3" />

      {/* Interactive canvas gold dust particles */}
      <ParticlesCanvas />

      {/* Sticky Luxury Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Page Content */}
      <main>
        <Hero />
        <Journey />
        <RoutineAndSubjects />
        <PreparationTips />
        <Achievements />
        <TrainingReels />
        <StudyMaterial onToast={showToast} />
        <ExamUpdates />
        <MotivationalBanner />
        <Contact onToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification */}
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
}

