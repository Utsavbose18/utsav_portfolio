import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import api from '../services/api';
import ProjectCard from '../components/ProjectCard';

const fallbackProjects = [
  {
    _id: 'fallback-crm',
    title: 'CRM Lead Management System',
    description: 'Role-based CRM concept with lead tracking, status history, follow-ups, filtering and admin-style controls.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Utsavbose18',
    demo: '',
    problem: 'Organizes leads and actions into a clear workflow for business teams.',
  },
  {
    _id: 'fallback-invoice',
    title: 'Invoice Admin Workspace',
    description: 'Professional admin interface concept for invoice processing, documents, analytics and operational workflows.',
    tech: ['React', 'CSS', 'API', 'Dashboard UI'],
    github: 'https://github.com/Utsavbose18',
    demo: '',
    problem: 'Makes complex business data easier to scan and act on.',
  },
  {
    _id: 'fallback-portfolio',
    title: 'Modern Developer Portfolio',
    description: 'A product-style personal portfolio with animation, theme toggle, case-study sections and contact flow.',
    tech: ['React', 'Framer Motion', 'Express', 'MongoDB'],
    github: 'https://github.com/Utsavbose18',
    demo: '',
    problem: 'Presents skills, proof and contact information in a recruiter-friendly way.',
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/projects');
        setProjects(Array.isArray(data) && data.length ? data : fallbackProjects);
      } catch (err) {
        console.error(err);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filteredProjects = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) return projects;

    return projects.filter((project) => {
      const text = `${project.title} ${project.description} ${(project.tech || []).join(' ')}`.toLowerCase();
      return text.includes(search);
    });
  }, [projects, query]);

  return (
    <section className="page">
      <div className="page-head project-head">
        <div>
          <span className="eyebrow">Projects</span>
          <h1>Proof that you can build useful web applications.</h1>
          <p>
            These cards still use your existing backend project API. The frontend adds better presentation,
            search, fallback content and recruiter-focused project storytelling.
          </p>
        </div>
        <input
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects or tech..."
          aria-label="Search projects"
        />
      </div>

      {loading ? (
        <div className="loading-card">Loading projects…</div>
      ) : (
        <motion.div className="project-grid" initial="hidden" animate="visible">
          {filteredProjects.map((project, index) => (
            <ProjectCard p={project} key={project._id || project.title} index={index} />
          ))}
        </motion.div>
      )}
    </section>
  );
}
