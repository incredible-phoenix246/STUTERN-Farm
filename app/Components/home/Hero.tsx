/* eslint-disable react/no-unescaped-entities */
'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import home from '../../../public/home.svg';

const TypewriterComponent = dynamic(() => import('typewriter-effect'), {
  ssr: false,
});

const Hero = () => {
  return (
    <section className="relative h-[500px] sm:h-[720px] w-full">
      <div className="w-full h-full max-h-[720px] hidden sm:block absolute top-0 left-0">
        <Image src={home} alt="hero image" width={1440} height={720} priority className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-full max-h-[650px] sm:hidden absolute top-0 left-0">
        <Image src={home} alt="hero image" width={380} height={500} priority className="w-full h-full object-cover" />
      </div>
      <div className="flex top-0 relative z-10 text-white h-full items-center w-full bg-black/40 justify-center px-2 sm:px-4 lg:px-8">
        <div className="flex flex-col gap-y-5 w-full sm:max-w-[90%]   xl:max-w-[80%]  items-center">
          <p className="max-[400px]:text-base max-[500px]:text-lg text-xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold sm:font-bold scale-y-110 mb-4 lg:mb-8">
            <TypewriterComponent
              component="p"
              options={{
                autoStart: true,
                delay: 100,
                loop: true,
                strings: [
                  'Your Patner in Farming Success',
                  'Empowering Your Agriculture Journey to Success!',
                  'Cultivating Prosperity Together with You!',
                  'Harvesting Success, Your Trusted Partner!',
                  'Sowing Seeds of Success in Agriculture with You!',
                ],
                deleteSpeed: 50,
              }}
            />
          </p>
          <p className="w-full sm:max-w-[80%] text-center sm:font-medium text-white/80 text-sm sm:text-lg">
            We empower your agricultural journey through AI-driven insights and expert guidance. Our advanced technology
            and human expertise work together to revolutionize your farming approach, ensuring efficiency,
            sustainability, and prosperity at every step.
          </p>
          <div className="mt-3 lg:mt-6 w-full justify-center flex gap-x-5 lg:gap-x-10  [&>button]:px-4 [&>button]:lg:px-12 [&>button]:py-2 [&>button]:lg:py-4 [&>button]:rounded-md [&>button:last-child]:bg-green1 [&>button:last-child]:text-white [&>button]:font-medium [&>button]:lg:font-semibold [&>button]:text-white [&>button]:max-[390px]:text-sm max-[350px]:flex-col gap-y-3">
            <button type="button">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
