export type MaturityStatus =
  | "DOCUMENTED"
  | "IMPLEMENTED"
  | "TESTED"
  | "REPRODUCIBLE"
  | "PUBLIC"
  | "EXTERNALLY VALIDATED";

export type EvidenceAvailability =
  | "AVAILABLE"
  | "PARTIAL"
  | "PRIVATE SOURCE"
  | "UNKNOWN"
  | "BLOCKED";

export type EvidenceLink = {
  label: string;
  href: string;
};

export type ProjectEvidence = {
  name: string;
  description: string;
  projectStatus: MaturityStatus[];
  publicEvidenceStatus: EvidenceAvailability[];
  version: string;
  demo: string;
  license: string;
  source: string;
  sourceHref?: string;
  verifiedScope: string[];
  evidence: EvidenceLink[];
  evidenceNote?: string;
  limitations: string[];
  lastVerified: string;
};

export const projects: ProjectEvidence[] = [
  {
    name: "CPCN",
    description:
      "Research prototypes for testing evidence and permission workflows around SME financing in the Democratic Republic of the Congo.",
    projectStatus: ["DOCUMENTED"],
    publicEvidenceStatus: ["PRIVATE SOURCE", "PARTIAL"],
    version: "Gate 0 · G0-01/G0-02 v0.1",
    demo: "CONTROLLED FIELD PORTAL / LOCAL DEMO",
    license: "No license currently granted",
    source: "PRIVATE — Emeraude-Kiangana/congo-programmable-capital-network",
    verifiedScope: [
      "G0-01 is frozen for continued Gate 0 field collection.",
      "One founder SELF_TEST and one bounded external SME pilot are recorded for G0-01.",
      "G0-02 Evidence Passport Simulator is documented, implemented and locally browser-tested.",
      "CPCN-UD-002 and CPCN-UD-003 remain pending.",
    ],
    evidence: [],
    evidenceNote:
      "Private source verified at main f98056fd5db26377545e0dc6549bfe47fd9d91af. G0-01 freeze: edc54ffea73ef156595e00a0709a36b63154a55e. G0-02 implementation: 84489a12aea02595e30dc0345c63d9602c799398. Local test-proof: a54349910134bd0a8262d7b93701822211e7abf0.",
    limitations: [
      "Not a bank, lender, credit bureau, credit-scoring service or payment institution.",
      "No KYC, tokenization, regulatory approval or institutional partnership is claimed.",
      "One bounded external SME pilot is not market validation or project-wide external validation.",
      "Source inspection is limited because the canonical repository is private.",
    ],
    lastVerified: "2026-09-19",
  },
  {
    name: "eCDF",
    description:
      "TypeScript research prototype for deterministic digital-value transfer experiments with a tested local transfer lifecycle.",
    projectStatus: ["DOCUMENTED", "IMPLEMENTED", "TESTED", "PUBLIC"],
    publicEvidenceStatus: ["AVAILABLE"],
    version: "0.1.0-alpha.0",
    demo: "NO PUBLIC DEMO",
    license: "Apache-2.0",
    source: "Emeraude-Kiangana/ecdf",
    sourceHref: "https://github.com/Emeraude-Kiangana/ecdf",
    verifiedScope: [
      "Local transfer-domain model with explicit states, role rules, invariants, bigint amounts and duplicate-event rejection.",
      "Normalized main c3a82329bdcd339a99595b64ea3a3dd4ee3adefa.",
      "27 / 27 automated tests passed on normalized main CI run 35463718531.",
      "Foundation evidence remains anchored at commit 34814b06ae28fe5e3a62b9866cb9781332312b7b.",
    ],
    evidence: [
      {
        label: "Repository",
        href: "https://github.com/Emeraude-Kiangana/ecdf",
      },
      {
        label: "Project status",
        href: "https://github.com/Emeraude-Kiangana/ecdf/blob/main/docs/PROJECT-STATUS.md",
      },
      {
        label: "Normalized main",
        href: "https://github.com/Emeraude-Kiangana/ecdf/commit/c3a82329bdcd339a99595b64ea3a3dd4ee3adefa",
      },
      {
        label: "CI run 35463718531",
        href: "https://github.com/Emeraude-Kiangana/ecdf/actions/runs/35463718531",
      },
      {
        label: "Foundation commit",
        href: "https://github.com/Emeraude-Kiangana/ecdf/commit/34814b06ae28fe5e3a62b9866cb9781332312b7b",
      },
      {
        label: "P01 evidence page",
        href: "/open-technologies-portfolio/projects/ecdf/",
      },
    ],
    limitations: [
      "No live Stellar settlement adapter, RPC/Testnet transaction flow or Mainnet.",
      "No custody, official CDF backing, CBDC/bank claim, production KYC or regulatory approval.",
      "No public demo, independent clean reproduction or external validation is recorded.",
    ],
    lastVerified: "2026-09-19",
  },
  {
    name: "KIANGANA 2.0 / KIF",
    description:
      "Human–AI operating system with governed mission execution; KIF V0.2 is tracked as a distinct historical checkpoint.",
    projectStatus: ["DOCUMENTED", "IMPLEMENTED", "TESTED", "PUBLIC"],
    publicEvidenceStatus: ["AVAILABLE", "PARTIAL"],
    version: "Global: no canonical release · KIF V0.2 CP-01",
    demo: "NO PUBLIC DEMO",
    license: "No license currently granted",
    source: "Emeraude-Kiangana/kiangana-2.0",
    sourceHref: "https://github.com/Emeraude-Kiangana/kiangana-2.0",
    verifiedScope: [
      "Current canonical main remains d3790d349e45d794bbb78d46fc1c48862c678151.",
      "Current-main Gate Zero run 35465319172 completed successfully.",
      "KIF V0.2 CP-01 is a REPRODUCIBLE historical checkpoint: proof 69d3c9a1fdfc9616700572011a466b549be0c867 → freeze 57c4bfc2664398383a784128a9fa03dc3e41c0e4 with one commit and zero file changes.",
      "KIF proof run 35286354669 passed 41 unit tests and 3 integration tests, including real DeepSeek, real Groq and fallback integration test files.",
      "KIF freeze run 35287044624 passed 41 unit tests and secret hygiene reported CLEAN.",
    ],
    evidence: [
      {
        label: "Repository",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0",
      },
      {
        label: "Current main status",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0/blob/main/docs/PROJECT-STATUS.md",
      },
      {
        label: "Current-main CI 35465319172",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0/actions/runs/35465319172",
      },
      {
        label: "KIF proof commit",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0/commit/69d3c9a1fdfc9616700572011a466b549be0c867",
      },
      {
        label: "KIF live proof run 35286354669",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0/actions/runs/35286354669",
      },
      {
        label: "KIF freeze commit",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0/commit/57c4bfc2664398383a784128a9fa03dc3e41c0e4",
      },
      {
        label: "KIF freeze run 35287044624",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0/actions/runs/35287044624",
      },
    ],
    evidenceNote:
      "Normalization PR #8 is still open. Its branch-only documentation is not treated as canonical main. KIF V0.2 exists in Git history and should not be assumed to be present in a fresh checkout of current main.",
    limitations: [
      "KIF V0.2 reproducibility applies to that checkpoint, not to every KIANGANA 2.0 subsystem.",
      "Historical root Gate Zero run 35287044647 failed at the KIF freeze head; later current-main Gate Zero runs are green.",
      "Open normalization PR #8 is pending and is not presented as merged canonical documentation.",
    ],
    lastVerified: "2026-09-19",
  },
  {
    name: "NovaForge",
    description:
      "Reproducible media-production control plane for job orchestration, HTTP workers and FFmpeg-backed MP4 pipelines.",
    projectStatus: ["DOCUMENTED", "IMPLEMENTED", "TESTED", "REPRODUCIBLE"],
    publicEvidenceStatus: ["PRIVATE SOURCE", "PARTIAL"],
    version: "v0.1.0-alpha",
    demo: "PUBLIC PROOF PACKAGE — HTTP RECHECK REQUIRED",
    license: "No license currently granted",
    source: "PRIVATE — Emeraude-Kiangana/novaforge",
    verifiedScope: [
      "Job lifecycle, FIFO queueing, scheduling, HTTP worker dispatch, persistence and crash recovery.",
      "Real FFmpeg MP4 generation with ffprobe validation and SHA-256 provenance.",
      "Normalized main 74aa0bbbd7a9b4dceb0b987b27d2c670cac40903.",
      "Main CI run 35464627769 passed 100 regression tests and 1 real FFmpeg E2E test.",
      "Clean-clone functional reproduction is documented at fd4c7adc09a7178cd0babc630a4d6ae872d39395.",
    ],
    evidence: [
      {
        label: "Public proof page",
        href: "/open-technologies-portfolio/projects/novaforge/",
      },
      {
        label: "Published MP4",
        href: "/open-technologies-portfolio/novaforge/NovaForge-v0.1.0-alpha-demo.mp4",
      },
      {
        label: "Published checksum",
        href: "/open-technologies-portfolio/novaforge/SHA256SUMS.txt",
      },
      {
        label: "P01 publication commit",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/commit/4cc3db78ff85873ffb6dcf92056a0ea18e35801d",
      },
    ],
    evidenceNote:
      "Canonical source is private. The P01 proof package is publicly published in the portfolio repository, but anonymous GitHub Pages HTTP availability is not promoted to PASS until an external 2xx smoke test succeeds.",
    limitations: [
      "No GPU inference, CogVideoX, RunPod, cloud video generation or production AI-video pipeline is demonstrated.",
      "Private source is not the same as public-source reproducibility.",
      "No open-source license is granted and external independent validation is not claimed.",
    ],
    lastVerified: "2026-09-19",
  },
  {
    name: "RegenTwin",
    description:
      "Git-native provenance prototype for deterministic state chains representing regenerative agricultural assets.",
    projectStatus: ["DOCUMENTED", "IMPLEMENTED", "TESTED", "PUBLIC"],
    publicEvidenceStatus: ["AVAILABLE"],
    version: "Gate 0 · no release version claimed",
    demo: "LOCAL DEMO",
    license: "No license file detected",
    source: "Emeraude-Kiangana/regen-twin",
    sourceHref: "https://github.com/Emeraude-Kiangana/regen-twin",
    verifiedScope: [
      "Deterministic hash-linked state-chain verifier and sample twin CD-PLOT-001.",
      "Current main fadf386ed5c62dcd45a66008e8b2989b6402b63f.",
      "Run 35324672286 completed successfully and verified CD-PLOT-001 with three states.",
      "Gate 0 test suite covers valid chain, broken link, retroactive state change and sequence gap.",
    ],
    evidence: [
      {
        label: "Repository",
        href: "https://github.com/Emeraude-Kiangana/regen-twin",
      },
      {
        label: "Project status",
        href: "https://github.com/Emeraude-Kiangana/regen-twin/blob/main/docs/PROJECT-STATUS.md",
      },
      {
        label: "Gate 0 commit",
        href: "https://github.com/Emeraude-Kiangana/regen-twin/commit/dd7120f2abc7935c59afe7a9586acb56a4017d06",
      },
      {
        label: "CI run 35324672286",
        href: "https://github.com/Emeraude-Kiangana/regen-twin/actions/runs/35324672286",
      },
    ],
    limitations: [
      "Gate 0 does not prove legal ownership, land-title validity, carbon-credit validity or RWA issuance.",
      "Post-quantum security and external validation are not established.",
    ],
    lastVerified: "2026-09-19",
  },
  {
    name: "RWA Red-Team Lab",
    description:
      "Adversarial verification lab for deterministic integrity checks against sample RWA evidence bundles.",
    projectStatus: ["DOCUMENTED", "IMPLEMENTED", "TESTED", "PUBLIC"],
    publicEvidenceStatus: ["AVAILABLE"],
    version: "Gate 0 · no release version claimed",
    demo: "LOCAL DEMO",
    license: "No license file detected",
    source: "Emeraude-Kiangana/rwa-red-team-lab",
    sourceHref: "https://github.com/Emeraude-Kiangana/rwa-red-team-lab",
    verifiedScope: [
      "Deterministic verifier and adversarial cases for measurement mutation, duplicate evidence identifiers and timestamp conflicts.",
      "Current main 922291ca7076ed871f70d6c70623c7b61541297e.",
      "Run 35327731335 completed successfully, returned VERIFIED and passed 4 / 4 tests.",
    ],
    evidence: [
      {
        label: "Repository",
        href: "https://github.com/Emeraude-Kiangana/rwa-red-team-lab",
      },
      {
        label: "Project status",
        href: "https://github.com/Emeraude-Kiangana/rwa-red-team-lab/blob/main/docs/PROJECT-STATUS.md",
      },
      {
        label: "CI repair commit",
        href: "https://github.com/Emeraude-Kiangana/rwa-red-team-lab/commit/da870f0af4f0cc13c0bb8ccf65db4fab748979b4",
      },
      {
        label: "CI run 35327731335",
        href: "https://github.com/Emeraude-Kiangana/rwa-red-team-lab/actions/runs/35327731335",
      },
    ],
    limitations: [
      "No legal title, identity verification, blockchain anchoring, RWA issuance or regulatory compliance is proven.",
      "AI red-team automation and external validation remain outside the verified Gate 0 scope.",
    ],
    lastVerified: "2026-09-19",
  },
  {
    name: "P01 — Open Technologies Portfolio",
    description:
      "Public evidence index for technical projects built, tested and documented by Emeraude Kiangana.",
    projectStatus: ["DOCUMENTED", "IMPLEMENTED", "TESTED", "PUBLIC"],
    publicEvidenceStatus: ["AVAILABLE"],
    version: "0.1.0",
    demo: "PUBLIC PORTFOLIO",
    license: "No license currently granted",
    source: "Emeraude-Kiangana/open-technologies-portfolio",
    sourceHref: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio",
    verifiedScope: [
      "Next.js static export is configured for GitHub Pages at /open-technologies-portfolio.",
      "Normalization merge 417a88818abb4d5cce3a8f5916f43f7c1c792dbf passed Portfolio CI run 35467213697.",
      "Normalization deployment run 35467213730 and Pages build/deployment run 35467240173 completed successfully.",
      "The unified evidence index presents exactly seven authorized projects.",
    ],
    evidence: [
      {
        label: "Repository",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio",
      },
      {
        label: "Live portfolio",
        href: "https://emeraude-kiangana.github.io/open-technologies-portfolio/",
      },
      {
        label: "Portfolio CI 35467213697",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/actions/runs/35467213697",
      },
      {
        label: "Deploy run 35467213730",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/actions/runs/35467213730",
      },
      {
        label: "Pages run 35467240173",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/actions/runs/35467240173",
      },
      {
        label: "Project status",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/blob/main/docs/PROJECT-STATUS.md",
      },
    ],
    limitations: [
      "P01 presents evidence; it does not create proof for another project.",
      "No independent clean reproduction is recorded, so P01 is not classified REPRODUCIBLE.",
      "Repository visibility does not imply an open-source license.",
    ],
    lastVerified: "2026-09-19",
  },
];

export const maturityLegend: Array<[MaturityStatus, string]> = [
  ["DOCUMENTED", "Scope or decisions are recorded in inspectable documentation."],
  ["IMPLEMENTED", "Code or an artifact exists; implementation alone is not test evidence."],
  ["TESTED", "A relevant verification completed successfully."],
  ["REPRODUCIBLE", "A documented reproduction path has been successfully demonstrated."],
  ["PUBLIC", "A relevant project surface is publicly accessible; this does not mean production-ready or open source."],
  ["EXTERNALLY VALIDATED", "Independent external evidence supports the stated claim."],
];

export const evidenceLegend: Array<[EvidenceAvailability, string]> = [
  ["AVAILABLE", "Relevant evidence is publicly inspectable."],
  ["PARTIAL", "Only part of the supporting evidence is publicly inspectable."],
  ["PRIVATE SOURCE", "The canonical source repository requires authorization."],
  ["UNKNOWN", "Current evidence availability has not been established."],
  ["BLOCKED", "A concrete prerequisite prevents evidence publication or inspection."],
];
