'use client';

import Image from 'next/image';
import React from 'react';
import WhyUsSlider from './sliders/WhyUsSlider';
import why from '../../../public/why.svg';
import useInView from '@/hooks/useInView';
import cn from '@/utils/tailwind';

const WhyUs = () => {
  const whyUsRef = React.useRef<HTMLDivElement>(null);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sliderRef);
  const isInView2 = useInView(whyUsRef);

  return (
    <section className="my-8 lg:my-20 w-full flex flex-col items-center">
      <div
        ref={whyUsRef}
        className={cn(
          'flex flex-col gap-y-5 lg:gap-y-10 items-center w-full max-w-[1000px] px-2 sm:px-4',
          isInView ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
        )}
      ></div>

      <div
        ref={sliderRef}
        className={cn(
          'flex-col md:flex-row  flex w-full  md:justify-between mt-8 bg-card px-2 sm:px-4 lg:px-8 rounded-lg py-2 lg:py-4 items-center  min-[900px]:gap-5 gap-3',
          {
            'opacity-100 translate-y-0 delay-1000 duration-1000': isInView2,
            'opacity-0 translate-y-36': !isInView2,
          },
        )}
      >
        <div className="md:w-full max-[500px]:max-w-[300px] max-w-[400px] min-[900px]:max-w-[30%]">
          <Image src={why} width={500} height={500} alt="illustration" />
        </div>
        <div className="w-full md:max-w-[60%]  min-[900px]:max-w-[70%] h-full flex items-center max-md:jusc">
          <WhyUsSlider />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
