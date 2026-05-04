import { motion } from 'framer-motion';

export default function ProjectCard({ p }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {p.image && <img src={p.image} alt={p.title} className="card-img" />}
      <h3>{p.title}</h3>
      <p>{p.description}</p>
      {p.tech?.length && (
        <div className="tags">
          {p.tech.map((t, idx) => <span className="tag" key={idx}>{t}</span>)}
        </div>
      )}
      <div className="row">
        {p.github && <a className="btn" href={p.github} target="_blank" rel="noreferrer">GitHub</a>}
        {p.demo && <a className="btn outline" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>}
      </div>
    </motion.div>
  );
}
