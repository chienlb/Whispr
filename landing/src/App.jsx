import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppPreview from './components/AppPreview';
import Features from './components/Features';
import AiDemo from './components/AiDemo';
import DownloadSection from './components/DownloadSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Aurora Ambient Background */}
      <div class="aurora-bg">
        <div class="aurora-blob-1"></div>
        <div class="aurora-blob-2"></div>
        <div class="aurora-blob-3"></div>
      </div>

      {/* Main Layout Stack */}
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero lang={lang} />
        <AppPreview lang={lang} />
        <Features lang={lang} />
        <AiDemo lang={lang} />
        <DownloadSection lang={lang} />
        <FaqSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
