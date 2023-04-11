/* eslint-disable react/prop-types */
import React from 'react';

function Header({ children }) {
  return (
    <div className="flex flex-row justify-between items-center absolute top-0 right-0 w-full h-full px-4 ">
      {children}
    </div>
  );
}

export default Header;
