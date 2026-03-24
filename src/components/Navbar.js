import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

/*
  Navbar: Sticky navigation with section highlighting.
  Collapses into a hamburger menu on mobile.
*/
const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Add shadow to navbar after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section when nav link is clicked
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky navbar height
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo / Brand */}
        <button
          className="navbar-brand"
          onClick={() => scrollToSection('hero')}
          aria-label="Go to top"
        >
          <span className="brand-dot">●</span>
          <span className="brand-text">Portfolio</span>
        </button>

        {/* Desktop Navigation Links */}
        <div className={`navbar-links ${mobileOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
              {/* Active indicator line */}
              {activeSection === link.id && (
                <span className="nav-indicator" />
              )}
            </button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile hamburger button */}
        <button
          className={`hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;