import {
  evidenceLegend,
  maturityLegend,
  projects,
} from "@/data/projects";

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
            Builder · Open Technologies · République Démocratique du Congo
          </p>
          <p className="mx-auto mt-6 max-w-3xl leading-7 text-gray-700">
            Build → Test → Prove → Publish. Cet index présente l’état vérifié des projets
            documentés, sans confondre maturité technique et disponibilité publique des preuves.
          </p>
          <nav
            className="mt-8 flex flex-wrap justify-center gap-3"
            aria-label="Navigation principale"
          >
            <a
              href="#project-index"
              className="rounded-lg bg-black px-4 py-2 font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Explorer les projets
            </a>
            <a
              href="https://github.com/Emeraude-Kiangana"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-300 px-4 py-2 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              GitHub
            </a>
            <a
              href="mailto:Emeraude-Kiangana@proton.me"
              className="rounded-lg border border-gray-300 px-4 py-2 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
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
            P01 présente les preuves, mais ne les crée pas. Un README n’est pas un test, un commit
            n’est pas un run CI, un dépôt public n’est pas automatiquement licencié, et une source
            privée n’implique pas qu’un projet soit bloqué.
          </p>
        </section>

        <section
          id="project-index"
          className="border-t border-gray-200 py-12"
          aria-labelledby="index-title"
        >
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Unified Public Evidence Index
            </p>
            <h2 id="index-title" className="mt-2 text-3xl font-bold">
              État vérifié des projets
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-gray-700">
              Sept projets autorisés. Chaque carte sépare le statut du projet de la disponibilité
              publique des preuves, et indique la date de dernière vérification.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex h-full min-w-0 flex-col rounded-2xl border border-gray-200 p-6 shadow-sm sm:p-8"
              >
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">{project.name}</h3>
                  <p className="mt-3 leading-7 text-gray-700">{project.description}</p>
                </div>

                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                      Statut projet
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {project.projectStatus.map((status) => (
                        <span
                          key={status}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold"
                        >
                          {status}
                        </span>
                      ))}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                      Preuves publiques
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {project.publicEvidenceStatus.map((status) => (
                        <span
                          key={status}
                          className="rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold"
                        >
                          {status}
                        </span>
                      ))}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                      Version
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-gray-700">{project.version}</dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                      Demo
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-gray-700">{project.demo}</dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                      Source
                    </dt>
                    <dd className="mt-2 break-words text-sm leading-6 text-gray-700">
                      {project.sourceHref ? (
                        <a
                          href={project.sourceHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        >
                          {project.source}
                        </a>
                      ) : (
                        project.source
                      )}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                      Licence
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-gray-700">{project.license}</dd>
                  </div>
                </dl>

                <div className="mt-7">
                  <h4 className="font-semibold">Verified Scope</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                    {project.verifiedScope.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7">
                  <h4 className="font-semibold">Preuves</h4>
                  {project.evidence.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.evidence.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      Aucun lien privé n’est exposé comme preuve publique.
                    </p>
                  )}
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
                    Last verified
                  </p>
                  <p className="mt-2 font-mono text-sm text-gray-700">{project.lastVerified}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-200 py-12" aria-labelledby="legend-title">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Status legend
          </p>
          <h2 id="legend-title" className="mt-2 text-3xl font-bold">
            Maturité et disponibilité des preuves
          </h2>

          <h3 className="mt-8 text-xl font-bold">Maturité</h3>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {maturityLegend.map(([status, meaning]) => (
              <div key={status} className="rounded-xl border border-gray-200 p-5">
                <dt className="font-mono text-sm font-semibold">{status}</dt>
                <dd className="mt-2 text-sm leading-6 text-gray-600">{meaning}</dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-8 text-xl font-bold">Disponibilité publique</h3>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              href="https://github.com/Emeraude-Kiangana/open-technologies-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-black px-4 py-2 font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Repository P01
            </a>
            <a
              href="https://emeraude-kiangana.github.io/open-technologies-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-300 px-4 py-2 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Portfolio public
            </a>
            <a
              href="/open-technologies-portfolio/projects/ecdf/"
              className="rounded-lg border border-gray-300 px-4 py-2 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Preuve eCDF
            </a>
            <a
              href="/open-technologies-portfolio/projects/novaforge/"
              className="rounded-lg border border-gray-300 px-4 py-2 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Preuve NovaForge
            </a>
          </div>
        </section>

        <footer className="border-t border-gray-200 py-8 text-sm text-gray-500">
          <p>© EMERAUDE KIANGANA — Open Technologies 🇨🇩</p>
        </footer>
      </div>
    </main>
  );
}
