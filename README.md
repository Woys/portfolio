# Daniil Mikheev Portfolio — GitHub Pages Edition

This repository contains the static-export edition of Daniil Mikheev's interactive analytics engineering portfolio.

## Publish on GitHub Pages

1. Create a new GitHub repository under the `Woys` account.
2. Upload every file and folder from this project to the repository root.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages** in the repository.
5. Under **Build and deployment → Source**, choose **GitHub Actions**.
6. Open the **Actions** tab and wait for “Deploy portfolio to GitHub Pages” to complete.

The included workflow automatically handles both repository Pages URLs such as `https://woys.github.io/portfolio/` and the root user site `https://woys.github.io/`.

## Local development

Install Node.js 22 or newer, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run lint
npm run build
```

The static site is generated in `out/`.

## Important files

- `app/page.tsx` — portfolio content, projects, metadata, and visualizations
- `app/pipeline-playground.tsx` — interactive pipeline behavior
- `app/globals.css` — complete visual system and responsive layout
- `public/daniil-mikheev.webp` — portrait
- `public/llms.txt` — generated AI-readable professional context
- `scripts/llms.txt.template` — editable source for the AI-readable profile
- `.github/workflows/deploy-pages.yml` — automatic GitHub Pages deployment
- `next.config.mjs` — static-export and repository-subpath support

## Custom domain

If you later add a custom domain, set it in **Settings → Pages**. GitHub will manage the Pages configuration; the application itself does not require a server.
