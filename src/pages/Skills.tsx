import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

function Skills({ theme }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="h-full py-8 flex flex-col"
    >
      <div className="flex items-center gap-3 mb-8">
        <Code className={`${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`} size={28} />
        <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-purple-900'}`}>Technical Skills</h2>
      </div>
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <motion.div 
          variants={item}
          className={`p-6 rounded-lg card-hover ${theme === 'dark' ? 'bg-purple-900/30 hover:bg-purple-800/50' : 'bg-white/80 hover:bg-white'} transition-all duration-300 hover:shadow-xl border border-purple-500/20`}
        >
          <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-purple-900'}`}>Frontend</h3>
          <ul className={`space-y-2 ${theme === 'dark' ? 'text-purple-100' : 'text-purple-800'}`}>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              HTML5 & CSS3
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              React.js
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Android Development
            </li>
          </ul>
        </motion.div>
        <motion.div 
          variants={item}
          className={`p-6 rounded-lg card-hover ${theme === 'dark' ? 'bg-purple-900/30 hover:bg-purple-800/50' : 'bg-white/80 hover:bg-white'} transition-all duration-300 hover:shadow-xl border border-purple-500/20`}
        >
          <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-purple-900'}`}>Backend</h3>
          <ul className={`space-y-2 ${theme === 'dark' ? 'text-purple-100' : 'text-purple-800'}`}>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              RDBMS/SQL
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Firebase
            </li>
          </ul>
        </motion.div>
        <motion.div 
          variants={item}
          className={`p-6 rounded-lg card-hover ${theme === 'dark' ? 'bg-purple-900/30 hover:bg-purple-800/50' : 'bg-white/80 hover:bg-white'} transition-all duration-300 hover:shadow-xl border border-purple-500/20`}
        >
          <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-purple-900'}`}>Tools & Others</h3>
          <ul className={`space-y-2 ${theme === 'dark' ? 'text-purple-100' : 'text-purple-800'}`}>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Git & GitHub
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Discord.js
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Compiler Design
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Software Testing
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              AI Fundamentals
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;