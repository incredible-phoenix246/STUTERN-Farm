'use client';

import logout from '@/helpers/logout';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useMemo } from 'react';
import {
  ChatIcon,
  ComfIcon,
  CropIcon,
  CollapsIcon,
  DashboardIcon,
  PestIcon,
  InsightIcon,
  FarmLogIcon,
  LogoIcon,
  LogoutIcon,
  TagIcon,
  WeatherIcon,
} from './icons';

interface MenuItem {
  id: number;
  label: string;
  icon: React.FC;
  link: string;
}

const menuItems = [
  { id: 1, label: 'Dashboard', icon: DashboardIcon, link: '/dashboard' },
  { id: 2, label: 'Crop Management', icon: CropIcon, link: '/posts' },
  { id: 3, label: 'Pest Control', icon: PestIcon, link: '/users' },
  { id: 4, label: 'Chat History', icon: ChatIcon, link: '/chat' },
  { id: 5, label: 'Weather', icon: WeatherIcon, link: '/tutorials' },
  { id: 6, label: 'Farm Logs', icon: FarmLogIcon, link: '/tutorials' },
  { id: 7, label: 'Market Insight', icon: InsightIcon, link: '/tutorials' },
  { id: 8, label: 'Cmmunity Forum', icon: ComfIcon, link: '/tutorials' },
  { id: 4, label: 'Price Prediton Tool', icon: TagIcon, link: '/tutorials' },
];

function Sidebar() {
  const handleLogout = () => {
    logout();
  };
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const pathname = usePathname();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => pathname.startsWith(menu.link) || menu.link === pathname),
    [pathname],
  );

  const wrapperClasses = classNames('h-auto px-4 pt-8 pb-7 bg-[#4AED9E] flex justify-between flex-col', {
    ['w-80']: !toggleCollapse,
    ['w-20']: toggleCollapse,
  });

  const collapseIconClasses = classNames('p-4 rounded bg-light-lighter absolute right-0', {
    'rotate-180': toggleCollapse,
  });

  const getNavItemClasses = (menu: MenuItem) => {
    return classNames(
      'flex items-center cursor-pointer hover:bg-[#219653] rounded w-full overflow-hidden whitespace-nowrap',
      {
        ['bg-[#219653]']: activeMenu?.id === menu.id,
      },
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: 'width 300ms cubic-bezier(0.2, 0, 0, 1) 0s' }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          {/* <div className="flex items-center pl-1 gap-4">
            <LogoIcon />
            <span
              className={classNames('mt-2 text-lg font-medium text-text', {
                hidden: toggleCollapse,
              })}
            >
              Logo
            </span>
          </div> */}
          {isCollapsible && (
            <button className={collapseIconClasses} onClick={handleSidebarToggle}>
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start">
          {menuItems.map((menu) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes} key={menu.id}>
                <Link href={menu.link} className="flex py-3 px-3 items-center w-full h-full">
                  <div style={{ width: '2.5rem' }}>
                    <menu.icon />
                  </div>
                  {!toggleCollapse && (
                    <span className={classNames('text-md font-medium text-text-light')}>{menu.label}</span>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${getNavItemClasses({} as MenuItem)} px-3 py-4`}>
        <Link href="/">
          <div style={{ width: '2.5rem' }}>
            <LogoutIcon />
          </div>
        </Link>
        {!toggleCollapse && <span className={classNames('text-md font-medium text-text-light')}>Logout</span>}
      </div>
    </div>
  );
}

export default Sidebar;
