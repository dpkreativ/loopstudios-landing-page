import React from 'react';
import Brand from '../atoms/Brand';
import { Hamburger } from '../atoms/Icons';
import Modal from '../atoms/Modal';

export default function Header() {
  return (
    <header className="px-5 h-16 flex items-center z-20">
      <nav className="flex justify-between text-white w-full">
        <Brand />

        {/* Menu */}
        <div>
          <Hamburger />
        </div>
        {/* Menu Content */}
        <div>
          <Modal>
            <div>Hi</div>
          </Modal>
        </div>
      </nav>
    </header>
  );
}
