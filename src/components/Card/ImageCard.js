import React from "react";

const ImageCard = (props) => {
return (
    <div className="flex flex-col items-center gap-[15px] w-[276px] p-5 hover:cursor-pointer">
        <div className="h-[260px] w-[240px] overflow-hidden rounded-[20px] border">
            {/* Avatar */}
            <img className="w-full h-full" src={props.imgLink ? props.imgLink : "/static/earth.png"}></img>
        </div>
            <div className="flex justify-center items-center w-full px-4 ">
                {/* Header */}
                <div>
                {props.header ? props.header: "Tim gia su tieng nhat tai nha"}
                </div>
        </div>
    </div>
)
}
export default ImageCard