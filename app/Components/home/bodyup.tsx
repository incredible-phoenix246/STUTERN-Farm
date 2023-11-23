'use client';

import React from 'react';
import iphone from '../../../public/iphone.svg';
import Image from 'next/image';
import useInView from '@/hooks/useInView';
import cn from '@/utils/tailwind';

const HowItWorks = () => {
  const worksRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const isInView = useInView(worksRef);
  const isInView2 = useInView(titleRef);

  return (
    <section className="h-[560px] w-full flex flex-col items-center  bg-green1 lg:mb-40 gap-y-5 lg:gap-y-8 xl:gap-y-12 2xl:gap-y-20">
      <div
        ref={worksRef}
        className={cn(
          'w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-y-6 xl:gap-y-12 mt-8 px-4 place-items-center opacity-0 translate-y-48',

          isInView ? 'animate-slideUp' : ' ',
        )}
      >
        <Image src={iphone} alt={iphone} width={1000} height={1000} />
      </div>
    </section>
  );
};

export default HowItWorks;
