'use client';

import { useEffect, useId, useState } from 'react';
import { HiOutlineComputerDesktop, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';
import styles from '../styles/App.module.css';

const OPTIONS = [
  ['system', 'System theme', HiOutlineComputerDesktop],
  ['light', 'Light theme', HiOutlineSun],
  ['dark', 'Dark theme', HiOutlineMoon],
];

// Saved choice lives in localStorage and on <html data-theme>; neither set = follow the OS.
// app/layout.jsx re-applies it before first paint.
export default function ThemePicker({ className = '' }) {
  const name = useId();
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || 'system');
  }, []);

  const pick = (value) => {
    setTheme(value);
    const system = value === 'system';
    if (system) delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = value;
    try {
      if (system) localStorage.removeItem('theme');
      else localStorage.setItem('theme', value);
    } catch {}
  };

  return (
    <div role="radiogroup" aria-label="Theme" className={`${styles.themePicker} ${className}`}>
      {OPTIONS.map(([value, label, Icon]) => (
        <label key={value} title={label}>
          <input
            type="radio"
            name={name}
            value={value}
            aria-label={label}
            checked={theme === value}
            onChange={() => pick(value)}
          />
          <Icon aria-hidden />
        </label>
      ))}
    </div>
  );
}
