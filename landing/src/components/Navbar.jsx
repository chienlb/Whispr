import React from 'react';
import { translations } from '../i18n';

export default function Navbar({ lang, setLang, theme, setTheme }) {
  const t = translations[lang].nav;

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      width: '100%',
      background: theme === 'dark' ? 'rgba(9, 13, 22, 0.92)' : 'rgba(255, 255, 255, 0.94)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
      transition: 'all 0.25s ease'
    }}>
      <div class="container" style={{
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        height: '68px'
      }}>
        {/* Left Side: Logo with generous 48px right margin away from Preview */}
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '48px', flexShrink: 0 }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit', whiteSpace: 'nowrap' }}>
            <img 
              src="./logo.png" 
              alt="Whispr Logo" 
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                objectFit: 'cover',
                boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
                flexShrink: 0
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />
            <span style={{ fontWeight: 800, fontSize: '1.22rem', letterSpacing: '-0.5px' }}>
              Whispr <span class="text-gradient">Social</span>
            </span>
          </a>
        </div>

        {/* Center: Navigation Links (Spaced away from Logo) */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '18px' }} class="desktop-nav">
          <a href="#preview" style={navLinkStyle}>{t.preview}</a>
          <a href="#features" style={navLinkStyle}>{t.features}</a>
          <a href="#aidemo" style={navLinkStyle}>{t.aidemo}</a>
          <a href="#download" style={navLinkStyle}>{t.download}</a>
          <a href="#faq" style={navLinkStyle}>{t.faq}</a>
        </nav>

        {/* Right Side: Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Segmented EN/VI Switcher */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'var(--bg-subtle)',
            borderRadius: '20px',
            padding: '3px',
            border: '1px solid var(--border-color)',
            flexShrink: 0
          }}>
            <button 
              onClick={() => setLang('en')}
              style={{
                background: lang === 'en' ? 'var(--primary)' : 'transparent',
                color: lang === 'en' ? '#ffffff' : 'var(--text-muted)',
                border: 'none',
                padding: '4px 10px',
                borderRadius: '16px',
                fontWeight: 700,
                fontSize: '0.78rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('vi')}
              style={{
                background: lang === 'vi' ? 'var(--primary)' : 'transparent',
                color: lang === 'vi' ? '#ffffff' : 'var(--text-muted)',
                border: 'none',
                padding: '4px 10px',
                borderRadius: '16px',
                fontWeight: 700,
                fontSize: '0.78rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              VI
            </button>
          </div>

          {/* Single Clean 36x36px Round Theme Button (100% Dead Centered) */}
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border-color)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              padding: 0,
              margin: 0,
              flexShrink: 0,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.2s ease'
            }}
          >
            <i 
              className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} 
              style={{ 
                color: theme === 'dark' ? '#fbbf24' : '#4f46e5',
                fontSize: '0.96rem',
                margin: 'auto',
                lineHeight: 1
              }}
            ></i>
          </button>

          {/* Download CTA Button */}
          <a href="https://pub-e9c6e32e3a214a6882903c35717e07d2.r2.dev/Whispr%20Social%20Enterprise%20Setup%201.0.0.exe" download="Whispr Social Enterprise Setup 1.0.0.exe" class="btn-primary" style={{ padding: '8px 16px', fontSize: '0.84rem', borderRadius: '12px', whiteSpace: 'nowrap', flexShrink: 0 }}>
            <i class="fa-solid fa-download"></i>
            <span>{t.downloadBtn}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

const navLinkStyle = {
  color: 'var(--text-main)',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '0.88rem',
  padding: '6px 12px',
  borderRadius: '8px',
  opacity: 0.85,
  whiteSpace: 'nowrap',
  transition: 'all 0.2s ease'
};
