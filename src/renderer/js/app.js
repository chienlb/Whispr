/* ==========================================================================
   WHISPR ULTIMATE - FRONTEND CONTROLLER & MULTI-FEATURE ENGINE
   ========================================================================== */

(function () {
  let socket = null;
  let users = [];
  let stories = [];
  let posts = [];
  let channels = [];
  let messages = {};

  let currentUser = null;
  let currentChannelId = 'chan_1';
  let activeViewMode = 'social'; // 'social', 'kanban'

  function initTheme() {
    const savedTheme = localStorage.getItem('whispr_theme') || 'dark';
    document.body.dataset.theme = savedTheme;
    updateThemeIcon(savedTheme);
  }

  function toggleTheme() {
    const curr = document.body.dataset.theme === 'light' ? 'light' : 'dark';
    const next = curr === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = next;
    localStorage.setItem('whispr_theme', next);
    updateThemeIcon(next);
  }

  function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-toggle-icon');
    if (!icon) return;
    if (theme === 'light') {
      icon.className = 'fa-solid fa-moon';
    } else {
      icon.className = 'fa-solid fa-sun';
    }
  }

  function playNotificationSound(type = 'like') {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      if (type === 'like') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.15);
      } else {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.2);
      }

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) {
      console.log('Audio error:', e);
    }
  }

  async function bootstrapApp() {
    try {
      const res = await fetch('/api/bootstrap');
      const data = await res.json();

      users = data.users || [];
      stories = data.stories || [];
      posts = data.posts || [];
      channels = data.channels || [];
      messages = data.messages || {};

      currentUser = users[0];
      renderQuickDemoUsers();
    } catch (err) {
      console.warn('Backend server connecting fallback:', err);
      initializeFallbackData();
    }
  }

  function initializeFallbackData() {
    users = [
      { id: 'user_1', name: 'Alex Rivera', role: 'CTO', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150', isOnline: true },
      { id: 'user_2', name: 'Elena Rostova', role: 'Lead UX', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150', isOnline: true }
    ];
    stories = [
      { id: 'story_1', userName: 'Elena Rostova', userAvatar: users[1].avatar, caption: 'Aether Aurora UI Live!' }
    ];
    posts = [
      { id: 'post_101', authorId: 'user_2', content: '🎉 Chào mừng đến với Whispr Ultimate Platform!', timestamp: '14:30', likes: ['user_1'], comments: [] }
    ];
    channels = [
      { id: 'chan_1', name: 'Thảo Luận Chung', icon: '💬' }
    ];
    currentUser = users[0];
    renderQuickDemoUsers();
  }

  function renderQuickDemoUsers() {
    const grid = document.getElementById('auth-demo-users-grid');
    if (!grid) return;
    grid.innerHTML = '';

    users.filter(u => !u.isBot).forEach(u => {
      const card = document.createElement('div');
      card.className = 'quick-user-card';
      card.innerHTML = `
        <img src="${u.avatar}" style="width:28px; height:28px; border-radius:50%; object-fit:cover;">
        <div style="min-width:0;">
          <div style="font-size:0.8rem; font-weight:700;">${u.name}</div>
          <div style="font-size:0.7rem; color:var(--text-muted);">${u.role.split(' ')[0]}</div>
        </div>
      `;

      card.addEventListener('click', () => {
        loginUser(u);
      });

      grid.appendChild(card);
    });
  }

  function loginUser(userObj) {
    currentUser = userObj || users[0];
    const overlay = document.getElementById('auth-overlay');
    if (overlay) overlay.classList.add('hidden');

    updateUserBadge();
    renderStories();
    renderSocialFeed();
    renderSidebarChannels();
    renderOnlineMembers();
    setupSocket();
  }

  function logoutUser() {
    const overlay = document.getElementById('auth-overlay');
    if (overlay) overlay.classList.remove('hidden');
  }

  function setupSocket() {
    if (typeof io !== 'undefined' && !socket) {
      socket = io();

      socket.on('connect', () => {
        console.log('[Socket.io Client] Connected to Whispr Server');
        if (currentUser) socket.emit('user:online', currentUser.id);
      });

      socket.on('post:new', (newPost) => {
        posts.unshift(newPost);
        renderSocialFeed();
        playNotificationSound('post');
      });

      socket.on('post:like_updated', ({ postId, likes }) => {
        const post = posts.find(p => p.id === postId);
        if (post) {
          post.likes = likes;
          renderSocialFeed();
        }
      });

      socket.on('post:comment_updated', ({ postId, comments }) => {
        const post = posts.find(p => p.id === postId);
        if (post) {
          post.comments = comments;
          renderSocialFeed();
        }
      });

      socket.on('user:presence_change', ({ userId, isOnline }) => {
        const u = users.find(x => x.id === userId);
        if (u) u.isOnline = isOnline;
        renderOnlineMembers();
      });
    } else if (socket && currentUser) {
      socket.emit('user:online', currentUser.id);
    }
  }

  function updateUserBadge() {
    if (!currentUser) return;
    const avatarEl = document.getElementById('current-user-avatar');
    const nameEl = document.getElementById('current-user-name');
    const postAvatarEl = document.getElementById('create-post-avatar');

    if (avatarEl) avatarEl.src = currentUser.avatar;
    if (nameEl) nameEl.textContent = currentUser.name;
    if (postAvatarEl) postAvatarEl.src = currentUser.avatar;
  }

  function renderStories() {
    const container = document.getElementById('stories-container');
    if (!container) return;
    container.innerHTML = '';

    const addStory = document.createElement('div');
    addStory.className = 'story-item';
    addStory.innerHTML = `
      <div class="story-ring-avatar" style="background:var(--border-glass);">
        <div style="width:100%; height:100%; border-radius:50%; background:var(--bg-input); display:flex; align-items:center; justify-content:center; font-size:1.1rem; color:var(--aurora-cyan);">
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>
      <span class="story-author-name">Tạo Story</span>
    `;
    container.appendChild(addStory);

    stories.forEach(st => {
      const item = document.createElement('div');
      item.className = 'story-item';
      item.innerHTML = `
        <div class="story-ring-avatar">
          <img src="${st.userAvatar}" title="${st.caption}">
        </div>
        <span class="story-author-name">${st.userName.split(' ')[0]}</span>
      `;

      item.addEventListener('click', () => {
        alert(`✨ Story từ ${st.userName}:\n"${st.caption}"`);
      });

      container.appendChild(item);
    });
  }

  function renderSocialFeed() {
    const container = document.getElementById('social-feed-container');
    if (!container) return;
    container.innerHTML = '';

    posts.forEach(post => {
      const author = users.find(u => u.id === post.authorId) || { name: 'Thành viên', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150', role: 'Nhân viên' };
      const isLiked = currentUser ? post.likes.includes(currentUser.id) : false;
      const likesCount = post.likes.length;

      const card = document.createElement('div');
      card.className = 'social-post-card';
      card.dataset.id = post.id;

      let mediaHTML = '';
      if (post.image) {
        mediaHTML = `
          <div style="border-radius:14px; overflow:hidden; border:1px solid var(--border-glass); max-height:360px;">
            <img src="${post.image}" alt="Post Media" style="width:100%; height:100%; object-fit:cover; display:block;">
          </div>
        `;
      }

      let voicePlayerHTML = '';
      if (post.id === 'post_101') {
        voicePlayerHTML = `
          <div class="voice-player-card">
            <button class="voice-play-btn" title="Phát Voice Note">
              <i class="fa-solid fa-play"></i>
            </button>
            <div class="voice-eq-bars">
              <div class="eq-bar active"></div>
              <div class="eq-bar active"></div>
              <div class="eq-bar active"></div>
              <div class="eq-bar active"></div>
              <div class="eq-bar active"></div>
              <div class="eq-bar"></div>
              <div class="eq-bar"></div>
            </div>
            <span style="font-size:0.72rem; color:var(--text-secondary);">0:24</span>
          </div>
        `;
      }

      let commentsHTML = '';
      if (post.comments && post.comments.length > 0) {
        commentsHTML = `<div style="background:rgba(0,0,0,0.2); border-radius:12px; padding:12px; display:flex; flex-direction:column; gap:8px;">`;
        post.comments.forEach(c => {
          const cAuthor = users.find(u => u.id === c.authorId) || { name: 'Thành viên', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' };
          commentsHTML += `
            <div style="display:flex; gap:10px; font-size:0.84rem;">
              <img src="${cAuthor.avatar}" style="width:26px; height:26px; border-radius:50%; object-fit:cover;">
              <div style="background:var(--bg-surface); padding:6px 12px; border-radius:10px; border:1px solid var(--border-glass);">
                <span style="font-weight:800; font-size:0.8rem;">${cAuthor.name}</span>
                <span style="font-size:0.82rem; margin-left:6px;">${escapeHTML(c.text)}</span>
              </div>
            </div>
          `;
        });
        commentsHTML += `</div>`;
      }

      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div style="display:flex; align-items:center; gap:12px;">
            <img src="${author.avatar}" style="width:42px; height:42px; border-radius:50%; object-fit:cover;">
            <div>
              <div style="font-weight:800; font-size:0.95rem;">${author.name}</div>
              <div style="font-size:0.78rem; color:var(--text-secondary);">${author.role} • ${post.timestamp}</div>
            </div>
          </div>
        </div>

        <div style="font-size:0.92rem; line-height:1.55;">${formatMarkdown(post.content)}</div>
        ${mediaHTML}
        ${voicePlayerHTML}

        <div style="display:flex; justify-content:space-around; padding-top:12px; border-top:1px solid var(--border-glass);">
          <button class="btn-like-action ${isLiked ? 'liked' : ''}" data-post-id="${post.id}">
            <i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart"></i>
            <span>${likesCount > 0 ? likesCount : ''} Thả tim</span>
          </button>
          <button class="btn-like-action">
            <i class="fa-regular fa-comment"></i>
            <span>${post.comments ? post.comments.length : 0} Bình luận</span>
          </button>
        </div>

        ${commentsHTML}

        <div style="display:flex; gap:10px; align-items:center; margin-top:4px;">
          <img src="${currentUser ? currentUser.avatar : ''}" style="width:28px; height:28px; border-radius:50%; object-fit:cover;">
          <input type="text" class="create-post-input input-comment" data-post-id="${post.id}" placeholder="Viết bình luận... (Enter để gửi)" style="padding:8px 14px; font-size:0.84rem;">
        </div>
      `;

      const likeBtn = card.querySelector('.btn-like-action');
      if (likeBtn) {
        likeBtn.addEventListener('click', () => {
          if (socket && currentUser) {
            socket.emit('post:like', { postId: post.id, userId: currentUser.id });
            playNotificationSound('like');
          }
        });
      }

      const commentInput = card.querySelector('.input-comment');
      if (commentInput) {
        commentInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && commentInput.value.trim() && currentUser) {
            const txt = commentInput.value.trim();
            if (socket) {
              socket.emit('post:comment', { postId: post.id, userId: currentUser.id, text: txt });
            }
            commentInput.value = '';
          }
        });
      }

      container.appendChild(card);
    });
  }

  function renderSidebarChannels() {
    const container = document.getElementById('channels-list-sidebar');
    if (!container) return;
    container.innerHTML = '';

    channels.forEach(ch => {
      const item = document.createElement('div');
      item.className = `chat-card-item ${ch.id === currentChannelId ? 'active' : ''}`;
      item.innerHTML = `
        <div class="channel-icon-box">${ch.icon || '💬'}</div>
        <div>
          <div class="chat-name-text"># ${ch.name}</div>
          <div class="chat-preview-text">${ch.description || 'Kênh thảo luận'}</div>
        </div>
      `;

      item.addEventListener('click', () => {
        currentChannelId = ch.id;
        renderSidebarChannels();
      });

      container.appendChild(item);
    });
  }

  function renderOnlineMembers() {
    const container = document.getElementById('online-members-list');
    if (!container) return;
    container.innerHTML = '';

    users.filter(u => u.isOnline).forEach(u => {
      const item = document.createElement('div');
      item.style.display = 'flex';
      item.style.alignItems = 'center';
      item.style.gap = '10px';
      item.innerHTML = `
        <div class="avatar-wrapper-tiny">
          <img src="${u.avatar}">
          <div class="online-dot-mini"></div>
        </div>
        <div>
          <div style="font-size:0.84rem; font-weight:700;">${u.name}</div>
          <div style="font-size:0.72rem; color:var(--text-muted);">${u.role.split(' ')[0]}</div>
        </div>
      `;
      container.appendChild(item);
    });
  }

  function handleCreatePost() {
    const input = document.getElementById('create-post-input');
    if (!input) return;
    const text = input.value.trim();
    if (!text || !currentUser) return;

    if (socket) {
      socket.emit('post:create', {
        authorId: currentUser.id,
        content: text
      });
    }

    input.value = '';
  }

  function formatMarkdown(text) {
    if (!text) return '';
    let str = escapeHTML(text);
    str = str.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    str = str.replace(/\*(.*?)\*/g, '<em>$1</em>');
    return str;
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  function setupEventListeners() {
    const themeBtn = document.getElementById('dock-btn-theme');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    const googleBtn = document.getElementById('btn-google-login');
    if (googleBtn) {
      googleBtn.addEventListener('click', () => {
        alert('🔒 Đã xác thực Google Workspace OAuth thành công!');
        loginUser(users[0]);
      });
    }

    const submitAuthBtn = document.getElementById('btn-auth-submit');
    if (submitAuthBtn) {
      submitAuthBtn.addEventListener('click', () => {
        loginUser(users[0]);
      });
    }

    const logoutBtn = document.getElementById('dock-btn-logout');
    if (logoutBtn) logoutBtn.addEventListener('click', logoutUser);

    const badgeUserBtn = document.getElementById('current-user-badge');
    if (badgeUserBtn) badgeUserBtn.addEventListener('click', logoutUser);

    const btnFeed = document.getElementById('dock-btn-feed');
    if (btnFeed) btnFeed.addEventListener('click', () => switchViewMode('social'));

    const btnKanban = document.getElementById('dock-btn-kanban');
    if (btnKanban) btnKanban.addEventListener('click', () => switchViewMode('kanban'));

    const btnChats = document.getElementById('dock-btn-chats');
    if (btnChats) btnChats.addEventListener('click', () => switchViewMode('social'));

    const tabSocial = document.getElementById('tab-view-social');
    if (tabSocial) tabSocial.addEventListener('click', () => switchViewMode('social'));

    const tabKanban = document.getElementById('tab-view-kanban');
    if (tabKanban) tabKanban.addEventListener('click', () => switchViewMode('kanban'));

    const tabChannels = document.getElementById('tab-view-channels');
    if (tabChannels) tabChannels.addEventListener('click', () => switchViewMode('social'));

    const submitPostBtn = document.getElementById('btn-submit-post');
    if (submitPostBtn) submitPostBtn.addEventListener('click', handleCreatePost);

    const postInput = document.getElementById('create-post-input');
    if (postInput) {
      postInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleCreatePost();
        }
      });
    }

    const postAiBtn = document.getElementById('btn-post-ai');
    if (postAiBtn) {
      postAiBtn.addEventListener('click', () => {
        if (postInput) {
          postInput.value = 'Hỏi Trợ lý @WhisprAI: ';
          postInput.focus();
        }
      });
    }
  }

  function switchViewMode(mode) {
    activeViewMode = mode;
    const btnFeed = document.getElementById('tab-view-social');
    const btnKanban = document.getElementById('tab-view-kanban');
    const btnChannels = document.getElementById('tab-view-channels');
    const feedContainer = document.getElementById('social-feed-container');
    const postContainer = document.getElementById('create-post-container');
    const kanbanView = document.getElementById('kanban-board-view');

    if (mode === 'social') {
      if (btnFeed) btnFeed.classList.add('active');
      if (btnKanban) btnKanban.classList.remove('active');
      if (btnChannels) btnChannels.classList.remove('active');
      if (feedContainer) feedContainer.style.display = 'flex';
      if (postContainer) postContainer.style.display = 'block';
      if (kanbanView) kanbanView.style.display = 'none';
    } else if (mode === 'kanban') {
      if (btnKanban) btnKanban.classList.add('active');
      if (btnFeed) btnFeed.classList.remove('active');
      if (btnChannels) btnChannels.classList.remove('active');
      if (feedContainer) feedContainer.style.display = 'none';
      if (postContainer) postContainer.style.display = 'none';
      if (kanbanView) kanbanView.style.display = 'block';
    }
  }

  function start() {
    initTheme();
    setupEventListeners();
    bootstrapApp();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
