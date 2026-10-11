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
  const [submittedUrls, setSubmittedUrls] = useState({ mailtoUrl: '', gmailUrl: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailTo = "sakshidevathara303@gmail.com";
    const emailSubject = `[CCE Preparation Doubt] ${formData.subject} - from ${formData.name}`;
    const emailBody = 
`Hello Sakshi,

A student has submitted a preparation doubt through your mentorship portal:

• Student Name: ${formData.name}
• Instagram / Email: ${formData.handle}
• Target Examination: ${formData.targetExam}
• Subject Focus: ${formData.subject}

Question / Preparation Doubt:
--------------------------------------------------
${formData.message}
--------------------------------------------------

Sent via Sakshi Devathara Mentorship Website`;

    // 1. Post to Netlify forms if deployed on Netlify
    const encodedData = new URLSearchParams({
      'form-name': 'preparation-doubt',
      'name': formData.name,
      'handle': formData.handle,
      'targetExam': formData.targetExam,
      'subject': formData.subject,
      'message': formData.message
    }).toString();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodedData
    }).catch(() => {
      // Ignore background post failures in dev
    });

    // 2. Generate mailto and direct Gmail web links
    const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    setSubmittedUrls({ mailtoUrl, gmailUrl });

    // Open user's default email client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onToast) {
        onToast("Doubt prepared! Opening email client to send to Sakshi ✉️");
      }
    }, 500);
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
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={46} style={{ color: 'var(--gold-primary)', margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                  Email Prepared for Sakshi! ✉️
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 1.25rem', lineHeight: 1.6 }}>
                  Your email app was triggered with your doubt pre-filled and addressed to <strong>sakshidevathara303@gmail.com</strong>.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  <a
                    href={submittedUrls.gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-primary"
                    style={{ fontSize: '0.86rem', padding: '0.65rem 1.25rem' }}
                  >
                    <Mail size={16} />
                    <span>Send via Gmail Web 🌐</span>
                  </a>
                  <a
                    href={submittedUrls.mailtoUrl}
                    className="btn-gold-glass"
                    style={{ fontSize: '0.86rem', padding: '0.65rem 1.25rem' }}
                  >
                    <span>Open Mail App 📱</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      handle: '',
                      targetExam: 'Gujarat CCE Group A/B',
                      subject: 'Geography / Map Work',
                      message: ''
                    });
                  }}
                  style={{ background: 'none', border: 'none', color: 'var(--gold-light)', fontSize: '0.82rem', textDecoration: 'underline', cursor: 'pointer' }}
                >
                  Ask another question
                </button>
              </div>
            ) : (
              <form
                name="preparation-doubt"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="preparation-doubt" />
                <p style={{ display: 'none' }}>
                  <label>Don’t fill this out: <input name="bot-field" /></label>
                </p>
                <div className="contact-form-row">
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

                <div className="contact-form-row">
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
