import React from 'react';

const PersonalInfo = (props) => {
  const {
    info = {
      'Tên đầy đủ':'Nguyễn Đình Minh Đạt',
      'Email':'hnimtađ@hnimtadd.com',
      'Số điện thoại': '0393939939',
      'Vai trò': 'Sinh viên',
      'Địa chỉ': 'KTX khu A, đại học quốc gia, Hồ Chí Minh'
    }
  } = props;
  const displayProps = [
    'Tên đầy đủ',
    'Email',
    'Số điện thoại',
    'Vai trò',
    'Địa chỉ'
  ];
  return (
    <div className="flex flex-col items-center justify-center w-[540px] gap-[30px] border-[rgba(0,0,0,0.2)] border rounded-[20px] p-5 bg-white">
      <div className="flex justify-center items-center border-b border-[#707070] w-full h-[56px]">
        <div className="font-bold text-xl">Thông tin tài khoản</div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-[10px]">
        {
          displayProps.map((key, index) => {
            return (
              <div className="flex flex-row w-full items-center border-b border-b-[rgba(0,0,0,0.2)] border-[#707070] h-[35px]" key={index}>
                <div className="flex-[1] self-start font-bold">{key}</div>
                <div className="flex-[3] self-start">{info[key]}</div>
              </div>
            );
          })
        }
      </div>
      <div className="flex flex-row justify-end items-center w-full">
        <div className="w-[112px] h-[34px] bg-[#3699FF] rounded-[6px] flex justify-center items-center text-[#FFFFFF] hover:cursor-pointer">Chỉnh sửa</div>
      </div>
    </div>
  );
};
export default PersonalInfo;