import { useEffect, useState } from 'react';
import api from '../services/api';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/projects');
        setProjects(data);
      } catch (err) {
        console.error(err);
      } finally { setLoading(false); }
    })();
  }, []);

  if (loading) return <p>Loading projects…</p>;

  return (
    <section>
      <h2>Projects</h2>
      <div className="grid cards">
        {projects.map((p) => <ProjectCard p={p} key={p._id} />)}
      </div>
    </section>
  );
}
