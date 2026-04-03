import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeartIcon = ({ filled }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill={filled ? "currentColor" : "none"} 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(() => Math.floor(Math.random() * 50) + 120);

  const toggleLike = () => {
    if (liked) {
      setCount(prev => prev - 1);
    } else {
      setCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-center gap-1 group">
      <AnimatePresence>
        {liked && (
            <motion.div
                initial={{ opacity: 0, y: 0, scale: 0.5 }}
                animate={{ opacity: 0, y: -50, scale: 1.5 }}
                transition={{ duration: 0.5 }}
                className="absolute text-pink-500 font-bold pointer-events-none"
            >
                +1
            </motion.div>
        )}
      </AnimatePresence>
      
      <button
        onClick={toggleLike}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl relative overflow-hidden ${
          liked 
            ? 'bg-pink-500 text-white shadow-pink-500/40' 
            : 'bg-white/5 backdrop-blur-xl border border-white/10 text-neutral-400 hover:text-pink-400'
        }`}
      >
        <motion.div
          animate={liked ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <HeartIcon filled={liked} />
        </motion.div>
      </button>
      
      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest bg-black/40 px-2 py-0.5 rounded-full border border-white/5 backdrop-blur-sm">
        {count}
      </span>
    </div>
  );
};

export default LikeButton;
