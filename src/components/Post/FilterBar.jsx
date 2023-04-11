import React from 'react';
import { FilterImg } from '../../assets';
const FilterBar = () => {
  return (
    <div className="flex flex-row justify-between  items-center w-[754px] min-h-[76px] h-[76px] rounded-[20px] bg-[#FFFFFF] border px-[35px]">
      <div className="font-bold text-[25px]">Bài viết</div>
      <div className="w-fit h-[35px] px-[20px] py-[15px] gap-[10px] flex flex-row justify-start items-center rounded-[20px] bg-[rgba(15,15,15,0.08)] text-[20px]">
        <img className="w-[15px] h-[15px]" src={FilterImg}></img>
        <div className='flex flex-row justify-center items-center text-[18px] font-[700]'>Bộ lọc</div>
      </div>
    </div>
  );
};
export default FilterBar;