import React from 'react';
import profile from "../assets/profile.jpg"
import { motion } from 'framer-motion';

/*
  Hero: The first thing visitors see.
  Clean, bold, and immediately communicates who you are.
  
  REPLACE: Update the profile image by placing your photo at
  src/assets/profile.jpg and importing it, or use the placeholder below.
*/
const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Tech stack badges
  const techStack = ['ASP.NET MVC', '.NET Core', 'C#', 'SQL Server', 'Git'];

  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner">
        {/* Left content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Status badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="status-dot" />
            <span>Available for opportunities</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hi, I'm <span className="hero-name">Param Dange</span>
          </motion.h1>

          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Software Developer
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            I build robust, scalable web applications with 1.8 years of
            professional experience in .NET ecosystem. Passionate about clean
            code, efficient databases, and delivering real business value.
          </motion.p>

          {/* Tech stack badges */}
          <motion.div
            className="hero-tech"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {techStack.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <button
              className="btn btn-primary"
              onClick={() => scrollTo('projects')}
            >
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7,7 17,7 17,17"/>
              </svg>
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollTo('contact')}
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Right side - Profile Image */}
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
        >
          <div className="hero-image-wrapper">
            {
                <motion.img
                    src={profile}
                    className='hero-profile-img'
                >

                </motion.img>
            }
            {/* Decorative elements */}
            <div className="hero-image-ring" />
          </div>

          {/* Floating experience card */}
          <motion.div
            className="experience-float-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <span className="float-number">1.8+</span>
            <span className="float-label">Years Experience</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;