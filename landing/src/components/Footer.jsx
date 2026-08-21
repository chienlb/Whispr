import React from 'react';
import { translations } from '../i18n';

export default function Footer({ lang }) {
  const t = translations[lang].footer;

  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      background: 'var(--bg-card)',
      padding: '50px 0 30px 0',
      position: 'relative',
      zIndex: 1
    }}>
      <div class="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px', marginBottom: '40px' }} class="desktop-nav">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <img src="./logo.png" alt="Whispr Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
              <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.5px' }}>Whispr <span class="text-gradient">Social</span></span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '340px', lineHeight: 1.6 }}>
              {t.desc}
            </p>
          </div>

          <div>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', marginBottom: '16px', color: 'var(--primary)' }}>{t.col1}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <a href="#download" style={footerLinkStyle}>Windows (.exe)</a>
              <a href="#download" style={footerLinkStyle}>macOS (.dmg)</a>
              <a href="#download" style={footerLinkStyle}>ZIP Source Package</a>
              <a href="http://localhost:3000" target="_blank" rel="noreferrer" style={footerLinkStyle}>Web Version</a>
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', marginBottom: '16px', color: 'var(--accent-purple)' }}>{t.col2}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <a href="#features" style={footerLinkStyle}>Realtime Socket Chat</a>
              <a href="#features" style={footerLinkStyle}>Kanban Task Board</a>
              <a href="#aidemo" style={footerLinkStyle}>Whispr AI Assistant</a>
              <a href="#features" style={footerLinkStyle}>AES-256 Encryption</a>
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', marginBottom: '16px', color: 'var(--accent-pink)' }}>{t.col3}</div>
            <div style={{ display: 'flex', gap: '14px', fontSize: '1.2rem' }}>
              <a href="#" style={{ color: 'var(--text-muted)' }}><i class="fa-brands fa-github"></i></a>
              <a href="#" style={{ color: 'var(--text-muted)' }}><i class="fa-brands fa-twitter"></i></a>
              <a href="#" style={{ color: 'var(--text-muted)' }}><i class="fa-brands fa-discord"></i></a>
              <a href="#" style={{ color: 'var(--text-muted)' }}><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          <div>{t.copy}</div>
          <div>Enterprise Edition v1.0.0 (Build 2026.08)</div>
        </div>
      </div>
    </footer>
  );
}

const footerLinkStyle = {
  color: 'var(--text-muted)',
  textDecoration: 'none',
  transition: 'color 0.2s ease'
};
