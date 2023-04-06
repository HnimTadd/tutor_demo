import React from "react";

const FilterBar = (props) => {
    return (
        <div className="flex flex-row justify-between items-center w-[754px] h-[76px] rounded-[20px] bg-[#FFFFFF] border px-[20px]">
            <div className="font-bold text-[35px]">Bai viet</div>
            <div className="w-[142px] h-[54px] px-[20px] py-[15px] gap-[10px] flex flex-row justify-center items-center rounded-[20px] bg-[rgba(15,15,15,0.08)] text-[24px]">
                <img className="w-[20px] h-[20px]" src="static/filter.png"></img>
                Bo loc
            </div>
        </div>
    )
}
export default FilterBar