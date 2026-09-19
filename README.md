# Emeraude Kiangana — Open Technologies Portfolio

Public evidence portfolio for technology projects, experiments and reproducible engineering work.

## Purpose

This repository is the **presentation layer** for verified work. It is designed to show what was built, tested, documented and demonstrated, with links back to inspectable evidence.

The operating principle is:

`Learn → Build → Test → Document → Prove → Share → Iterate`

## Current stack

- Next.js 16
- React 19
- TypeScript
- Static export
- GitHub Pages
- GitHub Actions

## Repository structure

- `src/` — portfolio application source.
- `public/` — static public assets.
- `proofs/` — evidence records published by the portfolio.
- `docs/` — documentation index and factual project status.
- `.github/workflows/` — deployment and proof CI.

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

The production build is configured as a static export.

## Deployment

`next.config.ts` uses:

- `output: "export"`
- `basePath: "/open-technologies-portfolio"`
- trailing slashes for static hosting

Deployment is automated through GitHub Actions and GitHub Pages.

## Evidence model

The portfolio does not create proof on behalf of other projects. A public technical claim should point back to its originating repository, commit, test, CI run, artifact or checksum.

See [docs/README.md](docs/README.md) and [docs/PROJECT-STATUS.md](docs/PROJECT-STATUS.md).

## Status

Active public portfolio. Current deployment and proof-workflow status is tracked in `docs/PROJECT-STATUS.md`.
