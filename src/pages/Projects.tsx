import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Github, ExternalLink } from 'lucide-react';

function Projects({ theme }) {
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

  const projects = [
    {
      title: "Music Webpage",
      description: "A modern music streaming website featuring a sleek interface, responsive design, and seamless audio playback. Built with React for the frontend and Node.js/Express for the backend.",
      tech: "React, Node.js, Express",
      github: "https://github.com/koolaash/music-webpage",
      live: "https://music.dreamscripting.com"
    },
    {
      title: "Premade QBox",
      description: "A comprehensive collection of pre-configured QBox scripts for FiveM servers. Includes optimized systems for inventory, jobs, and player management with enhanced performance.",
      tech: "Lua, FiveM, QBox Framework",
      github: "https://github.com/koolaash/premade-qbox"
    },
    {
      title: "PS Multijob Redesign",
      description: "A redesigned and enhanced version of the PS Multijob system for FiveM servers. Features an improved UI, better performance, and expanded functionality.",
      tech: "Lua, Svelte, FiveM, QBCORE & QBOX Framework",
      github: "https://github.com/koolaash/ps-multijob-redesign"
    },
    {
      title: "Dream Darkweb",
      description: "An immersive darkweb system for FiveM roleplay servers. Features encrypted communications, anonymous transactions, and a dynamic marketplace system.",
      tech: "D.js, FiveM, QBCore, QBox & ESX",
      github: "https://github.com/koolaash/Dream-Darkweb"
    },
    {
      title: "Discord Bot Template",
      description: "A feature-rich Discord bot template with moderation, music, and utility commands. Built with Discord.js and includes MongoDB integration.",
      tech: "Discord.js, Node.js, MongoDB",
      github: "https://github.com/koolaash/discord-bot-template"
    },
    {
      title: "FiveM Server Manager",
      description: "A comprehensive server management tool for FiveM servers with features like player tracking, resource monitoring, and automated backups.",
      tech: "Node.js, Express, SQLite",
      github: "https://github.com/koolaash/fivem-server-manager"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="flex items-center gap-3 mb-8">
        <BookOpen className={`${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`} size={28} />
        <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-purple-900'}`}>Projects</h2>
      </div>
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            variants={item}
            className={`p-6 rounded-lg card-hover ${theme === 'dark' ? 'bg-purple-900/30 hover:bg-purple-800/50' : 'bg-white/80 hover:bg-white'} transition-all duration-300 hover:shadow-xl border border-purple-500/20`}
          >
            <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-purple-900'}`}>{project.title}</h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-purple-200' : 'text-purple-600'}`}>{project.tech}</p>
            <p className={`mb-4 ${theme === 'dark' ? 'text-purple-100' : 'text-purple-800'}`}>{project.description}</p>
            <div className="flex gap-4">
              <a 
                href={project.github}
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-md ${theme === 'dark' ? 'bg-emerald-700 text-white hover:bg-emerald-600' : 'bg-emerald-600 text-white hover:bg-emerald-700'} transition-all duration-300`}
              >
                <Github size={18} />
                View Code
              </a>
              {project.live && (
                <a 
                  href={project.live}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-md ${theme === 'dark' ? 'bg-purple-700 text-white hover:bg-purple-600' : 'bg-purple-600 text-white hover:bg-purple-700'} transition-all duration-300`}
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects;