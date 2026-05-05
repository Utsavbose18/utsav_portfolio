import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';

const stack = ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'GitHub'];
const stats = [
  { value: '8+', label: 'Portfolio sections' },
  { value: '100%', label: 'Responsive layout' },
  { value: 'MERN', label: 'Same tech stack' },
];

export default function Home() {
  return (
    <section className="page home-page">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <span className="eyebrow">Available for internships and fresher roles</span>
          <h1>Full Stack Developer building clean, scalable and production-ready web apps.</h1>
          <p className="lead">
            I turn ideas into practical web products with React, Node.js, Express and MongoDB.
            My focus is simple: clear UI, reliable logic, fast pages and recruiter-friendly proof.
          </p>

          <div className="row wrap hero-actions">
            <a className="btn primary" href="/resume.pdf" download>Download Resume</a>
            <Link className="btn ghost" to="/projects">View Projects</Link>
            <a className="btn subtle" href="https://github.com/Utsavbose18" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn subtle" href="https://www.linkedin.com/in/utsav-bose-197708298" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>

          <div className="stack-strip" aria-label="Tech stack">
            {stack.map((item) => <span key={item}>{item}</span>)}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <div className="orbit-card">
            <img src={profile} alt="Utsav Bose" className="avatar-xl" />
            <span className="status-dot">Open to work</span>
          </div>
          <div className="floating-card top-card">MERN • Automation • Data</div>
          <div className="floating-card bottom-card">Clean UI + Real Backend</div>
        </motion.div>
      </div>

      <div className="stats-grid">
        {stats.map((item) => (
          <motion.div
            className="stat-card"
            key={item.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>

      <section className="section-block split-card">
        <div>
          <span className="eyebrow">Portfolio positioning</span>
          <h2>Not just a resume. A product-style developer profile.</h2>
        </div>
        <p>
          This version is built to show clarity, proof, confidence and polish at first glance.
          Recruiters should understand what you build, how you think and how to contact you without searching around.
        </p>
      </section>
    </section>
  );
}
