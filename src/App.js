import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './component/Account/Login';
import Register from './component/Account/Register';
import OTPVerification from './component/Account/OTPVerification';
import Menu_user from './component/Menu/Menu_user';
import Menu_NV from './component/Menu/Menu_NV';
import Menu_QL from './component/Menu/Menu_QL';
import Menu_Admin from './component/Menu/Menu_Admin';
import Logout from './component/Account/Logout';
import HomePage from './component/HomePage/HomePage';
import UserProfile from './component/Account/UserProfile';
import Staff from './component/Organization/Staff';
import Staff_New from './component/Organization/Staff_New';
import Staff_Edit from './component/Organization/Staff_Edit';
import Statistics from './component/Statistics/Statistics';
import Import_New from './component/Import/Import_New';
import Import_Old from './component/Import/Import_Old';
import Import_Approval from './component/Import/Import_Approval';
import Add_Components from './component/Import/Add_Components';
import Import_Confirm from './component/Import/Import_Confirm';
import Export from './component/Export/Export';
import Export_Confirm from './component/Export/Export_Confirm';
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
import QLLK from './component/QLLK/QLLK';
import QLND from './component/QLND/QLND';
import QLND_New from './component/QLND/QLND_New';
import QLND_Edit from './component/QLND/QLND_Edit';
import QLND_Delete from './component/QLND/QLND_Delete';
import Caidat_Admin from './component/Caidat_Admin/Caidat_Admin';
import Dashboard_Admin from './component/Dashboard/Dasboard_Admin';



function App() {
  const location = useLocation();
  const hideMenuRoutes = ['/dangnhap', '/dangky', '/', '/xacthuctaikhoan'];

    // Lấy roleName từ sessionStorage
    const userRole = JSON.parse(sessionStorage.getItem('accountData'))?.roleName;

    // Chọn menu tương ứng với role của người dùng
    const renderMenu = () => {
      if (userRole === 'Nhân Viên Kho') {
        return <Menu_NV />;
      } else if (userRole === 'Qu?n Lý Kho') {
        return <Menu_QL />;
      } else if (userRole === 'Admin') {
        return <Menu_Admin />;
      }
      return null; // Nếu không có role hợp lệ, không hiển thị menu
    };
  

  return (
    <div className="app flex h-screen">
      {!hideMenuRoutes.includes(location.pathname) && (
        <div className="w-[270px]">
          {/* {renderMenu()} */}
           <Menu_NV />
        </div>
      )}
      <div className="flex-1 bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dangnhap" element={<Login />} />
          <Route path="/dangky" element={<Register />} />
          <Route path="/xacthuctaikhoan" element={<OTPVerification />} />
          <Route path="/dangxuat" element={<Logout />} />
          <Route path="/suathongtincanhan" element={<UserProfile />} />
          <Route path="/dashboard-ql" element={<Dashboard_QL />} />
          <Route path="/dashboard-nv" element={<Dashboard_NV />} />
          <Route path="/dashboard-admin" element={<Dashboard_Admin/>} />
          <Route path="/nhapkhomoi" element={<Import_New />} />
          <Route path="/nhapkholocu" element={<Import_Old />} />
          <Route path="/duyetnhapkho" element={<Import_Approval />} />
          <Route path="/themlinhkienvaolo" element={<Add_Components />} />
          <Route path="/xacnhannhapkho" element={<Import_Confirm />} />
          <Route path="/xuatkho" element={<Export />} />
          <Route path="/xacnhanxuatkho" element={<Export_Confirm />} />
          <Route path="/duyetxuatkho" element={<Export_Approval />} />
          <Route path="/thongke" element={<Statistics />} />
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
          {/* Quản lí người dùng */}
          <Route path="/qlnd" element={<QLND />} />
          <Route path="/qlnd-new" element={<QLND_New />} />
          <Route path="/qlnd-edit" element={<QLND_Edit />} />
          <Route path="/qlnd-delete" element={<QLND_Delete />} />
          {/* Quản lí linh kiện */}
          <Route path="/qllk" element={<QLLK />} />
          {/* Cài đặt admin */}
          <Route path="/caidat-admin" element={<Caidat_Admin />} />
        </Routes>
      </div>
    </div>
  );
}

export default function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
