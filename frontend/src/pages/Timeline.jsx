import { motion } from 'framer-motion';

const timeline = [
  { year: '2024', title: 'Computer Science foundation', text: 'Completed core CS learning with DBMS, OS, networks, OOP and web development fundamentals.' },
  { year: '2025', title: 'Project building phase', text: 'Built MERN projects, automation workflows, dashboards and portfolio-ready business applications.' },
  { year: '2026', title: 'Production mindset', text: 'Focusing on clean UI, deployment, documentation, case studies and maintainable full stack code.' },
  { year: 'Now', title: 'Open to opportunities', text: 'Seeking frontend, MERN stack, full stack internship or fresher developer roles.' },
];

export default function Timeline() {
  return (
    <section className="page">
      <div className="page-head">
        <span className="eyebrow">Timeline</span>
        <h1>Your journey shown like a developer roadmap.</h1>
        <p>This helps you look intentional even as a fresher, because it shows progress and direction.</p>
      </div>

      <div className="timeline">
        {timeline.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={item.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <span>{item.year}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
