export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-black sm:px-10 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <section className="py-10 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Emeraude Kiangana</h1>
          <p className="mt-4 text-xl text-gray-600">
            Ingénieur Pédagogique & Architecte de Savoir
          </p>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-700">
            Je construis des systèmes qui apprennent, enseignent et démontrent.
            Ce portfolio évolue vers une infrastructure publique de preuves techniques vérifiables.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://github.com/Emeraude-Kiangana"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800"
            >
              GitHub
            </a>
            <a
              href="mailto:Emeraude-Kiangana@proton.me"
              className="rounded border border-gray-300 px-4 py-2 hover:bg-gray-100"
            >
              Contact
            </a>
          </div>
        </section>

        <section className="border-t border-gray-200 py-12">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Preuves projets
            </p>
            <h2 className="mt-2 text-3xl font-bold">Projets vérifiables</h2>
          </div>

          <div className="space-y-6">
            <article className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                      Reproducible Control Plane Demo
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                      100 / 100 tests + CI PASS
                    </span>
                  </div>
                  <h3 className="mt-4 text-3xl font-bold">NovaForge</h3>
                  <p className="mt-3 max-w-2xl leading-7 text-gray-700">
                    Orchestration d&apos;un pipeline média réel jusqu&apos;à la production vérifiée d&apos;un MP4 via FFmpeg,
                    avec provenance, clean-clone reproducibility et GitHub Actions au vert.
                  </p>
                  <p className="mt-4 font-mono text-sm text-gray-500">
                    v0.1.0-alpha · 427a979a55be
                  </p>
                </div>

                <a
                  href="/Portfolio-ai/projects/novaforge/"
                  className="shrink-0 rounded-lg bg-black px-5 py-3 text-center font-medium text-white hover:bg-gray-800"
                >
                  Voir la preuve
                </a>
              </div>
            </article>

            <article className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                      Research Prototype v0.1
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                      27 / 27 tests
                    </span>
                  </div>
                  <h3 className="mt-4 text-3xl font-bold">eCDF</h3>
                  <p className="mt-3 max-w-2xl leading-7 text-gray-700">
                    Prototype technologique de recherche autour d&apos;un transfert de valeur de test
                    modélisé explicitement, avec une fondation de domaine locale, déterministe et testée.
                  </p>
                  <p className="mt-4 font-mono text-sm text-gray-500">
                    checkpoint: 34814b06ae28
                  </p>
                </div>

                <a
                  href="/Portfolio-ai/projects/ecdf/"
                  className="shrink-0 rounded-lg bg-black px-5 py-3 text-center font-medium text-white hover:bg-gray-800"
                >
                  Voir la preuve
                </a>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
