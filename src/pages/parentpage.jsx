import React, { useState, useContext, useEffect } from 'react';
import SideBar from '../components/SideBar';
import MainLayout from '../layouts/mainLayout';
import { ContentCard, ImgCard, TutorCard } from '../components/Card';
import Post from '../components/Tutor/Post';
import { UserPostBar } from '../components/User';
import { AppContext } from '../context/AppContext';
import PostModal from '../components/PostModal';
import { navigate } from 'gatsby';
import { CallImg, Loupemg, NewImg } from '../assets';
import { LeftBanner, RightBanner } from '../components/banner';

function parentPage() {
  const {
    posts,
    postLoading,
    postError,
    postPost,
    currentUserData,
    currentUser,
  } = useContext(AppContext);
  const [showPost, setShowPost] = useState(false);
  const onClose = () => {
    setShowPost(false);
  };
  const [user, setUser] = useState({});
  useEffect(() => {
    if (currentUser === -1) {
      navigate('/loginpage');
    } else {
      setUser(currentUserData);
    }
  }, [currentUserData]);
  const [cposts, setPost] = useState([]);
  useEffect(() => {
    setPost(posts);
  }, [posts]);
  // const posts = [{
  //   username: 'Hnimtadd',
  //   time: '2023-04-06T12:51:00.000+07:00',
  //   content: {
  //     'Môn': 'Toán',
  //     'Hình thức': 'Offline',
  //     'Địa điểm': '381 Phan Văn Trị, Gò Vấp, Thành phố Hồ Chí Minh',
  //     'Yêu cầu': 'Sinh viên nữ, khối ngành A, điểm thi thpt từ 27 trở lên',
  //     'Lương': '2.800.000 / tháng'
  //   },
  //   status: {
  //     'Đã liên hệ': 5,
  //     link: '',
  //   },
  // },
  // {
  //   username: 'Hnimtadd',
  //   time: '2023-04-06T12:51:00.000+07:00',
  //   content: {
  //     'Môn': 'Toán',
  //     'Hình thức': 'Offline',
  //     'Địa điểm': '381 Phan Văn Trị, Gò Vấp, Thành phố Hồ Chí Minh',
  //     'Yêu cầu': 'Sinh viên nữ, khối ngành A, điểm thi thpt từ 27 trở lên',
  //     'Lương': '2.800.000 / tháng'
  //   },
  //   status: {
  //     'Đã liên hệ': 5,
  //     link: '',
  //   },
  // },
  // {
  //   username: 'Hnimtadd',
  //   time: '2023-04-06T12:51:00.000+07:00',
  //   content: {
  //     'Môn': 'Toán',
  //     'Hình thức': 'Offline',
  //     'Địa điểm': '381 Phan Văn Trị, Gò Vấp, Thành phố Hồ Chí Minh',
  //     'Yêu cầu': 'Sinh viên nữ, khối ngành A, điểm thi thpt từ 27 trở lên',
  //     'Lương': '2.800.000 / tháng'
  //   },
  //   status: {
  //     'Đã liên hệ': 5,
  //     link: '',
  //   },
  // },
  // {
  //   username: 'Hnimtadd',
  //   time: '2023-04-06T12:51:00.000+07:00',
  //   content: {
  //     'Môn': 'Toán',
  //     'Hình thức': 'Offline',
  //     'Địa điểm': '381 Phan Văn Trị, Gò Vấp, Thành phố Hồ Chí Minh',
  //     'Yêu cầu': 'Sinh viên nữ, khối ngành A, điểm thi thpt từ 27 trở lên',
  //     'Lương': '2.800.000 / tháng'
  //   },
  //   status: {
  //     'Đã liên hệ': 5,
  //     link: '',
  //   },
  // }];
  // useEffect(()=>{
  //   setPost(appData.posts);
  // },[appData.posts]);
  const items = [
    {
      link: '',
      content: 'Gia sư Thủ Đức',
    },
    {
      link: '',
      content: 'Gia sư Tiền Giang',
    },
    {
      link: '',
      content: 'Gia sư Hà Nội',
    },
    {
      link: '',
      content: 'Gia sư Quận 10',
    },
    {
      link: '',
      content: 'Gia sư Thừa Thiên Huế',
    },
    {
      link: '',
      content: 'Gia sư Đà Nẵng',
    },
  ];
  const items2 = [
    {
      link: '',
      content: 'Phụ huynh - Học sinh',
      style: {
        fontWeight: '700',
        color: 'black',
      },
    },
    {
      link: '',
      content: '0123.456.789',
    },
    {
      link: '',
      content: '0123.456.789',
    },
    {
      link: '',
      content: 'Giáo viên - Sinh viên',
      style: {
        fontWeight: '700',
        color: 'black',
      },
    },
    {
      link: '',
      content: '0123.456.789',
    },
    {
      link: '',
      content: '0123.456.789',
    },
  ];
  const items3 = [
    {
      link: '',
      content: 'Gia sư Thủ Đức',
    },
    {
      link: '',
      content: 'Gia sư Tiền Giang',
    },
    {
      link: '',
      content: 'Gia sư Hà Nội',
    },
    {
      link: '',
      content: 'Gia sư Quận 10',
    },
    {
      link: '',
      content: 'Gia sư Thừa Thiên Huế',
    },
    {
      link: '',
      content: 'Gia sư Đà Nẵng',
    },
  ];

  const toptutors = [
    {
      userName: 'Nguyễn Đình Minh Đạt',
      userId: 999,
      imgLink: './../assets/avatar.png',
      content: {
        'Đánh giá': '✴✴✴✴✴✴',
        'Chuyên môn': 'Toán, Hóa',
        'Cấp dạy': 'Lớp 10, 11, 12',
      },
    },
    {
      userName: 'Nguyễn Đình Minh Đạt',
      userId: 999,
      imgLink: './../assets/avatar.png',
      content: {
        'Đánh giá': '✴✴✴✴✴✴',
        'Chuyên môn': 'Toán, Hóa',
        'Cấp dạy': 'Lớp 10, 11, 12',
      },
    },
    {
      userName: 'Nguyễn Đình Minh Đạt',
      userId: 999,
      imgLink: './../assets/avatar.png',
      content: {
        'Đánh giá': '✴✴✴✴✴✴',
        'Chuyên môn': 'Toán, Hóa',
        'Cấp dạy': 'Lớp 10, 11, 12',
      },
    },
    {
      userName: 'Nguyễn Đình Minh Đạt',
      userId: 999,
      imgLink: './../assets/avatar.png',
      content: {
        'Đánh giá': '✴✴✴✴✴✴',
        'Chuyên môn': 'Toán, Hóa',
        'Cấp dạy': 'Lớp 10, 11, 12',
      },
    },
  ];
  const highlightTutors = [
    {
      header: 'Tìm gia sư tiếng Nhật tại nhà',
      imgLink:
        'https://giasudatviet.com/uploads/tim/timthumb.php?src=https://giasudatviet.com/uploads/news/anh-tin-tuc-6.jpg&w=132&h=87&zc=1&q=100',
    },
    {
      header: 'Tuyển gia sư cho trung tâm HnimTad quận 10',
      imgLink:
        'https://giasudatviet.com/uploads/tim/timthumb.php?src=https://giasudatviet.com/uploads/news/anh-tin-tuc-2.jpg&w=132&h=87&zc=1&q=100',
    },
    {
      header: 'Các dấu hiệu nhận biết trung tâm gia sư lừa đảo',
      imgLink:
        'https://giasudatviet.com/uploads/tim/timthumb.php?src=https://giasudatviet.com/uploads/news/canh_bao_gia_su_lua_dao.jpg&w=132&h=87&zc=1&q=100',
    },
  ];
  return (
    <MainLayout
      isTutor={0}
      leftSide={
        <SideBar>
          <div className="w-full h-fit flex flex-col justify-start items-center  rounded-[20px] border bg-white">
            <ContentCard
              icon={<img src={Loupemg}></img>}
              color={'#D1EEDB'}
              header={'Tìm kiếm gia sư'}
              items={items}
            ></ContentCard>
            <ContentCard
              icon={<img src={CallImg} />}
              color={'#D1EEDB'}
              header={'Hỗ trợ nhanh'}
              items={items2}
            ></ContentCard>
          </div>
          <div className="w-full h-fit flex flex-col justify-start items-center  rounded-[20px] border bg-white">
            <ContentCard
              icon={<img src={NewImg}></img>}
              color={'#D1EEDB'}
              header={'Đăng ký làm gia sư'}
              items={items3}
            ></ContentCard>
          </div>
          <LeftBanner />
        </SideBar>
      }
      rightSide={
        <SideBar>
          <div className="w-full flex flex-col justify-start items-center  rounded-[20px] border bg-white h-[54%] mt-[10px]">
            <div className="rounded-[20px] w-full py-3 flex justify-center items-center bg-[#3699FF] text-white text-xl font-semibold mb-4">
              Gia sư tiêu biểu
            </div>
            <div className="flex-1 h-[650px] overflow-scroll no-scrollbar">
              {toptutors.map((item, index) => (
                <TutorCard key={index} info={item} />
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-center  rounded-[20px] border bg-white static h-[90%] mt-[10px]">
            <div className="rounded-[20px] w-full py-3 flex justify-center items-center bg-[#3699FF] text-white text-xl font-semibold mb-4">
              Thông tin nổi bật
            </div>
            <div className="flex-1 h-[650px] overflow-scroll no-scrollbar">
              {highlightTutors.map((item, index) => (
                <ImgCard key={index} info={item} />
              ))}
            </div>
          </div>
          <RightBanner />
        </SideBar>
      }
    >
      <div className="flex flex-col gap-[30px] min-w-[500px]">
        <UserPostBar user={user} onFocus={() => setShowPost(true)} />
        <div></div>
        <div className="flex flex-col gap-[15px]">
          {postLoading ? (
            <div>loadding</div>
          ) : postError ? (
            <div>Eroor {postError}</div>
          ) : (
            cposts.map((post, index) => <Post key={index} post={post} />)
          )}
        </div>
      </div>
      {showPost && <PostModal onClose={onClose} onPost={postPost} />}
    </MainLayout>
  );
}

export default parentPage;

export function Head() {
  return <title>Home Page</title>;
}
