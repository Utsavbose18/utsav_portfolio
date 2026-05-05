import { motion } from 'framer-motion';

export default function ProjectCard({ p, index = 0 }) {
  const tech = Array.isArray(p.tech) ? p.tech : [];

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.08, 0.28) }}
    >
      <div className="project-media">
        {p.image ? (
          <img src={p.image} alt={p.title} />
        ) : (
          <div className="project-placeholder">
            <span>{p.title?.charAt(0) || 'P'}</span>
          </div>
        )}
      </div>

      <div className="project-body">
        <div className="project-kicker">Featured Build</div>
        <h3>{p.title}</h3>
        <p>{p.description}</p>

        {tech.length > 0 && (
          <div className="tags">
            {tech.map((item) => (
              <span className="tag" key={item}>{item}</span>
            ))}
          </div>
        )}

        <div className="project-points">
          <span>Problem solved</span>
          <strong>{p.problem || 'Built to solve a real user workflow with clean UI and API-driven data.'}</strong>
        </div>

        <div className="row wrap">
          {p.demo && <a className="btn primary" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>}
          {p.github && <a className="btn ghost" href={p.github} target="_blank" rel="noreferrer">GitHub</a>}
          <a className="btn subtle" href="/contact">Discuss Project</a>
        </div>
      </div>
    </motion.article>
  );
}
