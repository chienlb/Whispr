import React, { useState } from 'react';
import { translations } from '../i18n';

export default function AiDemo({ lang }) {
  const t = translations[lang].ai;
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: t.welcome,
      time: '19:15'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const samplePrompts = [t.chip1, t.chip2, t.chip3];

  const handleSend = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg = {
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let aiReplyText = lang === 'en'
        ? `🤖 Whispr AI Response: Thanks for asking about "${text}"! Whispr Social Enterprise is designed for instant team communication with Kanban boards & zero-install portable deployment.`
        : `🤖 Trả lời từ Whispr AI: Về câu hỏi "${text}" - Whispr Enterprise hỗ trợ đầy đủ tính năng trò chuyện Realtime Socket, Bảng Task Kanban và bản Portable .exe chạy trực tiếp không cần cài đặt! 🚀`;

      if (text.toLowerCase().includes('exe') || text.toLowerCase().includes('portable') || text.toLowerCase().includes('chạy')) {
        aiReplyText = lang === 'en'
          ? '⚡ To run Whispr Portable: Click the "Download (.exe)" button above, save the file, and double-click to launch immediately without installer!'
          : '⚡ Bạn chỉ cần nhấn nút "Tải Windows (.exe)" ở trên, tải file về máy và nhấp đúp để chạy ngay mà không cần qua các bước cài đặt!';
      }

      setMessages(prev => [...prev, {
        sender: 'ai',
        text: aiReplyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <section id="aidemo" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-9">
          <div className="inline-flex items-center justify-center gap-2 bg-emerald-50 dark:bg-[#0a291c] border border-emerald-200 dark:border-[#1b5e43] px-4 py-1.5 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-3">
            <i className="fa-solid fa-sparkles"></i>
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.titleLine1} <span className="text-gradient">{t.titleGradient}</span> {t.titleLine2}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-2">
            {t.subtitle}
          </p>
        </div>

        {/* AI Container */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-[#11422e] border border-slate-200 dark:border-[#1b5e43] rounded-2xl p-6 shadow-xl">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-[#1b5e43] pb-3.5 mb-4.5">
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150" alt="AI Avatar" className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-600" />
            <div>
              <div className="font-extrabold text-sm flex items-center gap-2 text-slate-900 dark:text-white">
                Whispr AI Assistant
                <span className="text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold">Online</span>
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-500">Enterprise Neural Workspace Model</div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex flex-col gap-3 max-h-[260px] overflow-y-auto pr-1.5 mb-4.5">
            {messages.map((m, idx) => (
              <div 
                key={idx} 
                className={`max-w-[85%] p-3.5 px-4 font-medium text-sm leading-relaxed ${
                  m.sender === 'user'
                    ? 'self-end bg-emerald-600 text-white rounded-2xl rounded-br-xs shadow-sm'
                    : 'self-start bg-slate-50 dark:bg-[#0a291c] text-slate-900 dark:text-slate-100 rounded-2xl rounded-bl-xs border border-slate-200 dark:border-[#1b5e43]'
                }`}
              >
                <div>{m.text}</div>
                <div className="text-[10px] opacity-70 text-right mt-1">{m.time}</div>
              </div>
            ))}
            {isTyping && (
              <div className="self-start text-xs text-emerald-600 dark:text-emerald-400 font-bold italic">
                {t.thinking}
              </div>
            )}
          </div>

          {/* Sample prompts */}
          <div className="flex gap-2 mb-3 flex-wrap">
            {samplePrompts.map((p, idx) => (
              <button 
                key={idx} 
                onClick={() => handleSend(p)}
                className="bg-slate-50 dark:bg-[#0a291c] border border-slate-200 dark:border-[#1b5e43] text-slate-600 dark:text-slate-400 text-xs font-bold px-3 py-1.5 rounded-full hover:border-emerald-500 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
              >
                ⚡ {p}
              </button>
            ))}
          </div>

          {/* Input field */}
          <div className="flex gap-2">
            <input 
              type="text" 
              value={inputValue} 
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder={t.placeholder}
              className="flex-1 bg-slate-50 dark:bg-[#0a291c] border border-slate-200 dark:border-[#1b5e43] rounded-xl px-4 py-3 text-slate-900 dark:text-white text-sm outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-400"
            />
            <button 
              onClick={() => handleSend()} 
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all"
            >
              <i className="fa-solid fa-paper-plane text-xs"></i>
              <span>{t.send}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
