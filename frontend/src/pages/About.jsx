import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        Hi, I'm <strong>Utsav Bose</strong>, a Computer Science graduate from 
        B.M.S. College of Engineering. I’m passionate about building useful 
        tools with the <strong>MERN stack</strong>, exploring 
        <strong> automation (Power Automate)</strong>, and working with 
        <strong> data workflows</strong>. I love transforming ideas into 
        interactive and efficient applications.
      </p>

      <div className="about-grid">
        {/* Education */}
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>🎓 Education</h3>
          <p>B.E. in Computer Science & Engineering</p>
          <p>B.M.S. College of Engineering, Bengaluru (2020–2024)</p>
        </motion.div>

        {/* Skills */}
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3>⚡ Skills</h3>
          <ul>
            <li>Java, Python, JavaScript (ES6+)</li>
            <li>React, Node.js, Express, MongoDB</li>
            <li>MySQL, Power BI, Excel</li>
            <li>HTML5, CSS3, Git & GitHub</li>
          </ul>
        </motion.div>

        {/* Courses */}
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>📚 Courses</h3>
          <ul>
            <li>Computer Networks, DBMS, Operating Systems</li>
            <li>Cloud Computing, Data Structures & Algorithms</li>
            <li>OOPS (Java), Unix</li>
            <li>AWS Cloud Practitioner, Python for Data Science</li>
          </ul>
        </motion.div>

        {/* Hobbies */}
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>🎵 Hobbies</h3>
          <p>Football, Swimming, Scuba Diving, Volleyball, Music</p>
        </motion.div>
      </div>
    </section>
  );
}
