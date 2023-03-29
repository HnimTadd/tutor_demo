import React from "react";

const Avatar = (props) => {
    const cl = `rounded-[100%] overflow-hidden w-[60px] h-[60px] border-solid border-0 outline-none`
    console.log(cl);
    return <div className={`rounded-[100%] overflow-hidden w-[60px] h-[60px] border-solid border-0 outline-none`}>
        <img className="w-[100%] h-[100%] bg-blue-100 border-0 border-solid" src={props.link} alt="hh"></img>
    </div>
}
export default Avatar