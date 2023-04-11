/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import Avatar from '../Avatar';
import ShowModal from '../Modal';
import { AppContext } from '../../context/AppContext';
import { navigate } from 'gatsby';
function TutorPost(props) {
  const {registerPost, currentUser, users} = useContext(AppContext);
  const [show, setShow] = useState(false);

  const {
    post = {
      postId:0,
      username: 'Hnimtadd',
      time: '2023-04-06T12:51:00.000+07:00',
      content: 'Môn: Toán\nHình thức: Offline\nĐịa điểm: 381 Phan Văn Trị, Gò Vấp, Thành phố Hồ Chí Minh\nYêu cầu: Sinh viên nữ, khối ngành A, điểm thi thpt từ 27 trở lên\nLương: 2.800.000 / tháng',
      status: {
        'Đã liên hệ': [1, 2, 3],
        link: '/',
      },
      ownId: 1
    }
  } = props;
  return (
    <div className="bg-white flex flex-col gap-6 p-9 rounded-[20px] border pr-20 w-[700px]">
      <div className="flex flex-row justify-start items-start gap-5 border-b border-b-slate-400 pb-6">
        <Avatar onClick = {() => navigate('/personalpage/?id='+post.ownId)}/>
        <div className='flex flex-row w-full justify-between px-[15px] items-center'>
          <div className="flex flex-col justify-between items-start">
            { post.username}
            <div className="flex flex-row justify-between items-center text-xs">
              { `${Math.floor((Date.now() - Date.parse(post.time)) / 1000 / 3600)} giờ`}
              <img src="/static/earth.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-between items-start">
            <div className="w-[91px] h-[34px] rounded-[6px] bg-[#1F7BF2] p-[8px] flex flex-row justify-center items-center text-[12px]">
            1 Liên hệ mới
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 border-b border-b-slate-400 pb-6">
        {
          post.content.split('\n').map((key, index) => {
            let row = key.split(':');
            return (
              <div key={index} className="flex flex-row justify-between items-center">
                <div className="flex-1 font-[700]">{row[0]}</div>
                <div  className="text-left flex-[2]">{row[1]}</div>
              </div>
            );
          }
          )
        }
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex justify-center items-center w-[116px] h-[39px] rounded-[10px] bg-[rgb(15,14,14)]/[0.08] hover:cursor-pointer"
          onClick={() => setShow(true)}>
          Đã liên hệ:
          {(post.status['Đã liên hệ']).length}
        </div>
        <a onClick={() => {registerPost(post.postId, currentUser);}}>
          <div className="flex justify-center items-center w-[116px] h-[39px] rounded-[10px] bg-[rgb(15,14,14)]/[0.08] hover:cursor-pointer">Liên hệ ngay </div>
        </a>
      </div>
      {show && <ShowModal content={users.filter((u)=> post.status['Đã liên hệ'].includes(u.id))} onClose = {()=> {setShow(false);}} />}
    </div>
  );
}
export default TutorPost;
