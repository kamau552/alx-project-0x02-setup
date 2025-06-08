import React from 'react';
import Header from '../components/layout/Header';
import Button from '@/components/common/Button';

export default function About() {
  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl">About This Project</h1>

        <div className="mt-6 space-x-4 space-y-4">
          <Button onClick={() => alert("Clicked!")} size="small" className="bg-emerald-500 rounded-sm">My btn</Button>
          <Button variant="primary" size='medium' className="bg-blue-950 rounded-md">click me</Button>
          <Button variant="danger" size="large" className="bg-red-600 rounded-full hover:bg-red-500">Delete</Button>
          <Button variant="secondary" size='large'>archive</Button>
        </div>
      </main>
    </>
  );
}
