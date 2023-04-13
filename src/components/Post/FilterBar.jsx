import React, { useState } from 'react';
import { FilterImg } from '../../assets';
const FilterBar = () => {
  const [showFilter, setShowFilter] = useState(0);
  const filterTitle = [
    {
      title: 'Môn',
      options: ['Toán', 'Lý', 'Hóa', 'Ngữ Văn', 'Anh Văn'],
    },
    {
      title: 'Hình thức',
      options: ['Online', 'Offline'],
    },
    {
      title: 'Địa điểm',
      options: ['Hồ Chí Minh', 'Hà Nội', 'Tiền Giang', 'Bến Tre', 'Vũng Tàu'],
    },
  ];
  return (
    <div className="flex flex-col items-end w-[754px] rounded-[20px] bg-[#FFFFFF] border px-[35px] py-4">
      <div className="flex flex-row justify-between w-full">
        <div className="font-bold text-[25px]">Bài viết</div>
        <div
          className="w-fit  px-[25px] py-[10px] gap-[10px] flex flex-row justify-start items-center rounded-[20px] bg-[rgba(15,15,15,0.08)] text-[20px] "
          onClick={() => {
            if (showFilter === 1) {
              setShowFilter(0);
            } else {
              setShowFilter(1);
            }
          }}
        >
          <img className="w-[15px] h-[15px]" src={FilterImg}></img>
          <div className="flex flex-row justify-center items-center text-[20px] font-[700] cursor-pointer">
            Bộ lọc
          </div>
        </div>
      </div>
      {showFilter === 1 && (
        <div className="w-[320px] text-xl mt-2">
          {filterTitle.map((e, index) => (
            <div
              key={index}
              className="flex flex-row justify-between rounded-md py-2 hover:bg-slate-100"
            >
              <p>{e.title}</p>
              <select
                name="cars"
                id="cars"
                className="bg-transparent w-[150px]"
              >
                {e.options.map((e, index) => (
                  <option key={index}>{e}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default FilterBar;
