const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static assets from renderer directory
const rendererPath = path.join(__dirname, '../renderer');
app.use(express.static(rendererPath));

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] }
});

const PORT = process.env.PORT || 3000;

// ==========================================================================
// WHISPR ENTERPRISE BACKEND ENGINE
// ==========================================================================

const users = [
  {
    id: 'user_1',
    name: 'Alex Rivera',
    username: 'alex.rivera@whispr.io',
    role: 'Chief Technology Officer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    status: 'Online',
    statusMsg: 'Building Whispr Enterprise ⚡',
    isOnline: true
  },
  {
    id: 'user_2',
    name: 'Elena Rostova',
    username: 'elena.rostova@whispr.io',
    role: 'Lead UX/UI Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    status: 'In a design sprint',
    statusMsg: 'Crafting Ultimate Aurora Glass UI 🎨',
    isOnline: true
  },
  {
    id: 'user_3',
    name: 'Sarah Chen',
    username: 'sarah.chen@whispr.io',
    role: 'Senior Product Manager',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    status: 'In a meeting',
    statusMsg: 'Planning Q3 Enterprise Roadmap 📋',
    isOnline: false
  },
  {
    id: 'user_4',
    name: 'Marcus Vance',
    username: 'marcus.vance@whispr.io',
    role: 'Lead Backend Engineer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    status: 'Online',
    statusMsg: 'Optimizing Realtime Socket clusters 🚀',
    isOnline: true
  },
  {
    id: 'user_ai',
    name: 'Whispr AI Assistant',
    username: 'ai@whispr.io',
    role: 'Enterprise AI Assistant',
    avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80',
    status: 'Active 24/7',
    statusMsg: 'Mention @WhisprAI for smart answers ✨',
    isOnline: true,
    isBot: true
  }
];

const stories = [
  {
    id: 'story_1',
    userId: 'user_2',
    userName: 'Elena Rostova',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    caption: 'Bản phối màu Ultimate Aurora Glass hoàn thiện! 🎨✨',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    time: '15 phút trước'
  },
  {
    id: 'story_2',
    userId: 'user_1',
    userName: 'Alex Rivera',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    caption: 'Kích hoạt Bảng Quản Lý Task Kanban Board! 🚀',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80',
    time: '45 phút trước'
  }
];

let posts = [
  {
    id: 'post_101',
    authorId: 'user_2',
    content: '🎉 **CHÍNH THỨC CẬP NHẬT GIAO DIỆN ULTIMATE AURORA GLASS & THÀNH BẢNG KANBAN**!\n\nĐội ngũ kỹ thuật vừa nâng cấp toàn bộ hệ thống giao diện dải ngân hà Aurora lụa phát sáng (`#00f2fe` & `#8b5cf6`), bổ sung bảng quản lý Task Kanban và trình phát Voice Note. Mọi người cùng trải nghiệm nhé! ✨⚡',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    timestamp: '14:30',
    date: 'Hôm nay',
    likes: ['user_1', 'user_3', 'user_4', 'user_ai'],
    comments: [
      { id: 'c_1', authorId: 'user_1', text: 'Giao diện Aurora lấp lánh nhìn siêu ngầu và đẳng cấp 😍', time: '14:32' },
      { id: 'c_2', authorId: 'user_4', text: 'Task Kanban mượt mà vô cùng! 🚀', time: '14:35' }
    ],
    sharesCount: 18
  },
  {
    id: 'post_102',
    authorId: 'user_1',
    content: '🔐 **TÍCH HỢP ĐĂNG NHẬP GOOGLE OAUTH**: Đã bổ sung nút Đăng Nhập Google trực tiếp tại Trang Auth. Thành viên có thể đăng nhập bằng tài khoản Google công ty chỉ với 1 cú nhấp chuột!',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    timestamp: '11:15',
    date: 'Hôm nay',
    likes: ['user_2', 'user_4'],
    comments: [
      { id: 'c_3', authorId: 'user_ai', text: '🤖 Whispr AI đã sẵn sàng hỗ trợ tự động!', time: '11:18' }
    ],
    sharesCount: 12
  }
];

const channels = [
  { id: 'chan_1', name: 'Thảo Luận General', slug: 'general', type: 'channel', icon: '💬', description: 'Trò chuyện & giao lưu toàn thể cộng đồng Whispr' },
  { id: 'chan_2', name: 'Tin Tức & Sự Kiện', slug: 'announcements', type: 'channel', icon: '📢', description: 'Thông báo & sự kiện nổi bật' },
  { id: 'chan_3', name: 'Công Nghệ & AI', slug: 'engineering', type: 'channel', icon: '⚡', description: 'Thảo luận lập trình, công nghệ & AI' },
  { id: 'chan_4', name: 'Nghệ Thuật & Sáng Tạo', slug: 'ui-ux-design', type: 'channel', icon: '🎨', description: 'Giao lưu thiết kế, âm nhạc & sáng tạo' }
];

let messages = {
  'chan_1': [
    { id: 'msg_100', senderId: 'user_3', channelId: 'chan_1', content: 'Chào mừng cả nhà đến với **Whispr Enterprise**! 🚀', timestamp: '14:20' }
  ]
};

app.get('/api/bootstrap', (req, res) => {
  res.json({ users, stories, posts, channels, messages });
});

io.on('connection', (socket) => {
  console.log(`[Socket.io Server] Client connected: ${socket.id}`);

  socket.on('user:online', (userId) => {
    socket.userId = userId;
    const u = users.find(x => x.id === userId);
    if (u) {
      u.isOnline = true;
      io.emit('user:presence_change', { userId, isOnline: true });
    }
  });

  socket.on('channel:join', (channelId) => {
    socket.join(channelId);
  });

  socket.on('post:create', (postData) => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');

    const newPost = {
      id: 'post_' + Date.now(),
      authorId: postData.authorId,
      content: postData.content,
      image: postData.image || null,
      timestamp: `${hours}:${mins}`,
      date: 'Hôm nay',
      likes: [],
      comments: [],
      sharesCount: 0
    };

    posts.unshift(newPost);
    io.emit('post:new', newPost);
  });

  socket.on('post:like', ({ postId, userId }) => {
    const post = posts.find(p => p.id === postId);
    if (post) {
      const idx = post.likes.indexOf(userId);
      if (idx > -1) {
        post.likes.splice(idx, 1);
      } else {
        post.likes.push(userId);
      }
      io.emit('post:like_updated', { postId, likes: post.likes });
    }
  });

  socket.on('post:comment', ({ postId, userId, text }) => {
    const post = posts.find(p => p.id === postId);
    if (post && text) {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');

      const comment = {
        id: 'c_' + Date.now(),
        authorId: userId,
        text: text,
        time: `${hours}:${mins}`
      };

      post.comments.push(comment);
      io.emit('post:comment_updated', { postId, comments: post.comments });
    }
  });

  socket.on('disconnect', () => {
    if (socket.userId) {
      const u = users.find(x => x.id === socket.userId);
      if (u) {
        u.isOnline = false;
        io.emit('user:presence_change', { userId: socket.userId, isOnline: false });
      }
    }
  });
});

// Handle Port reuse cleanly
server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log('[Server] Port 3000 is already active, reusing running socket server process.');
  }
});

server.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(` Whispr Server running on http://localhost:${PORT}`);
  console.log(`=================================================`);
});
