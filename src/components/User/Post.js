import React from "react";
import Avatar from "./../Avatar";

const Post = (props) => {
    return <div className="flex flex-col gap-6 p-9 m-5 rounded-[20px] border pr-20">
        <div className="flex flex-row justify-start items-start gap-5 border-b border-b-slate-400 pb-6">
            <Avatar></Avatar>
            <div className="flex flex-col justify-between items-start">
                {
                props.post && props.post.username 
                ?
                props.post.username
                :
                "Hnimtadd"
                }
                <div className="flex flex-row justify-between items-center text-xs">
                    {
                    props.post && props.post.time
                    ?
                    Math.floor((Date.now() - Date.parse(props.post.time))/1000/3600 )+ " giờ"
                    :
                    "12 giờ"
                    }
                    <img src="/static/earth.png" alt=""></img>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-3 border-b border-b-slate-400 pb-6">
            {
            props.post && props.post.content
            ?
            Object.keys(props.post.content).map((key, index)=> 
                <div key={index} className="flex flex-row justify-between items-center">
                    <div className="flex-1">{key}</div>
                    <div className="text-left flex-[2]">{props.post.content[key]}</div>
                </div>
                )
            :
            null
            }
        </div>
        <div className="flex flex-row justify-end items-center">
            <div className="flex justify-center items-center w-[116px] h-[39px] rounded-[10px] bg-[rgb(15,14,14)]/[0.08] hover:cursor-pointer">Da lien he:
            {
            props.post && props.post.status && props.post.status["Da lien he"]
            ?
            " "+props.post.status["Da lien he"]
            :
            null
            }</div>
        </div>
    </div>
}
export default Post