import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') !== 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setDark((value) => !value)}
      aria-label="Toggle color theme"
    >
      <span>{dark ? '🌙' : '☀️'}</span>
      <strong>{dark ? 'Dark' : 'Light'}</strong>
    </button>
  );
}
