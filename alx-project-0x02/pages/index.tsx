import Header from '../components/layout/Header';

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="p-4 text-center">
        <h1 className="text-2xl font-bold">Welcome to ALX Project</h1>
        <p className="text-gray-600">Next.js + TypeScript + Tailwind CSS</p>
      </main>
    </div>
  );
}
