import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-to-renderer',
      closeBundle() {
        try {
          const src = path.resolve(__dirname, 'dist');
          const dest = path.resolve(__dirname, '../src/renderer/landing_dist');
          if (fs.existsSync(src)) {
            fs.mkdirSync(dest, { recursive: true });
            fs.cpSync(src, dest, { recursive: true });
          }
        } catch (e) {
          console.error('[Vite Plugin] Error copying dist to renderer:', e);
        }
      }
    }
  ],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: true
  }
});
