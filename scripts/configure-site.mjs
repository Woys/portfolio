import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";

const resumeSource = "https://raw.githubusercontent.com/Woys/Woys/master/Resume%20Daniil%20Mikheev.pdf";
const assetsDirectory = new URL("../public/assets/", import.meta.url);
const resumePath = new URL("daniil-mikheev-resume.pdf", assetsDirectory);
const temporaryResumePath = new URL("daniil-mikheev-resume.pdf.tmp", assetsDirectory);

async function syncResume() {
  mkdirSync(assetsDirectory, { recursive: true });

  try {
    const response = await fetch(resumeSource);
    if (!response.ok) throw new Error("Resume download failed: " + response.status + " " + response.statusText);

    const resume = Buffer.from(await response.arrayBuffer());
    if (resume.subarray(0, 5).toString() !== "%PDF-") throw new Error("Resume download was not a valid PDF");

    writeFileSync(temporaryResumePath, resume);
    renameSync(temporaryResumePath, resumePath);
  } catch (error) {
    if (!existsSync(resumePath) || readFileSync(resumePath).subarray(0, 5).toString() !== "%PDF-") throw error;
    console.warn("Could not refresh resume; using the bundled copy. " + error.message);
  }
}

await syncResume();

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://mikheevs.com").replace(/\/$/, "");
const template = readFileSync(new URL("./llms.txt.template", import.meta.url), "utf8");

writeFileSync(
  new URL("../public/llms.txt", import.meta.url),
  template.replaceAll("__SITE_URL__", siteUrl),
  "utf8",
);
