import React,{ createContext, useEffect } from 'react';
import { useState } from 'react';


export const AppContext = createContext({
  posts: [],
  setPost: () => {},
  postLoading: true,
  setPostLoading: () => {},
  postError: null,
  setPostError: () => {},
  registedTeacher: [],
  setRegistedTeacher: () => {},
  users: [],
  currentUser: 2,
  setCurrentUser: ()=> {},
  registerPost : () => {},
  postPost : () => {},
  currentUserData: {},
  setCurrentUserData: () => {}

});

export const AppProvider = ({children}) => {
  const [posts, setPost] = useState([{
    postId:0,
    username: 'Hnimtadd',
    time: '2023-04-06T12:51:00.000+07:00',
    content: 'Môn: Toán\nHình thức: Offline\nĐịa điểm: 381 Phan Văn Trị, Gò Vấp, Thành phố Hồ Chí Minh\nYêu cầu: Sinh viên nữ, khối ngành A, điểm thi thpt từ 27 trở lên\nLương: 2.800.000 / tháng',
    status: {
      'Đã liên hệ': [2],
      link: '/',
    },
    ownId: 1
  },
  {
    postId:1,
    username: 'Hnimtadd',
    time: '2023-04-06T12:51:00.000+07:00',
    content: 'Môn: Toán\nHình thức: Offline\nĐịa điểm: 381 Phan Văn Trị, Gò Vấp, Thành phố Hồ Chí Minh\nYêu cầu: Sinh viên nữ, khối ngành A, điểm thi thpt từ 27 trở lên\nLương: 2.800.000 / tháng',
    status: {
      'Đã liên hệ': [2,3],
      link: '/',
    },
    ownId: 1
  },
  {
    postId:2,
    username: 'Hnimtadd',
    time: '2023-04-06T12:51:00.000+07:00',
    content: 'Môn: Toán\nHình thức: Offline\nĐịa điểm: 381 Phan Văn Trị, Gò Vấp, Thành phố Hồ Chí Minh\nYêu cầu: Sinh viên nữ, khối ngành A, điểm thi thpt từ 27 trở lên\nLương: 2.800.000 / tháng',
    status: {
      'Đã liên hệ': [2],
      link: '/',
    },
    ownId: 1
  },{
    postId:3,
    username: 'Hnimtadd',
    time: '2023-04-06T12:51:00.000+07:00',
    content: 'Môn: Toán\nHình thức: Offline\nĐịa điểm: 381 Phan Văn Trị, Gò Vấp, Thành phố Hồ Chí Minh\nYêu cầu: Sinh viên nữ, khối ngành A, điểm thi thpt từ 27 trở lên\nLương: 2.800.000 / tháng',
    status: {
      'Đã liên hệ': [2,3],
      link: '/',
    },
    ownId: 1
  },{
    postId:4,
    username: 'Hnimtadd',
    time: '2023-04-06T12:51:00.000+07:00',
    content: 'Môn: Toán\nHình thức: Offline\nĐịa điểm: 381 Phan Văn Trị, Gò Vấp, Thành phố Hồ Chí Minh\nYêu cầu: Sinh viên nữ, khối ngành A, điểm thi thpt từ 27 trở lên\nLương: 2.800.000 / tháng',
    status: {
      'Đã liên hệ': [],
      link: '/',
    },
    ownId: 1
  },
  {
    postId:5,
    username: 'Hnimtadd',
    time: '2023-04-06T12:51:00.000+07:00',
    content: 'Môn: Toán\nHình thức: Offline\nĐịa điểm: 381 Phan Văn Trị, Gò Vấp, Thành phố Hồ Chí Minh\nYêu cầu: Sinh viên nữ, khối ngành A, điểm thi thpt từ 27 trở lên\nLương: 2.800.000 / tháng',
    status: {
      'Đã liên hệ': [2],
      link: '/',
    },
    ownId: 1
  }
  ]
  );

  const [users, setUsers] = useState([
    {
      link: '',
      id: 1,
      userName:'PhuHuynh',
      'Tên đầy đủ':'Phu huynh 1',
      'Email':'phuhuynh1@hnimtadd.com',
      'Số điện thoại': '0393939939',
      'Vai trò': 'Phụ huynh',
      'Địa chỉ': 'KTX khu A, đại học quốc gia, Hồ Chí Minh'
    },
    {
      link: '',
      id: 2,
      userName:'giaovien1',

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
    },
    {
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
    }
  ]);
  const registerPost = (postid, userid) => {
    setPost(posts.map((post)=> {
      if(post.postId !== postid || post.status['Đã liên hệ'].includes(userid)) {
        return post;
      }
      let newPost = post;
      newPost.status['Đã liên hệ'].push(userid);
      alert('Registed!');
      return newPost;
    }));
  };

  const [currentUser, setCurrentUser] = useState(-1);
  const [registedTeacher, setRegistedTeacher] = useState([]);
  const [postLoading, setPostLoading] = useState(false);
  const [postError, setPostError] = useState(null);
  // useEffect(()=>{
  // const init =() => {
  // fetch('http://localhost:5000/api/post', {
  //   mode: 'cors',
  //   method: 'GET'
  // }).
  //   then((rsp) => {
  //     if (!rsp.ok) {
  //       throw new Error(
  //         `This is an HTTP error: The status is ${rsp.status}`
  //       );
  //     }
  //     return rsp.json();
  //   })
  //   .then((result) => {
  //     setPost(result);
  //     setPostError(null);
  //   })
  //   .catch((err) => {setPostError(err.message); setPost([]);})
  //   .finally(() => {
  //     setPostLoading(false);
  //   });
  // };
  // },[]);
  const [currentUserData, setCurrentUserData] = useState({}); 
  useEffect(() => {
    setCurrentUserData(users.filter(u => u.id === currentUser)[0]);
  }, [currentUser]);
  const postPost = (post) => {
    // alert(post);
    setPost([post, ...posts]);
  };
  return (
    <AppContext.Provider value={{
      posts,
      setPost,
      postLoading,
      setPostLoading,
      postError,
      setPostError,
      registedTeacher,
      setRegistedTeacher,
      users,
      currentUser,
      setCurrentUser,
      setUsers,
      registerPost,
      postPost,
      currentUserData,
      setCurrentUserData
    }}
    >{children}
    </AppContext.Provider>
  );
};