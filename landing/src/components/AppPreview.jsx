import React, { useState } from 'react';
import { translations } from '../i18n';

export default function AppPreview({ lang }) {
  const t = translations[lang].preview;
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <section id="preview" style={{ padding: '50px 0', position: 'relative' }}>
      <div class="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 28px auto' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-1px' }}>
            {t.titleLine1} <span class="text-gradient">{t.titleGradient}</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Tab Buttons */}
        <div style={{
          display: 'flex',
          justify: 'center',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '24px',
          flexWrap: 'wrap'
        }}>
          <button 
            onClick={() => setActiveTab('chat')} 
            style={tabBtnStyle(activeTab === 'chat')}
          >
            <i class="fa-solid fa-comments"></i>
            <span>{t.tabChat}</span>
          </button>
          <button 
            onClick={() => setActiveTab('kanban')} 
            style={tabBtnStyle(activeTab === 'kanban')}
          >
            <i class="fa-solid fa-list-check"></i>
            <span>{t.tabKanban}</span>
          </button>
          <button 
            onClick={() => setActiveTab('feed')} 
            style={tabBtnStyle(activeTab === 'feed')}
          >
            <i class="fa-solid fa-newspaper"></i>
            <span>{t.tabFeed}</span>
          </button>
        </div>

        {/* Mockup Frame */}
        <div class="card-centered" style={{ maxWidth: '920px', width: '100%', margin: '0 auto', overflow: 'hidden' }}>
          {/* macOS Topbar */}
          <div style={{
            background: 'var(--bg-subtle)',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            borderBottom: '1px solid var(--border-color)'
          }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>
              Whispr Social Enterprise — Live Interactive Preview Mode
            </div>
            <div style={{ width: '50px' }}></div>
          </div>

          {/* Tab Content Panels */}
          <div style={{ padding: '28px', minHeight: '400px', background: 'var(--bg-card)' }}>
            {activeTab === 'chat' && (
              <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '20px' }}>
                {/* Sidebar */}
                <div style={{ background: 'var(--bg-subtle)', borderRadius: '14px', padding: '14px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.78rem', color: 'var(--primary)', marginBottom: '10px', letterSpacing: '0.5px' }}>
                    {t.chatHeader}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem' }}>
                    <div style={{ padding: '8px 12px', background: 'var(--primary)', color: '#fff', borderRadius: '8px', fontWeight: 700 }}>
                      💬 # general
                    </div>
                    <div style={{ padding: '8px 12px', borderRadius: '8px', color: 'var(--text-muted)', fontWeight: 600 }}>📢 # announcements</div>
                    <div style={{ padding: '8px 12px', borderRadius: '8px', color: 'var(--text-muted)', fontWeight: 600 }}>⚡ # engineering</div>
                    <div style={{ padding: '8px 12px', borderRadius: '8px', color: 'var(--text-muted)', fontWeight: 600 }}>🎨 # ui-ux-design</div>
                  </div>
                </div>

                {/* Main Chat Area */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" style={{ width: '38px', height: '38px', borderRadius: '50%' }} />
                      <div style={{ background: 'var(--bg-subtle)', padding: '12px 16px', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
                        <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--primary)' }}>Alex Rivera <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginLeft: '8px' }}>14:25</span></div>
                        <div style={{ fontSize: '0.88rem', marginTop: '4px' }}>Whispr Enterprise v1.0 is officially released! Enjoy sub-15ms socket communication & AI features 🚀</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" style={{ width: '38px', height: '38px', borderRadius: '50%' }} />
                      <div style={{ background: 'var(--bg-subtle)', padding: '12px 16px', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
                        <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-purple)' }}>Elena Rostova <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginLeft: '8px' }}>14:27</span></div>
                        <div style={{ fontSize: '0.88rem', marginTop: '4px' }}>Awesome! The UI is incredibly crisp, light, and responsive ✨</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', background: 'var(--bg-subtle)', padding: '10px 14px', borderRadius: '12px', border: '1px solid var(--border-color)', alignItems: 'center' }}>
                    <i class="fa-solid fa-paperclip" style={{ color: 'var(--text-muted)' }}></i>
                    <input type="text" placeholder={t.placeholderMsg} disabled style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', width: '100%', outline: 'none', fontSize: '0.88rem' }} />
                    <button style={{ background: 'var(--primary)', border: 'none', width: '32px', height: '32px', borderRadius: '8px', cursor: 'pointer', color: '#fff' }}><i class="fa-solid fa-paper-plane"></i></button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'kanban' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
                <div style={{ background: 'var(--bg-subtle)', padding: '14px', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#f59e0b', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>📋 TO DO (2)</span>
                    <span style={{ fontSize: '0.7rem', background: 'rgba(245, 158, 11, 0.15)', padding: '2px 8px', borderRadius: '8px' }}>Queue</span>
                  </div>
                  <div style={{ background: 'var(--bg-card)', padding: '12px', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, border: '1px solid var(--border-color)' }}>
                    Google OAuth Single Sign-On
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '6px' }}>👤 Marcus Vance</div>
                  </div>
                </div>

                <div style={{ background: 'var(--bg-subtle)', padding: '14px', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.82rem', color: 'var(--primary)', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>⚡ IN PROGRESS (1)</span>
                    <span style={{ fontSize: '0.7rem', background: 'var(--primary-light)', padding: '2px 8px', borderRadius: '8px' }}>Active</span>
                  </div>
                  <div style={{ background: 'var(--bg-card)', padding: '12px', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, borderLeft: '3px solid var(--primary)', border: '1px solid var(--border-color)' }}>
                    Optimize Socket Cluster Latency
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '6px' }}>👤 Alex Rivera</div>
                  </div>
                </div>

                <div style={{ background: 'var(--bg-subtle)', padding: '14px', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#10b981', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>✅ COMPLETED (3)</span>
                    <span style={{ fontSize: '0.7rem', background: 'rgba(16, 185, 129, 0.15)', padding: '2px 8px', borderRadius: '8px' }}>Done</span>
                  </div>
                  <div style={{ background: 'var(--bg-card)', padding: '12px', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, border: '1px solid var(--border-color)' }}>
                    Pristine Light Theme UI System
                    <div style={{ fontSize: '0.72rem', color: '#10b981', marginTop: '6px' }}>✔ Elena Rostova</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'feed' && (
              <div style={{ maxWidth: '540px', margin: '0 auto' }}>
                <div style={{ background: 'var(--bg-subtle)', borderRadius: '16px', padding: '18px', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--primary)' }} />
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.92rem' }}>Elena Rostova</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Lead UX/UI Designer • 15m ago</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.88rem', marginBottom: '12px', lineHeight: 1.6 }}>
                    🎉 Official release of Whispr Social Enterprise v1.0! Seamlessly combines team chat, Kanban boards, and social feed in one pristine workspace 🚀✨
                  </p>
                  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '12px' }} />
                  <div style={{ display: 'flex', gap: '18px', fontSize: '0.82rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)', paddingTop: '10px' }}>
                    <span><i class="fa-solid fa-heart" style={{ color: '#ef4444' }}></i> 142 Likes</span>
                    <span><i class="fa-solid fa-comment"></i> 28 Comments</span>
                    <span><i class="fa-solid fa-share"></i> 18 Shares</span>
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

const tabBtnStyle = (isActive) => ({
  background: isActive ? '#0f172a' : 'var(--bg-card)',
  color: isActive ? '#ffffff' : 'var(--text-main)',
  border: '1px solid var(--border-color)',
  fontWeight: 700,
  fontSize: '0.88rem',
  padding: '9px 20px',
  borderRadius: '10px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  minWidth: '180px',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
  boxShadow: isActive ? '0 6px 14px rgba(15, 23, 42, 0.15)' : 'none'
});
