export default function CVSection({ education, experience }) {
  return (
    <section className="section" id="cv">
      <h2>CV</h2>

      <p className="subheading">EDUCATION</p>
      <div className="timeline" style={{ marginBottom: "2.5rem" }}>
        {education.map((item) => (
          <div className="timeline-item" key={item.degree}>
            <div className="period">{item.period}</div>
            <div>
              <h3>{item.degree}</h3>
              <div className="org">
                {item.institution} — {item.focus}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="subheading">EXPERIENCE</p>
      <div className="timeline">
        {experience.map((item) => (
          <div className="timeline-item" key={item.role + item.period}>
            <div className="period">{item.period}</div>
            <div>
              <h3>{item.role}</h3>
              <div className="org">{item.organization}</div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
