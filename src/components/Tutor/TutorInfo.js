import React, { useState } from "react";
import Avatar from "./../Avatar";
import {ToggleBtn} from './../Button'
const TutorPersonal = (props) => {
    const [status, setStatus] = useState(true);
    return (
        <div className="flex flex-col gap-5 p-4 pl-6 rounded-[20px] border w-[750px]">
            <div className="flex flex-row justify-between items-center gap-5 border-b border-b-slate-400 px-5 pb-6">
                <div className="flex flex-row items-center justify-start gap-5">
                <Avatar/>
                <div className="flex flex-col w-fit">
                    <div>{props.user && props.user.username ? props.user.username : "Le Quoc Hung"}</div>
                    <div className="flex flex-row justify-between items-center w-fit gap-[20px]">
                        <div className="text-center flex justify-center items-center flex-col" >Trang thai</div>
                        <ToggleBtn  status = {status} onClick = {()=>{setStatus(value =>!value)}}></ToggleBtn>
                    </div>
                    {/* Username */}
                </div>
                </div>
                <div>
                    ID:#{props.user && props.user.userId ? props.user.userId : 999}
                </div>
            </div>
            <div className="flex flex-row justify-between items-start w-full gap-[50px]">
                <div className="flex flex-col flex-1 gap-[20px] p-4">
                    <div className="w-full text-center font-bold">Nổi bật:</div>
                    <div className="flex flex-col gap-3">
                    {
                        props.user && props.user.att
                        ?
                        Object.keys(props.user.att).map((key, index) => {
                            return (
                                <div className="flex flex-row justify-between items-center w-full gap-3" key={index}>
                                    <div className="flex-[2] font-bold text-left">{key}</div>
                                    <div className="flex-[3]  self-start">{props.user.att[key]}</div>
                                </div>
                            )
                        })
                        :
                        null
                    }
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-[20px] p-4">
                    <div className="w-full text-center font-bold">Thông tin cơ bản:</div>
                    <div className="flex flex-col gap-3">
                    {
                        props.user && props.user.spec
                        ?
                        Object.keys(props.user.spec).map((key, index) => {
                            return (
                                <div className="flex flex-row justify-between items-center w-full gap-3" key={index}>
                                    <div className="flex-[2] font-bold">{key}</div>
                                    <div className="flex-[3] self-start">{props.user.spec[key]}</div>
                                </div>
                            )
                        })
                    :
                    null}
                    </div>
                </div>
            </div>
        </div>

    )
}
export default TutorPersonal