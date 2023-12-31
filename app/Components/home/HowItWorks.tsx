'use client';

import React from 'react';
import WorksCard from './card/WorksCard';
import { HOW_IT_WORKS } from '@/libs/constants';
import useInView from '@/hooks/useInView';
import cn from '@/utils/tailwind';

const HowItWorks = () => {
  const worksRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const isInView = useInView(worksRef);
  const isInView2 = useInView(titleRef);

  return (
    <section className="h-full w-full flex flex-col items-center  bg-[#0E0E2C] mb-8 lg:mb-40 gap-y-5 lg:gap-y-8 xl:gap-y-12 2xl:gap-y-20">
      <h2
        ref={titleRef}
        className={cn(
          'font-bold text-2xl sm:text-2xl lg:text-3xl text-center xl:text-3xl 2xl:text-6xl text-white',
          isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
        )}
      >
        Stutern Farm Helps you to access agronomic tools and insight to:
      </h2>
      <div
        ref={worksRef}
        className={cn(
          'w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-y-6 xl:gap-y-12 mt-8 px-4 place-items-center opacity-0 translate-y-48',

          isInView ? 'animate-slideUp' : ' ',
        )}
      >
        {HOW_IT_WORKS.map((work) => (
          <WorksCard key={work.id} {...work} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
