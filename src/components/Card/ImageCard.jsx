import React from 'react';
import { AvatarImg } from '../../assets';
const ImageCard = (props) => {
  const {
    info = {
      header : 'Tim gia su tieng nhat tai nha',
      imgLink : '/static/avatar.png'
    }
  } = props;
  return (
    <div className="flex flex-col items-center gap-[15px] w-[276px] p-5 hover:cursor-pointer">
      <div className="h-[260px] w-[240px] overflow-hidden rounded-[20px]">
        {/* Avatar */}
        <img className="w-full h-full object-cover" src={AvatarImg}></img>
      </div>
      <div className="flex justify-center items-center w-full">
        {/* Header */}
        {info.header}
      </div>
    </div>
  );
};
export default ImageCard;