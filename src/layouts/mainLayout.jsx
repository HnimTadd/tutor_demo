/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react';
import { IconButton } from '@mui/material';
import Header from '../components/header';
import Avatar from '../components/Avatar';
import Search from '../components/Search/Search';
import { navigate } from 'gatsby'; //import navigate from gatsby

import { AppContext } from '../context/AppContext';
function MainLayout({ leftSide, children, rightSide }) {
  const { currentUser, users, setCurrentUser } = useContext(AppContext);
  const currentUserData = users.filter((u) => u.id === currentUser)[0];
  useEffect(() => {
    if (currentUser === -1) {
      navigate('/loginpage');
    }
  }, [currentUser]);
  return (
    // <AppContext.Consumer>
    <div className="top-0 bottom-0 w-screen h-screen flex flex-row justify-between m-0 p-0 bg-slate-100 overflow-y-scroll">
      <div className="h-[70px] w-full fixed top-0 bg-white flex flex-row items-center z-50">
        <Header>
          <div className="flex flex-row h-full  justify-start items-center gap-[20px] ">
            <Avatar
              width="60px"
              height="60px"
              onClick={() => {
                navigate(
                  currentUserData['Vai trò'] === 'Phụ huynh'
                    ? '/parentpage'
                    : '/tutorpage'
                );
              }}
            />
            <Search />
          </div>
          <div className="flex flex-row justify-endl items-center gap-[10px]">
            <Avatar
              user={currentUserData}
              onClick={() => navigate('/personalpage/?id=' + currentUser)}
            />
            <IconButton
              onClick={() => {
                setCurrentUser(-1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </IconButton>
          </div>
        </Header>
      </div>
      <div className="mt-[70px] w-[350px] h-[calc(100%-70px)]">{leftSide}</div>
      <main className="mt-[70px] right-[300px] min-w-[500px] h-[calc(100%-70px)] flex justify-center items-start">
        <div className="flex w-[750px] h-full mt-[10px]">{children}</div>
      </main>
      <div className="mt-[70px] w-[350px] h-[calc(100%-70px)]">
        {rightSide}
      </div>
    </div>
    // </AppContext.Consumer>
  );
}

export default MainLayout;
