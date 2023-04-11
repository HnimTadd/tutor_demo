import React from 'react';
import Avatar from '../Avatar';

const PersonalAvatar = (props) => {
  const {info = {
    link: '',
    'Tên đầy đủ': 'Harry Porter',
    'Vai trò': 'Phụ huynh',
    'Địa chỉ': 'Cầu Giấy, Hà Nội'
  }
  }
    = props;
  return (
    <div className="flex flex-col items-center justify-center w-[450px] gap-[10px] border-[rgba(0,0,0,0.2)] border rounded-[20px] p-3 bg-white">
      <Avatar width = "200px" height= "200px" link={info.link}/>
      <div className="font-bold text-[36px]">{info['Tên đầy đủ']}</div>
      <div className="text-[19px]">{info['Vai trò']}</div>
      <div className="text-[18px]">{info['Địa chỉ']}</div>
    </div>
  );
};
export default PersonalAvatar;