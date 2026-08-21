import React, { useState } from 'react';
import { translations } from '../i18n';

export default function FaqSection({ lang }) {
  const t = translations[lang].faq;
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: t.q1, a: t.a1 },
    { q: t.q2, a: t.a2 },
    { q: t.q3, a: t.a3 },
    { q: t.q4, a: t.a4 }
  ];

  return (
    <section id="faq" style={{ padding: '60px 0', position: 'relative' }}>
      <div class="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 36px auto' }}>
          <div class="pill-badge" style={{ marginBottom: '12px' }}>
            <i class="fa-solid fa-circle-question"></i>
            <span>{t.badge}</span>
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-1px' }}>
            {t.titleLine1} <span class="text-gradient">{t.titleGradient}</span>
          </h2>
        </div>

        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                class="card-centered" 
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                style={{
                  padding: '18px 24px',
                  cursor: 'pointer',
                  borderColor: isOpen ? 'var(--primary)' : 'var(--border-color)',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, fontSize: '1rem' }}>
                  <span>{faq.q}</span>
                  <i class={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} style={{ color: 'var(--primary)', fontSize: '0.85rem' }}></i>
                </div>
                {isOpen && (
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '12px', lineHeight: 1.6, borderTop: '1px solid var(--border-color)', paddingTop: '12px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
