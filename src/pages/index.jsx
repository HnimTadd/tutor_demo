import  React, { useContext } from 'react';
import { Button } from '@mui/material';
import { AppContext } from '../context/AppContext';
import { navigate } from 'gatsby';
const IndexPage = () => {
  const {setCurrentUser} = useContext(AppContext);
  return (
    <div className='flex-1 flex w-screen h-screen justify-center items-center gap-[40px]'>
      <Button variant='outlined' size='large' 
        onClick={() => {
          navigate('/tutorpage');
        }}
      >
          Tutor View
      </Button>
      <Button variant='outlined' size='large' href='/parentpage' onClick={() => {setCurrentUser(1);}}>Parent View</Button>
      <Button variant='outlined' size='large' onClick={() => {navigate('/personalpage');}}>Setting page</Button>
      <Button  variant='outlined' size='large' href='/loginpage'>Login page</Button>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
