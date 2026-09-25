function LinkedInGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v1.98h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.5c0-1.55-.03-3.55-2.16-3.55-2.17 0-2.5 1.7-2.5 3.44V23h-4V8.5z" />
    </svg>
  );
}

function GitHubGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ScholarGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff">
      <path d="M12 3L1 9l4 2.18v6.32L12 21l7-3.5v-6.32L21 9 12 3zm0 2.24L17.6 9 12 11.76 6.4 9 12 5.24zM6 12.36l5 2.5v4.4l-5-2.5v-4.4zm12 0v4.4l-5 2.5v-4.4l5-2.5z" />
    </svg>
  );
}

function ResumeGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff">
      <path d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM8 13h8v1.5H8V13zm0 3h8v1.5H8V16zm0-6h4v1.5H8V10z" />
    </svg>
  );
}

function OrcidGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff">
      <text x="12" y="16" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
        iD
      </text>
    </svg>
  );
}

const badges = {
  linkedin: { glyph: LinkedInGlyph, bg: "#0a66c2", label: "LinkedIn" },
  github: { glyph: GitHubGlyph, bg: "#171515", label: "GitHub" },
  scholar: { glyph: ScholarGlyph, bg: "#4285f4", label: "Scholar" },
  resume: { glyph: ResumeGlyph, bg: "#e5484d", label: "Resume" },
  orcid: { glyph: OrcidGlyph, bg: "#a6ce39", label: "ORCID" },
};

export function IconBadge({ kind, href }) {
  const entry = badges[kind];
  if (!entry) return null;
  const Glyph = entry.glyph;
  return (
    <a
      className="icon-badge"
      href={href}
      target={kind === "resume" ? "_blank" : "_blank"}
      rel="noopener noreferrer"
    >
      <span className="swatch" style={{ background: entry.bg }}>
        <Glyph />
      </span>
      <span className="label">{entry.label}</span>
    </a>
  );
}
