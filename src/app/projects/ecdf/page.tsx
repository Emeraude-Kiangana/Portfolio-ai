const repoUrl = 'https://github.com/Emeraude-Kiangana/ecdf';
const checkpointSha = '34814b06ae28fe5e3a62b9866cb9781332312b7b';
const checkpointUrl = `${repoUrl}/commit/${checkpointSha}`;

export default function ECDFProjectPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-black sm:px-10 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-sm underline underline-offset-4">
          ← Retour au portfolio
        </a>

        <header className="mt-10 border-b border-gray-200 pb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            P03 → preuve publique P01
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight">eCDF</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700">
            Prototype de recherche technologique qui étudie comment un transfert de valeur de test,
            modélisé comme une machine à états explicite, peut produire un résultat vérifiable et
            reproductible avant toute intégration réseau ou usage financier réel.
          </p>
        </header>

        <section className="grid gap-4 py-10 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Statut</p>
            <p className="mt-2 text-xl font-semibold">Research Prototype v0.1</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Checkpoint validé</p>
            <p className="mt-2 text-xl font-semibold">27 / 27 tests</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Référence Git</p>
            <p className="mt-2 break-all font-mono text-sm">34814b06ae28</p>
          </div>
        </section>

        <section className="border-t border-gray-200 py-10">
          <h2 className="text-2xl font-bold">Ce qui est réellement démontré</h2>
          <ul className="mt-5 space-y-3 text-gray-700">
            <li>• Fondation TypeScript/npm exécutable pour le prototype eCDF.</li>
            <li>• Modèle de domaine local et déterministe pour les opérations de transfert.</li>
            <li>• Invariants, transitions d’état, rôles, déduplication locale et snapshots déterministes.</li>
            <li>• Checkpoint validé avec 27 tests sur 27 au vert.</li>
            <li>• Artefact public reproductible à partir du commit de référence ci-dessous.</li>
          </ul>
        </section>

        <section className="border-t border-gray-200 py-10">
          <h2 className="text-2xl font-bold">Limites du checkpoint</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-700">
            Cette preuve ne démontre pas encore un paiement Stellar exécuté, une intégration Testnet,
            une infrastructure de production, une conformité réglementaire ou un produit financier.
            Elle démontre uniquement l’état technique local validé du prototype au checkpoint indiqué.
          </p>
        </section>

        <section className="border-t border-gray-200 py-10">
          <h2 className="text-2xl font-bold">Preuves vérifiables</h2>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href={checkpointUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-black px-5 py-3 text-center font-medium text-white hover:bg-gray-800"
            >
              Voir le commit de référence
            </a>
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-300 px-5 py-3 text-center font-medium hover:bg-gray-50"
            >
              Ouvrir le dépôt public eCDF
            </a>
          </div>
          <p className="mt-5 break-all font-mono text-sm text-gray-500">{checkpointSha}</p>
        </section>
      </div>
    </main>
  );
}
