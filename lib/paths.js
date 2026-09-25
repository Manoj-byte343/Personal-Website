// GitHub Pages serves this site from a subpath (e.g. /Personal-Website/)
// unless the repo is named <username>.github.io. next.config.js exposes
// that subpath at build time as NEXT_PUBLIC_BASE_PATH. Any hardcoded
// reference to a file in /public (images, PDFs) needs to go through this
// helper, or it will 404 on GitHub Pages while still working locally.
export function withBasePath(path) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path}`;
}
