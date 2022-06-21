import React from 'react';
import Brand from '../atoms/Brand';
import { Hamburger } from '../atoms/Icons';

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between">
        <Brand />

        {/* Menu */}
        <div className="text-black">
          <Hamburger />
        </div>
      </nav>
    </header>
  );
}
