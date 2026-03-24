import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for theme management
const ThemeContext = createContext();

// Custom hook for easy access to theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Check localStorage for saved preference, default to 'light'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved || 'light';
  });

  // Apply theme class to document and save preference
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};