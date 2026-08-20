/* ==========================================================================
   WHISPR SOCIAL - MULTI-LANGUAGE (i18n), ABOUT MODAL & FEATURE SUITE
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
  let activePage = 'social'; // 'social', 'kanban', 'directory', 'analytics', 'chat', 'settings'
  let currentLang = 'vi'; // 'vi', 'en'

  // i18n TRANSLATION DICTIONARY
  const i18nData = {
    vi: {
      aboutTitle: 'Giới Thiệu Whispr Social',
      aboutSub: 'Nền Tảng Trò Chuyện & Mạng Xã Hội Đa Tính Năng',
      btnClose: 'Đóng',
      btnCreatePost: 'Tạo Bài Viết',
      searchPh: 'Tìm kiếm bài viết, thành viên, hashtag...',
      createPostPh: 'Bạn đang suy nghĩ gì hôm nay? Chia sẻ cùng cộng đồng...',
      btnImage: 'Hình ảnh',
      btnPublish: 'Đăng bài',
      notifyHeader: 'Thông Báo Mới',
      settingsTitle: '⚙️ Cài Đặt Hệ Thống & Tùy Chỉnh Cá Nhân',
      settingLangTitle: 'Ngôn Ngữ Hiển Thị (Language)',
      settingLangSub: 'Chọn giữa Tiếng Việt 🇻🇳 và English 🇬🇧',
      settingThemeTitle: 'Giao diện Sáng / Tối',
      settingThemeSub: 'Đổi tông màu nền làm việc giữa Light Slate White và Obsidian Dark',
      settingAboutTitle: 'Thông Tin Phiên Bản Whispr',
      settingNotifyTitle: 'Thông Báo Desktop Windows',
      settingNotifySub: 'Hiển thị thông báo OS khi có bài viết hoặc tin nhắn mới',
      btnSaveSettings: 'Lưu Cài Đặt',
      navSocial: 'Bảng Tin',
      navChat: 'Trò Chuyện',
      navDirectory: 'Cộng Đồng',
      navKanban: 'Kế Hoạch',
      navAnalytics: 'Thống Kê',
      navSettings: 'Cài Đặt'
    },
    en: {
      aboutTitle: 'About Whispr Social',
      aboutSub: 'Feature-Rich Social Network & Real-time Platform',
      btnClose: 'Close',
      btnCreatePost: 'Create Post',
      searchPh: 'Search posts, members, hashtags...',
      createPostPh: 'What is on your mind today? Share with the community...',
      btnImage: 'Media Image',
      btnPublish: 'Publish Post',
      notifyHeader: 'Recent Notifications',
      settingsTitle: '⚙️ System Settings & Preferences',
      settingLangTitle: 'Display Language',
      settingLangSub: 'Choose between Tiếng Việt 🇻🇳 and English 🇬🇧',
      settingThemeTitle: 'Theme Mode (Light / Dark)',
      settingThemeSub: 'Toggle work backdrop between Light Slate White and Obsidian Dark',
      settingAboutTitle: 'Whispr Release Version',
      settingNotifyTitle: 'Windows Desktop Notifications',
      settingNotifySub: 'Show OS notifications when new posts or messages arrive',
      btnSaveSettings: 'Save Preferences',
      navSocial: 'Feed Timeline',
      navChat: 'Direct Chat',
      navDirectory: 'Community',
      navKanban: 'Task Board',
      navAnalytics: 'Analytics',
      navSettings: 'Settings'
    }
  };

  function switchLanguage(lang) {
    currentLang = lang || (currentLang === 'vi' ? 'en' : 'vi');

    // Update Flag & Text in Header
    const flagEl = document.getElementById('current-lang-flag');
    const textEl = document.getElementById('current-lang-text');
    const settingsLangText = document.getElementById('settings-lang-text');

    if (flagEl) flagEl.textContent = currentLang === 'vi' ? '🇻🇳' : '🇬🇧';
    if (textEl) textEl.textContent = currentLang === 'vi' ? 'VI' : 'EN';
    if (settingsLangText) settingsLangText.textContent = currentLang === 'vi' ? 'Tiếng Việt' : 'English';

    // Translate DOM elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18nData[currentLang] && i18nData[currentLang][key]) {
        el.textContent = i18nData[currentLang][key];
      }
    });

    // Translate input placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (i18nData[currentLang] && i18nData[currentLang][key]) {
        el.placeholder = i18nData[currentLang][key];
      }
    });

    // Translate Sidebar Navigation Labels
    const navSocial = document.querySelector('#nav-page-social span');
    const navChat = document.querySelector('#nav-page-chat span');
    const navDirectory = document.querySelector('#nav-page-directory span');
    const navKanban = document.querySelector('#nav-page-kanban span');
    const navAnalytics = document.querySelector('#nav-page-analytics span');
    const navSettings = document.querySelector('#nav-page-settings span');

    if (navSocial) navSocial.textContent = i18nData[currentLang].navSocial;
    if (navChat) navChat.textContent = i18nData[currentLang].navChat;
    if (navDirectory) navDirectory.textContent = i18nData[currentLang].navDirectory;
    if (navKanban) navKanban.textContent = i18nData[currentLang].navKanban;
    if (navAnalytics) navAnalytics.textContent = i18nData[currentLang].navAnalytics;
    if (navSettings) navSettings.textContent = i18nData[currentLang].navSettings;
  }

  function initTheme() {
    const savedTheme = localStorage.getItem('whispr_theme') || 'light';
    document.body.dataset.theme = savedTheme;
    updateThemeIcon(savedTheme);
  }

  function toggleTheme() {
    const curr = document.body.dataset.theme === 'dark' ? 'dark' : 'light';
    const next = curr === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = next;
    localStorage.setItem('whispr_theme', next);
    updateThemeIcon(next);
  }

  function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-toggle-icon');
    if (!icon) return;
    if (theme === 'dark') {
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
      { id: 'user_1', name: 'Alex Rivera', role: 'Chief Technology Officer', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150', isOnline: true, username: '@alexrivera' },
      { id: 'user_2', name: 'Elena Rostova', role: 'Lead UX/UI Designer', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150', isOnline: true, username: '@elena_ux' },
      { id: 'user_3', name: 'Sarah Chen', role: 'Senior Product Manager', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150', isOnline: false, username: '@sarahchen' },
      { id: 'user_4', name: 'Marcus Vance', role: 'Lead Backend Engineer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', isOnline: true, username: '@marcus_v' }
    ];
    stories = [
      { id: 'story_1', userName: 'Elena Rostova', userAvatar: users[1].avatar, caption: 'Whispr Social v2.4.0 Live!' }
    ];
    posts = [
      { id: 'post_101', authorId: 'user_2', content: '🎉 Chào mừng đến với Whispr Social Platform! Hãy cùng giao lưu kết nối bạn bè khắp nơi!', timestamp: '14:30', likes: ['user_1'], comments: [] }
    ];
    channels = [
      { id: 'chan_1', name: 'Thảo Luận General', icon: '💬', description: 'Trò chuyện & giao lưu toàn thể cộng đồng Whispr' },
      { id: 'chan_2', name: 'Tin Tức & Sự Kiện', icon: '📢', description: 'Thông báo & sự kiện nổi bật' },
      { id: 'chan_3', name: 'Công Nghệ & AI', icon: '⚡', description: 'Thảo luận lập trình, công nghệ & AI' }
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
    renderTeamDirectory();
    renderChatMessages();
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
        renderTeamDirectory();
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
      <div class="story-ring-avatar" style="border-color:var(--border-color);">
        <div style="width:100%; height:100%; border-radius:50%; background:var(--bg-input); display:flex; align-items:center; justify-content:center; font-size:1.1rem; color:var(--primary);">
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>
      <span style="font-size:0.75rem; font-weight:700;">Tạo Story</span>
    `;
    container.appendChild(addStory);

    stories.forEach(st => {
      const item = document.createElement('div');
      item.className = 'story-item';
      item.innerHTML = `
        <div class="story-ring-avatar">
          <img src="${st.userAvatar}" title="${st.caption}">
        </div>
        <span style="font-size:0.75rem; font-weight:700;">${st.userName.split(' ')[0]}</span>
      `;

      item.addEventListener('click', () => {
        alert(`✨ Story từ ${st.userName}:\n"${st.caption}"`);
      });

      container.appendChild(item);
    });
  }

  function renderSocialFeed(filteredPosts = null) {
    const container = document.getElementById('social-feed-container');
    if (!container) return;
    container.innerHTML = '';

    const displayList = filteredPosts || posts;

    displayList.forEach(post => {
      const author = users.find(u => u.id === post.authorId) || { name: 'Thành viên', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150', role: 'Thành viên' };
      const isLiked = currentUser ? post.likes.includes(currentUser.id) : false;
      const likesCount = post.likes.length;

      const card = document.createElement('div');
      card.className = 'social-post-card';

      let mediaHTML = '';
      if (post.image) {
        mediaHTML = `
          <div style="border-radius:12px; overflow:hidden; border:1px solid var(--border-color); max-height:360px;">
            <img src="${post.image}" alt="Post Media" style="width:100%; height:100%; object-fit:cover; display:block;">
          </div>
        `;
      }

      let commentsHTML = '';
      if (post.comments && post.comments.length > 0) {
        commentsHTML = `<div style="background:var(--bg-input); border-radius:12px; padding:12px; display:flex; flex-direction:column; gap:8px;">`;
        post.comments.forEach(c => {
          const cAuthor = users.find(u => u.id === c.authorId) || { name: 'Thành viên', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' };
          commentsHTML += `
            <div style="display:flex; gap:10px; font-size:0.84rem;">
              <img src="${cAuthor.avatar}" style="width:26px; height:26px; border-radius:50%; object-fit:cover;">
              <div style="background:var(--bg-card); padding:6px 12px; border-radius:10px; border:1px solid var(--border-color);">
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
              <div style="font-weight:800; font-size:0.95rem; display:flex; align-items:center; gap:4px;">
                <span>${author.name}</span>
                <i class="fa-solid fa-circle-check" style="color:var(--primary); font-size:0.8rem;" title="Đã xác thực"></i>
              </div>
              <div style="font-size:0.78rem; color:var(--text-secondary);">${author.role} • ${post.timestamp}</div>
            </div>
          </div>
        </div>

        <div style="font-size:0.92rem; line-height:1.55;">${formatMarkdown(post.content)}</div>
        ${mediaHTML}

        <div style="display:flex; justify-content:space-around; padding-top:12px; border-top:1px solid var(--border-color);">
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
    container.innerHTML = '<div style="font-size:0.75rem; font-weight:800; color:var(--text-muted); text-transform:uppercase; margin:8px 0 6px 12px; letter-spacing:0.5px;">Phòng Chat Trực Tuyến</div>';

    channels.forEach(ch => {
      const item = document.createElement('div');
      item.className = `chat-card-item ${ch.id === currentChannelId ? 'active' : ''}`;
      item.innerHTML = `
        <div class="channel-icon-box">${ch.icon || '💬'}</div>
        <div>
          <div style="font-size:0.88rem; font-weight:700;"># ${ch.name}</div>
          <div style="font-size:0.78rem; color:var(--text-secondary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${ch.description || 'Kênh thảo luận'}</div>
        </div>
      `;

      item.addEventListener('click', () => {
        currentChannelId = ch.id;
        renderSidebarChannels();
        switchViewPage('chat');
        const titleText = document.getElementById('chat-title-text');
        if (titleText) titleText.textContent = `# ${ch.name}`;
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

  function renderTeamDirectory(filteredUsers = null) {
    const grid = document.getElementById('directory-members-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const list = filteredUsers || users.filter(u => !u.isBot);

    list.forEach(u => {
      const card = document.createElement('div');
      card.className = 'member-card';
      card.innerHTML = `
        <div style="position:relative;">
          <img src="${u.avatar}" class="member-avatar-lg">
          <div class="online-dot-mini" style="width:12px; height:12px; background:${u.isOnline ? '#10b981' : '#94a3b8'}; border-width:2px;"></div>
        </div>
        <div>
          <div style="font-weight:800; font-size:0.95rem; display:flex; align-items:center; justify-content:center; gap:4px;">
            <span>${u.name}</span>
            <i class="fa-solid fa-circle-check" style="color:var(--primary); font-size:0.8rem;"></i>
          </div>
          <div style="font-size:0.78rem; color:var(--primary); font-weight:700; margin-top:2px;">${u.role}</div>
          <div style="font-size:0.74rem; color:var(--text-muted); margin-top:4px;">${u.username}</div>
        </div>
        <button class="btn-submit-auth" style="padding:6px 16px; font-size:0.8rem; border-radius:10px;">Nhắn Tin</button>
      `;
      grid.appendChild(card);
    });
  }

  function renderChatMessages() {
    const container = document.getElementById('chat-messages-scroll');
    if (!container) return;
    container.innerHTML = '';

    const list = messages[currentChannelId] || [
      { id: 'm1', senderId: 'user_2', content: 'Chào mừng cả nhà đến với kênh thảo luận!', timestamp: '14:20' }
    ];

    list.forEach(m => {
      const sender = users.find(u => u.id === m.senderId) || { name: 'Thành viên', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' };
      const bubble = document.createElement('div');
      bubble.style.display = 'flex';
      bubble.style.gap = '10px';
      bubble.innerHTML = `
        <img src="${sender.avatar}" style="width:32px; height:32px; border-radius:50%; object-fit:cover;">
        <div class="chat-bubble">
          <div style="font-weight:800; font-size:0.8rem; margin-bottom:2px;">${sender.name} <span style="font-weight:400; color:var(--text-muted); font-size:0.72rem; margin-left:6px;">${m.timestamp}</span></div>
          <div>${formatMarkdown(m.content)}</div>
        </div>
      `;
      container.appendChild(bubble);
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
    const themeBtn = document.getElementById('sidebar-btn-theme');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    const logoutBtn = document.getElementById('sidebar-btn-logout');
    if (logoutBtn) logoutBtn.addEventListener('click', logoutUser);

    const googleBtn = document.getElementById('btn-google-login');
    if (googleBtn) {
      googleBtn.addEventListener('click', () => {
        alert('🔒 Đã xác thực Google Account thành công!');
        loginUser(users[0]);
      });
    }

    const submitAuthBtn = document.getElementById('btn-auth-submit');
    if (submitAuthBtn) {
      submitAuthBtn.addEventListener('click', () => {
        loginUser(users[0]);
      });
    }

    const badgeUserBtn = document.getElementById('current-user-badge');
    if (badgeUserBtn) badgeUserBtn.addEventListener('click', logoutUser);

    // LANGUAGE SWITCHER BUTTON
    const headerLangBtn = document.getElementById('header-btn-lang');
    const settingsLangBtn = document.getElementById('btn-toggle-settings-lang');

    if (headerLangBtn) headerLangBtn.addEventListener('click', () => switchLanguage());
    if (settingsLangBtn) settingsLangBtn.addEventListener('click', () => switchLanguage());

    // ABOUT APP VERSION MODAL
    const aboutModal = document.getElementById('about-version-modal');
    const headerAboutBtn = document.getElementById('header-btn-about');
    const settingsAboutBtn = document.getElementById('btn-settings-about');
    const closeAboutBtn = document.getElementById('btn-close-about-modal');
    const confirmAboutBtn = document.getElementById('btn-confirm-about');

    const openAboutModal = () => { if (aboutModal) aboutModal.classList.remove('hidden'); };
    const closeAboutModal = () => { if (aboutModal) aboutModal.classList.add('hidden'); };

    if (headerAboutBtn) headerAboutBtn.addEventListener('click', openAboutModal);
    if (settingsAboutBtn) settingsAboutBtn.addEventListener('click', openAboutModal);
    if (closeAboutBtn) closeAboutBtn.addEventListener('click', closeAboutModal);
    if (confirmAboutBtn) confirmAboutBtn.addEventListener('click', closeAboutModal);

    // NOTIFICATIONS DROPDOWN PANEL TOGGLE
    const notifyBtn = document.getElementById('header-btn-notify');
    const notifyPanel = document.getElementById('notifications-dropdown-panel');

    if (notifyBtn && notifyPanel) {
      notifyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        notifyPanel.classList.toggle('hidden');
      });

      document.addEventListener('click', (e) => {
        if (!notifyPanel.contains(e.target) && e.target !== notifyBtn) {
          notifyPanel.classList.add('hidden');
        }
      });
    }

    // GLOBAL SEARCH FILTER WITH (Ctrl + K)
    const globalSearchInput = document.getElementById('global-search-input');
    if (globalSearchInput) {
      globalSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
          renderSocialFeed();
          renderTeamDirectory();
          return;
        }

        const filteredP = posts.filter(p => p.content.toLowerCase().includes(query));
        const filteredU = users.filter(u => u.name.toLowerCase().includes(query) || u.role.toLowerCase().includes(query));

        renderSocialFeed(filteredP);
        renderTeamDirectory(filteredU);
      });
    }

    const headerCreatePostBtn = document.getElementById('header-btn-create-post');
    if (headerCreatePostBtn) {
      headerCreatePostBtn.addEventListener('click', () => {
        switchViewPage('social');
        const postInput = document.getElementById('create-post-input');
        if (postInput) postInput.focus();
      });
    }

    // HOTKEY CTRL + K FOCUS SEARCH
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (globalSearchInput) globalSearchInput.focus();
      }
    });

    // 6-PAGE NAVIGATION EVENT LISTENERS
    const navSocial = document.getElementById('nav-page-social');
    const navKanban = document.getElementById('nav-page-kanban');
    const navDir = document.getElementById('nav-page-directory');
    const navAnalytics = document.getElementById('nav-page-analytics');
    const navChat = document.getElementById('nav-page-chat');
    const navSettings = document.getElementById('nav-page-settings');

    if (navSocial) navSocial.addEventListener('click', () => switchViewPage('social'));
    if (navKanban) navKanban.addEventListener('click', () => switchViewPage('kanban'));
    if (navDir) navDir.addEventListener('click', () => switchViewPage('directory'));
    if (navAnalytics) navAnalytics.addEventListener('click', () => switchViewPage('analytics'));
    if (navChat) navChat.addEventListener('click', () => switchViewPage('chat'));
    if (navSettings) navSettings.addEventListener('click', () => switchViewPage('settings'));

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

    const toggleSettingsTheme = document.getElementById('btn-toggle-settings-theme');
    if (toggleSettingsTheme) toggleSettingsTheme.addEventListener('click', toggleTheme);
  }

  function switchViewPage(pageId) {
    activePage = pageId;

    document.querySelectorAll('.page-nav-item').forEach(el => el.classList.remove('active'));

    const targetNav = document.getElementById(`nav-page-${pageId}`);
    if (targetNav) targetNav.classList.add('active');

    const socialFeed = document.getElementById('social-feed-container');
    const postContainer = document.getElementById('create-post-container');
    const storiesBar = document.getElementById('stories-container');

    const kanbanView = document.getElementById('kanban-board-view');
    const dirView = document.getElementById('page-directory-view');
    const analyticsView = document.getElementById('page-analytics-view');
    const chatView = document.getElementById('page-chat-view');
    const settingsView = document.getElementById('page-settings-view');

    if (socialFeed) socialFeed.style.display = 'none';
    if (postContainer) postContainer.style.display = 'none';
    if (storiesBar) storiesBar.style.display = 'none';
    if (kanbanView) kanbanView.style.display = 'none';
    if (dirView) dirView.style.display = 'none';
    if (analyticsView) analyticsView.style.display = 'none';
    if (chatView) chatView.style.display = 'none';
    if (settingsView) settingsView.style.display = 'none';

    if (pageId === 'social') {
      if (socialFeed) socialFeed.style.display = 'flex';
      if (postContainer) postContainer.style.display = 'block';
      if (storiesBar) storiesBar.style.display = 'flex';
    } else if (pageId === 'kanban') {
      if (kanbanView) kanbanView.style.display = 'block';
    } else if (pageId === 'directory') {
      if (dirView) dirView.style.display = 'flex';
    } else if (pageId === 'analytics') {
      if (analyticsView) analyticsView.style.display = 'flex';
    } else if (pageId === 'chat') {
      if (chatView) chatView.style.display = 'flex';
    } else if (pageId === 'settings') {
      if (settingsView) settingsView.style.display = 'flex';
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
