import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/resume', label: 'Resume' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <div className="nav container-wide">
        <Link to="/" className="brand" aria-label="Go to homepage">
          <span className="brand-orb" />
          <span>
            Utsav Bose
            <small>Full Stack Portfolio</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {links.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
