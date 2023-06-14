import React, { useState } from 'react';

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'light' : 'dark');
  };

  return (
    <button onClick={toggleTheme}>
      {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
    </button>
  );
};

export default ThemeToggle;
