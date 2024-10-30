import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu_NV from './component/Menu/Menu_NV';
import Menu_QL from './component/Menu/Menu_QL';
import Lohang_NV from './component/Lo/Lohang_NV';
import Lohang_NV2 from './component/Lo/Lohang_NV2';
import Lohang_NV3 from './component/Lo/Lohang_NV3';
import Lohang_QL from './component/Lo/Lohang_QL';
import Chinhanh from './component/ChiNhanh/Chinhanh';
import Chinhanh_Sua from './component/ChiNhanh/Chinhanh_Sua';
import Chinhanh_Tao from './component/ChiNhanh/Chinhanh_Tao';
import Danhmuc_NV from './component/DanhMuc/Danhmuc_NV';
import Danhmuc_QL from './component/DanhMuc/Danhmuc_QL';
import Danhmuc_QL_Sua from './component/DanhMuc/Danhmuc_QL_Sua';
import Danhmuc_QL_Tao from './component/DanhMuc/Danhmuc_QL_Tao';
import DSLK_NV from './component/DSLK/DSLK_NV';
import DSLK_NV2 from './component/DSLK/DSLK_NV2';
import DSLK_QL from './component/DSLK/DSLK_QL';
import Nhacungcap from './component/NhaCungCap/Nhacungcap';
import Nhacungcap_Sua from './component/NhaCungCap/Nhacungcap_Sua';
import Nhacungcap_Tao from './component/NhaCungCap/Nhacungcap_Tao';
import Lohang_QL2 from './component/Lo/Lohang_QL2';

function App() {
  return (
    
    <Router>
      <Routes>
        
        {/* Menu */}
        <Route path="/menu-nv" element={<Menu_NV />} />
        <Route path="/menu-ql" element={<Menu_QL />} />
        
        {/* Lô hàng */}
        <Route path="/lohang-nv" element={<Lohang_NV />} />
        <Route path="/lohang-nv2" element={<Lohang_NV2 />} />
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
        <Route path="/dslk-nv" element={<DSLK_NV />} />
        <Route path="/dslk-nv2" element={<DSLK_NV2 />} />
        <Route path="/dslk-ql" element={<DSLK_QL />} />
        
        {/* Nhà cung cấp */}
        <Route path="/nhacungcap" element={<Nhacungcap />} />
        <Route path="/nhacungcap-sua" element={<Nhacungcap_Sua />} />
        <Route path="/nhacungcap-tao" element={<Nhacungcap_Tao />} />
        
        {/* Default route (trang mặc định khi không tìm thấy route) */}
        <Route path="*" element={<Menu_QL />} /> {/* Hoặc trang mặc định khác */}
      </Routes>
    </Router>

  );
  
}

export default App;
 