'use client';
import Link from 'next/link';

import { Instagram, Facebook, Linkedin, Twitter, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-6 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">Deepika.</div>

      {/* Navigation Links */}
      <nav className="space-x-6 hidden md:flex">
        <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
        <Link href="/articles" className="text-gray-700 hover:text-black">Articles</Link>
        <Link href="/journey" className="text-gray-700 hover:text-black">My journey</Link>
      </nav>

      {/* Social Media Icons */}
      <div className="flex space-x-6 text-gray-600">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          <Instagram size={20} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          <Facebook size={20} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          <Linkedin size={20} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          <Twitter size={20} />
        </a>
        <a href="mailto:architect@example.com" className="hover:text-black">
          <Mail size={20} />
        </a>
      </div>
    </header>
  );
}

// | Color Name         | Hex Code  | Why it works                                           |
// | ------------------ | --------- | ------------------------------------------------------ |
// | **Warm Coral**     | `#FF6B6B` | Adds energy, keeps a warm tone, still girly but bold.  |
// | **Deep Rose**      | `#D64571` | Elegant, richer pink tone that pops against soft pink. |
// | **Peach Orange**   | `#FFA45B` | Fun and friendly contrast, warm but distinct.          |
// | **Soft Plum**      | `#7B4B94` | Adds sophistication and depth without being too dark.  |
// | **Turquoise Blue** | `#3EC1D3` | A cool-tone contrast for a fresh, vibrant look.        |
// #8e4a63
