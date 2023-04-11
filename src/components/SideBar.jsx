import React from 'react';

function SideBar(props) {
  const {children} = props;
  return (
    <div className='flex flex-col justify-start items-center gap-[20px] p-[10px] relative h-full z-[10]'>
      {children}
    </div>
  );
}
export default SideBar;
