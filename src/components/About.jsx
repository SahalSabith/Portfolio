import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/IMG_5144.jpg';

const About = () => {
  return (
    <section className="relative py-32 sm:py-48 px-4 bg-zinc-950 flex justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative group w-full max-w-md mx-auto"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500 blur-xl"></div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
            <img 
              src={profileImg} 
              alt="Sahal Sabith, Freelance Full Stack Developer from Kerala" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h3 className="text-purple-400 font-medium tracking-widest uppercase text-sm">About Me</h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Who I Am.</h2>
          </div>

          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light">
            <p>
              Hello! I'm <span className="text-white font-medium">Sahal Sabith</span>, a passionate <span className="text-white font-medium">Freelance Full Stack Web Developer</span> hailing from <span className="text-white">Malappuram, Kerala, India</span>. 
              I have an insatiable curiosity for building digital products that blend aesthetic beauty with robust engineering.
            </p>
            <p>
              My journey into tech accelerated at <span className="text-white">Brototype</span>, an intensive bootcamp where I honed my skills in Full Stack Web Development. 
              I love writing clean, efficient code and transforming ideas into interactive web experiences.
            </p>
          </div>

          <div className="pt-8 grid grid-cols-2 gap-8 border-t border-zinc-800">
            <div>
              <p className="text-zinc-500 text-sm uppercase tracking-wider mb-2">Location</p>
              <p className="text-white">Kerala, India</p>
            </div>
            <div>
              <p className="text-zinc-500 text-sm uppercase tracking-wider mb-2">Drop a line</p>
              <a href="mailto:sahalsabithofficial@gmail.com" aria-label="Send email to Sahal Sabith" className="text-white hover:text-purple-400 transition-colors">
                sahalsabithofficial@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
