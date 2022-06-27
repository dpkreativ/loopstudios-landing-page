import React, { ReactNode } from 'react';

interface imageProps {
  imgSrc: string;
  imgAlt: string;
  imgText: ReactNode;
}

export default function CreationImage({ imgSrc, imgAlt, imgText }: imageProps) {
  return (
    <div className="relative">
      <img src={imgSrc} alt={imgAlt} className="object-contain w-full" />
      <div className="h-full w-full absolute top-0 bg-gradient-to-tr from-black to-transparent opacity-60"></div>
      <h3 className="font-title uppercase text-xl absolute bottom-0 text-white p-5">
        <div>{imgText}</div>
      </h3>
    </div>
  );
}
