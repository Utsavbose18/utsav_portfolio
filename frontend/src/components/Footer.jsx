import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div>
        <strong>Utsav Bose</strong>
        <p>Building clean, useful and production-ready web applications.</p>
      </div>
      <div className="footer-links">
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <span>© {year}. All rights reserved.</span>
    </footer>
  );
}
