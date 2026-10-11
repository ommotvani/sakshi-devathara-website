import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/siteConfig';
import {
  Download,
  FileText,
  ExternalLink,
  ShieldCheck,
  Play,
  Copy,
  Info,
  Clock,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { Telegram } from './BrandIcons';

export default function StudyMaterial({ onToast }) {
  // The 2 currently active official subject PDFs on Sakshi's profile
  const activeBooks = SITE_CONFIG.notes.filter((note) => note.isAvailable);
  // Other subjects currently in preparation
  const upcomingNotes = SITE_CONFIG.notes.filter((note) => !note.isAvailable);

  const copyDriveLink = (url, title) => {
    navigator.clipboard.writeText(url);
    if (onToast) {
      onToast(`Copied Drive link for ${title}! 📋`);
    }
  };

  return (
    <section id="notes" className="notes-gold-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-gold">
          <div className="section-pill-gold">
            <FileText size={14} />
            <span>Official Repository</span>
          </div>
          <h2 className="section-title-gold">
            Official <span className="text-gold-gradient">Subject Notes &amp; PDF Downloads</span>
          </h2>
          <p className="section-desc-gold">
            Direct access to Sakshi's verified study materials for Gujarat CCE and GPSC aspirants. Free to view and download on Google Drive.
          </p>
        </div>

        {/* Transparent Notice Banner */}
        <div className="material-notice-gold">
          <div className="notice-icon-box-gold">
            <Info size={24} style={{ color: 'var(--gold-primary)' }} />
          </div>
          <div>
            <h4>Honest Clarification Regarding Quizzes &amp; Subject Availability</h4>
            <p>
              Please note: <strong>Daily quizzes and test series are currently NOT available</strong> on this website. Sakshi's profile currently features <strong>2 official subject PDFs</strong> (Geography and Panchayati Raj). All verified notes are hosted directly on Google Drive for free access. Beware of unauthorized paid portals.
            </p>
          </div>
        </div>

        {/* 2 Active Books Showcase (Geography & Panchayati Raj) */}
        <div className="books-duo-container">
          {activeBooks.map((book) => (
            <div key={book.id} className="book-card-gold">
              {/* 3D Book Cover Frame */}
              <div className="book-cover-3d-wrap">
                <div className="book-cover-frame">
                  <div className="book-spine-groove" />
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="book-cover-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Book Details */}
              <div className="book-info-col">
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span className="book-badge-ribbon">
                      <ShieldCheck size={12} />
                      <span>{book.badge}</span>
                    </span>
                    <button
                      onClick={() => copyDriveLink(book.driveUrl, book.title)}
                      className="btn-gold-glass"
                      style={{ padding: '0.3rem 0.65rem', fontSize: '0.76rem' }}
                      title="Copy Google Drive URL"
                    >
                      <Copy size={11} />
                      <span>Copy Link</span>
                    </button>
                  </div>

                  <h3 className="book-title-gold">
                    {book.title}
                  </h3>

                  <div className="book-meta-pills">
                    <span className="book-meta-pill">📁 {book.filename}</span>
                    <span className="book-meta-pill">📄 {book.pages}</span>
                    <span className="book-meta-pill">⚡ Free Google Drive</span>
                  </div>

                  <p className="book-desc-gold">
                    {book.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="book-actions-row">
                  {/* Primary Download PDF */}
                  <a
                    href={book.driveDirectUrl || book.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-primary"
                    style={{ fontSize: '0.86rem', padding: '0.65rem 1.2rem', display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
                  >
                    <Download size={15} />
                    <span>Download PDF</span>
                    <ExternalLink size={12} />
                  </a>

                  {/* Open in Google Drive Viewer */}
                  <a
                    href={book.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-glass"
                    style={{ fontSize: '0.84rem', padding: '0.65rem 1rem' }}
                    title="View Online in Google Drive"
                  >
                    <ExternalLink size={13} />
                    <span>View Online</span>
                  </a>

                  {/* Reel Guide if available */}
                  {book.reelUrl && (
                    <a
                      href={book.reelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold-glass"
                      style={{ fontSize: '0.84rem', padding: '0.65rem 1rem' }}
                    >
                      <Play size={12} fill="currentColor" />
                      <span>Reel Guide</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Telegram Community Callout Banner */}
        <div className="telegram-callout-banner-gold">
          <div className="telegram-callout-content">
            <div className="telegram-callout-icon">
              <Telegram size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                Join the Official Telegram Group for PDF Notes &amp; Updates
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Get instant notification whenever new subject notes, PYQ sheets, and exam circulars are published.
              </p>
            </div>
          </div>
          <a
            href="https://t.me/+qxFd09XOPb9jMWQ1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-primary"
            style={{ fontSize: '0.86rem', padding: '0.65rem 1.35rem' }}
          >
            <Telegram size={16} />
            <span>Join Telegram Group</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Upcoming Subjects Section */}
        <div className="upcoming-notes-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-primary)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
            <Sparkles size={14} />
            <span>Upcoming Releases in Pipeline</span>
          </div>
          <h3 style={{ fontSize: '1.45rem', fontWeight: 800 }}>
            Subject Notes Currently <span className="text-gold-gradient">In Preparation ⏳</span>
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0.4rem auto 2rem' }}>
            Sakshi only releases notes after rigorous cross-referencing with Gujarat CCE exam frameworks and past question patterns.
          </p>
        </div>

        <div className="notes-grid-gold">
          {upcomingNotes.map((note) => (
            <div key={note.id} className="note-card-gold">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>
                    {note.category === 'polity' && '🏛️'}
                    {note.category === 'gujarat-gk' && '🦁'}
                    {note.category === 'science' && '🔬'}
                  </span>
                  <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.65rem', borderRadius: '12px', background: 'var(--bg-surface-elevated)', border: '1px solid var(--glass-border)', color: 'var(--gold-light)' }}>
                    {note.langBadge}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: '1.35' }}>
                  {note.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  {note.description}
                </p>
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px dashed var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  <Clock size={13} />
                  <span>{note.downloads}</span>
                </div>
                <button
                  disabled
                  className="btn-gold-glass"
                  style={{ opacity: 0.6, cursor: 'not-allowed', fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}
                >
                  <span>In Preparation</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
