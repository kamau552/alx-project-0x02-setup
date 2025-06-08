import React from 'react';
import Link from 'next/link';

export default function Header () {
  return (
    <header className="flex justify-between items-center text-black p-4">
      <h1 className="text-xl font-semibold">ALX Project</h1>
      <nav className="space-x-4">
        <Link href="/home" className="font-bold hover:underline text-teal-700">Home</Link>
        <Link href="/about" className="font-bold hover:underline text-teal-700" >About</Link>
        <Link href="/posts" className="font-bold hover:underline text-teal-700" >Posts</Link>
      </nav>
    </header>
  );
};


