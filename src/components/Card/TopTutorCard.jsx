import React from 'react';
import {AvatarImg} from './../../assets';
const TopTutorCard = (props) => {
  const {
    info = {
      userName: 'Nguyen Dinh Minh dat',
      userId: 999,
      imgLink : './../assets/avatar.png',
      content: {
        a: 'b',
        c: 'd',
        e: 'f'
      }
    }
  }
    =
    props;
  return (
    <div className="flex flex-col items-center gap-[40px] w-[300px] mb-4">
      <div className="h-[200px] w-[240px] overflow-hidden">
        {/* Avatar */}
        <img className="w-full h-full object-cover" src={AvatarImg}></img>
      </div>
      <div className="flex flex-col justify-start items-center w-[95%] p-3 "> 
        {/* Content */}
        <div className="font-bold flex justify-between w-full items-center mb-[15px]">
          {/* Header */}
          <div className='text-xl'>
            {info.userName}
          </div>
          <div>
            {'#'+ info.userId }
          </div>
        </div>
        <div className="flex flex-col w-full">
          {/* Main content */}
          <div className="flex flex-col w-full gap-[10px]">
            {
              Object.keys(info.content).map((key,index) => {
                return(
                  <div className="flex flex-row justify-between" key={index}>
                    <div className="">{key}</div>
                    <div className="">{info.content[key]}</div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopTutorCard;