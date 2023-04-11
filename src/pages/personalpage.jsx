import React, { useContext, useEffect,useState } from 'react';
import { AccountAvatar, AccountInfo } from '../components/Account';
import { TutorInfor, TutorPost } from '../components/Tutor';
import FullScreen from '../layouts/fullScreenLayout';
import { AppContext } from '../context/AppContext';
import { navigate } from 'gatsby';
const personalPage = () => {
  const {users, posts} = useContext(AppContext);
  // const user = {
  //   link: '',
  //   'Tên đầy đủ':'Giao vien 1',
  //   'Email':'hnimtađ@hnimtadd.com',
  //   'Số điện thoại': '0393939939',
  //   'Vai trò': 'Sinh viên',
  //   'Địa chỉ': 'KTX khu A, đại học quốc gia, Hồ Chí Minh'
  // };
  
  const [user, setUser] = useState({
    link: '',
    id: 3,
    userName:'giaovien2',
    'Tên đầy đủ':'Giao vien 2',
    'Email':'giaovien2@hnimtadd.com',
    'Số điện thoại': '01234564',
    'Vai trò': 'Sinh viên',
    'Địa chỉ': 'KTX khu A, đại học quốc gia, Hồ Chí Minh',
    att: {
      'Đánh giá': '✴✴✴✴✴',
      'Giải thưỏng': 'Gia sư xuất sắc tháng 7',
    },
    spec:  {
      'Môn': 'Lý, Hóa',
      'Lớp': '11, 12',
      'Hình thức': 'Offline/Online',
    }
  });
  useEffect(()=> {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');
    if( id === null) {
      navigate('/loginpage');
    }
    else {
      setUser(users.filter((u)=>u.id === parseInt(id))[0]);
    }
  });
  return(
    <FullScreen>
      <div className='h-full w-full flex flex-row justify-between items-center'>
        <div className='flex flex-col h-fit justify-center items-center gap-[20px] p-[35px] w-[500px] '>
          <AccountAvatar info = {user}/>
          <AccountInfo info = {user}/>
        </div>
        {user['Vai trò'] === 'Phụ huynh'
          ?
          <div className=' flex-1 flex flex-col justify-center items-center w-[cacl(100%-800px)] gap-[25px] p-[35px] h-full '>
            <div className='flex flex-row items-center justify-center font-bold text-[20px] w-full'>Thông tin bài viết</div>
            <div className='flex flex-col justify-start items-center overflow-scroll no-scrollbar gap-[20px] w-full h-full'>
              {posts.filter((post) => post.ownId   === user.id).map((post, index) => <TutorPost key={index} post={post}/>)}
            </div>
          </div>
          :
          <div className=' flex-1 flex flex-col justify-start items-center w-[cacl(100%-800px)] gap-[25px] p-[35px] h-full '>
            <div className='flex flex-row items-center justify-center font-bold text-[20px] w-full'>Thông tin gia sư</div>
            <TutorInfor user={user}/>
          </div>
        }
      </div>
    </FullScreen>
  );
};

export default personalPage;