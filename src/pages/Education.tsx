import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

function Education({ theme }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 flex flex-col"
    >
      <div className="flex items-center gap-3 mb-8">
        <GraduationCap className={`${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`} size={28} />
        <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-purple-900'}`}>Education</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 flex-grow">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`p-6 rounded-lg card-hover ${theme === 'dark' ? 'bg-purple-900/30 hover:bg-purple-800/50' : 'bg-white/80 hover:bg-white'} transition-all duration-300 hover:shadow-xl border border-purple-500/20`}
        >
          <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-purple-900'}`}>Aligarh Muslim University</h3>
          <p className={`mb-2 font-bold ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>
            Aligarh, Uttar Pradesh, India
          </p>
          <p className={`mb-4 font-bold ${theme === 'dark' ? 'text-purple-200' : 'text-purple-600'}`}>
            Senior Secondary Education - Science (Biology) | 2018
          </p>
          <ul className={`space-y-3 ${theme === 'dark' ? 'text-purple-100' : 'text-purple-800'}`}>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
              <span>Completed Intermediate (10+2) with specialization in Biology, Physics, Chemistry, and English at one of India's premier educational institutions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
              <span>Achieved 60% overall score in board examinations, demonstrating consistent academic excellence</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
              <span>Participated in advanced laboratory sessions and research-oriented projects, developing strong analytical and experimental skills</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
              <span>Received mentorship from distinguished faculty members, gaining comprehensive knowledge in biological sciences</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
              <span>Developed critical thinking and research methodology skills through practical applications and scientific projects</span>
            </li>
          </ul>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`p-6 rounded-lg card-hover ${theme === 'dark' ? 'bg-purple-900/30 hover:bg-purple-800/50' : 'bg-white/80 hover:bg-white'} transition-all duration-300 hover:shadow-xl border border-purple-500/20`}
        >
          <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-purple-900'}`}>Maharaja Agrasen Himalayan Garhwal University</h3>
          <p className={`mb-2 font-bold ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>
            Uttarakhand, India
          </p>
          <p className={`mb-4 font-bold ${theme === 'dark' ? 'text-purple-200' : 'text-purple-600'}`}>
            Bachelor of Computer Application (BCA)
          </p>
          <div className="space-y-6">
            <div>
              <h4 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-purple-200' : 'text-purple-700'}`}>BCA Final Year (2024)</h4>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-purple-100' : 'text-purple-800'}`}>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
                  <span>Mastered RDBMS/SQL, Android Dev, and AI fundamentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
                  <span>Implemented compiler design concepts & software testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
                  <span>Led projects using software management methodologies</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-purple-200' : 'text-purple-700'}`}>BCA Second Year (2023)</h4>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-purple-100' : 'text-purple-800'}`}>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
                  <span>Core CS: Operating Systems (Unix), Computer Networks, Graph Theory</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
                  <span>Development: System Analysis & Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
                  <span>Applied Tech: Multimedia Systems, Office Automation Tools</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-purple-200' : 'text-purple-700'}`}>BCA Semester 1 (2022)</h4>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-purple-100' : 'text-purple-800'}`}>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
                  <span>Programming Fundamentals: C, C++ & Data Structures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
                  <span>Database Systems: Intro to DBMS concepts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
                  <span>Mathematical Foundation for CS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
                  <span>Practical Labs: C Programming & Problem Solving</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Education;