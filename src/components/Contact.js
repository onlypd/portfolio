import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

/*
  Contact: Clean layout with email, LinkedIn, and GitHub links.
  REPLACE: Update with your actual contact details.
*/

const contactLinks = [
  {
    label: 'Email',
    value: 'paramdange03@gmail.com',
    href: 'mailto:paramdange03@gmail.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'param-dange',
    href: 'https://in.linkedin.com/in/param-dange-27a2bb29a',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: 'onlypd__',
    href: 'https://instagram.com/onlypd__',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
        <circle cx="12" cy="12" r="4"></circle>
        <circle cx="17.5" cy="6.5" r="1"></circle>
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-label">Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a conversation about technology.
          </p>
        </div>

        <div className="contact-grid">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="contact-card"
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="contact-icon">{link.icon}</div>
              <div className="contact-info">
                <span className="contact-label">{link.label}</span>
                <span className="contact-value">{link.value}</span>
              </div>
              <svg className="contact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7,7 17,7 17,17"/>
              </svg>
            </motion.a>
          ))}
        </div>

        {/* Direct CTA */}
        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p>Prefer a direct conversation?</p>
          <a href="mailto:paramdange03@gmail.com" className="btn btn-primary">
            Send an Email
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12,5 19,12 12,19"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;