import React from "react";
import Avatar from "../Avatar";

const PersonalAvatar = (props) => {
    return (
        <div className="flex flex-col items-center justify-center w-[540px] gap-[30px] border-[rgba(0,0,0,0.2)] border rounded-[20px] p-5">
            <Avatar className="w-[200px] h-[200px]" link={props.info.link}/>
            <div className="font-bold text-[36px]">{props.info["Tên đầy đủ"]?props.info["Tên đầy đủ"]:"Harry porter"}</div>
            <div className="text-[24px]">{props.info["Vai trò"]?props.info["Vai trò"]:"Phụ huynh"}</div>
            <div className="text-[24px]">{props.info["Địa chỉ"]?props.info["Địa chỉ"]:"Cầu giấy, Hà Nội"}</div>
        </div>
    )
}
export default PersonalAvatar