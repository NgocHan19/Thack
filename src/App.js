import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Account/Login';
import Menu_user from './component/Menu/Menu_user';
import Menu_NV from './component/Menu/Menu_NV';
import Menu_QL from './component/Menu/Menu_QL';
import Logout from './component/Account/Logout';
import HomePage from './component/HomePage/HomePage';
import UserProfile from './component/Account/UserProfile';
import Staff from './component/Organization/Staff';
import Staff_New from './component/Organization/Staff_New';
import Staff_Edit from './component/Organization/Staff_Edit';
import Statistics from './component/Statistics/Statistics';
import Import from './component/Import/Import';
import Export from './component/Export/Export';
import Dashboard_QL from './component/Dashboard/Dashboard_QL';

function App() {
  return (
    <Router>
      <div className="app flex h-screen">
          <div className="w-[280px]">
            <Menu_QL />
          </div>
        <div className="flex-1 bg-white">
          <Routes>
            <Route path="/trangchu" element={<HomePage />} />
            <Route path="/dangnhap" element={<Login />} />
            <Route path="/dangxuat" element={<Logout />} />
            <Route path="/suathongtincanhan" element={<UserProfile />} />
            <Route path="/dashboard" element={<Dashboard_QL />} />
            <Route path="/nhapkho" element={<Import />} />
            <Route path="/xuatkho" element={<Export />} />
            <Route path="/kiemke" element={<Statistics />} />
            <Route path="/nhanvien" element={<Staff />} />
            <Route path="/taonhanvien" element={<Staff_New />} />
            <Route path="/suathongtinnhanvien" element={<Staff_Edit />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
