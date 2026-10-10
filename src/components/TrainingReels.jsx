import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/siteConfig';
import { Film, ExternalLink, Play, Sparkles } from 'lucide-react';
import { Instagram } from './BrandIcons';

export default function TrainingReels() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const reels = SITE_CONFIG.reels;

  const displayedReels = selectedFilter === 'all'
    ? reels
    : reels.filter((r) => r.id === selectedFilter);

  return (
    <section id="reels" className="reels-gold-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-gold">
          <div className="section-pill-gold">
            <Film size={14} />
            <span>Direct Instagram Video Player</span>
          </div>
          <h2 className="section-title-gold">
            Watch Reels Directly &amp; <span className="text-gold-gradient">Study Video Guides</span>
          </h2>
          <p className="section-desc-gold">
            All reels are loaded directly below. You can play, pause, toggle audio, and watch right here on the website, or click any reel button to redirect directly to Instagram.
          </p>
        </div>

        {/* View Switcher Chips */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <button
            type="button"
            className={`category-chip-gold ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            Show All 3 Reels Side-by-Side
          </button>
          {reels.map((reel, idx) => (
            <button
              key={reel.id}
              type="button"
              className={`category-chip-gold ${selectedFilter === reel.id ? 'active' : ''}`}
              onClick={() => setSelectedFilter(reel.id)}
            >
              <Instagram size={12} />
              <span>Reel #{idx + 1}: {reel.category}</span>
            </button>
          ))}
        </div>

        {/* Direct Reels Grid */}
        <div className="direct-reels-grid">
          {displayedReels.map((reel, index) => (
            <div key={reel.id} className="direct-reel-card">
              {/* Header */}
              <div className="direct-reel-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--gradient-subtle)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-primary)' }}>
                    <Instagram size={14} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--gold-light)' }}>
                      @ltech_sakshi_devathara
                    </span>
                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      {reel.category} • {reel.duration}
                    </span>
                  </div>
                </div>

                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-glass"
                  style={{ padding: '0.25rem 0.65rem', fontSize: '0.74rem' }}
                  title="Direct Redirect to Reel on Instagram"
                >
                  <span>Insta</span>
                  <ExternalLink size={10} />
                </a>
              </div>

              {/* Direct Loaded Instagram Reel Iframe */}
              <div className="direct-reel-frame-wrap">
                <iframe
                  src={`${reel.embedUrl}/`}
                  title={reel.title}
                  className="direct-reel-iframe"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media; autoplay; clipboard-write; picture-in-picture; web-share"
                  loading="lazy"
                />
              </div>

              {/* Footer with Details & Direct Redirect CTA */}
              <div className="direct-reel-footer">
                <div>
                  <h4 className="direct-reel-title">{reel.title}</h4>
                  <p className="direct-reel-quote">"{reel.highlightQuote}"</p>
                </div>

                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.65rem 1rem', fontSize: '0.86rem' }}
                >
                  <Instagram size={15} />
                  <span>Open &amp; Watch on Instagram</span>
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
