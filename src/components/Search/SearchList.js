import React from "react";
const SearchList = (props) => {
    return (
        <div className="absolute top-[50px] p-4 rounded-[20px] bg-red-200 mt-3 w-[100%] ">
        <div className="flex flex-col gap-[20px] h-fit max-h-[30vh] no-scrollbar bg-red-200 overflow-y-scroll overflow-x-hidden">
            {props.items.map((item) => (
                <div className="flex flex-row justify-between  p-2 items-center border-b border-b-black">
                <div >{item.name}</div>
                <div> {item.content}</div>
                </div>
            ))}
            </div>
        </div>
    )
}
export default SearchList