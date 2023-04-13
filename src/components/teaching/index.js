import React from 'react';
import { MeetImg } from '../../assets';

function Teaching() {
  return (
    <div className="bg-white w-full rounded-xl pt-6 flex flex-col px-2">
      <p className="text-3xl font-bold pb-3">
        Toán 12 - Buổi 3 - Nhân chia số phức{' '}
      </p>
      <p className="text-xl pb-1">Lớp 18:00 - 20:00 (40 thành viên)</p>
      <p className="text-xl">
        Link buổi học: <a className='text-blue-600 underline' href="https://meet.google.com/guj-duxs-bkb">ggmeet</a>
      </p>
      <div className="mt-16">
        <img src={MeetImg} />
      </div>
    </div>
  );
}

export default Teaching;
