/** @type {import('next').NextConfig} */

// When building on GitHub Actions for GitHub Pages, the site is served from
// https://<username>.github.io/<repo-name>/ (a subpath) unless the repo is
// itself named <username>.github.io (served at the domain root). This block
// sets basePath/assetPrefix automatically so links and assets resolve
// correctly either way — you don't need to edit this by hand.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
let basePath = "";
let assetPrefix = "";

if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repo = process.env.GITHUB_REPOSITORY.split("/")[1];
  if (repo && !repo.endsWith(".github.io")) {
    basePath = `/${repo}`;
    assetPrefix = `/${repo}/`;
  }
}

const nextConfig = {
  output: "export", // static HTML export — required for GitHub Pages
  images: { unoptimized: true }, // GitHub Pages can't run Next's image optimizer
  basePath,
  assetPrefix,
  env: {
    // Exposes the basePath to client code at build time (see lib/paths.js) —
    // next/image and plain <a href> tags don't auto-prefix it themselves.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
