import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

function Experience({ theme }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className={`${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`} size={28} />
        <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-purple-900'}`}>Work Experience</h2>
      </div>
      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className={`p-6 rounded-lg card-hover ${theme === 'dark' ? 'bg-purple-900/30 hover:bg-purple-800/50' : 'bg-white/80 hover:bg-white'} transition-all duration-300 hover:shadow-xl border border-purple-500/20`}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-purple-900'}`}>Bot Developer</h3>
              <p className={`${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>Freelance, Remote</p>
            </div>
            <p className={`${theme === 'dark' ? 'text-purple-200' : 'text-purple-600'} mt-2 md:mt-0`}>Aug 2020 - Sep 2022</p>
          </div>
          <ul className={`space-y-2 ${theme === 'dark' ? 'text-purple-100' : 'text-purple-800'}`}>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
              <span>Developed and maintained Discord bots for various clients, implementing features like moderation, music playback, and custom commands.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
              <span>Created a bot with over 100,000 users across multiple Discord servers, handling high-volume interactions efficiently.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
              <span>Implemented database integration for persistent data storage and user preferences.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className={`p-6 rounded-lg card-hover ${theme === 'dark' ? 'bg-purple-900/30 hover:bg-purple-800/50' : 'bg-white/80 hover:bg-white'} transition-all duration-300 hover:shadow-xl border border-purple-500/20`}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-purple-900'}`}>FiveM Developer</h3>
              <p className={`${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>Remote</p>
            </div>
            <p className={`${theme === 'dark' ? 'text-purple-200' : 'text-purple-600'} mt-2 md:mt-0`}>Dec 2022 - Present</p>
          </div>
          <ul className={`space-y-2 ${theme === 'dark' ? 'text-purple-100' : 'text-purple-800'}`}>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
              <span>Engineered 20+ FiveM servers using Lua, customizing gameplay mechanics, server features, and unique scripts to deliver personalized experiences, leading to a 30% improvement in server performance and 65% increase in player engagement.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
              <span>Revamped inefficient SQL queries to enhance performance metrics, leading to a 50% increase in processing speed, accommodating complex analytic tasks for a team of 15 data analysts.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
              <span>Optimized 35% of MLO files and scripts, reducing lag and load times by 25%, improving game performance and boosting player retention by 55%.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
              <span>Revamped internal project management protocols, resulting in accelerated turnaround time for user-requested features from six weeks to three weeks.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Experience;