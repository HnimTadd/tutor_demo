import React from "react";

const Avatar = (props) => {
    return <div className={props.className ? props.className :"w-[60px] h-[60px]"}>
    <div className={`rounded-[100%] overflow-hidden w-full h-full border-solid border-0 outline-none  bg-blue-100`}>
        {props.link ?<img className="w-[100%] h-[100%] border-0 border-solid" src={props.link} alt={"Avatar at ".concat(props.link)}></img>:null}
    </div>
    </div>
}
export default Avatar