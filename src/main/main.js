const { app, BrowserWindow, ipcMain, shell, Notification } = require('electron');
const path = require('path');
const fs = require('fs');
const { fork } = require('child_process');

let mainWindow = null;
let serverProcess = null;

function startServer() {
  try {
    const serverPath = path.join(__dirname, '../server/server.js');
    serverProcess = fork(serverPath);
    console.log('[Electron Main] Express & Socket.io server process spawned.');
  } catch (err) {
    console.error('[Electron Main] Failed to spawn server:', err);
  }
}

function createWindow() {
  const iconPath = path.join(__dirname, '../renderer/assets/logo.png');
  const indexPath = path.join(__dirname, '../renderer/index.html');
  const rendererDir = path.join(__dirname, '../renderer');

  mainWindow = new BrowserWindow({
    width: 1320,
    height: 860,
    minWidth: 980,
    minHeight: 650,
    title: 'Whispr Social Enterprise',
    icon: iconPath,
    backgroundColor: '#f8fafc',
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false
    }
  });

  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile(indexPath);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // LIVE HOT-RELOADING: Clean debounced watcher for HTML, CSS, JS code edits!
  let reloadTimer = null;
  try {
    fs.watch(rendererDir, { recursive: true }, (eventType, filename) => {
      if (!filename) return;
      // Filter out temporary browser download files
      if (filename.endsWith('.crdownload') || filename.endsWith('.tmp') || filename.endsWith('.log')) return;

      if (/\.(html|css|js|png|jpg|jpeg)$/i.test(filename)) {
        if (reloadTimer) clearTimeout(reloadTimer);
        reloadTimer = setTimeout(() => {
          if (mainWindow && !mainWindow.isDestroyed()) {
            console.log(`⚡ [Live Hot-Reload] Code updated in ${filename} -> Reloading UI live on screen!`);
            mainWindow.webContents.reload();
          }
        }, 250);
      }
    });
  } catch (e) {
    console.log('[Hot-Reload] Watcher error:', e);
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(() => {
  startServer();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (serverProcess) {
    serverProcess.kill();
  }
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('show-notification', (event, data) => {
  if (Notification.isSupported()) {
    const notification = new Notification({
      title: data.title || 'Whispr Social',
      body: data.body || '',
      icon: path.join(__dirname, '../renderer/assets/logo.png'),
      silent: false
    });
    notification.show();
  }
});
