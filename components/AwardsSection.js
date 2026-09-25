export default function AwardsSection({ awards, certificates, service, memberships }) {
  return (
    <section className="section" id="awards">
      <h2>Awards, Certificates & Service</h2>

      {awards.length > 0 && (
        <>
          <p className="subheading">AWARDS & HONORS</p>
          <div className="row-list" style={{ marginBottom: "2.5rem" }}>
            {awards.map((award) => (
              <div key={award.title}>
                <p className="row-title">{award.title}</p>
                <p className="row-meta">
                  {award.issuer} — {award.year}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      {certificates.length > 0 && (
        <>
          <p className="subheading">CERTIFICATIONS</p>
          <div className="row-list" style={{ marginBottom: "2.5rem" }}>
            {certificates.map((cert) => (
              <div key={cert.title}>
                <p className="row-title">{cert.title}</p>
                {cert.year && <p className="row-meta">{cert.year}</p>}
              </div>
            ))}
          </div>
        </>
      )}

      {service && service.length > 0 && (
        <>
          <p className="subheading">SERVICE & LEADERSHIP</p>
          <div className="row-list" style={{ marginBottom: "2.5rem" }}>
            {service.map((item) => (
              <div key={item.title}>
                <p className="row-title">{item.title}</p>
                <p className="row-meta">{item.detail}</p>
                <p className="row-meta">{item.year}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {memberships && memberships.length > 0 && (
        <>
          <p className="subheading">PROFESSIONAL MEMBERSHIPS</p>
          <div className="row-list">
            {memberships.map((m) => (
              <div key={m}>
                <p className="row-title">{m}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
