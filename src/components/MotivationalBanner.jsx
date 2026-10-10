import React from 'react';
import { SITE_CONFIG } from '../data/siteConfig';
import { Sparkles, Download } from 'lucide-react';
import { Instagram, Telegram } from './BrandIcons';

export default function MotivationalBanner() {
  return (
    <section className="message-gold-section">
      <div className="container">
        <div className="message-banner-gold">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-primary)', marginBottom: '1.25rem', fontSize: '1.25rem' }}>
            <Sparkles size={20} />
            <span style={{ fontFamily: 'var(--font-luxury)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 700 }}>
              Sakshi's Words to Aspirants
            </span>
            <Sparkles size={20} />
          </div>

          <p className="message-quote-text-gold">
            "Every early morning session, every solved mock paper, and every corrected mistake is quietly shaping your future. Competitions are not won by luck; they are won by relentless daily discipline. Believe in your preparation, protect your focus, and keep moving forward until your roll number shines on the final merit list."
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={SITE_CONFIG.profile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-primary"
            >
              <Instagram size={16} />
              <span>Follow on Instagram</span>
            </a>
            <a
              href="https://t.me/+qxFd09XOPb9jMWQ1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-glass"
            >
              <Telegram size={16} />
              <span>Join Telegram Group</span>
            </a>
            <a
              href="#notes"
              className="btn-gold-glass"
            >
              <Download size={16} />
              <span>Access Official PDFs</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
