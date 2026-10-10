import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Toast({ message, visible }) {
  return (
    <div className={`toast-gold ${visible ? 'show' : ''}`} role="status" aria-live="polite">
      <Sparkles size={16} style={{ color: 'var(--gold-primary)' }} />
      <span>{message}</span>
    </div>
  );
}

