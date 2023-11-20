'use client';

import { NAV_LINKS } from '@/libs/constants';
import cn from '@/utils/tailwind';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isActive, setIsActive] = useState('');
  const searchParams = useSearchParams().get('path');

  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  return (
    <nav className="py-4 sm:py-6 px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full justify-between items-center bg-white/80">
      <Link href="/?path=home" className="w-fit">
        <h1 className="text-xl font-bold text-green1">
          STUTERN<span className="text-dark">Farm</span>{' '}
        </h1>
      </Link>

      <div className="hidden lg:flex items-center gap-x-5 lg:gap-x-5 2xl:gap-x-5 w-full justify-center max-w-[70%] 2xl:max-w-[40%]">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.link === 'home' ? '/?path=home' : `${link.link}?path=${link.link}`}
            key={link.id}
            onClick={() => {
              setIsActive(link.link);
            }}
            className={cn(
              ' w-full text-black  flex justify-center capitalize text-base relative font-medium  before:bg-green1 before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500 ',
              isActive === link.link ? 'before:w-full text-green1' : '',
            )}
          >
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex gap-x-3 xl:gap-x-5 [&>button]:border-green2 [&>button]:border [&>button]:px-4 [&>button]:py-2 [&>button]:rounded-md [&>button:last-child]:bg-green1  [&>button:last-child]:text-white [&>button]:font-medium [&>button]:text-primary-light">
        <button type="button">Login</button>
        <button type="button">SIGN UP</button>
      </div>
      <div className="lg:hidden text-2xl">
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
