/* eslint-disable react/prop-types */
import React from 'react';

function SearchList(props) {
  const { items = [] } = props;
  return (
    <div className="absolute top-[50px] p-4 rounded-[20px] bg-white  mt-3 w-[100%] z-20">
      <div className="flex flex-col gap-[20px] h-fit max-h-[30vh] no-scrollbar  overflow-y-scroll overflow-x-hidden z-10">
        {items.map((item, index) => (
          <div  key={index} className="flex flex-row justify-between  p-2 items-center border-b  border-b-black/[0.1]">
            <div>{item.name}</div>
            <div>
              {' '}
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SearchList;
