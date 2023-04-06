import React from "react";

const PersonalInfo = (props) => {
    return (
        <div className="flex flex-col items-center justify-center w-[540px] gap-[30px] border-[rgba(0,0,0,0.2)] border rounded-[20px] p-5">
            <div className="flex justify-center items-center border-b border-[#707070] w-full h-[56px]">
            <div className="font-bold text-xl">Thông tin tài khoản</div>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[10px]">
                {
                props.info
                ?
                Object.keys(props.info).map((key, index) => {
                    return (
                        <div className="flex flex-row w-full items-center border-b border-[#707070] h-[35px]" key={index}>
                        <div className="flex-[2] self-start font-bold">{key}</div>
                        <div className="flex-[3] self-start">{props.info[key]}</div>
                        </div>
                        )
                })
                :
                null
                }
            </div>
            <div className="flex flex-row justify-end items-center w-full">
                <div className="w-[112px] h-[34px] bg-[#3699FF] rounded-[6px] flex justify-center items-center text-[#FFFFFF]">Chỉnh sửa</div>
            </div>
        </div>
    )
}
export default PersonalInfo