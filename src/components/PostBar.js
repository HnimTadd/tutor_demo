import React from "react";
import Avatar from "./Avatar"
const PostBar = (props) => {
    return <div className="flex flex-col gap-5 p-4 pl-6 rounded-[20px] border w-[750px]">
        <div className="flex flex-row justify-start items-center border-b border-b-slate-500 pb-5 gap-4">
            <Avatar link="/static/city.png" size="60px"></Avatar>
            <input
            className="w-[530px] py-3 pl-12 pr-4 text-gray-500 border rounded-[20px] outline-none bg-gray-50 focus:bg-white"
            type="text"
            placeholder="Write something"
            ></input>
        </div>
        <div className="flex flex-row justify-between items-center ">
            <div className="flex flex-row justify-between items-center gap-3">
                <img src="/static/city.png"></img>
                City, State Zip
            </div>
            <div className="flex flex-row justify-between items-center gap-3">
                <img src="/static/smartphone.png"></img>
                (205) 555-5555
            </div>
            <div className="flex flex-row justify-between items-center gap-3">
                <img src="/static/email.png"></img>
                name@email.com
            </div>
        </div>
    </div>
}
export default PostBar