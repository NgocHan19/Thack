import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Account/Login';
import Menu_user from './component/Menu/Menu_user';
import Menu_NV from './component/Menu/Menu_NV';
import Menu_QL from './component/Menu/Menu_QL';
import Logout from './component/Account/Logout';
import HomePage from './component/HomePage/HomePage';
import UserProfile from './component/Account/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

    // <Router>
    //   <div className="app flex h-screen">
    //     {/* Menu bên trái */}
    //     <div className="w-[280px]">
    //       <Menu_NV />
    //     </div>
    //     {/* Nội dung trang bên phải */}
    //     <div className="flex-1 bg-white">
    //       <UserProfile />
    //     </div>
    //   </div>
    // </Router>
  );
}

export default App;
