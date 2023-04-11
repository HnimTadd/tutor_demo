import React, { useContext, useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import MainLayout from '../layouts/mainLayout';
import {TutorInfor} from '../components/Tutor';
import { ContentCard, ImgCard, TutorCard } from '../components/Card';
import { FilterBar } from '../components/Post';
import Post from '../components/Tutor/Post';
import { AppContext } from '../context/AppContext';
import { CallImg, Loupemg, NewImg } from '../assets';
function TutorPage() {
  const {posts, postLoading, postError, currentUserData} = useContext(AppContext);
  const [userData, setUserData] = useState(
    {
      link: '',
      id: 2,
      'Tên đầy đủ':'Giao vien 1',
      'Email':'giaovien1@hnimtadd.com',
      'Số điện thoại': '01234151435',
      'Vai trò': 'Sinh viên',
      'Địa chỉ': 'KTX khu A, đại học quốc gia, Hồ Chí Minh',
      att: {
        'Đánh giá': '✴✴✴✴✴',
        'Giải thưỏng': 'Gia sư xuất sắc tháng 10',
      },
      spec:  {
        'Môn': 'Toán, Lý, Hóa',
        'Lớp': '10, 11, 12',
        'Hình thức': 'Offline/Online',
      }
    }
  );
  useEffect(()=>{
    setUserData(currentUserData);
  },[currentUserData]);
  const items = [
    {
      'link': '',
      'content': 'Gia sư Thủ Đức'
    },    {
      'link': '',
      'content': 'Gia sư Tiền Giang'
    },    {
      'link': '',
      'content': 'Gia sư Hà Nội'
    },    {
      'link': '',
      'content': 'Gia sư Quận 10'
    },    {
      'link': '',
      'content': 'Gia sư Thừa Thiên Huế'
    },    {
      'link': '',
      'content': 'Gia sư Đà Nẵng'
    }
  ];
  const items2 = [
    {
      'link': '',
      'content': 'Phụ huynh - Học sinh',
      style : {
        fontWeight: '700',
        color: 'black'
      }
    },
    {
      'link': '',
      'content': '0123.456.789'
    },
    {
      'link': '',
      'content': '0123.456.789'
    },  
    {
      'link': '',
      'content': 'Giáo viên - Sinh viên',
      style : {
        fontWeight: '700',
        color: 'black'
      }
    },
    {
      'link': '',
      'content': '0123.456.789'
    },
    {
      'link': '',
      'content': '0123.456.789'
    },
  ];
  const items3 = [
    {
      'link': '',
      'content': 'Gia sư Thủ Đức'
    },    {
      'link': '',
      'content': 'Gia sư Tiền Giang'
    },    {
      'link': '',
      'content': 'Gia sư Hà Nội'
    },    {
      'link': '',
      'content': 'Gia sư Quận 10'
    },    {
      'link': '',
      'content': 'Gia sư Thừa Thiên Huế'
    },    {
      'link': '',
      'content': 'Gia sư Đà Nẵng'
    }
  ];
  const [pagePosts, setPagePosts] = useState([]);
  useEffect(() => {
    setPagePosts(posts);
  }, [posts]);
  const toptutors = [
    {
      userName: 'Nguyễn Đình Minh Đạt',
      userId: 999,
      imgLink : '/static/avatar.png',
      content: {
        'Đánh giá': '✴✴✴✴✴✴',
        'Chuyên môn': 'Toán, Hóa',
        'Cấp dạy': 'Lớp 10, 11, 12'
      }
    },
    {
      userName: 'Nguyễn Đình Minh Đạt',
      userId: 999,
      imgLink : '/static/avatar.png',
      content: {
        'Đánh giá': '✴✴✴✴✴✴',
        'Chuyên môn': 'Toán, Hóa',
        'Cấp dạy': 'Lớp 10, 11, 12'
      }
    },
    {
      userName: 'Nguyễn Đình Minh Đạt',
      userId: 999,
      imgLink : '/static/avatar.png',
      content: {
        'Đánh giá': '✴✴✴✴✴✴',
        'Chuyên môn': 'Toán, Hóa',
        'Cấp dạy': 'Lớp 10, 11, 12'
      }
    },
    {
      userName: 'Nguyễn Đình Minh Đạt',
      userId: 999,
      imgLink : '/static/avatar.png',
      content: {
        'Đánh giá': '✴✴✴✴✴✴',
        'Chuyên môn': 'Toán, Hóa',
        'Cấp dạy': 'Lớp 10, 11, 12'
      }
    },
  ];
  const highlightTutors = [
    {
      header : 'Tìm gia sư tiếng Nhật tại nhà',
      imgLink : '/static/avatar.png'
    },
    {
      header : 'Tìm gia sư toán 11 tại Bình Thạnh',
      imgLink : '/static/earth.png'
    },
    {
      header : 'Tìm gia sư lập trình tại Gò Vấp',
      imgLink : '/static/earth.png'
    }
  ];
  return (
    <MainLayout
      leftSide={
        <SideBar>
          <div className='w-full h-fit flex flex-col justify-start items-center  rounded-[20px] border bg-white'>
            <ContentCard icon={<img src={Loupemg}></img>} color={'#D1EEDB'} header={'Tìm kiếm gia sư'} items={items}></ContentCard>
            <ContentCard icon={<img src={CallImg}/>} color={'#D1EEDB'} header={'Hỗ trợ nhanh'} items={items2}></ContentCard>
          </div>
          <div className='w-full h-fit flex flex-col justify-start items-center  rounded-[20px] border bg-white'>
            <ContentCard icon={<img src={NewImg}></img>} color={'#D1EEDB'} header={'Đăng ký làm gia sư'} items={items3}></ContentCard>
          </div>
        </SideBar>
      }
      rightSide={
        <SideBar>
          <div className='w-full flex flex-col justify-start items-center  rounded-[20px] border bg-white absolute top-0 h-[50%] m-[10px]'>
            <div className='rounded-[20px] w-full h-[40px] flex justify-center items-center bg-[#3699FF] text-white'>Gia sư tiêu biểu</div>
            <div className='flex-1 h-[600px] overflow-scroll no-scrollbar'>
              {toptutors.map((item, index)=> <TutorCard key = {index} info = {item}/>)}
            </div>
          </div>
          <div className='w-full flex flex-col justify-start items-center  rounded-[20px] border bg-white absolute bottom-0 h-[45%] m-[10px]'>
            <div className='rounded-[20px] w-full h-[40px] flex justify-center items-center bg-[#3699FF] text-white'>Gia sư nổi bật</div>
            <div className  ='flex-1 overflow-scroll no-scrollbar'>
              {highlightTutors.map((item, index)=> <ImgCard key ={index} info ={item}/>)}
            </div>
          </div>
        </SideBar>
      }
    >
      <div className='flex flex-col gap-[20px]'>
        <TutorInfor user={userData}/>
        <FilterBar/>
        {
          postLoading
            ?
            'loading'
            :
            postError
              ?
              'error'
              :
              <div className='flex flex-col gap-[15px]'>
                {pagePosts.map((post,index) => (<Post key={index} post={post}/>))}
              </div>
        }
      </div>
    </MainLayout>
  );
}

export default TutorPage;

export function Head() {
  return <title>Home Page</title>;
}
