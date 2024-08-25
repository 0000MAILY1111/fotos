import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../photos/pages/LoginPage'
import { Navbar } from '../photos/components/Navbar';
import { HomePage } from '../photos/pages/HomePage';
import { EventosPage } from '../photos/pages/EventosPage';


export const AppRouter = () => {
  return (
   <>
    <Navbar />
   
    <Routes>

      <Route path="/" element= {<Navigate to="/login"/>}/>
      <Route path="login" element={<LoginPage />} />
      <Route path="home" element={<HomePage/>} />
      <Route path="events" element={<EventosPage/>} />


    </Routes>
   
   
   </>
  );
};
