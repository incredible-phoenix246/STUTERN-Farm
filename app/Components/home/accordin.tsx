'use client';
import { AddCircle } from 'iconsax-react';
import React from 'react';
import { useState } from 'react';
import ai from '../../../public/ai.svg';
import we from '../../../public/weather.svg';
import crop from '../../../public/crop.svg';
import Image from 'next/image';

const FAQs = [
  {
    question: 'Artificial Intelligence (AI) Support',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, harum! Facilis doloribus aspernatur, culpa nobis molestias architecto? Beatae, hic? Voluptatum.',
    icon: ai,
  },
  {
    question: 'Crop Management',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.fugiat dolorem deleniti quas tempore. Pariatur magnam hic aliquid tempora quae ex minima culpa nobis molestias architecto? Beatae, hic? Voluptatum.',
    icon: we,
  },
  {
    question: 'Weather Forecast',
    answer: 'Lorem ipsum dolor sit amet consectetur,cupiditate amet,',
    icon: crop,
  },
];

const FAQ = () => {
  const [currentItem, setCurrentItem] = useState(-1);

  const toggleShow = (idx: number) => {
    setCurrentItem((prevIdx) => (prevIdx === idx ? -1 : idx));
  };

  return (
    <div className="px-4 py-24 w-full justify-center max-w-7xl mx-auto">
      <p className="text-3xl tet-center font-montserrat font-bold mb-6">
        Spend Less Time Working On Farm Logs And More Time On Farm Productivity
      </p>
      <p className="text-[#666]  mb-10">
        With our special farm log feature, you no longer have to worry about the headaches of manually entering or
        retrieving your farm logs
      </p>
      <div className="w-full">
        <hr className="mb-4" />
        {FAQs.map((item, idx) => {
          return (
            <div key={idx}>
              <div className="flex item-center justify-between mb-3 px-2 transition-all ease-out duration-800">
                <div className="flex items-center justify-center">
                  <Image src={item.icon} alt="icon" width={30} height={30} />
                  <h5>{item.question}</h5>
                </div>
                <AddCircle
                  size="20"
                  className="w-5 cursor-pointer"
                  onClick={() => toggleShow(idx)}
                  color="#4AED9E"
                  variant="Broken"
                />
              </div>
              <div
                className={`px-2 mb-2 transition-all transform ${
                  idx === currentItem
                    ? 'h-auto translate-y-0 opacity-100'
                    : 'h-0 -translate-y-3 opacity-0 overflow-hidden'
                }`}
              >
                {item.answer}
              </div>
              <hr className="mb-3" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
