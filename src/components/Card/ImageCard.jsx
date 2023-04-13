import React from 'react';
const ImageCard = (item) => {
  return (
    <div className="flex flex-col items-center gap-[15px] w-[276px] p-4 hover:cursor-pointer">
      <div className="h-[260px] w-[240px] overflow-hidden rounded-[20px]">
        {/* Avatar */}
        <img className="w-full h-full object-cover" src={item.info.imgLink}></img>
      </div>
      <div className="flex justify-center text-center items-center w-full text-green-800 text-xl">
        {/* Header */}
        {item.info.header}
      </div>
    </div>
  );
};
export default ImageCard;
