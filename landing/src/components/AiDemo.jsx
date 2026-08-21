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
          ? '⚡ To run Whispr Portable: Click the "Download (.exe)" button above, save the 93.8MB file, and double-click to launch immediately without installer!'
          : '⚡ Bạn chỉ cần nhấn nút "Tải Windows (.exe)" ở trên, tải file 93.8MB về máy và nhấp đúp để chạy ngay mà không cần qua các bước cài đặt!';
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
    <section id="aidemo" style={{ padding: '60px 0', position: 'relative' }}>
      <div class="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 36px auto' }}>
          <div class="pill-badge" style={{ marginBottom: '12px' }}>
            <i class="fa-solid fa-sparkles"></i>
            <span>{t.badge}</span>
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-1px' }}>
            {t.titleLine1} <span class="text-gradient">{t.titleGradient}</span> {t.titleLine2}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '6px' }}>
            {t.subtitle}
          </p>
        </div>

        {/* AI Container */}
        <div class="card-centered" style={{ maxWidth: '780px', margin: '0 auto', padding: '24px' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--border-color)', paddingBottom: '14px', marginBottom: '18px' }}>
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--primary)' }} />
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Whispr AI Assistant
                <span style={{ fontSize: '0.7rem', background: '#10b981', color: '#fff', padding: '2px 8px', borderRadius: '10px', fontWeight: 700 }}>Online</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Enterprise Neural Workspace Model</div>
            </div>
          </div>

          {/* Messages */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '260px', overflowY: 'auto', paddingRight: '6px', marginBottom: '18px' }}>
            {messages.map((m, idx) => (
              <div key={idx} style={{
                alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
                background: m.sender === 'user' ? 'var(--primary)' : 'var(--bg-subtle)',
                color: m.sender === 'user' ? '#ffffff' : 'var(--text-main)',
                padding: '12px 16px',
                borderRadius: m.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 18px 2px',
                fontWeight: 600,
                fontSize: '0.9rem',
                border: m.sender === 'user' ? 'none' : '1px solid var(--border-color)'
              }}>
                <div>{m.text}</div>
                <div style={{ fontSize: '0.68rem', opacity: 0.7, textAlign: 'right', marginTop: '4px' }}>{m.time}</div>
              </div>
            ))}
            {isTyping && (
              <div style={{ alignSelf: 'flex-start', fontSize: '0.82rem', color: 'var(--primary)', fontWeight: 700, fontStyle: 'italic' }}>
                {t.thinking}
              </div>
            )}
          </div>

          {/* Sample prompts */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
            {samplePrompts.map((p, idx) => (
              <button 
                key={idx} 
                onClick={() => handleSend(p)}
                style={{
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-muted)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  padding: '6px 12px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                ⚡ {p}
              </button>
            ))}
          </div>

          {/* Input field */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <input 
              type="text" 
              value={inputValue} 
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder={t.placeholder}
              style={{
                flex: 1,
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '12px 16px',
                color: 'var(--text-main)',
                outline: 'none',
                fontSize: '0.9rem'
              }}
            />
            <button onClick={() => handleSend()} class="btn-primary" style={{ padding: '12px 20px', fontSize: '0.88rem' }}>
              <i class="fa-solid fa-paper-plane"></i>
              <span>{t.send}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
