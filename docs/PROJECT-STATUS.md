# P01 — Open Technologies Portfolio — Project Status

Status date: **2026-09-19**

## Current phase

**PUBLIC EVIDENCE HUB**

P01 is the public presentation layer for inspectable technical evidence. Source projects remain the technical sources of truth.

## Canonical repository

`Emeraude-Kiangana/open-technologies-portfolio`

The pre-normalization repository name is historical only and is not an active canonical surface.

## Current verified state

| Dimension | Status | Evidence |
|---|---|---|
| Next.js application | IMPLEMENTED | `src/`, `package.json` |
| Static GitHub Pages export | IMPLEMENTED | `next.config.ts` with `output: "export"` and `basePath: "/open-technologies-portfolio"` |
| Application version | DOCUMENTED | `package.json` = `0.1.0` |
| Repository visibility | PUBLIC | GitHub repository metadata |
| License | NONE | No root `LICENSE` file detected |
| Unified Project Evidence Index | IMPLEMENTED | Historical P01-CP-HUB-02 merge `1b7274847d61a097155dc98e2377d58afd5e5c13` |
| Project/evidence status separation | IMPLEMENTED | `src/data/projects.ts` + public index UI |
| Source visibility separation | IMPLEMENTED | Explicit `PUBLIC` / `PRIVATE` field on every card |
| Portfolio CI workflow | TESTED | `.github/workflows/portfolio-ci.yml`; final correction run must be SUCCESS before PASS |
| GitHub Pages deploy workflow | TESTED | `.github/workflows/deploy.yml`; final correction run must be SUCCESS before PASS |
| Anonymous HTTP reachability | UNKNOWN | External clients could not complete GitHub Pages DNS/HTTP verification in this execution environment |

## Evidence model

P01 tracks separate dimensions.

### Project maturity

`DOCUMENTED · IMPLEMENTED · TESTED · REPRODUCIBLE · PUBLIC · EXTERNALLY VALIDATED`

### Public evidence availability

`AVAILABLE · PARTIAL · PRIVATE SOURCE · UNKNOWN · BLOCKED`

### Source visibility

`PUBLIC · PRIVATE`

A private source repository is not a maturity failure. A public repository is not automatically open source. A public artifact does not imply public source code.

## Completed checkpoint

### P01-CP-HUB-02 — Unified Project Evidence Index

**Status: PASS / CLOSED**

Historical evidence remains valid and must not be rewritten:

- branch head `a714f03a43a2e6a51b5ca58c0874f73f9fc096d9`;
- merge `1b7274847d61a097155dc98e2377d58afd5e5c13`;
- test run `35330237656`;
- PR Portfolio CI `35330237752`;
- post-merge Portfolio CI `35330354290`;
- deploy `35330354285`;
- Pages build/deployment `35330400690`.

The current normalization correction does **not** recreate HUB-02 and does not promote those historical runs as the current final state.

## Current source synchronization

| Project | Canonical source state | Current interpretation |
|---|---|---|
| CPCN | private `main@f98056fd5db26377545e0dc6549bfe47fd9d91af` | Global `DOCUMENTED`; G0-01 frozen field collection; G0-02 `DOCUMENTED / IMPLEMENTED / TESTED`; partial public evidence; external validation not claimed |
| eCDF | public `main@c3a82329bdcd339a99595b64ea3a3dd4ee3adefa`; CI `35463718531` SUCCESS | `TESTED · PUBLIC`; 27/27 tests; Apache-2.0; no public demo; no live Stellar settlement |
| KIANGANA 2.0 | public `main@d3790d349e45d794bbb78d46fc1c48862c678151`; current-main CI `35465319172` SUCCESS | Current main is `DOCUMENTED / IMPLEMENTED / TESTED / PUBLIC`; normalization PR #8 remains OPEN |
| KIF V0.2 CP-01 | proof `69d3c9a1fdfc9616700572011a466b549be0c867`; freeze `57c4bfc2664398383a784128a9fa03dc3e41c0e4`; live run `35286354669`; freeze run `35287044624` | Historical `REPRODUCIBLE`, CLOSED / FROZEN checkpoint; `kif/` is not present on current main |
| NovaForge | private `main@74aa0bbbd7a9b4dceb0b987b27d2c670cac40903`; main CI `35464627769` SUCCESS | `REPRODUCIBLE`; v0.1.0-alpha; 100/100 regression + 1/1 E2E on reference release CI; public P01 proof assets exist; anonymous HTTP status UNKNOWN |
| RegenTwin | public `main@fadf386ed5c62dcd45a66008e8b2989b6402b63f`; CI `35324672286` SUCCESS | `TESTED` Gate 0; 4 tests; no release version claimed; no license file detected |
| RWA Red-Team Lab | public `main@922291ca7076ed871f70d6c70623c7b61541297e`; CI `35327731335` SUCCESS | `TESTED` deterministic Gate 0 verifier; 4 tests; no release version claimed; no license file detected |
| P01 | public pre-correction `main@92c59499790ef3cd99f45ad19dbf675c650036b0` | Correction final state is accepted only after current PR CI, merge, deploy and Pages runs succeed |

## CPCN boundary

CPCN is **not merely BLOCKED**.

Correct interpretation:

- project global status: **DOCUMENTED**;
- G0-01 v0.1: **FROZEN — VALIDATED FOR CONTINUED GATE 0 FIELD COLLECTION**;
- field evidence: founder SELF_TEST + one bounded external SME pilot (UD-001);
- UD-002: pending;
- UD-003: pending;
- G0-02 v0.1: **DOCUMENTED / IMPLEMENTED / TESTED**;
- source repository: **PRIVATE**;
- public evidence: **PARTIAL**;
- external / market validation: **NOT CLAIMED**.

## KIANGANA 2.0 / KIF boundary

KIANGANA 2.0 and KIF must not be collapsed into one status.

- **KIANGANA 2.0 current main**: public repository, governance implementation and current-main Gate Zero tests are inspectable.
- **KIF V0.2 CP-01**: historical reproducible checkpoint in Git history.
- proof → freeze comparison: one commit, zero changed files.
- live proof run `35286354669`: SUCCESS, 41 unit tests + 3 integration tests.
- freeze run `35287044624`: SUCCESS, 41 unit tests and tracked-file secret hygiene CLEAN.
- `kif/` is not present in a fresh checkout of current `main`.
- PR #8 documentation is branch-only until merged and is not treated as canonical main.

## NovaForge public evidence boundary

The public P01 repository contains:

- `public/novaforge/NovaForge-v0.1.0-alpha-demo.mp4` — 260699 bytes;
- `public/novaforge/SHA256SUMS.txt`;
- expected SHA-256 `8510fbe5fbbfd4e8aca362dab2d5cf8f4f18f1d1f0565deb5baa5601c46a994d`;
- `src/app/projects/novaforge/page.tsx`.

This proves the public **source package is present in P01**. It does not establish anonymous GitHub Pages HTTP reachability when the external HTTP client cannot complete the request.

## P01 historical pre-correction baseline

These runs were the latest successful P01 runs before this correction branch was created:

- Portfolio CI `35467433107` — SUCCESS;
- Deploy to GitHub Pages `35467433129` — SUCCESS;
- Pages build/deployment `35467461940` — SUCCESS.

They remain historical baseline evidence after the correction merge. They are not presented as the final post-correction runs.

## Repository metadata gaps

At correction start, GitHub metadata reports:

- description: `null`;
- topics: `[]`;
- homepage: `https://emeraude-kiangana.github.io/open-technologies-portfolio/`;
- Pages enabled: `true`.

The connected GitHub tool does not expose repository-description/topic mutation. Those metadata fields require a manual `gh repo edit` action.

## Next checkpoint

**NOT FORMALLY DEFINED**

This normalization correction creates no new P01 checkpoint.

## Project rule

**CURRENT P01 CLAIM ≤ CURRENT SOURCE PROJECT EVIDENCE**

P01 publishes proofs; it does not create proofs for other projects.
