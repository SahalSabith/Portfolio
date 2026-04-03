import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ShareButton from './components/ShareButton'; // Added Share Component
import LikeButton from './components/LikeButton';   // Added Like Component

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white relative">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(139,92,246,0.15),transparent_60%)]" />
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px]" 
        />
      </div>

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Gallery />
        <Contact />
      </div>

      <ShareButton />
      <LikeButton />
    </div>
  );
}

export default App;
