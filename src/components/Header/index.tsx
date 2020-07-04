import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <div className="text-gray-100 bg-gray-400 body-font shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
          <Logo />
          <span className="ml-3 text-xl text-gray-800 mb-1">Pomodone</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
