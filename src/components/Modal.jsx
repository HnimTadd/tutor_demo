import { navigate } from 'gatsby';
import React from 'react';
import Avatar from './Avatar';
const  ShowModal= (props) =>{
  const {content, onClose, onAssign, assign} = props;
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-[70%]">
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
            <div className="relative p-6 flex-auto">
              {
                content.map((user ,index)=> {
                  return (
                    <div key={index} className='flex flex-row justify-between items-center w-[900px]'>
                      <div className='flex flex-row justify-start gap-[15px]' >
                        <Avatar/>
                        <div className='flex flex-col gap-[8px] w-[400px]'>
                          <div className='font-bold text-xl'>
                            {user.userName}
                          </div>
                          <div className='flex flex-row w-full justify-between'>
                            <div>
                            Đánh giá
                            </div>
                            {user.att['Đánh giá']}
                          </div>
                          <div className='flex flex-row w-full justify-between'>
                            <div>
                            Giải thưởng
                            </div>
                            {user.att['Giải thưỏng']}
                          </div>
                        </div>
                      </div>
                      <div>
                      </div>
                      <div className='flex flex-row gap-[10px]'>
                        <div
                          className='w-fit h-[50px] rounded-[10px] border flex justify-center items-center p-4 hover:cursor-pointer'
                          onClick={() => {
                            onClose();
                            navigate('/personalpage/?id='+user.id);
                          }
                          }
                        >
                          Xem thông tin
                        </div>
                        {
                          onAssign
                            ?
                            (
                              assign.includes(user.id)
                                ?
                                <div
                                  className='w-fit h-[50px] rounded-[10px] border flex justify-center items-center p-4 hover:cursor-pointer'
                                  onClick={() => {
                                  }
                                  }
                                >
                                  Đã Chấp nhận
                                </div>
                                :
                                <div
                                  className='w-fit h-[50px] rounded-[10px] border flex justify-center items-center p-4 hover:cursor-pointer'
                                  onClick={() => {
                                    onAssign(user.id);
                                  }
                                  }
                                >
                                Chấp nhận
                                </div>
                            )
                            :
                            null
                        }
                      </div>
                    </div>
                  );
                })
              }
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
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
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
export default ShowModal;