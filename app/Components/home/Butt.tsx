'use client';

import butt from '../../../public/butt.svg';
import Image from 'next/image';
import React from 'react';

const Butt = () => {
  return (
    <section className="relative h-[500px] sm:h-[720px] w-full">
      <div className="w-full h-full max-h-[720px] hidden sm:block absolute top-0 left-0">
        <Image src={butt} alt="hero image" width={1440} height={720} priority className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-full max-h-[650px] sm:hidden absolute top-0 left-0">
        <Image
          src="/landing-mobile.png"
          alt="hero image"
          width={380}
          height={500}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex top-0 relative z-10 text-white h-full items-center w-full bg-black/40 justify-center px-2 sm:px-4 lg:px-8">
        <div className="flex flex-col gap-y-5 w-full sm:max-w-[90%]   xl:max-w-[80%]  items-center">
          <p className="max-[400px]:text-base  text-center max-[500px]:text-lg text-xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold sm:font-bold scale-y-110 mb-4 lg:mb-8">
            Unlock The Potential of a Seamless, Progressive and More Sustainable Farming Legacy
          </p>
          <p className="w-full sm:max-w-[80%] text-center sm:font-medium text-white/80 text-sm sm:text-lg">
            At the end of the day, sustainability is about ensuring your kids and grandkids farm successfully for
            decades to come.StuternFarm uses information you collect on your fields and combines it with agronomic data
            to help you track improvements in nutrient efficiency, soil health and environmental impact. By doing this,
            you are setting the next generation up for success — agronomically, economically and ecologically.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Butt;
