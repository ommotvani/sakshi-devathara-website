import React from 'react';
import { SITE_CONFIG } from '../data/siteConfig';
import { Bell, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

export default function ExamUpdates() {
  return (
    <section id="updates" className="updates-gold-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-gold">
          <div className="section-pill-gold">
            <Bell size={14} />
            <span>Official Circulars</span>
          </div>
          <h2 className="section-title-gold">
            Gujarat Exam <span className="text-gold-gradient">Alerts & Notifications</span>
          </h2>
          <p className="section-desc-gold">
            Stay up to date with official releases from Gujarat Secondary Service Selection Board (GSSSB) and GPSC.
          </p>
        </div>

        {/* Updates List */}
        <div className="updates-list-gold">
          {SITE_CONFIG.updates.map((update) => (
            <div key={update.id} className="update-card-gold">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1 }}>
                <div className="update-date-badge-gold">
                  <span className="update-day-gold">{update.day}</span>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    {update.month}
                  </span>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'var(--gradient-subtle)', color: 'var(--gold-primary)', border: '1px solid var(--glass-border)' }}>
                      {update.status}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {update.month} {update.day}, {update.year}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--text-main)' }}>
                    {update.title}
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                    {update.desc}
                  </p>
                </div>
              </div>

              <div>
                <a
                  href={update.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-glass"
                  style={{ whiteSpace: 'nowrap', fontSize: '0.82rem', padding: '0.5rem 1rem' }}
                >
                  <span>Official Portal</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

