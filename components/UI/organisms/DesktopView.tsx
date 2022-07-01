import Image from 'next/image';
import CreationImage from '../atoms/CreationImage';

export default function DesktopView() {
  return (
    <div className="hidden lg:block">
      {/* Hero Section */}
      <section className="h-full min-h-screen w-full flex items-center -mt-16">
        <div className="absolute h-screen w-full top-0 -z-20">
          <Image
            src="/assets/images/desktop/image-hero.jpg"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <article className="w-full max-w-6xl mx-auto">
          <div className="w-max font-title border-2 border-white p-10 pr-20 uppercase text-white text-7xl leading-none">
            <div>Immersive</div>
            <div>Experiences</div>
            <div>that Deliver</div>
          </div>
        </article>
      </section>

      {/* Intro Section */}
      <section className="p-5 mt-16 grid grid-cols-2 relative">
        <div className="relative w-full max-w-2xl">
          <img
            src="/assets/images/desktop/image-interactive.jpg"
            alt="vr illustration desktop"
            className="object-contain w-full"
          />
        </div>
        <div className="p-10 bg-white absolute bottom-0 right-1/4 w-full h-max max-w-2xl z-20">
          <h2 className="font-title uppercase text-4xl text-center">
            The leader in interactive VR
          </h2>
          <p className="p-5 text-center leading-normal text-gray-500">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>

      {/* Our Creations */}
      <section className="p-5">
        <h2 className="font-title uppercase text-4xl text-center">
          Our Creations
        </h2>

        <div className="grid grid-cols-4 gap-8 mt-5">
          <CreationImage
            imgSrc="/assets/images/desktop/image-deep-earth.jpg"
            imgAlt="deep earth"
            imgText={
              <>
                <p>Deep</p>
                <p>Earth</p>
              </>
            }
          />
          <CreationImage
            imgSrc="/assets/images/desktop/image-night-arcade.jpg"
            imgAlt="night arcade"
            imgText={
              <>
                <p>Night</p>
                <p>Arcade</p>
              </>
            }
          />
          <CreationImage
            imgSrc="/assets/images/desktop/image-soccer-team.jpg"
            imgAlt="soccer team"
            imgText={
              <>
                <p>Soccer</p>
                <p>Team VR</p>
              </>
            }
          />
          <CreationImage
            imgSrc="/assets/images/desktop/image-grid.jpg"
            imgAlt="the grid"
            imgText={
              <>
                <p>The</p>
                <p>Grid</p>
              </>
            }
          />
          <CreationImage
            imgSrc="/assets/images/desktop/image-from-above.jpg"
            imgAlt="from up above"
            imgText={
              <>
                <p>From Up</p>
                <p>Above VR</p>
              </>
            }
          />
          <CreationImage
            imgSrc="/assets/images/desktop/image-pocket-borealis.jpg"
            imgAlt="pocket borealis"
            imgText={
              <>
                <p>Pocket</p>
                <p>Borealis</p>
              </>
            }
          />
          <CreationImage
            imgSrc="/assets/images/desktop/image-curiosity.jpg"
            imgAlt="the curiosity"
            imgText={
              <>
                <p>The</p>
                <p>Curiosity</p>
              </>
            }
          />
          <CreationImage
            imgSrc="/assets/images/desktop/image-fisheye.jpg"
            imgAlt="make it fisheye"
            imgText={
              <>
                <p>Make it</p>
                <p>Fisheye</p>
              </>
            }
          />
        </div>

        <div className="w-max mx-auto my-8">
          <button className="border-2 border-black uppercase py-2 px-10 active:bg-black active:text-white">
            See All
          </button>
        </div>
      </section>
    </div>
  );
}
