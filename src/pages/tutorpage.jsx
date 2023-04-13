import React, { useContext, useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import MainLayout from '../layouts/mainLayout';
import { TutorInfor } from '../components/Tutor';
import { ContentCard, ImgCard, TutorCard } from '../components/Card';
import { FilterBar } from '../components/Post';
import Post from '../components/Tutor/Post';
import { AppContext } from '../context/AppContext';
import { CallImg, Loupemg, NewImg } from '../assets';
import { LeftBanner, RightBanner } from '../components/banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import Teaching from '../components/teaching';
function TutorPage() {
  const { posts, postLoading, postError, currentUserData } =
    useContext(AppContext);
  const [userData, setUserData] = useState({
    link: '',
    id: 2,
    'Tên đầy đủ': 'Lê Quốc Hưng',
    Email: 'giaovien1@hnimtadd.com',
    'Số điện thoại': '01234151435',
    'Vai trò': 'Sinh viên',
    'Địa chỉ': 'KTX khu A, đại học quốc gia, Hồ Chí Minh',
    att: {
      'Đánh giá': '✴✴✴✴✴',
      'Giải thưỏng': 'Gia sư xuất sắc tháng 10',
    },
    spec: {
      Môn: 'Toán, Lý, Hóa',
      Lớp: '10, 11, 12',
      'Hình thức': 'Offline/Online',
    },
  });
  // control current page
  const [pageState, setPageState] = useState(0);
  useEffect(() => {
    setUserData(currentUserData);
  }, [currentUserData]);
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
    {
      link: '',
      content: 'Trợ giúp',
      style: {
        fontWeight: '700',
        color: 'black',
      },
    },
    {
      link: '',
      content: 'Nhật kí báo cáo',
      style: {
        fontWeight: '700',
        color: 'black',
      },
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

  const currentDaySche = [
    {
      link: '',
      content: 'Ca 7:00 - 8:30',
      style: {
        fontWeight: '700',
        color: 'black',
      },
    },
    {
      link: '',
      content: 'Toán 10',
    },
    {
      link: '',
      content: 'Danh sách thành viên',
    },
    {
      link: '',
      content: 'Ca 18:00 - 20:00',
      style: {
        fontWeight: '700',
        color: 'black',
      },
    },
    {
      link: '',
      content: 'Toán 12',
    },
    {
      link: '',
      content: 'Danh sách thành viên',
    },
  ];

  const weekSche = [
    {
      link: '',
      content: 'Thứ 2',
      style: {
        fontWeight: '700',
        color: 'black',
      },
    },
    {
      link: '',
      content: ' Toán 11 ( 7:00 - 8:30 )',
    },
    {
      link: '',
      content: ' Toán 10 ( 13:00 - 15:00 )',
    },

    {
      link: '',
      content: 'Thứ 4',
      style: {
        fontWeight: '700',
        color: 'black',
      },
    },
    {
      link: '',
      content: ' Toán 11 ( 7:00 - 8:30 )',
    },
    {
      link: '',
      content: ' Toán 10 ( 13:00 - 15:00 )',
    },

    {
      link: '',
      content: 'Thứ 6',
      style: {
        fontWeight: '700',
        color: 'black',
      },
    },
    {
      link: '',
      content: ' Toán 11 ( 7:00 - 8:30 )',
    },
    {
      link: '',
      content: ' Toán 10 ( 13:00 - 15:00 )',
    },
    {
      link: '',
      content: 'Thứ 7',
      style: {
        fontWeight: '700',
        color: 'black',
      },
    },
    {
      link: '',
      content: ' Toán 11 ( 7:00 - 8:30 )',
    },
    {
      link: '',
      content: ' Toán 10 ( 13:00 - 15:00 )',
    },
  ];

  const teachingContent = [
    {
      link: '',
      content: 'Toán 12 - buổi 3',
      style: {
        fontWeight: '700',
        color: 'black',
        fontSize: '20px',
      },
    },
    {
      link: '',
      content:
        'Làm trắc nghiệm ôn tập phép cộng / trừ số phức - làm trắc nghiệm',
    },
    {
      link: '',
      content: ' Giới thiệu các khái niệm cơ bản phép nhân / chia số phức',
    },
    {
      link: '',
      content: ' Làm bài tập ví dụ',
    },
    {
      link: '',
      content: ' Ôn tập tổng kết bài học',
    },

    {
      link: '',
      content: 'Toán 12 - buổi 4',
      style: {
        fontWeight: '700',
        color: 'black',
        fontSize: '20px',
      },
    },
    {
      link: '',
      content:
        'Làm trắc nghiệm ôn tập phép cộng / trừ số phức - làm trắc nghiệm',
    },
    {
      link: '',
      content: ' Giới thiệu các khái niệm cơ bản phép nhân / chia số phức',
    },
    {
      link: '',
      content: ' Làm bài tập ví dụ',
    },
    {
      link: '',
      content: ' Ôn tập tổng kết bài học',
    },

    {
      link: '',
      content: 'Toán 12 - buổi 5',
      style: {
        fontWeight: '700',
        color: 'black',
        fontSize: '20px',
      },
    },
    {
      link: '',
      content:
        'Làm trắc nghiệm ôn tập phép cộng / trừ số phức - làm trắc nghiệm',
    },
    {
      link: '',
      content: ' Giới thiệu các khái niệm cơ bản phép nhân / chia số phức',
    },
    {
      link: '',
      content: ' Làm bài tập ví dụ',
    },
    {
      link: '',
      content: ' Ôn tập tổng kết bài học',
    },
  ];

  const [pagePosts, setPagePosts] = useState([]);
  useEffect(() => {
    setPagePosts(posts);
  }, [posts]);
  const toptutors = [
    {
      userName: 'Nguyễn Đình Minh Đạt',
      userId: 999,
      imgLink: '/static/avatar.png',
      content: {
        'Đánh giá': '✴✴✴✴✴✴',
        'Chuyên môn': 'Toán, Hóa',
        'Cấp dạy': 'Lớp 10, 11, 12',
      },
    },
    {
      userName: 'Nguyễn Đình Minh Đạt',
      userId: 999,
      imgLink: '/static/avatar.png',
      content: {
        'Đánh giá': '✴✴✴✴✴✴',
        'Chuyên môn': 'Toán, Hóa',
        'Cấp dạy': 'Lớp 10, 11, 12',
      },
    },
    {
      userName: 'Nguyễn Đình Minh Đạt',
      userId: 999,
      imgLink: '/static/avatar.png',
      content: {
        'Đánh giá': '✴✴✴✴✴✴',
        'Chuyên môn': 'Toán, Hóa',
        'Cấp dạy': 'Lớp 10, 11, 12',
      },
    },
    {
      userName: 'Nguyễn Đình Minh Đạt',
      userId: 999,
      imgLink: '/static/avatar.png',
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
    <div>
      {pageState !== 1 && (
        <MainLayout
          isTutor={1}
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
                  icon={<img src={NewImg}></img>}
                  color={'#D1EEDB'}
                  header={'Đăng ký làm gia sư'}
                  items={items3}
                ></ContentCard>
              </div>

              <div className="w-full h-fit flex flex-col justify-start items-center  rounded-[20px] border bg-white">
                <ContentCard
                  icon={<img src={CallImg} />}
                  color={'#D1EEDB'}
                  header={'Hỗ trợ nhanh'}
                  items={items2}
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
          pageState={pageState}
          onChangePageState={setPageState}
        >
          <div className="flex flex-col gap-[20px]">
            <TutorInfor user={userData} />
            <FilterBar />
            {postLoading ? (
              'loading'
            ) : postError ? (
              'error'
            ) : (
              <div className="flex flex-col gap-[15px]">
                {pagePosts.map((post, index) => (
                  <Post key={index} post={post} />
                ))}
              </div>
            )}
          </div>
        </MainLayout>
      )}
      {pageState === 1 && (
        <MainLayout
          isTutor={1}
          pageState={pageState}
          onChangePageState={setPageState}
          leftSide={
            <SideBar>
              <div className="w-full h-fit flex flex-col justify-start items-center  rounded-[20px] border bg-white">
                <ContentCard
                  icon={<img src={Loupemg}></img>}
                  color={'#D1EEDB'}
                  header={'Tiết học hôm nay'}
                  items={currentDaySche}
                ></ContentCard>
                <ContentCard
                  icon={<img src={CallImg} />}
                  color={'#D1EEDB'}
                  header={'Lịch trình dạy '}
                  items={weekSche}
                ></ContentCard>
              </div>
            </SideBar>
          }
          rightSide={
            <SideBar>
              <div className="w-full h-fit flex flex-col justify-start items-center  rounded-[20px] border bg-white">
                <ContentCard
                  color={'#3699ff'}
                  header={'Chương trình giảng dạy'}
                  items={teachingContent}
                  textColor="white"
                  icon={<FontAwesomeIcon icon={faFolder} />}
                ></ContentCard>
              </div>
            </SideBar>
          }
        >
          <Teaching />
        </MainLayout>
      )}
    </div>
  );
}

export default TutorPage;

export function Head() {
  return <title>Home Page</title>;
}
