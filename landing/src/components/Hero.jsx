import React, { useState } from 'react';
import { translations } from '../i18n';

export default function Hero({ lang }) {
  const t = translations[lang].hero;
  const [showMacModal, setShowMacModal] = useState(false);

  return (
    <section style={{ padding: '60px 0 40px 0', textAlign: 'center', position: 'relative' }}>
      <div class="aurora-glow-top"></div>
      <div class="container flex-col-center">
        {/* Top Status Pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div class="pill-badge">
            <span class="pulse-dot"></span>
            <span>{t.badge}</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: '3.8rem',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-2px',
          maxWidth: '880px',
          margin: '0 auto 20px auto',
          textAlign: 'center'
        }}>
          {t.titleLine1} <span class="text-gradient">{t.titleGradient}</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '1.18rem',
          color: 'var(--text-muted)',
          maxWidth: '660px',
          margin: '0 auto 36px auto',
          fontWeight: 500,
          lineHeight: 1.6,
          textAlign: 'center'
        }}>
          {t.subtitle}
        </p>

        {/* Centered Download Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap', width: '100%', marginBottom: '52px' }}>
          {/* Windows Download */}
          <a href="https://pub-e9c6e32e3a214a6882903c35717e07d2.r2.dev/Whispr%20Social%20Enterprise%20Setup%201.0.0.exe" target="_blank" rel="noreferrer" class="btn-primary" style={{ minWidth: '220px', minHeight: '52px' }}>
            <i class="fa-brands fa-windows" style={{ fontSize: '1.2rem' }}></i>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.7rem', opacity: 0.8, fontWeight: 700, textTransform: 'uppercase' }}>
                {t.windowsSub}
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 800 }}>
                {t.windowsBtn}
              </div>
            </div>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '3px 8px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 800 }}>
              93.8 MB
            </span>
          </a>

          {/* macOS Download (Coming Soon) */}
          <button 
            onClick={() => setShowMacModal(true)} 
            class="btn-secondary"
            style={{ minWidth: '200px', minHeight: '52px' }}
          >
            <i class="fa-brands fa-apple" style={{ fontSize: '1.25rem', color: 'var(--accent-purple)' }}></i>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--accent-purple)', fontWeight: 800, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{
                  background: 'rgba(124, 58, 237, 0.1)',
                  border: '1px solid rgba(124, 58, 237, 0.25)',
                  padding: '2px 8px',
                  borderRadius: '8px',
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  color: '#7c3aed'
                }}>
                  {t.macBadge}
                </span>
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 800 }}>
                {t.macBtn}
              </div>
            </div>
          </button>

          {/* Web Version Launch */}
          <a href="http://localhost:3000" target="_blank" rel="noreferrer" class="btn-secondary" style={{ minHeight: '52px' }}>
            <i class="fa-solid fa-globe" style={{ color: 'var(--primary)' }}></i>
            <span>{t.webBtn}</span>
          </a>
        </div>

        {/* Centered Key Stats Card */}
        <div class="card-centered" style={{
          maxWidth: '900px',
          width: '100%',
          margin: '0 auto',
          padding: '24px 32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--primary)' }}>100K+</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 700 }}>{t.metricUsers}</div>
          </div>
          <div>
            <div style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--accent-purple)' }}>&lt; 15ms</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 700 }}>{t.metricLatency}</div>
          </div>
          <div>
            <div style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--accent-pink)' }}>99.99%</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 700 }}>{t.metricUptime}</div>
          </div>
          <div>
            <div style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>256-bit</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 700 }}>{t.metricAES}</div>
          </div>
        </div>
      </div>

      {/* Ultra-Stunning Apple macOS Coming Soon Modal */}
      {showMacModal && (
        <div class="modal-overlay-fixed" onClick={() => setShowMacModal(false)}>
          <div class="card-centered modal-content-centered" onClick={e => e.stopPropagation()} style={{
            maxWidth: '480px',
            padding: '36px 30px',
            textAlign: 'center',
            border: '1px solid rgba(124, 58, 237, 0.3)',
            boxShadow: '0 25px 60px -10px rgba(124, 58, 237, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Top Glow */}
            <div style={{
              position: 'absolute',
              top: '-40px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '300px',
              height: '150px',
              background: 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.25) 0%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none'
            }}></div>

            {/* Apple Silicon Chip Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(124, 58, 237, 0.12)', border: '1px solid rgba(124, 58, 237, 0.3)', padding: '5px 14px', borderRadius: '20px', fontSize: '0.74rem', fontWeight: 800, color: '#7c3aed', marginBottom: '20px' }}>
              <i class="fa-solid fa-microchip"></i>
              <span>Apple Silicon M1/M2/M3 & Intel Universal</span>
            </div>

            {/* Apple Icon Box */}
            <div class="icon-box" style={{
              width: '72px',
              height: '72px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(14, 165, 233, 0.15) 100%)',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              fontSize: '2.5rem',
              color: 'var(--accent-purple)',
              marginBottom: '18px',
              boxShadow: '0 8px 24px rgba(124, 58, 237, 0.2)',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              <i class="fa-brands fa-apple"></i>
            </div>

            {/* Title */}
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.5px' }}>
              {lang === 'en' ? 'Whispr macOS Universal Build' : 'Bản Cài Whispr macOS Universal (.dmg)'}
            </h3>

            {/* Status Timeline */}
            <div style={{
              background: 'var(--bg-subtle)',
              borderRadius: '14px',
              padding: '16px',
              border: '1px solid var(--border-color)',
              marginBottom: '20px',
              textAlign: 'left',
              fontSize: '0.84rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#10b981', fontWeight: 700 }}>
                <i class="fa-solid fa-circle-check"></i>
                <span>{lang === 'en' ? 'Apple Silicon Native Compilation' : 'Biên dịch mã nguồn Native Apple Silicon'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#10b981', fontWeight: 700 }}>
                <i class="fa-solid fa-circle-check"></i>
                <span>{lang === 'en' ? 'Sub-15ms Socket.io Optimization' : 'Tối ưu hóa đệm Socket.io độ trễ thấp'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#7c3aed', fontWeight: 700 }}>
                <i class="fa-solid fa-spinner fa-spin"></i>
                <span>{lang === 'en' ? 'Apple Developer Notarization (v1.1 Release)' : 'Đang chờ ký duyệt chứng chỉ Apple (Phát hành v1.1)'}</span>
              </div>
            </div>

            {/* Description */}
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '24px', lineHeight: 1.6 }}>
              {lang === 'en' 
                ? 'Whispr macOS DMG installer will be available shortly. In the meantime, you can download the Windows Portable edition or launch the Web App directly.'
                : 'Bản cài macOS DMG đang trong công đoạn xét duyệt chứng chỉ Apple Notarization. Trong thời gian chờ đợi, bạn có thể tải bản Windows Portable hoặc dùng trực tiếp trên Web.'}
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="https://pub-e9c6e32e3a214a6882903c35717e07d2.r2.dev/Whispr%20Social%20Enterprise%20Setup%201.0.0.exe" target="_blank" rel="noreferrer" class="btn-primary" style={{ justifyContent: 'center', padding: '12px 20px' }}>
                <i class="fa-brands fa-windows" style={{ fontSize: '1.1rem' }}></i>
                <span>{lang === 'en' ? 'Download Windows (.exe) Instead' : 'Tải Bản Windows (.exe) Ngay'}</span>
              </a>
              <button onClick={() => setShowMacModal(false)} class="btn-secondary" style={{ justifyContent: 'center', padding: '11px 20px' }}>
                <span>{lang === 'en' ? 'Close & Get Notified' : 'Đóng & Đợi Thông Báo macOS'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
