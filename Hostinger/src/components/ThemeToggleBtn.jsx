import React from 'react';
import assets from '../assets/assets';

const ThemeToggleBtn = ({ theme, setTheme }) => {
  return (
    <button aria-label="Toggle dark mode" className="focus:outline-none">
      {theme === 'dark' ? (
        <img
          onClick={() => setTheme('light')}
          src={assets.sun_icon}
          alt="Switch to light mode"
          className="w-8 h-8 cursor-pointer border border-gray-500 rounded-full p-1.5"
        />
      ) : (
        <img
          onClick={() => setTheme('dark')}
          src={assets.moon_icon}
          alt="Switch to dark mode"
          className="w-8 h-8 cursor-pointer border border-gray-500 rounded-full p-1.5"
        />
      )}
    </button>
  );
};

export default ThemeToggleBtn;



