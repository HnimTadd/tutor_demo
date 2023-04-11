import React, { useState } from 'react';
import Avatar from '../Avatar';
import {ToggleBtn} from '../Button';
const TutorPersonal = (props) => {
  const [status, setStatus] = useState(true);
  const {
    user= {
      userName: 'Hnimtadd',
      id: 999,
      att: {
        'Đánh giá': '✴✴✴✴✴',
        'Giải thưỏng': 'Gia sư xuất sắc tháng 10',
      },
      spec:  {
        'Môn': 'Toán, Lý, Hóa',
        'Lớp': '10, 11, 12',
        'Hình thức': 'Offline/Online',
      }
    },
  } = props;
  return (
    <div className="flex flex-col gap-3 p-3 pl-6 rounded-[20px] border w-[750px] bg-white h-fit">
      <div className="flex flex-row justify-between items-center gap-5 px-5 pb-6">
        <div className="flex flex-row items-center justify-start gap-5 pt-[10px]">
          <Avatar width='60px' height='60px'/>
          <div className="flex flex-col w-fit ">
            <div className='font-[700] text-[22px]'>{user.userName}</div>
            <div className="flex flex-row justify-between items-center w-fit gap-[20px]">
              <div className="text-center flex justify-center items-center flex-col" >Trang thai</div>
              <ToggleBtn  status = {status} onClick = {()=>{setStatus(value =>!value);}}></ToggleBtn>
            </div>
            {/* Username */}
          </div>
        </div>
        <div className='font-[700]'>ID:#{user.id}</div>
      </div>
      <div className="flex flex-row justify-between items-start w-full gap-5">
        <div className="flex flex-col flex-1 gap-[20px] p-2">
          <div className="w-full text-center font-bold">Nổi bật:</div>
          <div className="flex flex-col gap-1">
            {
              user.att&&
              Object.keys(user.att).map((key, index) => {
                return (
                  <div className="flex flex-row justify-between items-center w-full gap-3" key={index}>
                    <div className="flex-[2] font-bold text-left">{key}</div>
                    <div className="flex-[3]  self-start">{user.att[key]}</div>
                  </div>
                );
              })
            }
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-[20px] p-2">
          <div className="w-full text-center font-bold">Thông tin cơ bản:</div>
          <div className="flex flex-col gap-1">
            {
              user.spec&&
              Object.keys(user.spec).map((key, index) => {
                return (
                  <div className="flex flex-row justify-between items-center w-full gap-3" key={index}>
                    <div className="flex-[2] font-bold">{key}</div>
                    <div className="flex-[3] self-start">{user.spec[key]}</div>
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
export default TutorPersonal;