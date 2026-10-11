import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  CheckCircle2, 
  Home, 
  Compass, 
  BookOpen, 
  Lightbulb, 
  Trophy, 
  Film, 
  FileText, 
  Bell, 
  Mail,
  Download
} from 'lucide-react';
import { Instagram, Telegram } from './BrandIcons';

export default function Navbar({ theme, onToggleTheme, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home', icon: Home },
    { label: 'Journey', href: '#journey', id: 'journey', icon: Compass },
    { label: 'Subjects', href: '#subjects', id: 'subjects', icon: BookOpen },
    { label: 'Tips', href: '#tips', id: 'tips', icon: Lightbulb },
    { label: 'Achievements', href: '#achievements', id: 'achievements', icon: Trophy },
    { label: 'Reels', href: '#reels', id: 'reels', icon: Film },
    { label: 'Study Material', href: '#notes', id: 'notes', icon: FileText },
    { label: 'Contact', href: '#contact', id: 'contact', icon: Mail }
  ];

  return (
    <header className={`navbar-gold ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-container-gold">
        
        {/* Brand Logo & Identity */}
        <a href="#home" className="brand-gold" aria-label="Sakshi Devathara Home">
          <div className="brand-monogram-gold">SD</div>
          <div className="brand-text-gold">
            <div className="brand-name-wrap">
              <span className="brand-title-gold">Sakshi Devathara</span>
              <CheckCircle2 size={16} color="#d4af37" fill="rgba(212, 175, 55, 0.2)" title="Verified Mentor" />
            </div>
            <span className="brand-tagline-gold">LTech • Gujarat CCE Aspirant &amp; Mentor</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" aria-label="Desktop Navigation">
          <ul className="nav-links-capsule">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.href} 
                  className={`nav-item-gold ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="nav-actions-gold">
          <button 
            className="theme-toggle-gold" 
            onClick={onToggleTheme} 
            title={theme === 'dark' ? 'Switch to Royal Ivory Mode' : 'Switch to Obsidian Gold Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a 
            href="#notes" 
            className="btn-gold-primary" 
            style={{ 
              whiteSpace: 'nowrap', 
              padding: '0.45rem 1rem', 
              fontSize: '0.82rem', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.45rem',
              flexShrink: 0
            }}
          >
            <Download size={14} />
            <span>Study Notes PDF</span>
          </a>

          {/* Morphing Hamburger Button */}
          <button 
            className={`hamburger-gold-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="hamburger-bars">
              <span className="hamburger-line line-1" />
              <span className="hamburger-line line-2" />
              <span className="hamburger-line line-3" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-backdrop-gold" 
          onClick={closeMobileMenu} 
        />
      )}

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer-gold">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--glass-border)' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
              Navigation Menu
            </span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.65rem', borderRadius: '9999px', background: 'var(--gradient-subtle)', border: '1px solid var(--glass-border)', color: 'var(--gold-light)' }}>
              Gujarat CCE 🎯
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`mobile-nav-link-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  <Icon size={18} color="var(--gold-primary)" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          <div style={{ paddingTop: '0.85rem', borderTop: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a 
              href="#notes" 
              className="btn-gold-primary" 
              style={{ width: '100%', justifyContent: 'center', padding: '0.75rem 1rem' }}
              onClick={closeMobileMenu}
            >
              <span>📥 Download Geography PDF Notes</span>
            </a>

            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <a 
                href="https://www.instagram.com/ltech_sakshi_devathara/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-gold-secondary"
                style={{ flex: 1, padding: '0.5rem', fontSize: '0.82rem', justifyContent: 'center' }}
              >
                <Instagram size={15} /> Instagram
              </a>
              <a 
                href="https://t.me/+qxFd09XOPb9jMWQ1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-gold-secondary"
                style={{ flex: 1, padding: '0.5rem', fontSize: '0.82rem', justifyContent: 'center' }}
              >
                <Telegram size={15} /> Telegram
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

