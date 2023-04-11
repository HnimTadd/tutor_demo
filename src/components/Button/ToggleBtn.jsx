import React from 'react';
const dfnCallback = () => {alert('hello');};
const ToggleButton = (props) => {
  const {className='', status = 'false', onClick=dfnCallback, preText='', postText=''} = props;
  return (
    <div className={className}>
      <div className="flex items-center cursor-pointer cm-toggle-wrapper" onClick={onClick}>
        {
          status 
            ?
            <>
              <span className="font-semibold text-xs mr-1">
                {preText}
              </span>
              <div  className={'rounded-full w-8 h-4 p-0.5 bg-green-500'}>
                <div className="rounded-full w-3 h-3 bg-white translate-x-2 transform mx-auto duration-300 ease-in-out"></div>
              </div>
              <span className="font-semibold text-xs ml-1">
                {postText}
              </span>
            </>
            :
            <>
              <span className="font-semibold text-xs mr-1">
                {preText}
              </span>
              <div className="rounded-full w-8 h-4 p-0.5 bg-slate-500">
                <div className="rounded-full w-3 h-3 bg-slate-200 -translate-x-2 transform mx-auto duration-300 ease-in-out"></div>
              </div>
              <span className="font-semibold text-xs ml-1">
                {postText}
              </span>
            </>
        }
      </div>
    </div>
  );
};
export default ToggleButton;