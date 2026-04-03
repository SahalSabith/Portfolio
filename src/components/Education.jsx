import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, BookOpen } from 'lucide-react';

const timelineData = [
  {
    title: "BTech in Computer Science & Engineering",
    institution: "Eranad Knowledge City Technical Campus, Manjeri",
    date: "Present",
    description: "Currently pursuing my Bachelor of Technology degree, focusing on core computer science subjects, algorithms, and software engineering principles.",
    icon: <GraduationCap className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Full Stack Web Development",
    institution: "Brototype",
    date: "Recent",
    description: "An intensive bootcamp where I mastered Full Stack Web Development, focusing on Python, React, Django, AWS, and modern web architectures.",
    icon: <Code2 className="w-6 h-6 text-purple-400" />
  },
  {
    title: "12th Grade (Bio Science)",
    institution: "GVHSS Vengara",
    date: "Completed",
    description: "Completed higher secondary education with a focus on Bio Science, developing a strong foundation in analytical thinking.",
    icon: <BookOpen className="w-6 h-6 text-purple-400" />
  },
  {
    title: "10th Grade",
    institution: "Ideal Higher Secondary School, Dharmagiri",
    date: "2022",
    description: "Successfully completed secondary education, building core academic fundamentals.",
    icon: <GraduationCap className="w-6 h-6 text-purple-400" />
  }
];

const Education = () => {
  return (
    <section className="py-32 px-4 bg-zinc-950 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-24">
          <h3 className="text-purple-400 font-medium tracking-widest uppercase text-sm">Journey</h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Education & Bootcamp.</h2>
        </div>

        <div className="relative border-l border-zinc-800 ml-6 md:ml-12 space-y-24 pb-12">
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-12 md:pl-20"
            >
              {/* Timeline dot/icon */}
              <div className="absolute -left-6 top-0 w-12 h-12 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                {item.icon}
              </div>

              <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-2xl hover:bg-zinc-900/60 transition duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <span className="text-purple-400 font-medium mt-2 md:mt-0 bg-purple-400/10 px-4 py-1 rounded-full text-sm w-fit">
                    {item.date}
                  </span>
                </div>
                <h4 className="text-lg text-zinc-400 mb-4">{item.institution}</h4>
                <p className="text-zinc-500 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
