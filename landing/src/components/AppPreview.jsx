import React, { useState } from 'react';
import { translations } from '../i18n';

export default function AppPreview({ lang }) {
  const t = translations[lang].preview;
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <section id="preview" className="py-12 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-7">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 tracking-tight text-slate-900 dark:text-white">
            {t.titleLine1} <span className="text-gradient">{t.titleGradient}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center items-center gap-2 mb-6 flex-wrap">
          <button 
            onClick={() => setActiveTab('chat')} 
            className={`min-w-[180px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border transition-all cursor-pointer ${
              activeTab === 'chat'
                ? 'bg-emerald-600 dark:bg-emerald-500 text-white border-emerald-600 dark:border-emerald-500 shadow-md shadow-emerald-500/20'
                : 'bg-white dark:bg-[#11422e] text-slate-700 dark:text-slate-200 border-slate-200 dark:border-[#1b5e43] hover:bg-slate-50 dark:hover:bg-[#0a291c]'
            }`}
          >
            <i className="fa-solid fa-comments"></i>
            <span>{t.tabChat}</span>
          </button>
          <button 
            onClick={() => setActiveTab('kanban')} 
            className={`min-w-[180px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border transition-all cursor-pointer ${
              activeTab === 'kanban'
                ? 'bg-emerald-600 dark:bg-emerald-500 text-white border-emerald-600 dark:border-emerald-500 shadow-md shadow-emerald-500/20'
                : 'bg-white dark:bg-[#11422e] text-slate-700 dark:text-slate-200 border-slate-200 dark:border-[#1b5e43] hover:bg-slate-50 dark:hover:bg-[#0a291c]'
            }`}
          >
            <i className="fa-solid fa-list-check"></i>
            <span>{t.tabKanban}</span>
          </button>
          <button 
            onClick={() => setActiveTab('feed')} 
            className={`min-w-[180px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border transition-all cursor-pointer ${
              activeTab === 'feed'
                ? 'bg-emerald-600 dark:bg-emerald-500 text-white border-emerald-600 dark:border-emerald-500 shadow-md shadow-emerald-500/20'
                : 'bg-white dark:bg-[#11422e] text-slate-700 dark:text-slate-200 border-slate-200 dark:border-[#1b5e43] hover:bg-slate-50 dark:hover:bg-[#0a291c]'
            }`}
          >
            <i className="fa-solid fa-newspaper"></i>
            <span>{t.tabFeed}</span>
          </button>
        </div>

        {/* Mockup Frame */}
        <div className="max-w-4xl w-full mx-auto bg-white dark:bg-[#11422e] border border-slate-200 dark:border-[#1b5e43] rounded-2xl shadow-xl overflow-hidden">
          {/* macOS Topbar */}
          <div className="bg-slate-100 dark:bg-[#0a291c] px-5 py-3 flex items-center justify-between border-b border-slate-200 dark:border-[#1b5e43]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-bold">
              Whispr Social Enterprise — Live Interactive Preview Mode
            </div>
            <div className="w-12"></div>
          </div>

          {/* Tab Content Panels */}
          <div className="p-7 min-h-[400px] bg-white dark:bg-[#11422e]">
            {activeTab === 'chat' && (
              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5">
                {/* Sidebar */}
                <div className="bg-slate-50 dark:bg-[#0a291c] rounded-xl p-3.5 border border-slate-200 dark:border-[#1b5e43]">
                  <div className="font-extrabold text-xs text-emerald-600 dark:text-emerald-400 mb-2.5 tracking-wider">
                    {t.chatHeader}
                  </div>
                  <div className="flex flex-col gap-1.5 text-sm">
                    <div className="px-3 py-2 bg-emerald-600 text-white rounded-lg font-bold">
                      💬 # general
                    </div>
                    <div className="px-3 py-2 rounded-lg text-slate-500 dark:text-slate-400 font-semibold hover:bg-slate-100 dark:hover:bg-[#11422e]">📢 # announcements</div>
                    <div className="px-3 py-2 rounded-lg text-slate-500 dark:text-slate-400 font-semibold hover:bg-slate-100 dark:hover:bg-[#11422e]">⚡ # engineering</div>
                    <div className="px-3 py-2 rounded-lg text-slate-500 dark:text-slate-400 font-semibold hover:bg-slate-100 dark:hover:bg-[#11422e]">🎨 # ui-ux-design</div>
                  </div>
                </div>

                {/* Main Chat Area */}
                <div className="flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-3.5">
                    <div className="flex gap-3">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Avatar" className="w-9 h-9 rounded-full object-cover shrink-0" />
                      <div className="bg-slate-50 dark:bg-[#0a291c] p-3.5 rounded-xl border border-slate-200 dark:border-[#1b5e43]">
                        <div className="font-bold text-sm text-emerald-600 dark:text-emerald-400">Alex Rivera <span className="text-xs font-normal text-slate-400 dark:text-slate-500 ml-2">14:25</span></div>
                        <div className="text-sm text-slate-800 dark:text-slate-200 mt-1">Whispr Enterprise v1.0 is officially released! Enjoy sub-15ms socket communication & AI features 🚀</div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" alt="Avatar" className="w-9 h-9 rounded-full object-cover shrink-0" />
                      <div className="bg-slate-50 dark:bg-[#0a291c] p-3.5 rounded-xl border border-slate-200 dark:border-[#1b5e43]">
                        <div className="font-bold text-sm text-emerald-500 dark:text-emerald-400">Elena Rostova <span className="text-xs font-normal text-slate-400 dark:text-slate-500 ml-2">14:27</span></div>
                        <div className="text-sm text-slate-800 dark:text-slate-200 mt-1">Awesome! The UI is incredibly crisp, light, and responsive ✨</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2.5 bg-slate-50 dark:bg-[#0a291c] p-2.5 px-3.5 rounded-xl border border-slate-200 dark:border-[#1b5e43] items-center">
                    <i className="fa-solid fa-paperclip text-slate-400"></i>
                    <input type="text" placeholder={t.placeholderMsg} disabled className="bg-transparent border-none text-slate-900 dark:text-white w-full outline-none text-sm placeholder:text-slate-400" />
                    <button className="bg-emerald-600 text-white w-8 h-8 rounded-lg flex items-center justify-center shrink-0 hover:bg-emerald-700 transition-all"><i className="fa-solid fa-paper-plane text-xs"></i></button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'kanban' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                <div className="bg-slate-50 dark:bg-[#0a291c] p-3.5 rounded-xl border border-slate-200 dark:border-[#1b5e43]">
                  <div className="font-extrabold text-xs text-amber-500 mb-2.5 flex justify-between items-center">
                    <span>📋 TO DO (2)</span>
                    <span className="text-[10px] bg-amber-500/15 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-md">Queue</span>
                  </div>
                  <div className="bg-white dark:bg-[#11422e] p-3 rounded-lg text-sm font-semibold border border-slate-200 dark:border-[#1b5e43] text-slate-900 dark:text-white">
                    Google OAuth Single Sign-On
                    <div className="text-xs font-normal text-slate-400 dark:text-slate-500 mt-1.5">👤 Marcus Vance</div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-[#0a291c] p-3.5 rounded-xl border border-slate-200 dark:border-[#1b5e43]">
                  <div className="font-extrabold text-xs text-emerald-600 dark:text-emerald-400 mb-2.5 flex justify-between items-center">
                    <span>⚡ IN PROGRESS (1)</span>
                    <span className="text-[10px] bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-md">Active</span>
                  </div>
                  <div className="bg-white dark:bg-[#11422e] p-3 rounded-lg text-sm font-semibold border-l-4 border-l-emerald-600 border border-slate-200 dark:border-[#1b5e43] text-slate-900 dark:text-white">
                    Optimize Socket Cluster Latency
                    <div className="text-xs font-normal text-slate-400 dark:text-slate-500 mt-1.5">👤 Alex Rivera</div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-[#0a291c] p-3.5 rounded-xl border border-slate-200 dark:border-[#1b5e43]">
                  <div className="font-extrabold text-xs text-emerald-500 mb-2.5 flex justify-between items-center">
                    <span>✅ COMPLETED (3)</span>
                    <span className="text-[10px] bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-md">Done</span>
                  </div>
                  <div className="bg-white dark:bg-[#11422e] p-3 rounded-lg text-sm font-semibold border border-slate-200 dark:border-[#1b5e43] text-slate-900 dark:text-white">
                    Pristine Light Theme UI System
                    <div className="text-xs font-normal text-emerald-500 mt-1.5">✔ Elena Rostova</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'feed' && (
              <div className="max-w-xl mx-auto">
                <div className="bg-slate-50 dark:bg-[#0a291c] rounded-2xl p-4.5 border border-slate-200 dark:border-[#1b5e43]">
                  <div className="flex items-center gap-3 mb-3">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" alt="Avatar" className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-600" />
                    <div>
                      <div className="font-extrabold text-sm text-slate-900 dark:text-white">Elena Rostova</div>
                      <div className="text-xs text-slate-400 dark:text-slate-500">Lead UX/UI Designer • 15m ago</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-800 dark:text-slate-200 mb-3 leading-relaxed">
                    🎉 Official release of Whispr Social Enterprise v1.0! Seamlessly combines team chat, Kanban boards, and social feed in one pristine workspace 🚀✨
                  </p>
                  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800" alt="Feed Post" className="w-full h-48 object-cover rounded-xl mb-3" />
                  <div className="flex gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-[#1b5e43] pt-2.5">
                    <span><i className="fa-solid fa-heart text-red-500 mr-1"></i> 142 Likes</span>
                    <span><i className="fa-solid fa-comment mr-1"></i> 28 Comments</span>
                    <span><i className="fa-solid fa-share mr-1"></i> 18 Shares</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
