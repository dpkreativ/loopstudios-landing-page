import React from 'react';
import Brand from '../atoms/Brand';
import { Facebook, Instagram, Pinterest, Twitter } from '../atoms/Icons';

export default function Footer() {
  return (
    <footer className="p-5 py-16 bg-black text-white">
      <section className="flex flex-col items-center space-y-5">
        <Brand />
        <article className="flex flex-col space-y-3 text-center">
          <div>About</div>
          <div>Careers</div>
          <div>Events</div>
          <div>Products</div>
          <div>Support</div>
        </article>
      </section>
      <section className="mt-16">
        <article className="flex space-x-3 items-center justify-center">
          <Facebook />
          <Twitter />
          <Pinterest />
          <Instagram />
        </article>
        <article className="text-center mt-3">
          &copy; {new Date().getFullYear()} Loopstudios. All rights reserved.
        </article>
      </section>
    </footer>
  );
}
