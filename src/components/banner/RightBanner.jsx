import React from 'react';
import Lottie from 'react-lottie';
import doulingo from '../../lottie/doulingo.json';
import monkey from '../../lottie/monkey.json';

function RightBanner() {
  const info = [
    {
      logo: doulingo,
      title: 'Cách học ngôn ngữ #1 thế giới',
      link: 'https://vi.duolingo.com/',
    },
    {
      logo: monkey,
      title: 'MONKEY JUNIOR',
      content: 'Ứng dụng học tiếng anh top 5 thế giới cho trẻ em 0-10 tuối',
      link: 'https://beyeungoaingu.monkeyjunior.com/tupham?utm_source=google&utm_medium=google-Conversion-All-465214-MKT_RD_TuPV-84-02-MJVN-monkeyjuniorVN-MJVN-tupham01-01-01&utm_campaign=google-Conversion-All-465214-MKT_RD_TuPV-84-02&coupon=MSVN&gclid=CjwKCAjwitShBhA6EiwAq3RqA0f9KluX2uzGtmpQomcxNQ-RIdxqQy7ZPlw0EZ8Jp2TdSEbBO_rTwhoClmYQAvD_BwE',
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full bg-white">
        <div className="bg-green-600 p-4 flex justify-center items-center ">
          <p className="text-white text-2xl font-semibold">
            CÓ THỂ BẠN QUAN TÂM
          </p>
          ;
        </div>
        <div className="flex flex-col">
          {info.map((e, index) => {
            const defaultOptions = {
              loop: true,
              autoplay: true,
              animationData: e.logo,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            };

            return (
              <div
                key={index}
                className="p-6 flex flex-col justify-center items-center"
              >
                {/* image */}
                <div>
                  <Lottie options={defaultOptions} height={300} width={300} />
                </div>
                {/* product name */}
                <div className="text-lg p-2 -mt-10 z-40">
                  <p className="font-semibold">{e.title}</p>
                  <p>{e.content}</p>
                  <div className=" flex flex-row justify-center w-full items-center mt-4">
                    {/* price */}
                    <a href={e.link}>
                      <div className="text-white first-letter rounded-md px-4 py-2 bg-green-600">
                        THAM GIA NGAY
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RightBanner;
