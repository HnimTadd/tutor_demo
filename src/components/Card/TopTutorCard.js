import React from "react";

const TopTutorCard = (props) => {

return (
    <div className="flex flex-col items-center gap-[35px] border w-[276px]">
        <div className="h-[260px] w-[240px] overflow-hidden">
            {/* Avatar */}
            <img className="w-full h-full" src={props.info && props.info.imgLink ? props.info.imgLink : ""}></img>
        </div>
        <div className="flex flex-col justify-start items-center w-full p-3"> 
            {/* Content */}
            <div className="font-bold flex justify-between w-full items-center">
                {/* Header */}
                <div>
                {props.info && props.info.userName ? props.info.userName: "Nguyen Dinh Minh Dat"}
                </div>
                <div>
                {props.info && props.info.userId ? "#"+ props.info.userId : "#999"}
                </div>
            </div>
            <div className="flex flex-col w-full">
                {/* Main content */}
                <div className="">
                    {
                        props.info && props.info.content
                        ?
                        Object.keys(props.info.content).map((key,index) => {
                            return(
                            <div className="flex flex-row justify-between" key={index}>
                                <div className="">{key}</div>
                                <div className="">{props.info.content[key]}</div>
                            </div>
                                )
                        })
                        :
                        null
                    }
                </div>
            </div>
        </div>
    </div>
)
}
export default TopTutorCard