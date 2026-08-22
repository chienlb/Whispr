import React, { useState } from 'react';
import { translations } from '../i18n';

export default function DownloadSection({ lang }) {
  const t = translations[lang].download;
  const [showMacNotify, setShowMacNotify] = useState(false);

  return (
    <section id="download" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center gap-2 bg-emerald-50 dark:bg-[#0a291c] border border-emerald-200 dark:border-[#1b5e43] px-4 py-1.5 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-3">
            <i className="fa-solid fa-download"></i>
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.titleLine1} <span className="text-gradient">{t.titleGradient}</span> {t.titleLine2}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-2">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Download Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {/* Card 1: Windows Portable EXE */}
          <div className="bg-white dark:bg-[#11422e] border border-slate-200 dark:border-[#1b5e43] rounded-2xl p-6 flex flex-col items-center text-center min-h-[250px] shadow-sm dark:shadow-card-dark hover:border-emerald-500 hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center text-2xl mb-3.5 mt-1">
              <i className="fa-brands fa-windows"></i>
            </div>
            <h3 className="text-lg font-extrabold mb-1.5 text-slate-900 dark:text-white">{t.winTitle}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs mb-4 leading-relaxed flex-1">
              {t.winDesc}
            </p>
            <div className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 mb-4 bg-emerald-50 dark:bg-[#0a291c] border border-emerald-200 dark:border-[#1b5e43] px-3 py-1 rounded-lg">
              ✨ Standalone Edition
            </div>
            <a 
              href="https://pub-e9c6e32e3a214a6882903c35717e07d2.r2.dev/Whispr%20Social%20Enterprise%20Setup%201.0.0.exe" 
              download="Whispr Social Enterprise Setup 1.0.0.exe" 
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white font-bold text-xs shadow-md hover:-translate-y-0.5 transition-all"
            >
              <i className="fa-solid fa-download"></i>
              <span>{t.winBtn}</span>
            </a>
          </div>

          {/* Card 2: macOS Universal (Coming Soon) */}
          <div className="bg-white dark:bg-[#11422e] border border-slate-200 dark:border-[#1b5e43] rounded-2xl p-6 flex flex-col items-center text-center min-h-[250px] shadow-sm dark:shadow-card-dark hover:border-emerald-500 hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center text-2xl mb-3.5 mt-1">
              <i className="fa-brands fa-apple"></i>
            </div>
            <h3 className="text-lg font-extrabold mb-1.5 text-slate-900 dark:text-white">{t.macTitle}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs mb-4 leading-relaxed flex-1">
              {t.macDesc}
            </p>
            <div className="text-xs font-extrabold text-emerald-500 mb-4 bg-emerald-50 dark:bg-[#0a291c] px-3 py-1 rounded-lg">
              {t.macTag}
            </div>
            <button 
              onClick={() => setShowMacNotify(true)}
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-[#0a291c] text-slate-900 dark:text-white font-bold text-xs border border-slate-200 dark:border-[#1b5e43] hover:bg-slate-200 dark:hover:bg-[#11422e] transition-all"
            >
              <span>{t.macBtn}</span>
            </button>
          </div>

          {/* Card 3: ZIP Archive */}
          <div className="bg-white dark:bg-[#11422e] border border-slate-200 dark:border-[#1b5e43] rounded-2xl p-6 flex flex-col items-center text-center min-h-[250px] shadow-sm dark:shadow-card-dark hover:border-emerald-500 hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center text-2xl mb-3.5 mt-1">
              <i className="fa-solid fa-file-zipper"></i>
            </div>
            <h3 className="text-lg font-extrabold mb-1.5 text-slate-900 dark:text-white">{t.zipTitle}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs mb-4 leading-relaxed flex-1">
              {t.zipDesc}
            </p>
            <div className="text-xs font-extrabold text-emerald-500 mb-4 bg-emerald-50 dark:bg-[#0a291c] px-3 py-1 rounded-lg">
              📦 Source Package
            </div>
            <a 
              href="/download/zip" 
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-[#0a291c] text-slate-900 dark:text-white font-bold text-xs border border-slate-200 dark:border-[#1b5e43] hover:bg-slate-200 dark:hover:bg-[#11422e] transition-all"
            >
              <i className="fa-solid fa-file-arrow-down"></i>
              <span>{t.zipBtn}</span>
            </a>
          </div>

          {/* Card 4: Web Browser Access */}
          <div className="bg-white dark:bg-[#11422e] border border-slate-200 dark:border-[#1b5e43] rounded-2xl p-6 flex flex-col items-center text-center min-h-[250px] shadow-sm dark:shadow-card-dark hover:border-emerald-500 hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center text-2xl mb-3.5 mt-1">
              <i className="fa-solid fa-globe"></i>
            </div>
            <h3 className="text-lg font-extrabold mb-1.5 text-slate-900 dark:text-white">{t.webTitle}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs mb-4 leading-relaxed flex-1">
              {t.webDesc}
            </p>
            <div className="text-xs font-extrabold text-emerald-500 mb-4 bg-emerald-50 dark:bg-[#0a291c] px-3 py-1 rounded-lg">
              🌐 Web Access
            </div>
            <a 
              href="http://localhost:3000" 
              target="_blank" 
              rel="noreferrer" 
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-[#0a291c] text-slate-900 dark:text-white font-bold text-xs border border-slate-200 dark:border-[#1b5e43] hover:bg-slate-200 dark:hover:bg-[#11422e] transition-all"
            >
              <i className="fa-solid fa-rocket"></i>
              <span>{t.webBtn}</span>
            </a>
          </div>
        </div>

        {/* System Requirements Table */}
        <div className="bg-white dark:bg-[#11422e] border border-slate-200 dark:border-[#1b5e43] rounded-2xl p-7 max-w-3xl mx-auto shadow-sm">
          <h3 className="text-xl font-extrabold mb-4 flex items-center justify-center gap-2 text-slate-900 dark:text-white">
            <i className="fa-solid fa-microchip text-emerald-600 dark:text-emerald-400"></i>
            {t.reqTitle}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm text-center">
              <thead>
                <tr className="border-b border-slate-200 dark:border-[#1b5e43] text-emerald-600 dark:text-emerald-400 font-extrabold">
                  <th className="py-2.5 px-3 text-left">{t.colComp}</th>
                  <th className="py-2.5 px-3">{t.colMin}</th>
                  <th className="py-2.5 px-3">{t.colRec}</th>
                </tr>
              </thead>
              <tbody className="text-slate-800 dark:text-slate-200">
                <tr className="border-b border-slate-200 dark:border-[#1b5e43]">
                  <td className="py-2.5 px-3 text-left font-bold">{t.os}</td>
                  <td className="py-2.5 px-3 text-slate-500 dark:text-slate-400">Windows 10 / 11 (64-bit)</td>
                  <td className="py-2.5 px-3 text-emerald-600 dark:text-emerald-400 font-bold">Windows 11 / macOS Sequoia</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-[#1b5e43]">
                  <td className="py-2.5 px-3 text-left font-bold">{t.ram}</td>
                  <td className="py-2.5 px-3 text-slate-500 dark:text-slate-400">2 GB RAM</td>
                  <td className="py-2.5 px-3 text-emerald-600 dark:text-emerald-400 font-bold">4 GB RAM trở lên</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 text-left font-bold">{t.net}</td>
                  <td className="py-2.5 px-3 text-slate-500 dark:text-slate-400">Standard broadband</td>
                  <td className="py-2.5 px-3 text-emerald-600 dark:text-emerald-400 font-bold">Stable connection (&gt; 5Mbps)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showMacNotify && (
        <div className="fixed inset-0 w-screen h-screen bg-slate-900/65 backdrop-blur-md z-[99999] flex items-center justify-center p-5" onClick={() => setShowMacNotify(false)}>
          <div className="max-w-md w-full mx-auto bg-white dark:bg-[#11422e] border border-slate-200 dark:border-[#1b5e43] rounded-2xl p-7 text-center shadow-xl relative overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-[#0a291c] border border-emerald-200 dark:border-[#1b5e43] text-3xl text-emerald-600 dark:text-emerald-400 mb-4 mx-auto flex items-center justify-center shadow-sm">
              <i className="fa-brands fa-apple"></i>
            </div>

            <h4 className="text-xl font-extrabold mb-2 text-slate-900 dark:text-white">
              {lang === 'en' ? 'macOS App Release Waitlist' : 'Đăng Ký Nhận Thông Báo macOS'}
            </h4>
            <p className="text-slate-500 dark:text-slate-400 text-xs mb-5 leading-relaxed">
              {lang === 'en' 
                ? 'Thank you! The macOS DMG installer is currently being notarized by Apple. You will receive an immediate notification upon release.'
                : 'Cảm ơn bạn! Bản cài macOS DMG đang trong quá trình xét duyệt chứng chỉ từ Apple và sẽ tự động thông báo khi v1.1 phát hành.'}
            </p>
            <button 
              onClick={() => setShowMacNotify(false)} 
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md hover:-translate-y-0.5 transition-all"
            >
              <i className="fa-solid fa-check"></i>
              <span>{lang === 'en' ? 'OK, Keep Me Updated' : 'Đã Rõ, Tôi Sẽ Đợi v1.1'}</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
