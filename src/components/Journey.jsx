import React from 'react';
import { SITE_CONFIG } from '../data/siteConfig';

export default function Journey() {
  return (
    <section className="journey-gold-section" id="journey">
      <div className="container">
        <div className="section-header">
          <div className="section-badge-gold">From Healthcare to Public Administration</div>
          <h2 className="section-title">
            My <span className="text-gold-gradient">Journey</span>
          </h2>
          <p className="section-subtitle">
            How scientific discipline, hospital clinical rigour, and resilient self-study defined my commitment toward civil services.
          </p>
        </div>

        <div className="journey-gold-grid">
          {SITE_CONFIG.journey.map((step) => (
            <div key={step.number} className="journey-card-gold">
              <span className="journey-num-badge">{step.number}</span>
              <div className="journey-icon-wrap">{step.icon}</div>
              <h4>{step.title}</h4>
              <div className="journey-subtitle-gold">{step.subtitle}</div>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

