import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const skills = [
  "Python", "JavaScript", "Django", "React", 
  "AWS", "Redux", "SQL", "NoSQL", "Figma"
];

const Skills = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-32 left-8 md:left-24 z-10 w-full">
          <h3 className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-2">Capabilities</h3>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-12">My Arsenal.</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 md:gap-16 items-center w-[200vw] mt-24 px-8 md:px-24">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="relative group flex-shrink-0 flex items-center justify-center w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/10 hover:border-purple-500/50 bg-zinc-900/50 backdrop-blur-sm transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h4 className="text-3xl md:text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-500 relative z-10 font-sans tracking-tighter">
                {skill}
              </h4>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
