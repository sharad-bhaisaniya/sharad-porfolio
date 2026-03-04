import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SettingsPanel from './components/SettingsPanel';
import BackgroundAnimation from './animations/BackgroundAnimation';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

import { THEME_COLORS } from './config/theme';
import { ANIMATIONS } from './config/animations';
import ThemeProvider from './providers/ThemeProvider';
import About from './sections/About';
import TechMarquee from './sections/TechMarquee';

export default function App() {

  // 🔥 RANDOM ON FIRST LOAD
  const getRandomTheme = () =>
    THEME_COLORS[Math.floor(Math.random() * THEME_COLORS.length)].value;

  const getRandomAnimation = () =>
    ANIMATIONS[Math.floor(Math.random() * ANIMATIONS.length)].id;

  const [themeColor, setThemeColor] = useState(getRandomTheme);
  const [animType, setAnimType] = useState(getRandomAnimation);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 🔥 OPTIONAL: Save selection
  useEffect(() => {
    localStorage.setItem('themeColor', themeColor);
    localStorage.setItem('animType', animType);
  }, [themeColor, animType]);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <ThemeProvider color={themeColor} />
      <BackgroundAnimation type={animType} color={themeColor} />

      <div className="relative z-10 h-screen overflow-y-auto scroll-smooth">
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <Hero />
        <About />
        <Skills />
        <Projects />
        <TechMarquee />
        <Contact />
      </div>

      <SettingsPanel
        isOpen={isSettingsOpen}
        setIsOpen={setIsSettingsOpen}
        theme={themeColor}
        setTheme={setThemeColor}
        anim={animType}
        setAnim={setAnimType}
      />
    </div>
  );
}