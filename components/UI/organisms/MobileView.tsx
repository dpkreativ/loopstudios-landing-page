import Image from 'next/image';
import CreationImage from '../atoms/CreationImage';

export default function MobileView() {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-full grid grid-rows-1 items-center min-h-screen -mt-16">
        <div className="absolute h-screen w-full top-0 -z-20">
          <Image
            src="/assets/images/mobile/image-hero.jpg"
            layout="fill"
            objectFit="cover"
            priority
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

      {/* Intro Section */}
      <section className="p-5 mt-16">
        <div className="relative w-full">
          <img
            src="/assets/images/mobile/image-interactive.jpg"
            alt="vr illustration mobile"
            className="object-contain w-full"
          />
        </div>
        <div className="py-10">
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

        <div className="flex flex-col space-y-3 mt-5">
          <CreationImage
            imgSrc="/assets/images/mobile/image-deep-earth.jpg"
            imgAlt="deep earth"
            imgText={
              <>
                <p>Deep</p>
                <p>Earth</p>
              </>
            }
          />
          <CreationImage
            imgSrc="/assets/images/mobile/image-night-arcade.jpg"
            imgAlt="night arcade"
            imgText={
              <>
                <p>Night</p>
                <p>Arcade</p>
              </>
            }
          />
          <CreationImage
            imgSrc="/assets/images/mobile/image-soccer-team.jpg"
            imgAlt="soccer team"
            imgText={
              <>
                <p>Soccer</p>
                <p>Team VR</p>
              </>
            }
          />
          <CreationImage
            imgSrc="/assets/images/mobile/image-grid.jpg"
            imgAlt="the grid"
            imgText={
              <>
                <p>The</p>
                <p>Grid</p>
              </>
            }
          />
          <CreationImage
            imgSrc="/assets/images/mobile/image-from-above.jpg"
            imgAlt="from up above"
            imgText={
              <>
                <p>From Up</p>
                <p>Above VR</p>
              </>
            }
          />
          <CreationImage
            imgSrc="/assets/images/mobile/image-pocket-borealis.jpg"
            imgAlt="pocket borealis"
            imgText={
              <>
                <p>Pocket</p>
                <p>Borealis</p>
              </>
            }
          />
          <CreationImage
            imgSrc="/assets/images/mobile/image-curiosity.jpg"
            imgAlt="the curiosity"
            imgText={
              <>
                <p>The</p>
                <p>Curiosity</p>
              </>
            }
          />
          <CreationImage
            imgSrc="/assets/images/mobile/image-fisheye.jpg"
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
