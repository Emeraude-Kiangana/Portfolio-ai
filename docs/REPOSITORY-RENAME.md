# Repository Rename Runbook

## Canonical rename

- Current repository: `Emeraude-Kiangana/Portfolio-ai`
- Target repository: `Emeraude-Kiangana/open-technologies-portfolio`
- Scope: repository identity only; no maturity or evidence claim is upgraded by this rename.

## Prepared in this branch

This branch updates the repository-name-dependent application paths from:

`/Portfolio-ai`

to:

`/open-technologies-portfolio`

It also updates self-references to the canonical GitHub repository name.

The GitHub Actions workflow itself is repository-name agnostic and does not require a rename-specific edit.

The internal npm package name remains `portfolio-ai` intentionally in this checkpoint to avoid an unrelated package-lock rewrite. It can be renamed separately later if desired.

## Manual GitHub action

Do not merge this branch before the GitHub repository itself has been renamed.

1. Open repository **Settings**.
2. Under **General → Repository name**, rename `Portfolio-ai` to `open-technologies-portfolio`.
3. Confirm the rename.
4. Return to this pull request and merge it into `main`.
5. Verify the post-merge GitHub Actions runs.
6. Verify GitHub Pages at:
   `https://emeraude-kiangana.github.io/open-technologies-portfolio/`

## Local clone migration

For an existing local clone:

```bash
git remote set-url origin https://github.com/Emeraude-Kiangana/open-technologies-portfolio.git
git remote -v
```

If the local directory should also match the canonical repository name:

```bash
cd ..
mv Portfolio-ai open-technologies-portfolio
cd open-technologies-portfolio
```

## Verification commands

```bash
git remote -v
npm ci
npm run lint
npm run build
grep -RIn --exclude-dir=node_modules --exclude-dir=.git 'Portfolio-ai' .
```

Expected repository-name-dependent references after migration: no active application path should still require `/Portfolio-ai`.
Historical evidence text may legitimately retain an old name when it is part of an immutable historical record.
