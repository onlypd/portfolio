import React from 'react';
import { motion } from 'framer-motion';

/*
  SectionWrapper: Reusable wrapper for all main sections.
  Handles consistent padding, max-width, and fade-in animation.
*/
const SectionWrapper = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;