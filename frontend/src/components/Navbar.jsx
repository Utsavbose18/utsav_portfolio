import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="nav">
      {/* <Link to="/" className="brand">Utsav Bose</Link> */}
      // replace brand text with a tiny logo orb + name
<Link to="/" className="brand">
  <span style={{
    display:'inline-block', width:18, height:18, marginRight:8, borderRadius:'50%',
    background:'radial-gradient(circle at 30% 30%, #fff, #7aa2ff 40%, #9b72ff 70%)',
    boxShadow:'0 0 18px #7aa2ff66'
  }} />
  Utsav Bose
</Link>

      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog</NavLink>  
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <ThemeToggle />
    </header>
  );
}
