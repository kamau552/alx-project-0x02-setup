import Header from '../components/layout/Header';
import Card from '@/components/common/Card';

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl">This is the Home Page</h1>
      </main>
      <Card title="Welcome" description="This is the home page card." />
    </>
  );
}
