import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

/*
  Experience: Professional timeline layout.
  REPLACE: Update with your actual work experience details.
*/

const experiences = [
  {
    role: 'Software Developer',
    company: 'Your Company Name',
    period: 'Jan 2023 – Present',
    duration: '1.8 years',
    type: 'Full-time',
    description:
      'Developing and maintaining enterprise web applications using ASP.NET MVC and .NET Core. Collaborating with cross-functional teams to deliver features that serve thousands of users.',
    responsibilities: [
      'Built and maintained web applications using ASP.NET MVC, .NET Core, and C#',
      'Designed and optimized SQL Server databases with stored procedures and complex queries',
      'Developed RESTful APIs consumed by frontend applications',
      'Implemented authentication, authorization, and role-based access control',
      'Participated in code reviews and followed Agile/Scrum methodologies',
      'Deployed applications on IIS and managed production environments',
    ],
    technologies: ['C#', 'ASP.NET MVC', '.NET Core', 'SQL Server', 'Entity Framework', 'JavaScript', 'Git'],
  },
  {
    role: 'Intern – Software Development',
    company: 'Previous Company Name',
    period: 'Jul 2022 – Dec 2022',
    duration: '6 months',
    type: 'Internship',
    description:
      'Gained hands-on experience in full-stack web development, working on internal tools and learning enterprise software development practices.',
    responsibilities: [
      'Assisted in developing internal management tools using ASP.NET',
      'Wrote SQL queries and helped optimize database performance',
      'Created responsive UI components using HTML, CSS, and Bootstrap',
      'Learned version control workflows using Git and GitHub',
    ],
    technologies: ['C#', 'ASP.NET', 'SQL Server', 'HTML/CSS', 'Bootstrap', 'Git'],
  },
];

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <div className="section-header">
        <span className="section-label">Career</span>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          My professional journey building production applications.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            {/* Timeline connector line */}
            <div className="timeline-connector">
              <div className="timeline-dot" />
              {index < experiences.length - 1 && <div className="timeline-line" />}
            </div>

            <div className="experience-content">
              {/* Header: Role + Company */}
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

              {/* Description */}
              <p className="experience-description">{exp.description}</p>

              {/* Responsibilities */}
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {/* Tech tags */}
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