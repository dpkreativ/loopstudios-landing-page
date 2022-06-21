import React from 'react';
import Brand from '../atoms/Brand';
import { Hamburger } from '../atoms/Icons';

export default function Header() {
  return (
    <header className="px-5 py-6">
      <nav className="flex justify-between text-white">
        <Brand />

        {/* Menu */}
        <div>
          <Hamburger />
        </div>
      </nav>
    </header>
  );
}
