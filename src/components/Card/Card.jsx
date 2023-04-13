import React from 'react';
const Card = (props) => {
  const {
    header = 'Default header',
    color = '',
    items = [],
    icon = <></>,
    textColor = 'black',
  } = props;

  return (
    <div className="flex flex-col justify-start p-3 w-full h-fit rounded-[20px]">
      <div
        className={
          'w-[full] h-[50px] flex justify-center items-center flex-row rounded-[20px] text-[19px] font-[700] gap-[10px]'
        }
        style={{ backgroundColor: color, color: textColor }}
      >
        <div>{header}</div>
        <div className="w-[20px] h-[20px]">{icon}</div>
      </div>
      <div className="flex flex-col justify-center items-start gap-4 mt-4 mb-3 px-2">
        {items.map((item, index) => {
          return (
            <div key={index} className="w-full px-2">
              <a className="text-[#636468]" style={item.style} href={item.link}>
                {item.content}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Card;
