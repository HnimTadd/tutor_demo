import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
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
      title: 'Trang chủ',
    },
    {
      icon: faChalkboardUser,
      title: 'Phòng học',
    },
    {
      icon: faStore,
      title: 'Cửa hàng',
    },
    {
      icon: faEnvelope,
      title: 'Phản hồi',
    },
    {
      icon: faGear,
      title: 'Cài đặt',
    },
  ];

  return (
    <div className="flex flex-row text-4xl justify-endl items-center gap-[10px]">
      {navigationBar.map((ele, index) => {
        return (
          <Tippy
            key={index}
            duration={[0, 0]}
            content={ele.title}
            className="bg-slate-800 text-lg px-4 py-2 rounded-lg text-white -mt-2"
          >
            <div
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
          </Tippy>
        );
      })}
    </div>
  );
}

export default NavigateBar;
