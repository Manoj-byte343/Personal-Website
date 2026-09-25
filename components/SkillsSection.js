export default function SkillsSection({ skills }) {
  return (
    <section className="section" id="skills">
      <h2>Skills</h2>
      <div className="project-list">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="subheading">{group.category.toUpperCase()}</p>
            <div className="tag-list">
              {group.items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
