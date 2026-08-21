import React, { useState } from 'react';
import { translations } from '../i18n';

export default function DownloadSection({ lang }) {
  const t = translations[lang].download;
  const [showMacNotify, setShowMacNotify] = useState(false);

  return (
    <section id="download" style={{ padding: '60px 0', position: 'relative' }}>
      <div class="container">
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px auto' }}>
          <div class="pill-badge" style={{ marginBottom: '12px' }}>
            <i class="fa-solid fa-download"></i>
            <span>{t.badge}</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-1px' }}>
            {t.titleLine1} <span class="text-gradient">{t.titleGradient}</span> {t.titleLine2}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '8px' }}>
            {t.subtitle}
          </p>
        </div>

        {/* 4 Download Cards Grid */}
        <div class="grid-4" style={{ maxWidth: '980px', margin: '0 auto 48px auto', gap: '16px' }}>
          {/* Card 1: Windows Portable EXE */}
          <div class="card-centered" style={{ padding: '28px 18px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', border: '2px solid var(--primary)', minHeight: '260px' }}>
            <div style={{ position: 'absolute', top: '-12px', background: 'var(--gradient-brand)', color: '#fff', fontWeight: 800, fontSize: '0.68rem', padding: '3px 12px', borderRadius: '20px', textTransform: 'uppercase' }}>
              {t.recTag}
            </div>
            <div class="icon-box" style={{ width: '56px', height: '56px', background: 'var(--primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '14px', marginLeft: 'auto', marginRight: 'auto' }}>
              <i class="fa-brands fa-windows"></i>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '6px', textAlign: 'center' }}>{t.winTitle}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textAlign: 'center', marginBottom: '14px', lineHeight: 1.5, flex: 1 }}>
              {t.winDesc}
            </p>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '16px', background: 'var(--primary-light)', padding: '4px 12px', borderRadius: '8px' }}>
              📦 v1.0.0 (105 MB)
            </div>
            <a href="https://pub-e9c6e32e3a214a6882903c35717e07d2.r2.dev/Whispr%20Social%20Enterprise%20Setup%201.0.0.exe" target="_blank" rel="noreferrer" class="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.84rem', padding: '10px 14px' }}>
              <i class="fa-solid fa-download"></i>
              <span>{t.winBtn}</span>
            </a>
          </div>

          {/* Card 2: macOS Universal (Coming Soon) */}
          <div class="card-centered" style={{ padding: '28px 18px', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '260px' }}>
            <div class="icon-box" style={{ width: '56px', height: '56px', background: 'rgba(124, 58, 237, 0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: 'var(--accent-purple)', marginBottom: '14px', marginLeft: 'auto', marginRight: 'auto' }}>
              <i class="fa-brands fa-apple"></i>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '6px', textAlign: 'center' }}>{t.macTitle}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textAlign: 'center', marginBottom: '14px', lineHeight: 1.5, flex: 1 }}>
              {t.macDesc}
            </p>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-purple)', marginBottom: '16px', background: 'rgba(124, 58, 237, 0.1)', padding: '4px 12px', borderRadius: '8px' }}>
              {t.macTag}
            </div>
            <button 
              onClick={() => setShowMacNotify(true)}
              class="btn-secondary" 
              style={{ width: '100%', justifyContent: 'center', fontSize: '0.84rem', padding: '10px 14px' }}
            >
              <span>{t.macBtn}</span>
            </button>
          </div>

          {/* Card 3: ZIP Archive */}
          <div class="card-centered" style={{ padding: '28px 18px', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '260px' }}>
            <div class="icon-box" style={{ width: '56px', height: '56px', background: 'rgba(16, 185, 129, 0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: 'var(--accent-emerald)', marginBottom: '14px', marginLeft: 'auto', marginRight: 'auto' }}>
              <i class="fa-solid fa-file-zipper"></i>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '6px', textAlign: 'center' }}>{t.zipTitle}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textAlign: 'center', marginBottom: '14px', lineHeight: 1.5, flex: 1 }}>
              {t.zipDesc}
            </p>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-emerald)', marginBottom: '16px', background: 'rgba(16, 185, 129, 0.1)', padding: '4px 12px', borderRadius: '8px' }}>
              📦 Bundle (152 MB)
            </div>
            <a href="/download/zip" class="btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.84rem', padding: '10px 14px' }}>
              <i class="fa-solid fa-file-arrow-down"></i>
              <span>{t.zipBtn}</span>
            </a>
          </div>

          {/* Card 4: Web Browser Access */}
          <div class="card-centered" style={{ padding: '28px 18px', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '260px' }}>
            <div class="icon-box" style={{ width: '56px', height: '56px', background: 'rgba(236, 72, 153, 0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: 'var(--accent-pink)', marginBottom: '14px', marginLeft: 'auto', marginRight: 'auto' }}>
              <i class="fa-solid fa-globe"></i>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '6px', textAlign: 'center' }}>{t.webTitle}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textAlign: 'center', marginBottom: '14px', lineHeight: 1.5, flex: 1 }}>
              {t.webDesc}
            </p>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-pink)', marginBottom: '16px', background: 'rgba(236, 72, 153, 0.1)', padding: '4px 12px', borderRadius: '8px' }}>
              🌐 Web Access
            </div>
            <a href="http://localhost:3000" target="_blank" rel="noreferrer" class="btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.84rem', padding: '10px 14px' }}>
              <i class="fa-solid fa-rocket"></i>
              <span>{t.webBtn}</span>
            </a>
          </div>
        </div>

        {/* System Requirements Table */}
        <div class="card-centered" style={{ padding: '28px', maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <i class="fa-solid fa-microchip" style={{ color: 'var(--primary)' }}></i>
            {t.reqTitle}
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', textAlign: 'center' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--primary)', fontWeight: 800 }}>
                  <th style={{ padding: '10px', textAlign: 'left' }}>{t.colComp}</th>
                  <th style={{ padding: '10px' }}>{t.colMin}</th>
                  <th style={{ padding: '10px' }}>{t.colRec}</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-main)' }}>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '10px', textAlign: 'left', fontWeight: 700 }}>{t.os}</td>
                  <td style={{ padding: '10px', color: 'var(--text-muted)' }}>Windows 10 / 11 (64-bit)</td>
                  <td style={{ padding: '10px', color: 'var(--accent-emerald)', fontWeight: 700 }}>Windows 11 / macOS Sequoia</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '10px', textAlign: 'left', fontWeight: 700 }}>{t.ram}</td>
                  <td style={{ padding: '10px', color: 'var(--text-muted)' }}>2 GB RAM</td>
                  <td style={{ padding: '10px', color: 'var(--accent-emerald)', fontWeight: 700 }}>4 GB RAM trở lên</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '10px', textAlign: 'left', fontWeight: 700 }}>{t.disk}</td>
                  <td style={{ padding: '10px', color: 'var(--text-muted)' }}>200 MB free space</td>
                  <td style={{ padding: '10px', color: 'var(--accent-emerald)', fontWeight: 700 }}>500 MB SSD space</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', textAlign: 'left', fontWeight: 700 }}>{t.net}</td>
                  <td style={{ padding: '10px', color: 'var(--text-muted)' }}>Standard broadband</td>
                  <td style={{ padding: '10px', color: 'var(--accent-emerald)', fontWeight: 700 }}>Stable connection (&gt; 5Mbps)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showMacNotify && (
        <div class="modal-overlay-fixed" onClick={() => setShowMacNotify(false)}>
          <div class="card-centered modal-content-centered" onClick={e => e.stopPropagation()} style={{
            maxWidth: '460px',
            padding: '32px 28px',
            textAlign: 'center',
            border: '1px solid rgba(124, 58, 237, 0.3)',
            boxShadow: '0 25px 60px -10px rgba(124, 58, 237, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div class="icon-box" style={{
              width: '64px',
              height: '64px',
              borderRadius: '18px',
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(14, 165, 233, 0.15) 100%)',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              fontSize: '2.2rem',
              color: 'var(--accent-purple)',
              marginBottom: '16px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              <i class="fa-brands fa-apple"></i>
            </div>

            <h4 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>
              {lang === 'en' ? 'macOS App Release Waitlist' : 'Đăng Ký Nhận Thông Báo macOS'}
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '20px', lineHeight: 1.6 }}>
              {lang === 'en' 
                ? 'Thank you! The macOS DMG installer is currently being notarized by Apple. You will receive an immediate notification upon release.'
                : 'Cảm ơn bạn! Bản cài macOS DMG đang trong quá trình xét duyệt chứng chỉ từ Apple và sẽ tự động thông báo khi v1.1 phát hành.'}
            </p>
            <button onClick={() => setShowMacNotify(false)} class="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px 20px' }}>
              <i class="fa-solid fa-check"></i>
              <span>{lang === 'en' ? 'OK, Keep Me Updated' : 'Đã Rõ, Tôi Sẽ Đợi v1.1'}</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
