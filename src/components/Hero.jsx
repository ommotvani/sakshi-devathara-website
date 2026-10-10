import React, { useState, useRef } from 'react';
import { BookOpen, Award, Target, FileText } from 'lucide-react';
import { Instagram } from './BrandIcons';
import { SITE_CONFIG } from '../data/siteConfig';

export default function Hero() {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTiltStyle({
      transform: `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    });
  };

  return (
    <section className="hero-gold-section" id="home">
      <div className="container">
        <div className="hero-gold-grid">
          
          {/* Left Hero Content */}
          <div className="hero-content">
            <div className="hero-pill-gold">
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold-primary)', boxShadow: '0 0 10px var(--gold-primary)' }} />
              <span>One Journey. One Goal. Continuous Growth. 🇮🇳📚</span>
            </div>

            <h1 className="hero-title-main">
              Hi, I'm <span className="text-gold-gradient">{SITE_CONFIG.profile.name}</span>
            </h1>

            <div className="hero-quote-gold-card">
              "{SITE_CONFIG.profile.heroQuote}"
            </div>

            <p className="hero-intro-text">
              I'm a government exam aspirant and study content creator dedicated to helping fellow Gujarat aspirants prepare with strategic precision. Through <strong>{SITE_CONFIG.profile.brandTitle}</strong>, I share authentic handwritten study material, high-yield routines, and mindset guidance for competitive exam success.
            </p>

            <div className="hero-focus-gold">
              <Target size={16} color="var(--gold-primary)" />
              <span>Target: Gujarat Competitive Exams, primarily <strong>Gujarat CCE &amp; GPSC</strong></span>
            </div>

            <div className="hero-cta-row">
              <a 
                href={SITE_CONFIG.profile.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-gold-primary"
              >
                <Instagram size={18} />
                <span>Follow on Instagram</span>
              </a>

              <a href="#notes" className="btn-gold-secondary">
                <BookOpen size={18} />
                <span>Get Study Notes</span>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="hero-stats-gold-row">
              <div className="hero-stat-card">
                <span className="hero-stat-val text-gold-gradient">Gujarat CCE</span>
                <span className="hero-stat-desc">Core Target Exam</span>
              </div>
              <div className="hero-stat-card">
                <span className="hero-stat-val text-gold-gradient">Top 5</span>
                <span className="hero-stat-desc">B.Sc. Distinction</span>
              </div>
              <div className="hero-stat-card">
                <span className="hero-stat-val text-gold-gradient">2 Official PDFs</span>
                <span className="hero-stat-desc">Geo &amp; Panchayati Raj</span>
              </div>
            </div>
          </div>

          {/* Right 3D Tilt Card Photo (Clean profile without tags) */}
          <div className="hero-tilt-wrapper">
            <div 
              className="hero-3d-gold-card" 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={tiltStyle}
            >
              <div className="hero-img-frame-gold">
                <img 
                  src="/profile.PNG" 
                  alt="Sakshi Devathara - Government Exam Aspirant & Study Content Creator"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/profile.jpg'; }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

