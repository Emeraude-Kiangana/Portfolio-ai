type EvidenceLink = {
  label: string;
  href: string;
};

type ProjectEvidence = {
  name: string;
  mission: string;
  status: string;
  verifiedScope: string[];
  evidence: EvidenceLink[];
  evidenceNote?: string;
  limitations: string[];
  nextCheckpoint: string;
};

const projects: ProjectEvidence[] = [
  {
    name: "CPCN",
    mission: "Public mission is not independently inspectable because the source repository is private.",
    status: "BLOCKED — public evidence unavailable",
    verifiedScope: [
      "No technical capability from the private source is promoted as public proof.",
      "P01 keeps CPCN visible only as an explicitly blocked evidence entry.",
    ],
    evidence: [],
    evidenceNote:
      "No public repository, commit, CI run, artifact, checksum or documentation link is currently available for independent inspection.",
    limitations: [
      "The source repository is private.",
      "No public technical evidence can currently support an IMPLEMENTED, TESTED or REPRODUCIBLE classification.",
      "No operational financial capability is claimed.",
    ],
    nextCheckpoint:
      "BLOCKED — an inspectable public evidence anchor is required before any maturity upgrade.",
  },
  {
    name: "eCDF",
    mission:
      "Research prototype for deterministic, test-only transfer-domain verification before any live settlement integration.",
    status: "TESTED — deterministic foundation",
    verifiedScope: [
      "TypeScript/npm repository foundation.",
      "Local transfer-operation domain model, invariants, roles, deduplication and deterministic snapshots.",
      "27 / 27 automated tests passed in the current verification workflow.",
    ],
    evidence: [
      {
        label: "Repository",
        href: "https://github.com/Emeraude-Kiangana/ecdf",
      },
      {
        label: "Verified commit",
        href: "https://github.com/Emeraude-Kiangana/ecdf/commit/34814b06ae28fe5e3a62b9866cb9781332312b7b",
      },
      {
        label: "CI run 35324657015",
        href: "https://github.com/Emeraude-Kiangana/ecdf/actions/runs/35324657015",
      },
      {
        label: "Project status",
        href: "https://github.com/Emeraude-Kiangana/ecdf/blob/main/docs/PROJECT-STATUS.md",
      },
      {
        label: "Public P01 proof",
        href: "/Portfolio-ai/projects/ecdf/",
      },
    ],
    limitations: [
      "No live settlement adapter is established by the current foundation evidence.",
      "No Stellar payment execution, production custody, legal validity or CBDC/official-currency claim is proven.",
    ],
    nextCheckpoint:
      "Live settlement adapter evidence — currently UNKNOWN in the project status.",
  },
  {
    name: "KIANGANA 2.0 / KIF",
    mission:
      "Human–AI operating system with governed mission execution; this entry exposes only the verified KIF V0.2 checkpoint.",
    status: "TESTED — KIF V0.2 CP-01",
    verifiedScope: [
      "KIF V0.2 unit and hygiene CI completed successfully at the frozen checkpoint.",
      "41 unit tests passed on the checkpoint run.",
      "Protected-file check passed and tracked-file secret scan reported CLEAN.",
    ],
    evidence: [
      {
        label: "Repository",
        href: "https://github.com/Emeraude-Kiangana/KIANGANA-2.0",
      },
      {
        label: "KIF proof commit",
        href: "https://github.com/Emeraude-Kiangana/KIANGANA-2.0/commit/69d3c9a1fdfc9616700572011a466b549be0c867",
      },
      {
        label: "KIF freeze commit",
        href: "https://github.com/Emeraude-Kiangana/KIANGANA-2.0/commit/57c4bfc2664398383a784128a9fa03dc3e41c0e4",
      },
      {
        label: "KIF CI run 35287044624",
        href: "https://github.com/Emeraude-Kiangana/KIANGANA-2.0/actions/runs/35287044624",
      },
      {
        label: "Current project status",
        href: "https://github.com/Emeraude-Kiangana/KIANGANA-2.0/blob/main/docs/PROJECT-STATUS.md",
      },
    ],
    limitations: [
      "The successful checkpoint does not prove every KIANGANA 2.0 subsystem.",
      "The controlled live-validation job was skipped on the referenced freeze run.",
      "A KIF checkpoint must not be generalized into whole-system validation.",
    ],
    nextCheckpoint:
      "UNKNOWN — no updated post-green Gate Zero checkpoint is documented in the current status file.",
  },
  {
    name: "NovaForge",
    mission: "Experimental media-production control plane for orchestrating a verifiable local media pipeline.",
    status: "TESTED — local orchestration + FFmpeg",
    verifiedScope: [
      "Job lifecycle, FIFO queueing, scheduling, HTTP worker dispatch and persistent job state.",
      "SHA-256 provenance and real local MP4 generation with FFmpeg.",
      "100-test regression and end-to-end verification are represented by the published P01 proof package.",
    ],
    evidence: [
      {
        label: "Public P01 proof",
        href: "/Portfolio-ai/projects/novaforge/",
      },
      {
        label: "Published checksum",
        href: "/Portfolio-ai/novaforge/SHA256SUMS.txt",
      },
      {
        label: "Published MP4 artifact",
        href: "/Portfolio-ai/novaforge/NovaForge-v0.1.0-alpha-demo.mp4",
      },
      {
        label: "P01 publication commit",
        href: "https://github.com/Emeraude-Kiangana/Portfolio-ai/commit/4cc3db78ff85873ffb6dcf92056a0ea18e35801d",
      },
    ],
    evidenceNote:
      "The NovaForge source repository is private; P01 exposes only the already-published proof package and provenance anchors.",
    limitations: [
      "GPU inference, CogVideoX, RunPod, remote cloud execution and production AI video generation are not demonstrated.",
      "The public proof does not expose the private source repository.",
    ],
    nextCheckpoint:
      "UNKNOWN — the current project status defines no next checkpoint beyond verified local media orchestration.",
  },
  {
    name: "RegenTwin",
    mission: "Git-native provenance prototype for deterministic state chains representing regenerative agricultural assets.",
    status: "TESTED — Gate 0 state-chain verification",
    verifiedScope: [
      "Deterministic hash-linked state-chain verifier.",
      "Sample twin CD-PLOT-001 verifies with three states.",
      "4 / 4 Gate 0 tests passed on the latest inspected verification run.",
    ],
    evidence: [
      {
        label: "Repository",
        href: "https://github.com/Emeraude-Kiangana/regentwin",
      },
      {
        label: "Gate 0 commit",
        href: "https://github.com/Emeraude-Kiangana/regentwin/commit/dd7120f2abc7935c59afe7a9586acb56a4017d06",
      },
      {
        label: "CI run 35324672286",
        href: "https://github.com/Emeraude-Kiangana/regentwin/actions/runs/35324672286",
      },
      {
        label: "Project status",
        href: "https://github.com/Emeraude-Kiangana/regentwin/blob/main/docs/PROJECT-STATUS.md",
      },
    ],
    limitations: [
      "Gate 0 does not prove legal ownership, land-title validity, carbon-credit validity or RWA issuance.",
      "Post-quantum security is not established.",
    ],
    nextCheckpoint:
      "UNKNOWN — the current project status defines no checkpoint beyond Gate 0.",
  },
  {
    name: "RWA Red-Team Lab",
    mission: "Adversarial verification lab for deterministic integrity checks against RWA evidence bundles.",
    status: "TESTED — deterministic Gate 0 verifier",
    verifiedScope: [
      "Baseline evidence bundle returns VERIFIED.",
      "Measurement mutation, duplicate evidence identifiers and timestamp conflicts are covered by deterministic checks.",
      "4 / 4 tests passed on the latest inspected successful Gate 0 run.",
    ],
    evidence: [
      {
        label: "Repository",
        href: "https://github.com/Emeraude-Kiangana/rwa-red-team-lab",
      },
      {
        label: "CI repair commit",
        href: "https://github.com/Emeraude-Kiangana/rwa-red-team-lab/commit/da870f0af4f0cc13c0bb8ccf65db4fab748979b4",
      },
      {
        label: "CI run 35327731335",
        href: "https://github.com/Emeraude-Kiangana/rwa-red-team-lab/actions/runs/35327731335",
      },
      {
        label: "Project status",
        href: "https://github.com/Emeraude-Kiangana/rwa-red-team-lab/blob/main/docs/PROJECT-STATUS.md",
      },
    ],
    limitations: [
      "No legal title, identity verification, blockchain anchoring, RWA issuance or regulatory compliance is proven.",
      "AI red-team automation remains outside the verified Gate 0 scope.",
    ],
    nextCheckpoint:
      "UNKNOWN — the current project status defines no checkpoint beyond deterministic Gate 0.",
  },
  {
    name: "P01 — Open Technologies Portfolio",
    mission: "Public presentation layer for inspectable technical evidence produced by the project repositories.",
    status: "TESTED — GitHub Pages deployment",
    verifiedScope: [
      "Next.js static export configured for GitHub Pages.",
      "Public evidence pages for eCDF and NovaForge are already published.",
      "Latest inspected deployment and Pages build runs completed successfully before this checkpoint.",
    ],
    evidence: [
      {
        label: "Repository",
        href: "https://github.com/Emeraude-Kiangana/Portfolio-ai",
      },
      {
        label: "Public deployment",
        href: "https://emeraude-kiangana.github.io/Portfolio-ai/",
      },
      {
        label: "Deploy run 35329321829",
        href: "https://github.com/Emeraude-Kiangana/Portfolio-ai/actions/runs/35329321829",
      },
      {
        label: "Pages run 35329366172",
        href: "https://github.com/Emeraude-Kiangana/Portfolio-ai/actions/runs/35329366172",
      },
      {
        label: "Project status",
        href: "https://github.com/Emeraude-Kiangana/Portfolio-ai/blob/main/docs/PROJECT-STATUS.md",
      },
    ],
    limitations: [
      "P01 presents evidence; it does not create proof for another project.",
      "This HUB-02 candidate is not considered complete until its own PR CI, build, merge and post-merge Pages deployment are verified.",
    ],
    nextCheckpoint:
      "UNKNOWN — no checkpoint after P01-CP-HUB-02 is currently defined.",
  },
];

const evidenceLegend = [
  ["DOCUMENTED", "Scope or decision exists in inspectable documentation."],
  ["IMPLEMENTED", "Code or artifact exists; this alone does not prove tests passed."],
  ["TESTED", "A relevant automated or directly executed verification has passed."],
  ["REPRODUCIBLE", "Independent reproduction is explicitly evidenced."],
  ["UNKNOWN", "The available evidence does not establish the claim."],
  ["BLOCKED", "A concrete missing prerequisite prevents a stronger public claim."],
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black sm:px-10 sm:py-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <section className="py-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Open Technologies Portfolio
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Emeraude Kiangana
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Infrastructure publique de preuves techniques
          </p>
          <p className="mx-auto mt-6 max-w-3xl leading-7 text-gray-700">
            Un index evidence-first des projets actuellement documentés. Chaque statut ci-dessous
            est limité à ce que les repositories, commits, workflows, runs, artefacts ou
            documentations inspectés permettent réellement d&apos;affirmer.
          </p>
          <nav className="mt-8 flex flex-wrap justify-center gap-3" aria-label="Navigation principale">
            <a
              href="#evidence-index"
              className="rounded-lg bg-black px-4 py-2 font-medium text-white hover:bg-gray-800"
            >
              Explorer les preuves
            </a>
            <a
              href="https://github.com/Emeraude-Kiangana"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-300 px-4 py-2 font-medium hover:bg-gray-50"
            >
              GitHub
            </a>
            <a
              href="mailto:Emeraude-Kiangana@proton.me"
              className="rounded-lg border border-gray-300 px-4 py-2 font-medium hover:bg-gray-50"
            >
              Contact
            </a>
          </nav>
        </section>

        <section className="border-t border-gray-200 py-10" aria-labelledby="philosophy-title">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Evidence philosophy
          </p>
          <h2 id="philosophy-title" className="mt-2 text-3xl font-bold">
            Claim ≤ Evidence
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Un README n&apos;est pas un test. Un commit n&apos;est pas un run CI. Un workflow présent
            n&apos;est pas un workflow réussi. Les cartes distinguent donc explicitement ce qui est
            documenté, implémenté, testé, reproductible, inconnu ou bloqué.
          </p>
        </section>

        <section id="evidence-index" className="border-t border-gray-200 py-12" aria-labelledby="index-title">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              P01-CP-HUB-02
            </p>
            <h2 id="index-title" className="mt-2 text-3xl font-bold">
              Unified Project Evidence Index
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-gray-700">
              Sept projets, une structure de lecture commune, et aucune montée de maturité sans
              preuve inspectable.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex h-full flex-col rounded-2xl border border-gray-200 p-6 shadow-sm sm:p-8"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                    {project.status}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight">{project.name}</h3>
                  <p className="mt-3 leading-7 text-gray-700">{project.mission}</p>
                </div>

                <div className="mt-7">
                  <h4 className="font-semibold">Verified Scope</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                    {project.verifiedScope.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7">
                  <h4 className="font-semibold">Evidence</h4>
                  {project.evidence.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.evidence.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                  {project.evidenceNote ? (
                    <p className="mt-3 text-sm leading-6 text-gray-500">{project.evidenceNote}</p>
                  ) : null}
                </div>

                <div className="mt-7">
                  <h4 className="font-semibold">Limitations</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                    {project.limitations.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 border-t border-gray-200 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                    Next Checkpoint
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{project.nextCheckpoint}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-200 py-12" aria-labelledby="legend-title">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Evidence legend
          </p>
          <h2 id="legend-title" className="mt-2 text-3xl font-bold">
            Statuts autorisés
          </h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {evidenceLegend.map(([status, meaning]) => (
              <div key={status} className="rounded-xl border border-gray-200 p-5">
                <dt className="font-mono text-sm font-semibold">{status}</dt>
                <dd className="mt-2 text-sm leading-6 text-gray-600">{meaning}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-t border-gray-200 py-12" aria-labelledby="proof-links-title">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Public proof links
          </p>
          <h2 id="proof-links-title" className="mt-2 text-3xl font-bold">
            Vérifier à la source
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/Emeraude-Kiangana/Portfolio-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-black px-4 py-2 font-medium text-white hover:bg-gray-800"
            >
              Repository P01
            </a>
            <a
              href="https://emeraude-kiangana.github.io/Portfolio-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-300 px-4 py-2 font-medium hover:bg-gray-50"
            >
              GitHub Pages
            </a>
            <a
              href="/Portfolio-ai/projects/ecdf/"
              className="rounded-lg border border-gray-300 px-4 py-2 font-medium hover:bg-gray-50"
            >
              Preuve eCDF
            </a>
            <a
              href="/Portfolio-ai/projects/novaforge/"
              className="rounded-lg border border-gray-300 px-4 py-2 font-medium hover:bg-gray-50"
            >
              Preuve NovaForge
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
