import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Education',
    text: 'B.E. in Computer Science and Engineering from B.M.S. College of Engineering, Bengaluru.',
  },
  {
    title: 'Current Focus',
    text: 'Improving full stack development, deployment, API integration, clean UI systems and real-world project structure.',
  },
  {
    title: 'Development Style',
    text: 'I prefer simple code, readable components, reusable styles and backend logic that stays stable while the UI improves.',
  },
  {
    title: 'Career Goal',
    text: 'Looking for frontend, MERN stack or full stack fresher roles where I can build useful business applications.',
  },
];

export default function About() {
  return (
    <section className="page">
      <div className="page-head">
        <span className="eyebrow">About</span>
        <h1>Human story, clear direction and practical skills.</h1>
        <p>
          I am Utsav Bose, a Computer Science graduate who enjoys building web applications that feel useful,
          organized and ready for real users. I work with the MERN stack, automation tools and data-focused workflows.
        </p>
      </div>

      <div className="grid two">
        {cards.map((card, index) => (
          <motion.article
            className="glass-card"
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
