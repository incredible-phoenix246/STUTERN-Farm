'use client';

import MobileLogged from './MobileLogged';
import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { HambergerMenu, Messages2, Setting, NotificationBing, SearchFavorite1 } from 'iconsax-react';

const LoggedNav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isActive, setIsActive] = useState('');

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const searchParams = useSearchParams().get('path');

  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
    }
  }, [searchParams]);

  return (
    <nav className="py-4 sm:py-6 px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full justify-between items-center bg-white/80">
      <Link href="/dashboard">
        <h1 className="text-xl font-bold text-green1">
          STUTERN<span className="text-dark">Farm</span>{' '}
        </h1>
      </Link>
      <div className="text-xl font-bold">
        <Pathname />
      </div>
      <div className="hidden lg:flex items-center gap-x-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:border-green1"
          />
          <SearchFavorite1
            size="18"
            color="#4aed9e"
            variant="Bold"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          />
        </div>
        <button type="button">
          <NotificationBing size="32" color="#4aed9e" variant="Bold" />
        </button>
        <button type="button">
          <Setting size="32" color="#4aed9e" variant="Bold" />
        </button>
        <button type="button">
          <Messages2 size="32" color="#4aed9e" variant="Bold" />
        </button>
      </div>
      <div className="lg:hidden flex items-center">
        <div
          tabIndex={0}
          className="text-2xl cursor-pointer focus:border border-primary focus:p-1 focus:rounded-md ml-auto"
          onClick={toggleMobileMenu}
        >
          <HambergerMenu size="32" color="#27AE60" />
        </div>
      </div>
      <MobileLogged showMobileMenu={showMobileMenu} onClose={toggleMobileMenu} />
    </nav>
  );
};

export default LoggedNav;

export function Pathname() {
  const pathname = usePathname();
  const formattedPathname = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
  return <div>{formattedPathname}</div>;
}
