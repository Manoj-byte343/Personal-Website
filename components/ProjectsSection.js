export default function ProjectsSection({ projects }) {
  return (
    <section className="section" id="research">
      <h2>Research & Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project-item" key={project.title}>
            <h3>
              {project.link ? (
                <a href={project.link}>{project.title}</a>
              ) : (
                project.title
              )}
            </h3>
            <p>{project.summary}</p>
            <div className="tag-list">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
