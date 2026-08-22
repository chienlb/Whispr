import React from 'react';
import { translations } from '../i18n';

export default function Navbar({ theme, setTheme }) {
  const t = translations.en.nav;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-[#061e14]/90 backdrop-blur-md border-b border-slate-200 dark:border-[#1b5e43] transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex items-center mr-12 shrink-0">
          <a href="#" className="flex items-center gap-3 no-underline text-inherit whitespace-nowrap">
            <img 
              src="./logo.png" 
              alt="Whispr Logo" 
              className="w-8 h-8 rounded-xl object-cover shadow-sm shrink-0"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />
            <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
              Whispr <span className="text-gradient">Social</span>
            </span>
          </a>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-4">
          <a href="#preview" className="text-slate-700 dark:text-slate-200 font-semibold text-sm px-3 py-1.5 rounded-lg opacity-85 hover:opacity-100 hover:bg-slate-100 dark:hover:bg-[#0a291c] transition-all">{t.preview}</a>
          <a href="#features" className="text-slate-700 dark:text-slate-200 font-semibold text-sm px-3 py-1.5 rounded-lg opacity-85 hover:opacity-100 hover:bg-slate-100 dark:hover:bg-[#0a291c] transition-all">{t.features}</a>
          <a href="#aidemo" className="text-slate-700 dark:text-slate-200 font-semibold text-sm px-3 py-1.5 rounded-lg opacity-85 hover:opacity-100 hover:bg-slate-100 dark:hover:bg-[#0a291c] transition-all">{t.aidemo}</a>
          <a href="#download" className="text-slate-700 dark:text-slate-200 font-semibold text-sm px-3 py-1.5 rounded-lg opacity-85 hover:opacity-100 hover:bg-slate-100 dark:hover:bg-[#0a291c] transition-all">{t.download}</a>
          <a href="#faq" className="text-slate-700 dark:text-slate-200 font-semibold text-sm px-3 py-1.5 rounded-lg opacity-85 hover:opacity-100 hover:bg-slate-100 dark:hover:bg-[#0a291c] transition-all">{t.faq}</a>
        </nav>

        {/* Right Side: Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher Button */}
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-[#0a291c] border border-slate-200 dark:border-[#1b5e43] cursor-pointer flex items-center justify-center shrink-0 shadow-sm hover:bg-slate-200 dark:hover:bg-[#11422e] transition-all"
          >
            <i 
              className={`fa-solid ${theme === 'dark' ? 'fa-sun text-amber-400' : 'fa-moon text-emerald-600'} text-sm leading-none`}
            ></i>
          </button>

          {/* Download CTA Button */}
          <a 
            href="https://pub-e9c6e32e3a214a6882903c35717e07d2.r2.dev/Whispr%20Social%20Enterprise%20Setup%201.0.0.exe" 
            download="Whispr Social Enterprise Setup 1.0.0.exe" 
            className="inline-flex items-center justify-center gap-2 px-4.5 py-2 text-xs font-extrabold rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white shadow-md shadow-emerald-500/20 hover:-translate-y-0.5 transition-all shrink-0"
          >
            <i className="fa-solid fa-download"></i>
            <span>{t.downloadBtn}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
