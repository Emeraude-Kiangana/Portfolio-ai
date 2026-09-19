const repoUrl = "https://github.com/Emeraude-Kiangana/ecdf";
const normalizedMain = "c3a82329bdcd339a99595b64ea3a3dd4ee3adefa";
const foundationSha = "34814b06ae28fe5e3a62b9866cb9781332312b7b";
const normalizedCi = "35463718531";

export default function ECDFProjectPage() {
  const statusUrl = repoUrl + "/blob/main/docs/PROJECT-STATUS.md";
  const normalizedMainUrl = repoUrl + "/commit/" + normalizedMain;
  const foundationUrl = repoUrl + "/commit/" + foundationSha;
  const ciUrl = repoUrl + "/actions/runs/" + normalizedCi;

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-zinc-100 sm:px-10 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <a
          href="/open-technologies-portfolio/"
          className="text-sm underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
        >
          ← Retour au portfolio
        </a>

        <header className="mt-10 border-b border-zinc-800 pb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            P03 → preuve publique P01
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight">eCDF</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Prototype TypeScript de recherche pour expérimenter un cycle local de transfert de
            valeur explicite, déterministe et testable avant toute intégration de règlement réseau.
          </p>
        </header>

        <section className="grid gap-4 py-10 sm:grid-cols-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
            <p className="text-sm text-zinc-400">Statut</p>
            <p className="mt-2 text-xl font-semibold">TESTED · PUBLIC</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
            <p className="text-sm text-zinc-400">Version</p>
            <p className="mt-2 text-xl font-semibold">0.1.0-alpha.0</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
            <p className="text-sm text-zinc-400">Tests</p>
            <p className="mt-2 text-xl font-semibold">27 / 27 PASS</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
            <p className="text-sm text-zinc-400">Demo</p>
            <p className="mt-2 text-xl font-semibold">No public demo</p>
          </div>
        </section>

        <section className="border-t border-zinc-800 py-10">
          <h2 className="text-2xl font-bold">Ce qui est réellement démontré</h2>
          <ul className="mt-5 space-y-3 text-zinc-300">
            <li>• Fondation TypeScript/npm exécutable et publiquement inspectable.</li>
            <li>• Modèle local de transfert avec états explicites, rôles et invariants.</li>
            <li>• Montants exacts en bigint, rejet d’événements dupliqués et snapshots déterministes.</li>
            <li>• 27 tests sur 27 au vert sur le run normalisé {normalizedCi}.</li>
            <li>• Main normalisé : {normalizedMain}.</li>
          </ul>
        </section>

        <section className="border-t border-zinc-800 py-10">
          <h2 className="text-2xl font-bold">Preuves vérifiables</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-zinc-100 px-5 py-3 text-center font-medium text-zinc-950 hover:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950">
              Repository
            </a>
            <a href={statusUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-zinc-700 px-5 py-3 text-center font-medium hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950">
              Project Status
            </a>
            <a href={normalizedMainUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-zinc-700 px-5 py-3 text-center font-medium hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950">
              Normalized main
            </a>
            <a href={ciUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-zinc-700 px-5 py-3 text-center font-medium hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950">
              CI {normalizedCi}
            </a>
            <a href={foundationUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-zinc-700 px-5 py-3 text-center font-medium hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950">
              Foundation commit
            </a>
          </div>
        </section>

        <section className="border-t border-zinc-800 py-10">
          <h2 className="text-2xl font-bold">Limites</h2>
          <ul className="mt-5 space-y-3 text-zinc-300">
            <li>• Aucun adaptateur de règlement Stellar live ni flux RPC/Testnet implémenté.</li>
            <li>• Aucun Mainnet, fonds réels, custody, KYC de production ou intégration mobile money.</li>
            <li>• Aucun backing CDF, statut de CBDC, banque ou monnaie officielle.</li>
            <li>• Aucune approbation réglementaire, validation marché ou validation externe.</li>
            <li>• Aucun clean reproduction indépendant n’est enregistré ; REPRODUCIBLE n’est pas revendiqué.</li>
          </ul>
        </section>

        <footer className="border-t border-zinc-800 py-8 text-sm text-zinc-400">
          Last verified: 2026-09-19 · License: Apache-2.0
        </footer>
      </div>
    </main>
  );
}
