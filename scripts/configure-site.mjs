import { readFileSync, writeFileSync } from "node:fs";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://mikheevs.com").replace(/\/$/, "");
const template = readFileSync(new URL("./llms.txt.template", import.meta.url), "utf8");

writeFileSync(
  new URL("../public/llms.txt", import.meta.url),
  template.replaceAll("__SITE_URL__", siteUrl),
  "utf8",
);
