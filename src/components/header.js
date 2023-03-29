import React from 'react'

const Header = ({children}) => {
   return (
   <div className='flex flex-row absolute top-0 right-0 w-[100%] h-[10px] bg-slate-50'>
        {children}
    </div>
   )
}

export default Header