import React from 'react';
import { translations } from '../i18n';

export default function Features({ lang }) {
  const t = translations[lang].features;

  const featureList = [
    { icon: 'fa-bolt', colorClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25', title: t.f1Title, desc: t.f1Desc },
    { icon: 'fa-table-columns', colorClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25', title: t.f2Title, desc: t.f2Desc },
    { icon: 'fa-robot', colorClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25', title: t.f3Title, desc: t.f3Desc },
    { icon: 'fa-wand-magic-sparkles', colorClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25', title: t.f4Title, desc: t.f4Desc },
    { icon: 'fa-shield-halved', colorClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25', title: t.f5Title, desc: t.f5Desc },
    { icon: 'fa-laptop-code', colorClass: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/25', title: t.f6Title, desc: t.f6Desc }
  ];

  return (
    <section id="features" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center gap-2 bg-emerald-50 dark:bg-[#0a291c] border border-emerald-200 dark:border-[#1b5e43] px-4 py-1.5 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-3">
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.titleLine1} <span className="text-gradient">{t.titleGradient}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-2">
            {t.subtitle}
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {featureList.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-[#11422e] border border-slate-200 dark:border-[#1b5e43] rounded-2xl p-7 text-center flex flex-col items-center shadow-sm dark:shadow-card-dark hover:border-emerald-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl border ${item.colorClass} mb-4`}>
                <i className={`fa-solid ${item.icon}`}></i>
              </div>

              <h3 className="text-lg font-extrabold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
