export default function PublicationsSection({ publications, publicationsNote, profile }) {
  return (
    <section className="section" id="publications">
      <h2>Publications</h2>
      <p className="lede">
        {publicationsNote}{" "}
        <a href={profile.scholarUrl}>View full record on Google Scholar</a>.
      </p>
      <div className="row-list">
        {publications.map((pub) => (
          <div key={pub.title}>
            <p className="row-title">
              <a href={pub.link}>{pub.title}</a>
            </p>
            <p className="row-meta">
              {pub.authors} — {pub.venue}, {pub.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
