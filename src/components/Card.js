import React from "react";
const Card = (props) => {
    return <div className="flex flex-col justify-start p-3 m-3 w-[100%] h-[fit] border">
        <div className={"p5 w-[286px] h-[63px] flex justify-center items-center flex-row rounded-[20px] ".concat(props.color)}>{props.header}</div>
        <div className="flex flex-col justify-center items-start gap-4 mt-4 mb-3 pl-3">
        {props.items.map((item) => {
            return <div><a className="text-black" href={item.link}>{item.content}</a></div>
        })}
        </div>
    </div>
} 
export default Card