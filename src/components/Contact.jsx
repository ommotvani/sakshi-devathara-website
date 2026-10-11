import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/siteConfig';
import { MessageSquare, Mail, Send, CheckCircle2 } from 'lucide-react';
import { Instagram, Telegram } from './BrandIcons';

export default function Contact({ onToast }) {
  const [formData, setFormData] = useState({
    name: '',
    handle: '',
    targetExam: 'Gujarat CCE Group A/B',
    subject: 'Geography / Map Work',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onToast) {
        onToast("Doubt submitted! Sakshi or team will review and reply soon. 🌟");
      }
      setFormData({
        name: '',
        handle: '',
        targetExam: 'Gujarat CCE Group A/B',
        subject: 'Geography / Map Work',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 600);
  };

  const socials = [
    {
      title: "Telegram Group",
      handle: "Official Study Group",
      desc: "Instant PDF Downloads & Exam Updates",
      link: "https://t.me/+qxFd09XOPb9jMWQ1",
      icon: <Telegram size={22} />,
      gradient: "linear-gradient(135deg, #229ED9 0%, #1e88e5 100%)"
    },
    {
      title: "Instagram",
      handle: "@ltech_sakshi_devathara",
      desc: "Daily Motivation & Visual Strategy",
      link: SITE_CONFIG.profile.instagramUrl,
      icon: <Instagram size={22} />,
      gradient: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)"
    },
    {
      title: "Email Support",
      handle: "sakshidevathara303@gmail.com",
      desc: "Direct Academic & Exam Doubts Support",
      link: "mailto:sakshidevathara303@gmail.com",
      icon: <Mail size={22} />,
      gradient: "linear-gradient(135deg, #d4af37 0%, #aa771c 100%)"
    }
  ];

  return (
    <section id="contact" className="contact-gold-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-gold">
          <div className="section-pill-gold">
            <MessageSquare size={14} />
            <span>Connect & Guidance</span>
          </div>
          <h2 className="section-title-gold">
            Get in Touch & <span className="text-gold-gradient">Ask Your Doubts</span>
          </h2>
          <p className="section-desc-gold">
            Join the community channels or send your preparation questions directly. Every query from a sincere aspirant is valued.
          </p>
        </div>

        <div className="contact-gold-grid">
          {/* Social Channels */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
              Community Channels & Portals
            </h3>
            <div className="social-cards-grid-gold">
              {socials.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card-gold"
                >
                  <div className="social-card-icon-gold" style={{ background: soc.gradient }}>
                    {soc.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 700, marginBottom: '0.15rem' }}>{soc.title}</h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--gold-light)', fontWeight: 600 }}>{soc.handle}</p>
                    <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{soc.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Doubt Submission Form */}
          <div className="contact-form-card-gold">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              Ask Sakshi a Preparation Doubt 💬
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Have questions about routine, syllabus strategy, or subject priority? Submit your doubt below.
            </p>

            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <CheckCircle2 size={48} style={{ color: 'var(--gold-primary)', margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Doubt Submitted Successfully!</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Thank you! Sakshi addresses recurring student questions in upcoming reels and posts.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group-gold">
                    <label className="form-label-gold">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      className="form-input-gold"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group-gold">
                    <label className="form-label-gold">Instagram Handle or Email</label>
                    <input
                      type="text"
                      required
                      placeholder="@yourhandle or email"
                      className="form-input-gold"
                      value={formData.handle}
                      onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group-gold">
                    <label className="form-label-gold">Target Examination</label>
                    <select
                      className="form-input-gold"
                      value={formData.targetExam}
                      onChange={(e) => setFormData({ ...formData, targetExam: e.target.value })}
                    >
                      <option value="Gujarat CCE Group A/B">Gujarat CCE Group A / B</option>
                      <option value="GPSC Class 1 & 2">GPSC Class 1 & 2</option>
                      <option value="Gujarat Police SI / Constable">Police SI / Constable</option>
                      <option value="Forest Guard / Vanrakshak">Forest Guard</option>
                      <option value="Other Gujarat Exams">Other Competitive Exams</option>
                    </select>
                  </div>
                  <div className="form-group-gold">
                    <label className="form-label-gold">Subject Focus</label>
                    <select
                      className="form-input-gold"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="Geography / Map Work">Geography / Map Work</option>
                      <option value="Polity & Constitution">Polity & Constitution</option>
                      <option value="Gujarat History & Culture">Gujarat History & Culture</option>
                      <option value="Maths & Reasoning">Maths & Reasoning</option>
                      <option value="Daily Routine & Time Management">Routine & Time Management</option>
                      <option value="Mock Test Analysis">Mock Test Analysis</option>
                    </select>
                  </div>
                </div>

                <div className="form-group-gold">
                  <label className="form-label-gold">Your Question or Preparation Challenge</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your doubt or preparation challenge in detail..."
                    className="form-textarea-gold"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}
                >
                  <Send size={15} />
                  <span>{isSubmitting ? 'Sending Question...' : 'Submit Preparation Doubt'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
