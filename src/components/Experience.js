import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';


const experiences = [
  {
    role: 'Software Developer',
    company: 'SuvyaWeb',
    period: 'Jun 2024 – Apr 2026',
    type: 'Full-time',
    description:
      'Developing and maintaining enterprise web applications using ASP.NET MVC and .NET Core. Collaborating with cross-functional teams to deliver features that serve thousands of users.',
    responsibilities: [
      'Built and maintained web applications using ASP.NET MVC, .NET Core, and C#',
      'Designed and optimized SQL Server databases with stored procedures and complex queries',
      'Developed RESTful APIs consumed by frontend applications',
      'Developed SDK of POS Terminals',
      'Worked on POS (Point on sale) module',
      'Build a Microsoft Project - AI Data Talk Admin Panel - Voice to transcription and emotions.',
    ],
    technologies: ['C#', 'ASP.NET MVC', '.NET Core', 'SQL Server', 'Entity Framework', 'JavaScript', 'Git', 'React JS'],
  },
  {
    role: 'Intern – Software Developer',
    company: 'SuvyaWeb',
    period: 'Jun 2024 - Feb 2025',
    type: 'Internship',
    description:
      'Gained hands-on experience in full-stack web development, working on internal tools and learning enterprise software development practices.',
    responsibilities: [
      'Learned C#, MVC, .Net, .Net Core, OOPS, SQL Server',
      'Created Ecommerce website',
      'Created responsive UI components using HTML, CSS, and Bootstrap'
    ],
    technologies: ['C#', 'OOPS', 'ASP.NET', 'SQL Server', 'HTML/CSS', 'Bootstrap'],
  },
];

const Experience = ({ expRef }) => {
  return (
    <SectionWrapper id="experience">
      <div className="section-header">
        <span className="section-label">Career</span>
        <h2 ref={expRef} className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          My professional journey building web applications.
        </p>
      </div>

      <div ref={expRef} className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            {}
            <div className="timeline-connector">
              <div className="timeline-dot" />
              {index < experiences.length - 1 && <div className="timeline-line" />}
            </div>

            <div className="experience-content">
              {}
              <div className="experience-header">
                <div className="experience-header-left">
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <div className="experience-header-right">
                  <span className="experience-period">{exp.period}</span>
                  <span className="experience-type">{exp.type}</span>
                </div>
              </div>

              {}
              <p className="experience-description">{exp.description}</p>

              {}
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {}
              <div className="experience-tech">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;