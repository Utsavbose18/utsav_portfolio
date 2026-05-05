import { motion } from 'framer-motion';

const groups = [
  ['Frontend', ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI', 'Framer Motion']],
  ['Backend', ['Node.js', 'Express.js', 'REST APIs', 'Controllers', 'Routes', 'Middleware']],
  ['Database', ['MongoDB', 'Mongoose', 'MySQL', 'Schema Design', 'CRUD']],
  ['Tools', ['Git', 'GitHub', 'VS Code', 'Postman', 'Render', 'Vercel']],
  ['Concepts', ['Authentication', 'Deployment', 'API Integration', 'Role-based Access', 'Performance']],
  ['Learning Path', ['System Design Basics', 'Testing', 'Accessibility', 'Case Studies']],
];

export default function Skills() {
  return (
    <section className="page">
      <div className="page-head">
        <span className="eyebrow">Skills</span>
        <h1>Grouped skills that look serious, not random.</h1>
        <p>Recruiters should quickly see where you fit: frontend, backend, database, tooling and core web concepts.</p>
      </div>

      <div className="grid three">
        {groups.map(([title, skills], index) => (
          <motion.article
            className="glass-card skill-card"
            key={title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <h3>{title}</h3>
            <div className="tags">
              {skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
