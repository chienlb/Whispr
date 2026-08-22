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
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const lang = 'en';

  return (
    <div className="min-h-screen relative font-sans">
      {/* Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero lang={lang} />
        <AppPreview lang={lang} />
        <Features lang={lang} />
        <AiDemo lang={lang} />
        <DownloadSection lang={lang} />
        <FaqSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
