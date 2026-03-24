import React from 'react';

/*
  Footer: Minimal footer with copyright and back-to-top functionality.
*/
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {new Date().getFullYear()} Your Name. Built with React.
        </p>
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"/>
            <polyline points="5,12 12,5 19,12"/>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;