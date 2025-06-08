import React from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import Post from '../components/common/PostCard';



export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="p-4 text-center">
        <h1 className="text-2xl font-bold">Welcome to ALX Project</h1>
        <p className="text-gray-600">Next.js + TypeScript + Tailwind CSS</p>
      </main>
      <Card
        title ="Welcome to ALX!"
        content ="This is a modern, reusable card component using TypeScript and Tailwind CSS."
      />
      <Post
        id={1}
        title="Sample Post"
        body="This is a sample post body."
        userId={1}
      />
    </div>
  );
}
