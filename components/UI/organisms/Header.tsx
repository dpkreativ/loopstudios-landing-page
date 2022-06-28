import React, { useState } from 'react';
import Brand from '../atoms/Brand';
import { Close, Hamburger } from '../atoms/Icons';
import Modal from '../atoms/Modal';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="px-5 h-16 flex items-center z-20">
      <nav className="flex justify-between text-white w-full">
        <Brand />

        {/* Mobile Menu */}
        <div onClick={() => setShowModal(true)}>
          <Hamburger />
        </div>
      </nav>
      {/* Menu Content */}
      <Modal
        className={`bg-black px-5 top-0 h-full ${showModal ? '' : 'hidden'}`}
      >
        <nav className="h-16 flex justify-between items-center w-full">
          <Brand />
          <div onClick={() => setShowModal(false)}>
            <Close />
          </div>
        </nav>
        <div className="text-white uppercase font-title text-2xl mt-20 flex flex-col space-y-5">
          <p>About</p>
          <p>Careers</p>
          <p>Events</p>
          <p>Product</p>
          <p>Support</p>
        </div>
      </Modal>
    </header>
  );
}
