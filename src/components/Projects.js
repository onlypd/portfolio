import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

/*
  Projects: Showcase of work with clean card design.
  REPLACE: Update with your actual projects, GitHub links, and live URLs.
*/

const projects = [
  {
    title: 'RoboRewards - Loyalty Based Program',
    description:
      'This project has been a significant learning experience for me, covering end-to-end development and business operations. It involved multiple roles, complex workflows, and the implementation of advanced features. I independently handled one of the key modules — the POS (Point of Sale) system.',
    techStack: ['ASP.NET MVC', 'C#', 'SQL Server', 'Entity Framework', 'Bootstrap', 'jQuery'],
    
    featured: true,
  },
  {
    title: 'AI-Powered Data Talk Admin Panel (Microsoft Project)',
    description:
      'Worked on an AI-driven admin panel focused on managing conversational data and user interactions. Implemented role-based access control (RBAC) and advanced administrative features. Developed an AI module that processes uploaded voice conversations to generate accurate transcriptions along with emotion analysis, enabling deeper insights into communication patterns.',
    techStack: ['.NET Core', 'C#', 'AI/ML Integration', 'Speech-to-Text', 'Role-Based Access Control'],
    featured: true,
  },
  {
    title: 'Desktop Application for Binary Analysis & Code Manipulation',
    description:
      'Developed a desktop application as a freelance project focused on binary pattern (AOB) analysis and code manipulation techniques. The tool was designed for research and educational purposes, enabling advanced memory pattern scanning, debugging, and understanding of software behavior in controlled environments.',
    techStack: ['C#', '.NET', 'Desktop Application', 'Memory Analysis', 'Reverse Engineering Concepts'],
    featured: false,
  }
];

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <div className="section-header">
        <span className="section-label">Work</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of projects that demonstrate my skills and problem-solving approach.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`project-card ${project.featured ? 'featured' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
          >
            {/* Project number badge */}
            <div className="project-number">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {/* Tech stack tags */}
              <div className="project-tech">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="project-actions">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="project-link project-link-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"/>
                      <polyline points="7,7 17,7 17,17"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;