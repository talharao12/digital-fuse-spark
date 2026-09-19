// GitHub Pages serves static files only; it knows nothing about the client
// side router. Without this, every path except "/" returns a real 404 — which
// is what happened to /about, /services and /contact.
//
// Two things happen here. Each known route gets its own index.html copy, so a
// direct request returns HTTP 200 with the app inside, which matters for the
// policy URLs Meta fetches. 404.html is the catch-all for anything else, so an
// unknown path still boots the app and renders the NotFound page.

import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";

// Keep in sync with the routes in src/App.tsx.
const ROUTES = ["services", "contact", "privacy", "terms", "data-deletion"];

const index = join(DIST, "index.html");
readFileSync(index); // fail loudly if the build did not produce one

for (const route of ROUTES) {
  const dir = join(DIST, route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(index, join(dir, "index.html"));
}

copyFileSync(index, join(DIST, "404.html"));

// Pages needs the CNAME in the published output or the custom domain is
// dropped on the next deploy.
writeFileSync(join(DIST, "CNAME"), "thedigitalfuse.com\n");

console.log(`postbuild: ${ROUTES.length} route folders, 404.html, CNAME`);
