import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChalkboardUser,
  faStore,
  faEnvelope,
  faGear,
} from '@fortawesome/free-solid-svg-icons';

function NavigateBar({ pageState, onChangePageState }) {
  const navigationBar = [
    {
      icon: faHome,
      path: '/loginpage',
    },
    {
      icon: faChalkboardUser,
      path: '/loginpage',
    },
    {
      icon: faStore,
      path: '/loginpage',
    },
    {
      icon: faEnvelope,
      path: '/loginpage',
    },
    {
      icon: faGear,
      path: '/loginpage',
    },
  ];

  return (
    <div className="flex flex-row text-4xl justify-endl items-center gap-[10px]">
      {navigationBar.map((ele, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              onChangePageState(index);
            }}
            style={
              index === pageState
                ? {
                  color: '#1b74e4',
                }
                : {
                  color: 'black',
                }
            }
          >
            <FontAwesomeIcon
              className="rounded-lg px-16 py-5 hover:bg-slate-100"
              icon={ele.icon}
            />
            <div
              className="w-full h-1 bg-[#1b74e4]"
              style={
                index === pageState
                  ? {
                    background: '#1b74e4',
                  }
                  : {
                    background: 'transparent',
                  }
              }
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default NavigateBar;
