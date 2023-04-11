import React, { useContext, useRef } from 'react';
import { AppContext } from '../context/AppContext';
const  PostModal= (props) =>{
  const {posts, currentUserData} = useContext(AppContext);
  const { onClose, onPost} = props;
  const subject = useRef();
  const type = useRef();
  const location = useRef();
  const requirement = useRef();
  const salary = useRef();
  const handleOnPost = () => {
    const content=`Môn:${subject.current.value}\nHình thức:${type.current.value}\nĐịa điểm: ${location.current.value}\nYêu cầu:${requirement.current.value}\nLương: ${salary.current.value}`;
    const post = {
      postId: posts.length + 1,
      username: currentUserData.userName,
      time: new Date().toISOString(),
      content,
      status: {
        'Đã liên hệ': [],
        link: '/',
      },
      ownId: currentUserData.id
    };
    onPost(post);
    onClose();
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen inset-0 z-[200] ">
      <div
        className="z-[300] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                    Danh sách giáo viên đăng ký
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => onClose()}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-col w-full">
              <form className="w-[700px] max-w-full  ">
                <div className="w-full flex flex-row items-center border-b border-teal-500 py-4">
                  <label className='flex-[1]'>
                    Môn
                  </label>
                  :
                  <input
                    ref={subject}
                    className="flex-[6] appearance-none bg-transparent border-none  text-gray-700 mr-3 h-full px-3 leading-tight focus:outline-none"
                    type="text" 
                    aria-label="Subject"
                  />
                </div>
                <div className="w-full flex flex-row justify-between items-center border-b border-teal-500 py-4">
                  <label className='flex-[1]'>
                    Hình thức
                  </label>
                  :
                  <input
                    ref={type}
                    className="flex-[6] appearance-none bg-transparent border-none  text-gray-700 mr-3 h-full px-3 leading-tight focus:outline-none"
                    type="text"
                    aria-label="Type"
                  />
                </div>
                <div className="w-full flex items-center border-b border-teal-500 py-4">
                  <label className='flex-[1]'>
                    Địa điểm
                  </label>
                  :
                  <input
                    ref={location}
                    className="flex-[6] appearance-none bg-transparent border-none text-gray-700 mr-3 h-full px-3 leading-tight focus:outline-none" 
                    type="text"
                    aria-label="Address"
                  />
                </div>
                <div className="w-full flex items-center border-b border-teal-500 py-4">
                  <label className='flex-[1]'>
                    Yêu cầu
                  </label> 
                  :
                  <input
                    ref={requirement}
                    className="flex-[6] appealrance-none bg-transparent border-none text-gray-700 mr-3 h-full px-3 leading-tight focus:outline-none"
                    type="text"
                    aria-label="Requirement"
                  />
                </div>
                <div className="w-full flex items-center border-b border-teal-500 py-4">
                  <label className='flex-[1]'>
                    Lương
                  </label>
                  :
                  <input
                    ref={salary}
                    className="flex-[6] appearance-none bg-transparent border-none text-gray-700 mr-3 h-full px-3 leading-tight focus:outline-none"
                    type="text"
                    aria-label="Salary"
                  />
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleOnPost}
              >
                    Post
              </button>
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => onClose()}
              >
                    Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed top-0 left-0 w-screen h-screen inset-0 z-[200] bg-black"></div>
    </div>
  );
};
export default PostModal;