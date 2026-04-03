import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, InstagramIcon as Instagram } from './icons';

const Contact = () => {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-4">What's Next</h3>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">Get In Touch.</h2>
          
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-16 font-light">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <a 
              href="mailto:sahalsabithofficial@gmail.com"
              className="flex items-center gap-3 text-white hover:text-purple-400 transition-colors text-lg"
            >
              <Mail className="w-6 h-6" />
              sahalsabithofficial@gmail.com
            </a>
            <div className="flex items-center gap-3 text-zinc-400 text-lg">
              <MapPin className="w-6 h-6" />
              Kerala, India
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 mb-16">
            <a href="https://github.com/SahalSabith" target="_blank" rel="noreferrer" aria-label="Github Profile" className="bg-zinc-900 p-4 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all shadow-lg hover:shadow-purple-500/20">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sahal-sabith-406691306" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="bg-zinc-900 p-4 rounded-full text-zinc-400 hover:text-[#0A66C2] hover:bg-zinc-800 transition-all shadow-lg hover:shadow-blue-500/20">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/sahal_sabith_/" target="_blank" rel="noreferrer" aria-label="Instagram Profile" className="bg-zinc-900 p-4 rounded-full text-zinc-400 hover:text-[#E1306C] hover:bg-zinc-800 transition-all shadow-lg hover:shadow-pink-500/20">
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <motion.a
            href="mailto:sahalsabithofficial@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Send Sahal an email"
            className="inline-block bg-white text-black px-12 py-5 rounded-full font-medium text-lg tracking-wide hover:bg-purple-400 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
          >
            Say Hello
          </motion.a>
        </motion.div>
      </div>

      <footer className="absolute bottom-8 left-0 right-0 text-center text-zinc-600 text-sm">
        <p>© {new Date().getFullYear()} Sahal Sabith. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
