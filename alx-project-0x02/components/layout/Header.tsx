import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-blue-500 text-white p-4">
      <h1 className="text-xl font-semibold">ALX Project</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
