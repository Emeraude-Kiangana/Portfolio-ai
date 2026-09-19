export default function NovaForgeProjectPage() {
  const version = "v0.1.0-alpha";
  const releaseCommit = "427a979a55be4faf965ab5fecfde267074974a96";
  const normalizedMain = "74aa0bbbd7a9b4dceb0b987b27d2c670cac40903";
  const referenceCi = "35241302604";
  const normalizedCi = "35464627769";
  const sha256 = "8510fbe5fbbfd4e8aca362dab2d5cf8f4f18f1d1f0565deb5baa5601c46a994d";
  const videoUrl = "/open-technologies-portfolio/novaforge/NovaForge-v0.1.0-alpha-demo.mp4";
  const checksumUrl = "/open-technologies-portfolio/novaforge/SHA256SUMS.txt";

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-black sm:px-10 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <a
          href="/open-technologies-portfolio/"
          className="text-sm underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          ← Retour au portfolio
        </a>

        <header className="mt-10 border-b border-gray-200 pb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            P02 → preuve publique P01
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight">NovaForge</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700">
            Control plane média reproductible pour l’orchestration de jobs, workers HTTP et
            génération MP4 locale via FFmpeg. Le dépôt source canonique reste privé.
          </p>
        </header>

        <section className="grid gap-4 py-10 sm:grid-cols-4">
          <div className="rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Statut</p>
            <p className="mt-2 text-xl font-semibold">REPRODUCIBLE</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Version</p>
            <p className="mt-2 text-xl font-semibold">{version}</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Regression</p>
            <p className="mt-2 text-xl font-semibold">100 / 100 PASS</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Source</p>
            <p className="mt-2 text-xl font-semibold">PRIVATE</p>
          </div>
        </section>

        <section className="border-t border-gray-200 py-10">
          <h2 className="text-2xl font-bold">Pipeline démontré</h2>
          <p className="mt-5 overflow-x-auto rounded-xl bg-gray-950 p-5 font-mono text-sm text-white">
            Job → Queue → Scheduler → Dispatcher → HTTP Worker → FFmpeg → MP4 → ffprobe → SHA-256
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Cycle de vie des jobs, file FIFO et scheduling par capacités.</li>
            <li>• Dispatch vers un worker HTTP.</li>
            <li>• Persistance locale et récupération après interruption.</li>
            <li>• Production réelle d’un MP4 par FFmpeg.</li>
            <li>• Validation média par ffprobe et provenance SHA-256.</li>
            <li>• Reproduction fonctionnelle en clean clone et sur GitHub-hosted CI.</li>
          </ul>
        </section>

        <section className="border-t border-gray-200 py-10">
          <h2 className="text-2xl font-bold">Démonstration média</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-700">
            Artefact de référence : MPEG-4 Part 2, 854 × 480, 24 fps, 2.000000 s,
            260699 bytes. Le fichier et son checksum ne sont pas remplacés silencieusement.
          </p>
          <video
            className="mt-6 w-full rounded-xl border border-gray-200 bg-black"
            controls
            preload="metadata"
          >
            <source src={videoUrl} type="video/mp4" />
            Votre navigateur ne prend pas en charge la lecture vidéo HTML5.
          </video>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={videoUrl}
              className="rounded-lg bg-black px-5 py-3 text-center font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Ouvrir le MP4
            </a>
            <a
              href={checksumUrl}
              className="rounded-lg border border-gray-300 px-5 py-3 text-center font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Ouvrir SHA256SUMS.txt
            </a>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-500">
            Public proof package publié par P01. L’accessibilité HTTP anonyme est revalidée
            séparément du statut de maturité du projet.
          </p>
        </section>

        <section className="border-t border-gray-200 py-10">
          <h2 className="text-2xl font-bold">Provenance vérifiable</h2>
          <dl className="mt-6 grid gap-5 sm:grid-cols-2 text-gray-700">
            <div>
              <dt className="font-semibold text-black">Release</dt>
              <dd className="mt-1 font-mono text-sm">{version}</dd>
            </div>
            <div>
              <dt className="font-semibold text-black">Release commit</dt>
              <dd className="mt-1 break-all font-mono text-sm">{releaseCommit}</dd>
            </div>
            <div>
              <dt className="font-semibold text-black">Normalized main</dt>
              <dd className="mt-1 break-all font-mono text-sm">{normalizedMain}</dd>
            </div>
            <div>
              <dt className="font-semibold text-black">Normalized main CI</dt>
              <dd className="mt-1 font-mono text-sm">{normalizedCi} — SUCCESS</dd>
            </div>
            <div>
              <dt className="font-semibold text-black">Reference release CI</dt>
              <dd className="mt-1 font-mono text-sm">{referenceCi} — SUCCESS</dd>
            </div>
            <div>
              <dt className="font-semibold text-black">SHA-256 du MP4</dt>
              <dd className="mt-1 break-all font-mono text-sm">{sha256}</dd>
            </div>
          </dl>
        </section>

        <section className="border-t border-gray-200 py-10">
          <h2 className="text-2xl font-bold">Limites explicites</h2>
          <ul className="mt-5 space-y-3 text-gray-700">
            <li>• Aucun GPU inference, CogVideoX, RunPod ou cloud video generation démontré.</li>
            <li>• Aucun déploiement de production ou scaling multi-région prouvé.</li>
            <li>• La reproductibilité est fonctionnelle, pas bit-à-bit entre versions de FFmpeg.</li>
            <li>• Le dépôt source est privé ; la source n’est pas publiquement clonable.</li>
            <li>• Aucune licence open source n’est accordée et EXTERNALLY VALIDATED n’est pas revendiqué.</li>
          </ul>
        </section>

        <footer className="border-t border-gray-200 py-8 text-sm text-gray-500">
          Last verified: 2026-09-19 · License: No license currently granted
        </footer>
      </div>
    </main>
  );
}
