import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import HomeLayout from '../components/Layouts/HomeLayout';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        {/* Hero Section */}
        <section className="h-full grid grid-rows-1 items-center">
          <div className="absolute h-full w-full top-0 -z-20">
            <Image
              src="/assets/images/mobile/image-hero.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <article className="border-2 border-white mx-5 p-5">
            <h1 className="font-title uppercase text-white text-[42px] leading-none">
              <div>Immersive</div>
              <div>Experiences</div>
              <div>that</div>
              <div>Deliver</div>
            </h1>
          </article>
        </section>
      </HomeLayout>
    </div>
  );
};

export default Home;
