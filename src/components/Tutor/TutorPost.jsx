/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import Avatar from '../Avatar';
import ShowModal from '../Modal';
import { AppContext } from '../../context/AppContext';
import { navigate } from 'gatsby';
function TutorPost(props) {
  const {
    post = {
      postId:0,
      time: '2023-04-06T12:51:00.000+07:00',
      content: 'Môn: Toán\nHình thức: Offline\nĐịa điểm: 381 Phan Văn Trị, Gò Vấp, Thành phố Hồ Chí Minh\nYêu cầu: Sinh viên nữ, khối ngành A, điểm thi thpt từ 27 trở lên\nLương: 2.800.000 / tháng',
      status: {
        'Đã liên hệ': [1, 2, 3],
        link: '/',
        assign: [],
      },
      ownId: 1
    }
  } = props;
  const {registerPost, currentUser, users, acceptPost, onClosePost} = useContext(AppContext);
  const [show, setShow] = useState(false);
  const currentUserData = users.filter((u) => u.id === currentUser)[0];
  const postUserData = users.filter((u) => u.id === post.ownId)[0];


  return (
    <div className="bg-white flex flex-col gap-6 p-9 rounded-[20px] border pr-20 w-[700px]">
      <div className='flex flex-row w-full justify-between items-center px-4  border-b border-b-slate-400 pb-6 '>
        <div className="flex flex-row justify-start items-start gap-5 ">
          <Avatar onClick = {() => navigate('/personalpage/?id='+post.ownId,{state: true})}/>
          <div className='flex flex-row w-full justify-between px-[15px] items-center'>
            <div className="flex flex-col justify-between items-start">
              { postUserData.userName}
              <div className="flex flex-row justify-between items-center text-xs">
                { `${Math.floor((Date.now() - Date.parse(post.time)) / 1000 / 3600)} giờ`}
                <img src="/static/earth.png" alt="" />
              </div>
            </div>
            <div className="flex flex-row justify-between items-start">
              {/* {
              currentUserData && currentUserData['Vai trò'] === 'Phụ huynh'
            &&
            <div className="w-[91px] h-[34px] rounded-[6px] bg-[#1F7BF2] p-[8px] flex flex-row justify-center items-center text-[12px]">
            1 Liên hệ mới
            </div>
            } */}

            </div>
          </div>
        </div>
        {
          post.ownId === currentUser && post.status.done === false
            ?
            <div
              className='rounded-[10px] bg-black/[0.1] p-2'
              onClick={() => {onClosePost(post.postId);}}
            >
              Đóng 
            </div>
            :
            post.status.done  
              ?
              <div
                className='rounded-[10px] bg-black/[0.1] p-2'
              >
              Đã Đóng 
              </div>
              :
              null
        } 
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
        {currentUserData && currentUserData['Vai trò'] !== 'Phụ huynh' && <a onClick={() => {registerPost(post.postId, currentUser);}}>
          {
            (currentUserData && currentUserData['Vai trò'] !== 'Phụ huynh' ) &&  (
              post.status.assign.includes(currentUser)
                ?
                <div
                  className="flex justify-center items-center w-[116px] h-[39px] rounded-[10px] bg-[rgb(15,14,14)]/[0.08] hover:cursor-pointer"
                >
              Đã chấp nhận
                </div>
                :
                post.status.assign.length !== 0
                  ?
                  <div
                    className="flex justify-center items-center w-[116px] h-[39px] rounded-[10px] bg-[rgb(15,14,14)]/[0.08] hover:cursor-pointer"
                  >
                  Đã đóng
                  </div>
                  :
                  post.status['Đã liên hệ'].includes(currentUser) === true
                    ?
                    <div
                      className="flex justify-center items-center w-[116px] h-[39px] rounded-[10px] bg-[rgb(15,14,14)]/[0.08] hover:cursor-pointer"
                    >
                Đã đăng ký
                    </div>
                    :
                    <div
                      className="flex justify-center items-center w-[116px] h-[39px] rounded-[10px] bg-[rgb(15,14,14)]/[0.08] hover:cursor-pointer"
                      onClick={() => {
                        registerPost(post.postId, currentUser);
                      }}
                    >
                      {
                        post.status.assign.includes(currentUser)
                      }
                Liên hệ ngay
                    </div>
            )
          }
          {/* <div className="flex justify-center items-center w-[116px] h-[39px] rounded-[10px] bg-[rgb(15,14,14)]/[0.08] hover:cursor-pointer">Liên hệ ngay </div> */}
        </a>}
      </div>
      {show && <ShowModal
        content={users.filter((u)=> post.status['Đã liên hệ'].includes(u.id))}
        onClose = {()=> {setShow(false);}} 
        onAssign ={ currentUserData && currentUserData['Vai trò'] === 'Phụ huynh' && post.ownId === currentUser ? (id) => {acceptPost(post.postId, id);} :  null}
      />}
    </div>
  );
}
export default TutorPost;
