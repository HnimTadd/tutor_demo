import React from 'react';

function NormalButton(props) {
  const {
    width = '80px', height = '40px', background = 'transparent', icon = null, borderRadius = '20px',
  } = props;
  return (
    <div
      style={{
        width,
        height,
        background,
        borderRadius,
        border: '1px',
        borderColor: 'black',
      }}
    >
      {icon}
    </div>
  );
}
export default NormalButton;
