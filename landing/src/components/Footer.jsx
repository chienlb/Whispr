import React from 'react';
import { translations } from '../i18n';

export default function Footer({ lang }) {
  const t = translations[lang].footer;

  return (
    <footer className="border-t border-slate-200 dark:border-[#1b5e43] bg-white dark:bg-[#11422e] pt-12 pb-8 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="./logo.png" alt="Whispr Logo" className="w-8 h-8 object-contain" />
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">Whispr <span className="text-gradient">Social</span></span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs leading-relaxed">
              {t.desc}
            </p>
          </div>

          <div>
            <div className="font-extrabold text-sm mb-4 text-emerald-600 dark:text-emerald-400">{t.col1}</div>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="#download" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Windows (.exe)</a>
              <a href="#download" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">macOS (.dmg)</a>
              <a href="#download" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">ZIP Source Package</a>
              <a href="http://localhost:3000" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Web Version</a>
            </div>
          </div>

          <div>
            <div className="font-extrabold text-sm mb-4 text-emerald-600 dark:text-emerald-400">{t.col2}</div>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="#features" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Realtime Socket Chat</a>
              <a href="#features" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Kanban Task Board</a>
              <a href="#aidemo" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Whispr AI Assistant</a>
              <a href="#features" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">AES-256 Encryption</a>
            </div>
          </div>

          <div>
            <div className="font-extrabold text-sm mb-4 text-emerald-600 dark:text-emerald-400">{t.col3}</div>
            <div className="flex gap-4 text-lg">
              <a href="#" className="text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"><i className="fa-brands fa-discord"></i></a>
              <a href="#" className="text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-[#1b5e43] pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 dark:text-slate-400 gap-2">
          <div>{t.copy}</div>
          <div>Enterprise Edition v1.0.0 (Build 2026.08)</div>
        </div>
      </div>
    </footer>
  );
}
