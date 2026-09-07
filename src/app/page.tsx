import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Emeraude Kiangana</h1>
      <p className="text-xl text-gray-600 mb-8">
        Ingénieur Pédagogique & Architecte de Savoir
      </p>
      <p className="text-center max-w-2xl">
        Je construis des systèmes qui apprennent, enseignent et démontrent.
        Ce portfolio évolue vers une infrastructure de preuves augmentée par l’IA.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="https://github.com/Emeraude-Kiangana"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          GitHub
        </a>
        <a
          href="mailto:Emeraude-Kiangana@proton.me"
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
        >
          Contact
        </a>
      </div>
    </main>
  );
}