/* eslint-disable react/prop-types */
import React from 'react';
import { IconButton } from '@mui/material';
import Header from '../components/header';
import Avatar from '../components/Avatar';
import Search from '../components/Search/Search';
import { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { navigate } from 'gatsby';
function FullScreen({  children }) {
  const {setCurrentUser, currentUser, currentUserData} = useContext(AppContext);
  useEffect(() => {
    if (currentUser === -1) {
      navigate('/loginpage');
    }
  },[currentUser]);
  return (
    <div className="fixed top-0 bottom-0 w-screen h-screen flex flex-col m-0 p-0 overflow-scroll no-scrollbar bg-gray-50">
      <div className=" h-[60px] w-full fixed top-0 bg-white z-10">
        <Header>
          <div className="flex flex-row justify-start items-center gap-[20px] px-[40px]">
            <Avatar width='60px' height='60px' onClick={() => {navigate(currentUserData['Vai trò'] === 'Phụ huynh' ? '/parentpage': '/tutorpage');}}/>

            <Search />
          </div>
          <div className="flex flex-row justify-endl items-center gap-[10px]">
            <Avatar userName="Hnimtadd" />
            <IconButton
              onClick={() => {
                setCurrentUser(-1);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>
            </IconButton>
          </div>
        </Header>
      </div>
      <main className="fixed top-[60px] left-[400px] right-[400px] min-w-[500px] h-[calc(100%-60px)] flex justify-center items-start ">
        <div className='w-full h-full mt-[10px]'>
          {children}
        </div>
      </main>
    </div>
  );
}

export default FullScreen;
