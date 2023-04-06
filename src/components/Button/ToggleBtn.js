import React from "react";
const dfnCallback = () => {alert('hello')}
const ToggleButton = (props) => {
    return (
        <div className={props.className}>

        <div class="flex items-center cursor-pointer cm-toggle-wrapper" onClick={props.onClick}>
        {
        props.status 
        ?
        <>
        <span class="font-semibold text-xs mr-1">
            {props.preText? props.preText:""}
        </span>
        <div  class={"rounded-full w-8 h-4 p-0.5 bg-green-500"}>
            <div class="rounded-full w-3 h-3 bg-white translate-x-2 transform mx-auto duration-300 ease-in-out"></div>
        </div>
        <span class="font-semibold text-xs ml-1">
        {props.postText? props.postText:""}
        </span>
        </>
        :
        <>
        <span class="font-semibold text-xs mr-1">
        {props.preText? props.preText:""}
        </span>
        <div class="rounded-full w-8 h-4 p-0.5 bg-slate-500">
        <div class="rounded-full w-3 h-3 bg-slate-200 -translate-x-2 transform mx-auto duration-300 ease-in-out"></div>
      </div>
        <span class="font-semibold text-xs ml-1">
        {props.postText? props.postText:""}
        </span>
    </>
        }
  </div>
        </div>
)
}
export default ToggleButton