import React from "react";
import Avatar from "./Avatar";
const item = {
    "content": {
        "Mon": "Toan",
        "Hinh thuc": "Offline",
        "Dia diem": "hasdfjh",
        "Yeu cau": "Sinh vien nu",
        "Luong": "2550 / thang",
    },
    "Da lien he": 3
}
const Post = (props) => {
    return <div className="flex flex-col gap-6 p-9 m-5 rounded-[20px] border pr-20">
        <div className="flex flex-row justify-start items-start gap-5 border-b border-b-slate-400 pb-6">
            <Avatar></Avatar>
            <div className="flex flex-col justify-between items-start">
                {props.username || "Hnimtadd"}
                <div className="flex flex-row justify-between items-center text-xs">
                    {props.time || "12 hours"}
                    <img src="/static/earth.png"></img>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-3 border-b border-b-slate-400 pb-6">
            {Object.keys(item.content).map((key, index)=> 
                <div key={index} className="flex flex-row justify-between items-center">
                    <div className="flex-1">{key}</div>
                    <div className="text-left flex-[2]">{item.content[key]}</div>
                </div>
                )
            }
        </div>
        <div className="flex flex-row justify-end items-center">
            <div className="flex justify-center items-center w-[116px] h-[39px] rounded-[10px] bg-[rgb(15,14,14)]/[0.08] hover:cursor-pointer">Da lien he: {item["Da lien he"]}</div>
        </div>
    </div>
}
export default Post