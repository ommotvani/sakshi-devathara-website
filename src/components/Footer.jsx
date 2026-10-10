import React from 'react';
import { SITE_CONFIG } from '../data/siteConfig';
import { ArrowUp, MessageCircle, Mail, Heart } from 'lucide-react';
import { Instagram, Youtube, Telegram } from './BrandIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-gold">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '2.5rem' }}>
          {/* Brand Monogram */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="brand-monogram-gold" style={{ width: '46px', height: '46px', fontSize: '1.1rem' }}>
              SD
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-luxury)', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '0.02em', color: 'var(--text-main)' }}>
                Sakshi Devathara
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--gold-primary)', fontWeight: 600 }}>
                LTech Education • Gujarat CCE & GPSC Mentorship
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <a
              href="https://t.me/+qxFd09XOPb9jMWQ1"
              target="_blank"
              rel="noopener noreferrer"
              className="reel-ctrl-btn-gold"
              title="Telegram Group"
            >
              <Telegram size={18} />
            </a>
            <a
              href={SITE_CONFIG.profile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reel-ctrl-btn-gold"
              title="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href={SITE_CONFIG.profile.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reel-ctrl-btn-gold"
              title="YouTube"
            >
              <Youtube size={18} />
            </a>
            <a
              href={SITE_CONFIG.profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reel-ctrl-btn-gold"
              title="WhatsApp Channel"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.profile.email}`}
              className="reel-ctrl-btn-gold"
              title="Email: sakshidevathara303@gmail.com"
            >
              <Mail size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="reel-ctrl-btn-gold"
              title="Scroll to Top"
              style={{ marginLeft: '0.5rem', background: 'var(--gradient-gold)', color: '#070709', borderColor: 'transparent' }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div style={{ padding: '1.25rem 1.5rem', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
          <strong style={{ color: 'var(--gold-light)' }}>Authenticity & Integrity Disclaimer:</strong> This portal is an educational mentoring portfolio run by Sakshi Devathara. Daily online quiz packages or test series subscriptions are <em>NOT</em> conducted or sold on this site. Authorized study materials (including the official Geography PDF) are hosted freely via Google Drive.
        </div>

        {/* Bottom Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.82rem', color: 'var(--text-muted)', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
          <div>
            © {new Date().getFullYear()} Sakshi Devathara (LTech). All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            Built for Gujarat Aspirants with <Heart size={13} fill="#ef4444" color="#ef4444" /> and Dedication.
          </div>
        </div>
      </div>
    </footer>
  );
}
