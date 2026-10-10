import React from 'react';
import { SITE_CONFIG } from '../data/siteConfig';
import { Compass, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function PreparationTips() {
  return (
    <section id="tips" className="tips-gold-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-gold">
          <div className="section-pill-gold">
            <Compass size={14} />
            <span>Proven Strategy</span>
          </div>
          <h2 className="section-title-gold">
            Strategic Rules for <span className="text-gold-gradient">Competitive Exams</span>
          </h2>
          <p className="section-desc-gold">
            Guiding principles that turn hard work into guaranteed results. Eliminate guesswork and build sustainable daily momentum.
          </p>
        </div>

        {/* 9 Strategy Tips Grid */}
        <div className="tips-grid-gold">
          {SITE_CONFIG.tips.map((tip) => (
            <div key={tip.num} className="tip-card-gold">
              <div className="tip-num-badge-gold">
                {tip.num}
              </div>
              <div className="tip-content-gold">
                <h4>{tip.title}</h4>
                <p>{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mistakes to Avoid Callout */}
        <div className="mistakes-gold-card">
          <div className="mistakes-header-gold">
            <div style={{ color: '#ef4444', display: 'flex', alignItems: 'center' }}>
              <AlertTriangle size={24} />
            </div>
            <div>
              <h3>5 Costly Mistakes Beginners Must Avoid</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Saving time by avoiding these common traps that waste months of hard work.
              </p>
            </div>
          </div>

          <div className="mistakes-list-gold">
            {SITE_CONFIG.mistakesToAvoid.map((mistake, index) => (
              <div key={index} className="mistake-item-gold">
                <span className="mistake-cross">✕</span>
                <span>{mistake}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

