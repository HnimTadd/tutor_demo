import React from 'react';
import Avatar from '../Avatar';

const Post = (props) => {
  const {
    post = {
      username: 'Hnimtadd',
      time: '2023-06-04T12:51:00.000+07:00"',
      content: {
        a: 'b',
        c: 'd',
        e: 'f',
      },
      status: {
        'Da lien he': 5,
        link: '/',
      },
    },
  } = props;
  return <div className="flex flex-col gap-6 p-9 m-5 rounded-[20px] border pr-20">
    <div className="flex flex-row justify-start items-start gap-5 border-b border-b-slate-400 pb-6">
      <Avatar></Avatar>
      <div className="flex flex-col justify-between items-start">
        {post.username}
        <div className="flex flex-row justify-between items-center text-xs">
          { Math.floor((Date.now() - Date.parse(post.time))/1000/3600 )+ ' giờ'}
          <img src="/static/earth.png" alt=""></img>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-3 border-b border-b-slate-400 pb-6">
      {Object.keys(post.content).map((key, index)=> 
        <div key={index} className="flex flex-row justify-between items-center">
          <div className="flex-1">{key}</div>
          <div className="text-left flex-[2]">{post.content[key]}</div>
        </div>
      )
      }
    </div>
    <div className="flex flex-row justify-end items-center">
      <div className="flex justify-center items-center w-[116px] h-[39px] rounded-[10px] bg-[rgb(15,14,14)]/[0.08] hover:cursor-pointer">Da lien he:
        {' '+post.status['Da lien he']}
      </div>
    </div>
  </div>;
};
export default Post;