import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Code, Phone, MessageSquare, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

function About({ theme }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://ptb.discord.com/api/webhooks/1369305165701840926/rMcKsXcQBpCLo7ojUma4Mn3wMKq2A-aOQx_hPR2d4ys6xJOjdHENy-ILnNduc9UeCd9O', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: '<@294468324115349505>',
          embeds: [{
            title: 'New Contact Form Submission',
            color: 0x8b5cf6,
            fields: [
              {
                name: 'Name',
                value: formData.name,
                inline: false
              },
              {
                name: 'Phone',
                value: formData.phone,
                inline: false
              },
              {
                name: 'Email',
                value: formData.email,
                inline: false
              },
              {
                name: 'Subject',
                value: formData.subject,
                inline: false
              },
              {
                name: 'Message',
                value: formData.message,
                inline: false
              }
            ],
            timestamp: new Date().toISOString()
          }]
        }),
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/2">
          <div className="flex items-center gap-3 mb-4">
            <User className={`${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`} size={28} />
            <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-purple-900'}`}>About Me</h2>
          </div>
          <div className={`relative w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full border-4 ${theme === 'dark' ? 'border-purple-500' : 'border-purple-700'}`}>
            <img 
              src="https://r2.fivemanage.com/H69RQc4BdRXtWaufdSM5p/94A51A54-B42D-417B-BCE5-E130ED197720.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className={`mb-4 ${theme === 'dark' ? 'text-purple-100' : 'text-purple-800'}`}>
            I'm a skilled and passionate developer with expertise in creating customized Discord bots and FiveM servers. With a strong foundation in JavaScript, Python, SQL, and Lua, I've successfully designed and deployed over 100 Discord bots, significantly improving server engagement and moderation efficiency.
          </p>
          <p className={`mb-4 ${theme === 'dark' ? 'text-purple-100' : 'text-purple-800'}`}>
            My work as a FiveM developer highlights my ability to optimize server performance, enhance gameplay mechanics, and deliver personalized user experiences. I hold a Bachelor of Computer Applications (BCA) from Maharaja Agrasen Himalayan Garhwal University, where I gained proficiency in data structures, database management, and operating systems.
          </p>
          <p className={`mb-6 ${theme === 'dark' ? 'text-purple-100' : 'text-purple-800'}`}>
            Committed to continuous learning and innovation, I thrive in fast-paced environments and am open to relocation for exciting opportunities. My blend of technical expertise, creativity, and problem-solving skills allows me to deliver high-impact solutions in software development and automation.
          </p>
          <div className="flex gap-4">
            <Link 
              to="/projects"
              className={`flex items-center gap-2 px-4 py-2 rounded-md ${theme === 'dark' ? 'bg-transparent border border-emerald-500 text-emerald-300 hover:bg-emerald-900' : 'bg-transparent border border-emerald-600 text-emerald-700 hover:bg-emerald-100'} transition-all duration-300`}
            >
              <Code size={18} />
              View Projects
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`md:w-1/2 p-8 rounded-xl ${theme === 'dark' ? 'bg-purple-900/30 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'} shadow-xl border border-purple-500/20`}
        >
          <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-purple-900'}`}>Get in Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative group">
                <User className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} transition-colors duration-300`} size={18} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className={`w-full pl-10 pr-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-purple-800/30 text-white placeholder-purple-300' : 'bg-purple-50 text-purple-900 placeholder-purple-500'} border border-purple-500/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300`}
                />
              </div>
              <div className="relative group">
                <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} transition-colors duration-300`} size={18} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className={`w-full pl-10 pr-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-purple-800/30 text-white placeholder-purple-300' : 'bg-purple-50 text-purple-900 placeholder-purple-500'} border border-purple-500/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300`}
                />
              </div>
            </div>
            <div className="relative group">
              <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} transition-colors duration-300`} size={18} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className={`w-full pl-10 pr-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-purple-800/30 text-white placeholder-purple-300' : 'bg-purple-50 text-purple-900 placeholder-purple-500'} border border-purple-500/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300`}
              />
            </div>
            <div className="relative group">
              <MessageSquare className={`absolute left-3 top-3 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} transition-colors duration-300`} size={18} />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className={`w-full pl-10 pr-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-purple-800/30 text-white placeholder-purple-300' : 'bg-purple-50 text-purple-900 placeholder-purple-500'} border border-purple-500/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300`}
              />
            </div>
            <div className="relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={4}
                className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-purple-800/30 text-white placeholder-purple-300' : 'bg-purple-50 text-purple-900 placeholder-purple-500'} border border-purple-500/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300`}
              />
            </div>
            {submitStatus.message && (
              <p className={`text-sm ${submitStatus.type === 'success' ? 'text-emerald-500' : 'text-red-500'}`}>
                {submitStatus.message}
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg ${
                theme === 'dark'
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  : 'bg-emerald-500 hover:bg-emerald-600 text-white'
              } transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <Send size={18} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;