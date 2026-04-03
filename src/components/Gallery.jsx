import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import img1 from '../assets/IMG_5144.jpg';
import img2 from '../assets/IMG_9210_3.jpg';
import img3 from '../assets/IMG_9617.jpg';

const images = [
  { src: img3, alt: 'Sahal portrait' },
  { src: img2, alt: 'Sahal working' },
  { src: img1, alt: 'Sahal coding' },
];

const Gallery = () => {
  return (
    <section className="py-32 bg-black px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h3 className="text-purple-400 font-medium tracking-widest uppercase text-sm">Visuals</h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Moments.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl aspect-[4/5] md:aspect-[3/4] group ${i % 2 === 1 ? 'md:mt-24' : ''}`}
            >
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out grayscale hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
