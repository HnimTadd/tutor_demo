import React from 'react';
import Avatar from '../Avatar';
import { AvatarImg, CityImg, Phonemg, EmailImg} from '../../assets';
const PostBar = (props) => {
  const {user, onFocus} = props;
  return <div className="flex flex-col gap-5 p-4 px-[35px] rounded-[20px] border w-[750px] bg-white">
    <div className="flex flex-row justify-start items-center border-b border-b-slate-500 pb-5 gap-4">
      <Avatar link={AvatarImg} size="60px"></Avatar>
      <input
        className="w-[530px] py-3 pl-12 pr-4 text-gray-500 border rounded-[20px] outline-none bg-gray-50 focus:bg-white"
        type="text"
        placeholder="Write something"
        onFocus={onFocus}
      ></input>
    </div>
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row justify-between items-center gap-3">
        <img src={CityImg}></img>
                City, State Zip
      </div>
      <div className="flex flex-row justify-between items-center gap-3">
        <img src={Phonemg}></img>
        {user['Số điện thoại']}
      </div>
      <div className="flex flex-row justify-between items-center gap-3">
        <img src={EmailImg}></img>
        {user['Email']}
      </div>
    </div>
  </div>;
};
export default PostBar;