/* eslint-disable react/prop-types */
import React from 'react';
import { AvatarImg } from '../assets';
function Logo(props) {
  const {
    width = '40px',
    height = '40px',
    link = '',
    user = {},
    onClick = () => {},
  } = props;
  return (
    <div
      className={
        'object-cover min-w-[40px] w-[auto] min-h-[40px] flex flex-row items-center justify-between gap-[]'
      }
      onClick={onClick}
    >
      <div
        className={
          'overflow-hidden min-w-[40px] min-h-[40px] border-solid border-0 outline-none bg-blue-100'
        }
        style={{
          width,
          height,
        }}
      >
        <img
          className="w-[100%] h-[100%] border-0 border-solid object-cover"
          src={link ? link : AvatarImg}
          alt={'Avatar at '.concat(link)}
        />
      </div>
      {user.userName ? (
        <div className="w-fit h-fit ml-[10px]">{user.userName}</div>
      ) : null}
    </div>
  );
}
export default Logo;
