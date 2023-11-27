import React, { ReactNode } from 'react';
import Sidebar from '../Components/sidebar/sidebar';
import LoggedNav from '../Components/navs/LoggedNav';
import Chatbot from '@/app/Components/UI/chatbot';

interface LayoutProps {
  children: ReactNode;
}

const Loggedin: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <LoggedNav />
      <div className="flex flex-row justify-start relative">
        <Sidebar />
        <div className="bg-primary  flex-1 p-4 text-white relative">{children}</div>
        <div className="bg-[#219653] rounded-full p-2 absolute bottom-0 right-0">
          <button>
            <Chatbot />
          </button>
        </div>
      </div>
    </>
  );
};

export default Loggedin;
