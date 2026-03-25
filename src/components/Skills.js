import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';



const skillCategories = [
  {
    title: 'Backend',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    skills: [
      { name: 'ASP.NET MVC', level: 100 },
      { name: 'Web API', level: 95 },
      { name: 'C#', level: 90 },
      { name: '.NET Core', level: 86 },
      { name: 'Entity Framework', level: 82 },
      { name: 'LINQ', level: 80 },
    ],
  },
  {
    title: 'Database',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    skills: [
      { name: 'SQL Server', level: 88 },
      { name: 'Stored Procedures', level: 82 },
      { name: 'Database Design', level: 78 },
    ],
  },
  {
    title: 'Frontend',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16,18 22,12 16,6"/>
        <polyline points="8,6 2,12 8,18"/>
      </svg>
    ),
    skills: [
      { name: 'HTML5', level: 85 },
      { name: 'CSS3', level: 80 },
      { name: 'JavaScript', level: 78 },
      { name: 'jQuery', level: 75 },
      { name: 'Bootstrap', level: 80 },
      { name: 'React JS', level: 55 },
    ],
  },
  {
    title: 'Tools & Practices',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
    skills: [
      { name: 'Git & GitHub', level: 82 },
      { name: 'Visual Studio', level: 88 },
      { name: 'REST APIs', level: 82 },
      { name: 'IIS Deployment', level: 45 },
    ],
  },
];

const Skills = ({ skillsRef }) => {
  
  return (
    <SectionWrapper id="skills">
      <div className="section-header">
        <span className="section-label">Expertise</span>
        <h2 ref={skillsRef} className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Technologies I work with to build reliable, production-ready applications.
        </p>
      </div>

      <div ref={skillsRef} className="skills-grid">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1, duration: 0.5 }}
          >
            <div className="skill-card-header">
              <div className="skill-icon">{category.icon}</div>
              <h3 className="skill-category-title">{category.title}</h3>
            </div>
            <div className="skill-list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-item-header">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;