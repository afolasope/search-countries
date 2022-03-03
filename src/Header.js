import React, { useEffect } from 'react';
import { useState } from 'react';
import { BsMoon } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';
import { useGlobalContext } from './context';

export const Header = () => {
  const { theme, setTheme } = useGlobalContext();
  const handleTheme = (e) => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
    console.log();
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <header>
      <h3>Where in the world</h3>
      <div className="icons-container" onClick={handleTheme}>
        {theme === 'dark-theme' && (
          <div className="moon-icon">
            <BsMoon />
            <span>Light mode</span>
          </div>
        )}
        {theme === 'light-theme' && (
          <div className="moon-icon">
            <BsMoonFill />
            <span>Dark mode</span>
          </div>
        )}
      </div>
    </header>
  );
};
