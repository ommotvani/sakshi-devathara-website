import React from 'react';
import { SITE_CONFIG } from '../data/siteConfig';
import { Award, Trophy, Star } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-gold-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-gold">
          <div className="section-pill-gold">
            <Trophy size={14} />
            <span>Honors & Qualifications</span>
          </div>
          <h2 className="section-title-gold">
            Academic Background & <span className="text-gold-gradient">Milestones</span>
          </h2>
          <p className="section-desc-gold">
            A background rooted in scientific rigor, healthcare excellence, and sustained dedication to public service goals.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="achievements-grid-gold">
          {SITE_CONFIG.achievements.map((ach) => (
            <div key={ach.id} className="achievement-card-gold">
              <span className="achievement-badge-gold">{ach.badge}</span>
              <div className="achievement-icon-wrap-gold">{ach.icon}</div>
              <h4 className="achievement-title-gold">{ach.title}</h4>
              <p className="achievement-desc-gold">{ach.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

