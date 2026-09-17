export default function NovaForgeProjectPage() {
  const version = 'v0.1.0-alpha';
  const commit = '427a979a55be4faf965ab5fecfde267074974a96';
  const sha256 = '8510fbe5fbbfd4e8aca362dab2d5cf8f4f18f1d1f0565deb5baa5601c46a994d';
  const videoUrl = '/Portfolio-ai/novaforge/NovaForge-v0.1.0-alpha-demo.mp4';
  const checksumUrl = '/Portfolio-ai/novaforge/SHA256SUMS.txt';

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-black sm:px-10 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <a href="/Portfolio-ai/" className="text-sm underline underline-offset-4">
          ← Retour au portfolio
        </a>

        <header className="mt-10 border-b border-gray-200 pb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            P02 → preuve publique P01
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight">NovaForge</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700">
            NovaForge orchestre aujourd&apos;hui un pipeline média réel jusqu&apos;à la production vérifiée
            d&apos;un MP4 via FFmpeg. Les backends de génération vidéo IA/GPU ne sont pas encore démontrés.
          </p>
        </header>

        <section className="grid gap-4 py-10 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Version</p>
            <p className="mt-2 text-xl font-semibold">{version}</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Regression</p>
            <p className="mt-2 text-xl font-semibold">100 / 100 PASS</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">CI E2E</p>
            <p className="mt-2 text-xl font-semibold">1 / 1 PASS</p>
          </div>
        </section>

        <section className="border-t border-gray-200 py-10">
          <h2 className="text-2xl font-bold">Pipeline démontré</h2>
          <p className="mt-5 overflow-x-auto rounded-xl bg-gray-950 p-5 font-mono text-sm text-white">
            Job → Queue → Scheduler → Dispatcher → HTTP Worker → FFmpeg → MP4
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Cycle de vie des jobs et file FIFO.</li>
            <li>• Registre de nœuds et scheduling par capacités.</li>
            <li>• Dispatch vers un worker HTTP.</li>
            <li>• État persistant et récupération.</li>
            <li>• Production réelle d&apos;un MP4 par FFmpeg.</li>
            <li>• Validation du média par ffprobe et calcul SHA-256.</li>
            <li>• Vérification automatique sur runner GitHub Actions indépendant.</li>
          </ul>
        </section>

        <section className="border-t border-gray-200 py-10">
          <h2 className="text-2xl font-bold">Démonstration média</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-700">
            Cet artefact est la sortie exacte produite par le run CI de référence. MPEG-4, 854×480,
            24 fps, durée 2 secondes.
          </p>
          <video className="mt-6 w-full rounded-xl border border-gray-200 bg-black" controls preload="metadata">
            <source src={videoUrl} type="video/mp4" />
            Votre navigateur ne prend pas en charge la lecture vidéo HTML5.
          </video>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href={videoUrl} className="rounded-lg bg-black px-5 py-3 text-center font-medium text-white hover:bg-gray-800" download>
              Télécharger le MP4
            </a>
            <a href={checksumUrl} className="rounded-lg border border-gray-300 px-5 py-3 text-center font-medium hover:bg-gray-50" download>
              Télécharger SHA256SUMS.txt
            </a>
          </div>
        </section>

        <section className="border-t border-gray-200 py-10">
          <h2 className="text-2xl font-bold">Provenance vérifiable</h2>
          <dl className="mt-6 space-y-5 text-gray-700">
            <div>
              <dt className="font-semibold text-black">Release</dt>
              <dd className="mt-1 font-mono text-sm">{version}</dd>
            </div>
            <div>
              <dt className="font-semibold text-black">Commit de release</dt>
              <dd className="mt-1 break-all font-mono text-sm">{commit}</dd>
            </div>
            <div>
              <dt className="font-semibold text-black">GitHub Actions</dt>
              <dd className="mt-1 font-mono text-sm">Run 35241302604 — conclusion: success</dd>
            </div>
            <div>
              <dt className="font-semibold text-black">SHA-256 du MP4 CI</dt>
              <dd className="mt-1 break-all font-mono text-sm">{sha256}</dd>
            </div>
          </dl>
          <p className="mt-6 text-sm leading-6 text-gray-500">
            Le dépôt NovaForge reste privé. Les identifiants ci-dessus permettent de relier cette
            démonstration publique au checkpoint versionné sans exposer le code privé.
          </p>
        </section>

        <section className="border-t border-gray-200 py-10">
          <h2 className="text-2xl font-bold">Limites explicites</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-700">
            Cette preuve ne démontre pas CogVideoX, une inférence GPU, RunPod, une génération vidéo
            cloud, un déploiement de production ni une génération vidéo par IA. Elle démontre le
            contrôle-plane NovaForge et un pipeline média réel FFmpeg jusqu&apos;à un MP4 vérifié.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-gray-700">
            La reproductibilité est fonctionnelle entre les environnements testés. Le fichier MP4
            n&apos;est pas revendiqué comme bit-à-bit déterministe entre différentes versions de FFmpeg.
          </p>
        </section>
      </div>
    </main>
  );
}
