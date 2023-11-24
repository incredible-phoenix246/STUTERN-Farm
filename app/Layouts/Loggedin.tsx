import React, { ReactNode } from 'react';
import Sidebar from '../Components/sidebar/sidebar';
import LoggedNav from '../Components/navs/LoggedNav';

interface LayoutProps {
  children: ReactNode;
}

const Loggedin: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <LoggedNav />
      <div className="h-screen flex flex-row justify-start">
        <Sidebar />
        <div className="bg-primary flex-1 p-4 text-white">{children}</div>
      </div>
    </>
  );
};

export default Loggedin;
