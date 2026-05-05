import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    title: 'How I remastered my portfolio like a product',
    date: 'May 2026',
    summary: 'A simple breakdown of turning a beginner portfolio into a recruiter-friendly product landing page.',
    tag: 'Portfolio',
  },
  {
    id: 2,
    title: 'What I learned building MERN projects',
    date: 'Apr 2026',
    summary: 'Notes on API routes, MongoDB schemas, React components, deployment and debugging real project issues.',
    tag: 'MERN',
  },
  {
    id: 3,
    title: 'Why case studies matter for freshers',
    date: 'Mar 2026',
    summary: 'Recruiters need proof. Case studies help explain the problem, solution, features and results clearly.',
    tag: 'Career',
  },
];

export default function Blog() {
  return (
    <section className="page">
      <div className="page-head">
        <span className="eyebrow">Blog</span>
        <h1>Developer notes that show how you think.</h1>
        <p>Use this page for short writeups about projects, debugging lessons and what you are learning.</p>
      </div>

      <div className="grid three">
        {posts.map((post, index) => (
          <motion.article
            className="glass-card blog-card"
            key={post.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
          >
            <span className="blog-tag">{post.tag}</span>
            <h3>{post.title}</h3>
            <p className="date">{post.date}</p>
            <p>{post.summary}</p>
            <a href="/contact" className="text-link">Discuss this →</a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
