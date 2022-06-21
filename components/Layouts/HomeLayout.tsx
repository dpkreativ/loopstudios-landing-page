import React from 'react';
import Footer from '../UI/organisms/Footer';
import Header from '../UI/organisms/Header';

type HomeLayoutProps = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="grid grid-rows-[max-content_minmax(0,100%)_max-content] min-h-screen h-full">
      <Header />
      <main>
        <section>{children}</section>
      </main>
      <Footer />
    </div>
  );
}
