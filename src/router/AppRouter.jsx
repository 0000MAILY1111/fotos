import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../photos/pages/LoginPage'

import { HomeRouter } from './HomeRouter';
import { HomePage } from '../photos/pages/HomePage';


export const AppRouter = () => {
  return (
   <>
   
    <Routes>


      <Route path="login" element={<LoginPage />} />
      <Route path="/*" element={<HomeRouter />} />
      <Route path="/home" element={<HomePage/>} />
      


    </Routes>
   
   
   </>
  );
};
