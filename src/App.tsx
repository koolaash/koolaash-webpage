import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Disc, Mail, Sun, Moon } from 'lucide-react';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import './animations.css';

function Home({ theme }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-180px)] flex items-center justify-center"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-purple-900'}`}>
          <span className="block">Hi, I'm</span>
          <span className={`block ${theme === 'dark' ? 'text-white' : 'text-purple-900'}`}>Mohd Shadab Khan</span>
        </h1>
        <p className={`text-xl md:text-2xl mb-8 ${theme === 'dark' ? 'text-purple-200' : 'text-purple-700'}`}>
          Full Stack Developer & Bot Developer
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <a 
            href="https://github.com/koolaash" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-3 rounded-full ${theme === 'dark' ? 'bg-purple-800 text-purple-200 hover:bg-purple-700' : 'bg-purple-200 text-purple-800 hover:bg-purple-300'} transition-all duration-300 hover:scale-110`}
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/mohd-shadab-khan-349793351/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-3 rounded-full ${theme === 'dark' ? 'bg-purple-800 text-purple-200 hover:bg-purple-700' : 'bg-purple-200 text-purple-800 hover:bg-purple-300'} transition-all duration-300 hover:scale-110`}
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://www.youtube.com/@dreamscripting" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-3 rounded-full ${theme === 'dark' ? 'bg-purple-800 text-purple-200 hover:bg-purple-700' : 'bg-purple-200 text-purple-800 hover:bg-purple-300'} transition-all duration-300 hover:scale-110`}
          >
            <Youtube size={24} />
          </a>
          <a 
            href="https://discord.gg/nkMTBARzz4" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-3 rounded-full ${theme === 'dark' ? 'bg-purple-800 text-purple-200 hover:bg-purple-700' : 'bg-purple-200 text-purple-800 hover:bg-purple-300'} transition-all duration-300 hover:scale-110`}
          >
            <Disc size={24} />
          </a>
        </div>
        <Link 
          to="/about"
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${theme === 'dark' ? 'bg-purple-700 text-white hover:bg-purple-600' : 'bg-purple-600 text-white hover:bg-purple-700'} transition-all duration-300 hover:scale-105`}
        >
          <Mail size={20} />
          Get in Touch
        </Link>
      </div>
    </motion.div>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-emerald-900' : 'bg-gradient-to-br from-purple-50 to-emerald-50'} transition-all duration-500`}>
        <header className="w-full z-50 backdrop-blur-md bg-opacity-80 border-b border-purple-500/20">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-purple-900'}`}>
              Mohd Shadab Khan
            </Link>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex gap-6">
                <Link to="/about" className={`${theme === 'dark' ? 'text-purple-300 hover:text-white' : 'text-purple-700 hover:text-purple-900'} transition-colors duration-300`}>About</Link>
                <Link to="/education" className={`${theme === 'dark' ? 'text-purple-300 hover:text-white' : 'text-purple-700 hover:text-purple-900'} transition-colors duration-300`}>Education</Link>
                <Link to="/skills" className={`${theme === 'dark' ? 'text-purple-300 hover:text-white' : 'text-purple-700 hover:text-purple-900'} transition-colors duration-300`}>Skills</Link>
                <Link to="/experience" className={`${theme === 'dark' ? 'text-purple-300 hover:text-white' : 'text-purple-700 hover:text-purple-900'} transition-colors duration-300`}>Experience</Link>
                <Link to="/projects" className={`${theme === 'dark' ? 'text-purple-300 hover:text-white' : 'text-purple-700 hover:text-purple-900'} transition-colors duration-300`}>Projects</Link>
              </nav>
              <button 
                onClick={toggleTheme} 
                className={`p-2 rounded-full ${theme === 'dark' ? 'bg-purple-800 text-purple-200' : 'bg-purple-200 text-purple-800'} hover:scale-110 transition-all duration-300`}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 container mx-auto px-4">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home theme={theme} />} />
              <Route path="/about" element={<About theme={theme} />} />
              <Route path="/education" element={<Education theme={theme} />} />
              <Route path="/skills" element={<Skills theme={theme} />} />
              <Route path="/experience" element={<Experience theme={theme} />} />
              <Route path="/projects" element={<Projects theme={theme} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </main>

        <footer className={`py-8 border-t ${theme === 'dark' ? 'border-purple-800 bg-purple-950/50 text-purple-200' : 'border-purple-200 bg-purple-50 text-purple-700'}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>&copy; 2025 Mohd Shadab Khan. All rights reserved.</p>
                <p className="mt-2">Email: dreamscripting@gmail.com</p>
              </div>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/koolaash" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-purple-800' : 'hover:bg-purple-200'} transition-all duration-300`}
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mohd-shadab-khan-349793351/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-purple-800' : 'hover:bg-purple-200'} transition-all duration-300`}
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.youtube.com/@dreamscripting" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-purple-800' : 'hover:bg-purple-200'} transition-all duration-300`}
                >
                  <Youtube size={20} />
                </a>
                <a 
                  href="https://discord.gg/nkMTBARzz4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-purple-800' : 'hover:bg-purple-200'} transition-all duration-300`}
                >
                  <Disc size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;