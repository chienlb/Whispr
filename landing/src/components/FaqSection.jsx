import React, { useState } from 'react';
import { translations } from '../i18n';

export default function FaqSection({ lang }) {
  const t = translations[lang].faq;
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: t.q1, a: t.a1 },
    { q: t.q2, a: t.a2 },
    { q: t.q3, a: t.a3 },
    { q: t.q4, a: t.a4 }
  ];

  return (
    <section id="faq" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-9">
          <div className="inline-flex items-center justify-center gap-2 bg-emerald-50 dark:bg-[#0a291c] border border-emerald-200 dark:border-[#1b5e43] px-4 py-1.5 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-3">
            <i className="fa-solid fa-circle-question"></i>
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.titleLine1} <span className="text-gradient">{t.titleGradient}</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className={`bg-white dark:bg-[#11422e] border rounded-2xl p-5 px-6 cursor-pointer transition-all ${
                  isOpen 
                    ? 'border-emerald-600 dark:border-emerald-500 shadow-md shadow-emerald-500/10' 
                    : 'border-slate-200 dark:border-[#1b5e43] hover:border-emerald-500/50'
                }`}
              >
                <div className="flex justify-between items-center font-bold text-base text-slate-900 dark:text-white">
                  <span>{faq.q}</span>
                  <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-emerald-600 dark:text-emerald-400 text-xs`}></i>
                </div>
                {isOpen && (
                  <div className="text-slate-600 dark:text-slate-400 text-sm mt-3 pt-3 border-t border-slate-200 dark:border-[#1b5e43] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
