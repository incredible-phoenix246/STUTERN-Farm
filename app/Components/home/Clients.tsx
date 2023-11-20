'use client';

import useInView from '@/hooks/useInView';
import cn from '@/utils/tailwind';
import city from '../../../public/city.svg';
import last from '../../../public/last.svg';
import house from '../../../public/house.svg';
import Image from 'next/image';

import React from 'react';

const Clients = () => {
  const clientRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(clientRef);
  return (
    <section
      ref={clientRef}
      className={cn(
        'w-full h-screen flex flex-col items-center ',
        isInView ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
      )}
    >
      <h2
        ref={clientRef}
        className={cn(
          'font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-header',
          isInView ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
        )}
      >

      </h2>
      <div className="flex flex-col lg:flex-row justify-center gap-12 items-center h-full lg:scale-150">
        <div className="flex items-center">
          <div className="rounded-full border w-20 h-20 flex items-center justify-center bg-green2">
            <Image src={city} alt="hero image" width={50} height={50} priority />
          </div>
          <div className="ml-2">
            <h2>15 Cities</h2>
            <p>Across Nigeria</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="rounded-full border w-20 h-20 flex items-center justify-center bg-green2">
            <Image src={house} alt="hero image" width={50} height={50} priority />
          </div>
          <div className="ml-2">
            <h2>25,500+</h2>
            <p>Farm Lands</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="rounded-full border w-20 h-20 flex items-center justify-center bg-green2">
            <Image src={last} alt="hero image" width={50} height={50} priority />
          </div>
          <div className="ml-2">
            <h2>1,500+</h2>
            <p>Farmers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
