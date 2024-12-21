import PhoneList from '@/components/PhoneList';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Phone Catalog</h1>
      <PhoneList />
    </main>
  );
}