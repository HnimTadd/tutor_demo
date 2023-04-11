import React from 'react';
import './src/styles/global.css';
import { AppProvider } from './src/context/AppContext';
export const wrapRootElement = ({ element }) => (

  <AppProvider>
    {element}
  </AppProvider>
);
