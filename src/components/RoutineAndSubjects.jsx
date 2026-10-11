import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/siteConfig';
import { BookOpen, Sparkles, RefreshCw, CheckCircle2, Lightbulb } from 'lucide-react';

export default function RoutineAndSubjects() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const routineSteps = [
    { time: "06:00 - 08:30 AM", title: "Revision & Notes", desc: "Active recall of previous topics", icon: "🌅" },
    { time: "09:30 - 01:00 PM", title: "Deep Core Subject", desc: "Polity, Geography & Indian Economy", icon: "📖" },
    { time: "02:30 - 04:30 PM", title: "Maths & Reasoning", desc: "Speed math, calculation drills", icon: "🔢" },
    { time: "05:00 - 07:00 PM", title: "Gujarat History & GK", desc: "Heritage, culture & state schemes", icon: "🦁" },
    { time: "08:30 - 10:00 PM", title: "PYQs & Practice", desc: "Topic-wise MCQs & error log", icon: "🎯" },
    { time: "10:00 - 10:30 PM", title: "Review & Next Day Plan", desc: "Tracking targets & sleep well", icon: "🌙" }
  ];

  return (
    <section id="subjects" className="subjects-gold-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-gold">
          <div className="section-pill-gold">
            <BookOpen size={14} />
            <span>Structured Blueprint</span>
          </div>
          <h2 className="section-title-gold">
            Daily Routine & <span className="text-gold-gradient">Subject Blueprints</span>
          </h2>
          <p className="section-desc-gold">
            Flip each card to discover high-yield topics, weightage insights, and direct study tips compiled from my preparation experience.
          </p>
        </div>

        {/* Routine Banner */}
        <div className="routine-banner-gold">
          <h3 className="routine-banner-title">
            Sakshi's Daily Study Architecture ⏱️
          </h3>
          <p className="routine-motto-gold">
            "Consistency transforms ordinary study hours into extraordinary merit rankings."
          </p>
          <div className="routine-steps-grid">
            {routineSteps.map((step, idx) => (
              <div key={idx} className="routine-step-box">
                <span>{step.icon}</span>
                <span className="routine-step-title">{step.title}</span>
                <span className="routine-step-sub">{step.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 9 3D Flip Subject Cards */}
        <div className="subjects-grid-gold">
          {SITE_CONFIG.subjects.map((sub) => {
            const isFlipped = !!flippedCards[sub.id];
            return (
              <div
                key={sub.id}
                className={`flip-card-gold ${isFlipped ? 'is-flipped' : ''}`}
                onClick={() => toggleFlip(sub.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleFlip(sub.id);
                  }
                }}
              >
                <div className="flip-card-inner-gold">
                  {/* Front Side */}
                  <div className="flip-front-gold">
                    <div>
                      <div className="subject-header-gold">
                        <span className="subject-icon-box-gold">{sub.icon}</span>
                        <span className="subject-weight-gold">{sub.weightage}</span>
                      </div>
                      <h4 className="subject-title-gold">{sub.title}</h4>
                      <div className="subject-topics-preview">
                        {sub.topics.slice(0, 3).map((topic, i) => (
                          <span key={i} className="subject-topic-pill">
                            • {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flip-hint-gold">
                      <span>Click to view strategy</span>
                      <RefreshCw size={13} />
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="flip-back-gold">
                    <div>
                      <div className="subject-header-gold">
                        <span className="subject-icon-box-gold">{sub.icon}</span>
                        <span className="subject-weight-gold">Exam Strategy</span>
                      </div>
                      <h5 className="flip-back-title">Core Focus Topics:</h5>
                      <ul className="flip-back-list">
                        {sub.topics.map((topic, i) => (
                          <li key={i}>
                            <CheckCircle2 size={13} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flip-back-tip">
                        <strong>Tip:</strong> {sub.tip}
                      </div>
                    </div>
                    <div className="flip-hint-gold">
                      <span>Click to flip back</span>
                      <RefreshCw size={13} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

