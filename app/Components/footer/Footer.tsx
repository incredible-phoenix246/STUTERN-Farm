import Image from 'next/image';
import React from 'react';
import SubscribeFooter from './SubscribeFooter';
import { FOOTER_LINKS } from '@/libs/constants';
import { BsTwitterX } from 'react-icons/bs';
import { Instagram, Facebook } from 'iconsax-react';

const Footer = () => {
  return (
    <footer className="w-full h-full bg-[#0E0E2C] text-white  pt-5 border-t border-gray-300">
      <div className="w-full h-full max-container flex flex-col justify-between px-4 lg:px-8 min-[1490px]:px-0 pb-8">
        <div className="flex flex-col gap-y-5 ">
          <div className="w-full max-[550px]:flex-col flex justify-between bg-[#0E0E2C] lg:justify-start items-center max-[550px]:items-start max-[550px]:gap-y-5">
            <h1 className="text-xl font-bold text-green1">
              STUTERN<span className="text-white">Farm</span>{' '}
            </h1>
            <div className="w-full min-[550px]:max-w-[300px] sm:max-w-[380px] lg:hidden ">
              <SubscribeFooter />
            </div>
          </div>
          <div className="flex max-[550px]:flex-col max-[550px]:gap-y-7 w-full justify-between items-start [&>ul>span]:text-[#fff] [&>ul>span]:text-base [&>ul>span]:font-semibold [&>ul>li]:text-[#fff] [&>ul>li]:text-base">
            <div className="w-full max-w-[380px] hidden lg:block">
              <SubscribeFooter />
            </div>
            <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3">
              <span>About Us</span>
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.id} className="capitalize">
                  {link.label}
                </li>
              ))}
            </ul>

            <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3">
              <span>Contact Us</span>
              {FOOTER_LINKS.emails.map((email) => (
                <li key={email.id}>{email.email}</li>
              ))}
              <div className="flex items-center gap-x-4">
                <span className="text-white h-[24px] w-[24px] font-medium rounded-full flex justify-center items-center">
                  <Instagram size="32" color="#ffffff" variant="Broken" />
                </span>
                <span className="text-white h-[24px] w-[24px]  font-medium rounded-full flex justify-center items-center">
                  <Facebook size="32" color="#ffffff" variant="Broken" />
                </span>
                <span className="text-white h-[24px] w-[24px] font-bold p-[1px] rounded-full flex justify-center items-center">
                  in
                </span>
                <span className="text-white h-[24px] w-[24px]  font-medium p-[1px] rounded-full flex justify-center items-center">
                  <BsTwitterX />
                </span>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex h-[50px] w-full justify-center items-center bg-[#0E0E2C] text-white py-3">
        <p>© Copyright {new Date().getFullYear()} STUTERNFarm</p>
      </div>
    </footer>
  );
};

export default Footer;
