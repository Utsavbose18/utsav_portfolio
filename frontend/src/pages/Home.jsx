import profile from '../assets/profile.jpg';
// under the <img .../>
<span className="badge sparkle">MERN • Automation • Data</span>
export default function Home() {
  return (
    <section className="hero">
      <img src={profile} alt="Profile" className="avatar" />
      <h1>Hi, I'm Utsav Bose 👋</h1>
      <p>CS Graduate • MERN Beginner • Automation Enthusiast</p>
      <div className="row">
        <a className="btn" href="/resume.pdf" download>Download Resume</a>
        <a className="btn outline" href="/projects">View Projects</a>
      </div>
    </section>
  );
}
