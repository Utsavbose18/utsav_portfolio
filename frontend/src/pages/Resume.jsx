import { Link } from 'react-router-dom';

const highlights = [
  'MERN stack portfolio with real backend integration',
  'Contact form connected to Express and MongoDB',
  'Project cards powered by API data',
  'Responsive UI with theme support and animations',
];

export default function Resume() {
  return (
    <section className="page">
      <div className="page-head">
        <span className="eyebrow">Resume</span>
        <h1>Make the resume easy to view, download and act on.</h1>
        <p>Place your resume file as <strong>frontend/public/resume.pdf</strong>. The buttons below will work automatically.</p>
      </div>

      <div className="resume-grid">
        <div className="resume-preview glass-card">
          <div className="resume-paper">
            <span>Resume Preview</span>
            <h2>Utsav Bose</h2>
            <p>Full Stack Developer • MERN • Automation • Data Workflows</p>
            <ul>
              {highlights.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>

        <aside className="glass-card resume-side">
          <h3>Key Highlights</h3>
          <ul className="clean-list">
            {highlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div className="row wrap">
            <a className="btn primary" href="/resume.pdf" download>Download PDF</a>
            <Link className="btn ghost" to="/contact">Contact Me</Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
