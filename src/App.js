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
import Import_Approval from './component/Import/Import_Approval';
import Export from './component/Export/Export';
import Export_Approval from './component/Export/Export_Approval';
import Dashboard_QL from './component/Dashboard/Dashboard_QL';
import Dashboard_NV from './component/Dashboard/Dashboard_NV';
import Lohang_NV from './component/Lo/Lohang_NV';
import Lohang_NV3 from './component/Lo/Lohang_NV3';
import Lohang_QL from './component/Lo/Lohang_QL';
import Lohang_QL2 from './component/Lo/Lohang_QL2';
import Chinhanh from './component/ChiNhanh/Chinhanh';
import Chinhanh_Sua from './component/ChiNhanh/Chinhanh_Sua';
import Chinhanh_Tao from './component/ChiNhanh/Chinhanh_Tao';
import Danhmuc_NV from './component/DanhMuc/Danhmuc_NV';
import Danhmuc_QL from './component/DanhMuc/Danhmuc_QL';
import Danhmuc_QL_Sua from './component/DanhMuc/Danhmuc_QL_Sua';
import Danhmuc_QL_Tao from './component/DanhMuc/Danhmuc_QL_Tao';
import DSLK from './component/DSLK/DSLK';
import DSLK2 from './component/DSLK/DSLK2';
import Nhacungcap from './component/NhaCungCap/Nhacungcap';
import Nhacungcap_Sua from './component/NhaCungCap/Nhacungcap_Sua';
import Nhacungcap_Tao from './component/NhaCungCap/Nhacungcap_Tao';





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
            <Route path="/dashboard-ql" element={<Dashboard_QL />} />
            <Route path="/dashboard-nv" element={<Dashboard_NV />} />
            <Route path="/nhapkho" element={<Import />} />
            <Route path="/duyetnhapkho" element={<Import_Approval />} />
            <Route path="/xuatkho" element={<Export />} />
            <Route path="/duyetxuatkho" element={<Export_Approval />} />
            <Route path="/kiemke" element={<Statistics />} />
            <Route path="/nhanvien" element={<Staff />} />
            <Route path="/taonhanvien" element={<Staff_New />} />
            <Route path="/suathongtinnhanvien" element={<Staff_Edit />} />

            {/* Lô hàng */}
            <Route path="/lohang-nv" element={<Lohang_NV />} />
            <Route path="/lohang-nv3" element={<Lohang_NV3 />} />
            <Route path="/lohang-ql" element={<Lohang_QL />} />
            <Route path="/lohang-ql2" element={<Lohang_QL2 />} />
            
            {/* Chi nhánh */}
            <Route path="/chinhanh" element={<Chinhanh />} />
            <Route path="/chinhanh-sua" element={<Chinhanh_Sua />} />
            <Route path="/chinhanh-tao" element={<Chinhanh_Tao />} />
            
            {/* Danh mục */}
            <Route path="/danhmuc-nv" element={<Danhmuc_NV />} />
            <Route path="/danhmuc-ql" element={<Danhmuc_QL />} />
            <Route path="/danhmuc-ql-sua" element={<Danhmuc_QL_Sua />} />
            <Route path="/danhmuc-ql-tao" element={<Danhmuc_QL_Tao />} />
            
            {/* Danh sách linh kiện */}
            <Route path="/dslk" element={<DSLK />} />
            <Route path="/dslk2" element={<DSLK2 />} />
            
            {/* Nhà cung cấp */}
            <Route path="/nhacungcap" element={<Nhacungcap />} />
            <Route path="/nhacungcap-sua" element={<Nhacungcap_Sua />} />
            <Route path="/nhacungcap-tao" element={<Nhacungcap_Tao />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;