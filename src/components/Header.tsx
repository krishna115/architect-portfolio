'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-6 bg-white shadow-md">
      <div className="text-2xl font-bold">deepika.</div>
      <nav className="space-x-6">
        <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
        <Link href="#works" className="text-gray-700 hover:text-black">Works</Link>
        <Link href="#services" className="text-gray-700 hover:text-black">Services</Link>
        <Link href="#about" className="text-gray-700 hover:text-black">About me</Link>
      </nav>
      <a
        href="mailto:architect@example.com"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        LET'S TALK
      </a>
    </header>
  );
}
