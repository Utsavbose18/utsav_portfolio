export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Why I Built My Sales Portal",
      date: "Aug 2025",
      summary: "How I designed a MERN-based portal for managing projects with analytics, edit history, and Power BI integration.",
      link: "/blog/sales-portal"
    },
    {
      id: 2,
      title: "Learning Power Automate",
      date: "Jul 2025",
      summary: "My experience automating workflows with Microsoft Power Automate and integrating with Excel.",
      link: "/blog/power-automate"
    },
    {
      id: 3,
      title: "My Journey into MERN",
      date: "Jun 2025",
      summary: "A beginner’s path into MongoDB, Express, React, and Node — how I started and where I’m headed.",
      link: "/blog/mern-journey"
    }
  ];

  return (
    <section>
      <h2>Blog</h2>
      <div className="grid cards">
        {posts.map(post => (
          <article key={post.id} className="card">
            <h3>{post.title}</h3>
            <p className="date">{post.date}</p>
            <p>{post.summary}</p>
            <a href={post.link} className="btn outline">Read More</a>
          </article>
        ))}
      </div>
    </section>
  );
}
