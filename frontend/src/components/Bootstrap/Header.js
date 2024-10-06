import React, { useContext } from "react";
import img5 from '.././images/portfolio_logo.png';

const Header = () => {

  return (
    <div className="w-full z-10 bg-gray-200 text-gray-800 py-3 md:py-5 flex items-center justify-between px-2 md:px-4">
      <div className="flex items-center">
        <div>
          <img className="h-8 md:h-10 w-8 md:w-10 mr-6 md:mr-2" src={img5} alt="logo" />
        </div>
        <div className="text-lg md:text-2xl mr-1 tracking-tight font-medium md:font-semibold leading-5">
          Portfolio Builder
        </div>
        <div className="hidden md:block text-xs mb-2">Build for Ease</div>
      </div>
    </div>
  );
};

export default Header;