import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GithubIcon as Github, LinkedinIcon as Linkedin, InstagramIcon as Instagram } from './icons';
import heroImg from '../assets/IMG_9617.jpg';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Techy HUD Decoration - Top Left */}
      <div className="absolute top-10 left-10 hidden md:block opacity-40">
        <div className="flex items-center gap-3 text-[10px] font-mono tracking-widest text-purple-400">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            SYSTEM_ACTIVE // VER: 2.0.4
        </div>
        <div className="w-32 h-[1px] bg-gradient-to-r from-purple-500 to-transparent mt-1" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12 w-full max-w-7xl mx-auto py-24">
        
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="space-y-6 z-20"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-purple-500" />
            <h2 className="text-purple-400 font-medium tracking-[0.2em] text-xs md:text-sm uppercase">
                Freelance Full Stack Architect
            </h2>
          </motion.div>

          <div className="relative">
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl font-sans leading-none">
              <span className="block">
                Sahal
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                Sabith.
              </span>
            </h1>
            {/* HUD Bracket */}
            <div className="absolute -top-4 -left-6 w-8 h-8 border-t-2 border-l-2 border-purple-500/30 hidden md:block" />
          </div>

          <motion.p 
            className="text-neutral-400 max-w-md text-lg md:text-xl font-light leading-relaxed border-l border-white/10 pl-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-white">Freelance Full Stack Developer</span> engineering <span className="text-white">futuristic digital ecosystems</span> with React, Django & AWS. Based in Kerala, India.
          </motion.p>
          
          <motion.div 
            className="flex items-center gap-8 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="flex gap-6">
              <a href="https://github.com/SahalSabith" target="_blank" rel="noreferrer" aria-label="Github Profile" className="text-zinc-500 hover:text-white transition-all hover:scale-110">
                <Github className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/in/sahal-sabith-406691306" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="text-zinc-500 hover:text-[#0A66C2] transition-all hover:scale-110">
                <Linkedin className="w-7 h-7" />
              </a>
              <a href="https://www.instagram.com/sahal_sabith_/" target="_blank" rel="noreferrer" aria-label="Instagram Profile" className="text-zinc-500 hover:text-[#E1306C] transition-all hover:scale-110">
                <Instagram className="w-7 h-7" />
              </a>
            </div>

            <div className="h-10 w-[1px] bg-white/10" />
            
            <div className="hidden sm:block">
                <p className="text-[10px] text-zinc-500 font-mono tracking-tighter">LAT: 10.8505° N</p>
                <p className="text-[10px] text-zinc-500 font-mono tracking-tighter">LNG: 76.2711° E</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ y, opacity }}
          className="relative lg:h-[600px] flex justify-center lg:justify-end items-center"
        >
           {/* Decorative frame */}
           <div className="absolute inset-0 max-w-md ml-auto bg-gradient-to-tr from-purple-600/10 to-transparent rounded-tr-[100px] rounded-bl-[100px] border border-white/5 transform translate-x-6 translate-y-6"></div>
           
           <div className="relative w-full max-w-md overflow-hidden rounded-tr-[100px] rounded-bl-[100px] shadow-2xl z-10 border border-white/10 group">
              <img 
                src={heroImg} 
                alt="Portrait of Sahal Sabith, Freelance Full Stack Developer" 
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition duration-700 group-hover:scale-105"
              />
              
              {/* Image Scanner Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent h-1/4 w-full -translate-y-full group-hover:animate-[scan_3s_linear_infinite] pointer-events-none" />
              
              {/* Floating Data Chip */}
              <div className="absolute bottom-10 right-10 flex flex-col gap-1 bg-black/60 backdrop-blur-md p-3 border border-white/10 rounded-lg pointer-events-none">
                <span className="text-[8px] text-purple-400 font-mono">STATUS: AVAILABLE</span>
                <div className="w-16 h-1 bg-purple-500/30 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "80%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        className="h-full bg-purple-500"
                    />
                </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
