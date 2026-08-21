import React from 'react';
import { translations } from '../i18n';

export default function Features({ lang }) {
  const t = translations[lang].features;

  const featureList = [
    { icon: 'fa-bolt', color: '#2563eb', title: t.f1Title, desc: t.f1Desc },
    { icon: 'fa-table-columns', color: '#7c3aed', title: t.f2Title, desc: t.f2Desc },
    { icon: 'fa-robot', color: '#ec4899', title: t.f3Title, desc: t.f3Desc },
    { icon: 'fa-wand-magic-sparkles', color: '#0284c7', title: t.f4Title, desc: t.f4Desc },
    { icon: 'fa-shield-halved', color: '#10b981', title: t.f5Title, desc: t.f5Desc },
    { icon: 'fa-laptop-code', color: '#f59e0b', title: t.f6Title, desc: t.f6Desc }
  ];

  return (
    <section id="features" style={{ padding: '60px 0', position: 'relative' }}>
      <div class="container">
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px auto' }}>
          <div class="pill-badge" style={{ marginBottom: '12px' }}>
            <span>{t.badge}</span>
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-1px' }}>
            {t.titleLine1} <span class="text-gradient">{t.titleGradient}</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '8px' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div class="grid-3" style={{ maxWidth: '960px', margin: '0 auto' }}>
          {featureList.map((item, idx) => (
            <div key={idx} class="card-centered" style={{ padding: '28px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '220px' }}>
              <div class="icon-box" style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: `${item.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                color: item.color,
                border: `1px solid ${item.color}30`,
                marginBottom: '14px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                <i class={`fa-solid ${item.icon}`}></i>
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px', textAlign: 'center' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, textAlign: 'center' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
