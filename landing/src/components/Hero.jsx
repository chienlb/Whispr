import React, { useState } from 'react';
import { translations } from '../i18n';

export default function Hero({ lang }) {
  const t = translations[lang].hero;
  const [showMacModal, setShowMacModal] = useState(false);

  return (
    <section className="py-16 md:py-24 text-center relative max-w-6xl mx-auto px-6 flex flex-col items-center">
      {/* Top Ambient Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-emerald-500/15 dark:bg-emerald-500/20 blur-[100px] pointer-events-none rounded-full"></div>

      {/* Top Status Pill */}
      <div className="flex justify-center mb-6 relative z-10">
        <div className="inline-flex items-center justify-center gap-2 bg-emerald-50 dark:bg-[#0a291c] border border-emerald-200 dark:border-[#1b5e43] px-4 py-1.5 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 shadow-sm">
          <span className="pulse-dot"></span>
          <span>{t.badge}</span>
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] max-w-4xl mx-auto mb-5 text-slate-900 dark:text-white relative z-10">
        {t.titleLine1} <span className="text-gradient">{t.titleGradient}</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed mb-9 relative z-10">
        {t.subtitle}
      </p>

      {/* Centered Download Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3.5 w-full mb-14 relative z-10">
        {/* Windows Download */}
        <a 
          href="https://pub-e9c6e32e3a214a6882903c35717e07d2.r2.dev/Whispr%20Social%20Enterprise%20Setup%201.0.0.exe" 
          download="Whispr Social Enterprise Setup 1.0.0.exe" 
          className="min-w-[210px] min-h-[52px] inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white font-bold text-sm shadow-md shadow-emerald-500/20 hover:-translate-y-0.5 transition-all text-left"
        >
          <i className="fa-brands fa-windows text-xl"></i>
          <div>
            <div className="text-[10px] opacity-80 font-bold uppercase tracking-wider">
              {t.windowsSub}
            </div>
            <div className="text-sm font-extrabold">
              {t.windowsBtn}
            </div>
          </div>
        </a>

        {/* macOS Download (Coming Soon) */}
        <button 
          onClick={() => setShowMacModal(true)} 
          className="min-w-[190px] min-h-[52px] inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-white dark:bg-[#11422e] border border-slate-200 dark:border-[#1b5e43] text-slate-900 dark:text-white font-bold text-sm hover:border-emerald-500 hover:bg-slate-50 dark:hover:bg-[#0a291c] hover:-translate-y-0.5 transition-all text-left shadow-sm"
        >
          <i className="fa-brands fa-apple text-xl text-emerald-500"></i>
          <div>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase flex items-center gap-1.5">
              <span className="bg-emerald-50 dark:bg-[#0a291c] border border-emerald-200 dark:border-[#1b5e43] px-2 py-0.5 rounded-md text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400">
                {t.macBadge}
              </span>
            </div>
            <div className="text-sm font-extrabold">
              {t.macBtn}
            </div>
          </div>
        </button>

        {/* Web Version Launch */}
        <a 
          href="http://localhost:3000" 
          target="_blank" 
          rel="noreferrer" 
          className="min-h-[52px] inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-white dark:bg-[#11422e] border border-slate-200 dark:border-[#1b5e43] text-slate-900 dark:text-white font-bold text-sm hover:border-emerald-500 hover:bg-slate-50 dark:hover:bg-[#0a291c] hover:-translate-y-0.5 transition-all shadow-sm"
        >
          <i className="fa-solid fa-globe text-emerald-500"></i>
          <span>{t.webBtn}</span>
        </a>
      </div>

      {/* Centered Key Stats Card */}
      <div className="max-w-4xl w-full mx-auto p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-5 text-center bg-white dark:bg-[#11422e] border border-slate-200 dark:border-[#1b5e43] rounded-2xl shadow-card dark:shadow-card-dark transition-all hover:border-emerald-500/50 relative z-10">
        <div>
          <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">100K+</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 font-bold mt-1">{t.metricUsers}</div>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">&lt; 15ms</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 font-bold mt-1">{t.metricLatency}</div>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">99.99%</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 font-bold mt-1">{t.metricUptime}</div>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-emerald-500">256-bit</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 font-bold mt-1">{t.metricAES}</div>
        </div>
      </div>

      {/* Apple macOS Coming Soon Modal */}
      {showMacModal && (
        <div className="fixed inset-0 w-screen h-screen bg-slate-900/65 backdrop-blur-md z-[99999] flex items-center justify-center p-5" onClick={() => setShowMacModal(false)}>
          <div className="max-w-md w-full mx-auto bg-white dark:bg-[#11422e] border border-slate-200 dark:border-[#1b5e43] rounded-2xl p-8 text-center shadow-xl relative overflow-hidden" onClick={e => e.stopPropagation()}>
            {/* Apple Silicon Chip Badge */}
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 dark:bg-[#0a291c] border border-emerald-200 dark:border-[#1b5e43] px-3.5 py-1 rounded-full text-xs font-extrabold text-emerald-600 dark:text-emerald-400 mb-5">
              <i className="fa-solid fa-microchip"></i>
              <span>Apple Silicon M1/M2/M3 & Intel Universal</span>
            </div>

            {/* Apple Icon Box */}
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-[#0a291c] border border-emerald-200 dark:border-[#1b5e43] text-3xl text-emerald-600 dark:text-emerald-400 mb-4 mx-auto flex items-center justify-center">
              <i className="fa-brands fa-apple"></i>
            </div>

            {/* Title */}
            <h3 className="text-xl font-extrabold mb-2 tracking-tight text-slate-900 dark:text-white">
              {lang === 'en' ? 'Whispr macOS Universal Build' : 'Bản Cài Whispr macOS Universal (.dmg)'}
            </h3>

            {/* Status Timeline */}
            <div className="bg-slate-50 dark:bg-[#0a291c] rounded-xl p-4 border border-slate-200 dark:border-[#1b5e43] mb-5 text-left text-xs space-y-2.5">
              <div className="flex items-center gap-2.5 text-emerald-500 font-bold">
                <i className="fa-solid fa-circle-check"></i>
                <span>{lang === 'en' ? 'Apple Silicon Native Compilation' : 'Biên dịch mã nguồn Native Apple Silicon'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-emerald-500 font-bold">
                <i className="fa-solid fa-circle-check"></i>
                <span>{lang === 'en' ? 'Sub-15ms Socket.io Optimization' : 'Tối ưu hóa đệm Socket.io độ trễ thấp'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <i className="fa-solid fa-spinner fa-spin"></i>
                <span>{lang === 'en' ? 'Apple Developer Notarization (v1.1 Release)' : 'Đang chờ ký duyệt chứng chỉ Apple (Phát hành v1.1)'}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-500 dark:text-slate-400 text-xs mb-6 leading-relaxed">
              {lang === 'en' 
                ? 'Whispr macOS DMG installer will be available shortly. In the meantime, you can download the Windows Portable edition or launch the Web App directly.'
                : 'Bản cài macOS DMG đang trong công đoạn xét duyệt chứng chỉ Apple Notarization. Trong thời gian chờ đợi, bạn có thể tải bản Windows Portable hoặc dùng trực tiếp trên Web.'}
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-2.5">
              <a 
                href="https://pub-e9c6e32e3a214a6882903c35717e07d2.r2.dev/Whispr%20Social%20Enterprise%20Setup%201.0.0.exe" 
                download="Whispr Social Enterprise Setup 1.0.0.exe" 
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white font-bold text-xs shadow-md hover:-translate-y-0.5 transition-all"
              >
                <i className="fa-brands fa-windows text-base"></i>
                <span>{lang === 'en' ? 'Download Windows (.exe) Instead' : 'Tải Bản Windows (.exe) Ngay'}</span>
              </a>
              <button 
                onClick={() => setShowMacModal(false)} 
                className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-[#0a291c] text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 dark:hover:bg-[#11422e] transition-all"
              >
                <span>{lang === 'en' ? 'Close & Get Notified' : 'Đóng & Đợi Thông Báo macOS'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
