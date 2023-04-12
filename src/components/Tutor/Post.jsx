import React, { useContext, useState } from 'react';
import Avatar from '../Avatar';
import ShowModal from '../Modal';
import { AppContext } from '../../context/AppContext';
import { navigate } from 'gatsby';
const Post = (props) => {
  const { users, currentUser, registerPost, currentUserData } =
    useContext(AppContext);
  console.log(currentUserData);
  const {
    post = {
      username: 'Hnimtadd',
      time: '2023-04-06T12:51:00.000+07:00',
      content:
        'Môn: Toán\nHình thức: Offline\nĐịa điểm: 381 Phan Văn Trị, Gò Vấp, Thành phố Hồ Chí Minh\nYêu cầu: Sinh viên nữ, khối ngành A, điểm thi thpt từ 27 trở lên\nLương: 2.800.000 / tháng',
      status: {
        'Đã liên hệ': [],
        link: '',
      },
    },
  } = props;
  const getTime = (time) => {
    if (time < 1) {
      return Math.floor(time * 60) + ' phút';
    }
    if (time < 24) {
      return Math.floor(time) + 'giờ';
    } else {
      return Math.floor(time / 24.0) + ' ngày';
    }
  };
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-[15px] py-6 px-[45px] rounded-[20px] border bg-white">
      <div className="flex flex-row justify-start items-start gap-5 border-b border-b-slate-400 pb-4">
        <Avatar
          width="50px"
          height="50px"
          onClick={() => {
            navigate('/personalpage/?id=' + post.ownId);
          }}
        ></Avatar>
        <div className="flex flex-col justify-between items-start gap-0">
          <div className="font-bold text-[18px]">{post.username}</div>
          <div className="flex flex-row justify-between items-center text-[13px]">
            <div className="flex flex-col justify-center items-center  h-full">
              {getTime((Date.now() - Date.parse(post.time)) / 1000 / 3600)}
            </div>
            <img className="" src="/static/earth.png" alt=""></img>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 border-b border-b-slate-400 pb-6">
        {post.content.split('\n').map((key, index) => {
          let row = key.split(':');
          return (
            <div
              key={index}
              className="flex flex-row justify-between items-center"
            >
              <div className="flex-1 font-[700]">{row[0]}</div>
              <div className="text-left flex-[2]">{row[1]}</div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-between items-center">
        <div
          className="flex justify-center items-center w-[116px] h-[39px] rounded-[10px] bg-[rgb(15,14,14)]/[0.08] hover:cursor-pointer"
          onClick={() => setShow(true)}
        >
          Đã liên hệ:
          {' ' + post.status['Đã liên hệ'].length}
        </div>
        {currentUserData['Vai trò'] !== 'Phụ huynh' && (
          <div
            className="flex justify-center items-center w-[116px] h-[39px] rounded-[10px] bg-[rgb(15,14,14)]/[0.08] hover:cursor-pointer"
            onClick={() => {
              registerPost(post.postId, currentUser);
            }}
          >
            Liên hệ ngay
          </div>
        )}
      </div>
      {show && (
        <ShowModal
          content={users.filter((u) =>
            post.status['Đã liên hệ'].includes(u.id)
          )}
          onClose={() => {
            setShow(false);
          }}
        />
      )}
    </div>
  );
};
export default Post;
