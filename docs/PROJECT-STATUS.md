# P01 — Open Technologies Portfolio — Project Status

Status date: **2026-09-19**

## Current phase

**PUBLIC EVIDENCE HUB**

P01 is the public presentation layer for inspectable technical evidence. Source projects remain the technical sources of truth.

## Current verified state

| Dimension | Status | Evidence |
|---|---|---|
| Next.js application | IMPLEMENTED | \`src/\`, \`package.json\` |
| Static GitHub Pages export | IMPLEMENTED | \`next.config.ts\` with \`output: "export"\` and \`basePath: "/open-technologies-portfolio"\` |
| Application version | DOCUMENTED | \`package.json\` = \`0.1.0\` |
| Repository visibility | PUBLIC | GitHub repository metadata |
| License | NONE | No root \`LICENSE\` file detected |
| Unified Project Evidence Index | IMPLEMENTED | P01-CP-HUB-02 merge \`1b7274847d61a097155dc98e2377d58afd5e5c13\` |
| GitHub Product Normalization v1 Portfolio CI | TESTED | Actions run \`35467213697\` = SUCCESS |
| GitHub Product Normalization v1 Pages deploy | TESTED | Actions run \`35467213730\` = SUCCESS |
| GitHub Product Normalization v1 Pages build/deployment | TESTED | Actions run \`35467240173\` = SUCCESS |
| Evidence-first model | DOCUMENTED | README, docs and normalized project data |
| Project/evidence status separation | IMPLEMENTED | \`src/data/projects.ts\` + public index UI |

## Evidence model

P01 tracks two separate dimensions.

### Project maturity

\`DOCUMENTED · IMPLEMENTED · TESTED · REPRODUCIBLE · PUBLIC · EXTERNALLY VALIDATED\`

### Public evidence availability

\`AVAILABLE · PARTIAL · PRIVATE SOURCE · UNKNOWN · BLOCKED\`

A maturity claim applies only where the originating evidence supports it. A private source does not imply project failure, and a public surface does not imply production readiness or an open-source license.

## Completed checkpoint

### P01-CP-HUB-02 — Unified Project Evidence Index

**Status: PASS / CLOSED**

The merged checkpoint established the seven-project evidence index:

- CPCN;
- eCDF;
- KIANGANA 2.0 / KIF;
- NovaForge;
- RegenTwin;
- RWA Red-Team Lab;
- P01 — Open Technologies Portfolio.

The 2026-09-19 normalization synchronizes those entries against the latest verified source state without changing source-project evidence.

## Current source synchronization

| Project | Canonical source state used |
|---|---|
| CPCN | private \`main@f98056fd5db26377545e0dc6549bfe47fd9d91af\` |
| eCDF | public \`main@c3a82329bdcd339a99595b64ea3a3dd4ee3adefa\`, CI \`35463718531\` SUCCESS |
| KIANGANA 2.0 | public \`main@d3790d349e45d794bbb78d46fc1c48862c678151\`; normalization PR #8 still OPEN |
| KIF V0.2 CP-01 | historical proof \`69d3c9a1...\`, freeze \`57c4bfc266...\`, runs \`35286354669\` and \`35287044624\` SUCCESS |
| NovaForge | private \`main@74aa0bbbd7a9b4dceb0b987b27d2c670cac40903\`, CI \`35464627769\` SUCCESS |
| RegenTwin | public \`main@fadf386ed5c62dcd45a66008e8b2989b6402b63f\`, CI \`35324672286\` SUCCESS |
| RWA Red-Team Lab | public \`main@922291ca7076ed871f70d6c70623c7b61541297e\`, CI \`35327731335\` SUCCESS |

## Current gaps

- GitHub repository description is not yet set through the connected GitHub tool.
- Repository topics are not yet set through the connected GitHub tool.
- Anonymous GitHub Pages HTTP reachability must be smoke-tested externally after merge.
- KIANGANA 2.0 normalization PR #8 remains open and is not treated as canonical main.
- CPCN and NovaForge source repositories remain private by design.

## Next checkpoint

**UNKNOWN / not formally defined.**

No new P01 checkpoint is created by this normalization.

## Project rule

**P01 CLAIM ≤ SOURCE PROJECT EVIDENCE**

P01 publishes proofs; it does not create proofs for other projects.
