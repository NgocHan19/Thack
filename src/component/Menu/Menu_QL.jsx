import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import images from '../../images';

function Menu_QL() {
  const navigate = useNavigate(); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOrganizationDropdownOpen, setIsOrganizationDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleOrganizationDropdown = () => {
    setIsOrganizationDropdownOpen(!isOrganizationDropdownOpen);
  };

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleNavigate = (path) => {
    navigate(path);
};

  return (
    <div className="relative w-full h-full ">
      <div className="absolute w-[270px] h-[1080px] left-0 top-0">
        <div className="absolute w-full h-full bg-[#3F4D67] ">
          <div className="absolute w-[150px] h-[50px] left-[20px] top-[10px]">
            <img src={images['logo1.png']} alt="Logo" className="w-full h-full" />
          </div>

          <div className="absolute w-[280px] h-[80px] left-0 top-[75px] bg-bg-[#3F4D67]">
            <button className="absolute w-[35px] h-[35px] left-[20px] top-[15px]" onClick={toggleForm}>
              <img src={images['icon_account1.png']} alt="Account Avatar" className="w-full h-full" />
            </button>
            <div className="absolute left-[75px] top-[10px] text-[18px] text-[#FFFFFF]">Tên Tài Khoản</div>
            <div className="absolute left-[75px] top-[40px] font-inter font-bold text-[10px] text-[#D9D9D9]">email@gmail.com</div>
            <button className="absolute right-[25px] top-[10px] w-[20px] h-[20px]">
              <img src={images['icon_ring.png']} alt="Notification Ring" className="w-full h-full" />
            </button>
          </div>
          {isFormVisible && (
          <div className="absolute left-[20px] top-[150px] w-[200px] h-[80px] bg-[#3F4D67] rounded-[15px] flex flex-col items-center justify-center border-2 border-[#D8D8D8] z-[1000]">
            <button  onClick={() => handleNavigate('/suathongtincanhan')} className="w-full h-[30px] bg-[#3F4D67] rounded-[5px] text-[#FFFFFF] flex items-center">
              <img src={images['icon_info.png']} alt="icon_infp" className="w-[20px] h-[20px] ml-[10px] mr-[10px]" />
              Thông tin cá nhân
            </button>
            <button onClick={() => handleNavigate('/dangxuat')} className="w-full h-[30px] bg-[#3F4D67] rounded-[5px] text-[#FFFFFF] mt-2 flex items-center">
              <img src={images['icon_logout.png']} alt="icon_logout" className="w-[20px] h-[20px] ml-[10px] mr-[10px]" />
              Đăng xuất
            </button>
          </div>
        )}

          <div className="absolute w-[250px] h-[45px] left-[25px] top-[150px] text-[#FFFFFF] text-[17px]">
            Navigation
          </div>
          

          <div className="absolute w-[250px] h-[40px] left-[15px] top-[185px] bg-[#3F4D67] rounded-[10px] flex items-center">
            <img src={images['icon_dashboard.png']} alt="icon_dashboard" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
            <button className="absolute left-[65px] top-[8px] text-[#FFFFFF] font-bold text-[17px]"  onClick={() => handleNavigate('/dashboard-ql')}>Dashboard</button>
          </div>

          <div className={`absolute w-[250px] h-[40px] left-[15px] top-[240px] bg-[#3F4D67] rounded-[10px] flex items-center`}>
            <img src={images['icon_shipment.png']} alt="icon_shipment" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
            <button
                className="w-full h-full text-[#FFFFFF] font-bold text-[17px] flex items-center justify-between pl-[65px] pr-[10px]"
                onClick={() => { toggleDropdown(); navigate('/lohang-ql'); }}
                
            >
                Lô hàng
            <img
                src={images['icon_down_arrow.png']}
                alt="icon_downarrow"
                className="w-[15px] h-[15px] ml-[-5px]"
            />
            </button>
          </div>

          {/* Các mục con của Lô hàng */}
          {isDropdownOpen && (
            <div className="absolute left-[20px] top-[280px] w-[200px]">
              <div className="w-full h-[40px] bg-[#3F4D67] rounded-[10px] mt-[10px] flex items-center">
                <img src={images['icon_import.png']} alt="icon_import" className="w-[25px] h-[25px] ml-[10px]" />
                <button className="ml-[22px] text-[#FFFFFF] font-bold text-[17px]" onClick={() => handleNavigate('/nhapkhomoi')}>Nhập kho</button>
              </div>
              <div className="w-full h-[40px] bg-[#3F4D67] rounded-[10px] mt-[15px] flex items-center">
                <img src={images['icon_export.png']} alt="icon_export" className="w-[25px] h-[25px] ml-[10px]" />
                <button className="ml-[22px] text-[#FFFFFF] font-bold text-[17px]" onClick={() => handleNavigate('/xuatkho')}>Xuất kho</button>
              </div>
              <div className="w-full h-[40px] bg-[#3F4D67] rounded-[10px] mt-[15px] flex items-center">
                <img src={images['icon_inventory.png']} alt="icon_inventory" className="w-[25px] h-[25px] ml-[10px]" />
                <button className="ml-[22px] text-[#FFFFFF] font-bold text-[17px]" onClick={() => handleNavigate('/kiemke')}>Kiểm kê</button>
              </div>
              <div className="w-full h-[40px] bg-[#3F4D67] rounded-[10px] mt-[15px] flex items-center">
                <img src={images['icon_component.png']} alt="icon_component" className="w-[25px] h-[25px] ml-[10px]" />
                <button className="ml-[22px] text-[#FFFFFF] font-bold text-[17px]"onClick={() => {  navigate('/dslk'); }}>Linh kiện</button>
              </div>
              <div className="w-full h-[40px] bg-[#3F4D67] rounded-[10px] mt-[15px] flex items-center">
                <img src={images['icon_category.png']} alt="icon_category" className="w-[25px] h-[25px] ml-[10px]" />
                <button className="ml-[22px] text-[#FFFFFF] font-bold text-[17px]"onClick={() => {  navigate('/danhmuc-ql'); }}>Danh mục</button>
              </div>
            </div>
          )}

          <div className={`absolute w-[250px] h-[40px] left-[15px] ${isDropdownOpen ? 'top-[570px]' : 'top-[300px]'} bg-[#3F4D67] rounded-[10px] transition-all duration-200`}>
            <img src={images['icon_dashboard.png']} alt="icon_dashboard" className="w-[25px] h-[25px] absolute left-[18px] top-[8px]" />
            <button className="absolute left-[63px] top-[8px] text-[#FFFFFF] font-bold text-[17px]" onClick={() => handleNavigate('/thongke')}>Thống kê</button>
          </div>

          <div className={`absolute w-[250px] h-[40px] left-[15px] ${isDropdownOpen ? 'top-[630px]' : 'top-[360px]'} bg-[#3F4D67] rounded-[10px] flex items-center`}>
            <img src={images['icon_dmtc.png']} alt="icon_organization" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
            <button
                className="w-full h-full text-[#FFFFFF] font-bold text-[17px] flex items-center justify-between pl-[64px] pr-[10px]"
                onClick={toggleOrganizationDropdown}
            >
                Danh mục tổ chức
            <img
                src={images['icon_down_arrow.png']}
                alt="icon_downarrow"
                className="w-[15px] h-[15px] ml-[-5px]"
            />
            </button>
          </div>

          {/* Các mục con của Danh mục tổ chức */}
          {isOrganizationDropdownOpen && (
            <div className="absolute left-[20px] w-[200px] top={[isDropdownOpen ? '675px' : '400px']}" style={{ top: `${isDropdownOpen ? '675px' : '400px'}` }}>
              <div className="w-full h-[40px] bg-[#3F4D67] rounded-[10px] mt-[10px] flex items-center">
                <img src={images['icon_ncc.png']} alt="icon_organization" className="w-[25px] h-[25px] ml-[10px]" />
                <button className="ml-[22px] text-[#FFFFFF] font-bold text-[17px]"onClick={() => {  navigate('/nhacungcap'); }}>Nhà cung cấp</button>
              </div>
              <div className="w-full h-[40px] bg-[#3F4D67] rounded-[10px] mt-[15px] flex items-center">
                <img src={images['icon_cn.png']} alt="icon_member" className="w-[25px] h-[25px] ml-[10px]" />
                <button className="ml-[22px] text-[#FFFFFF] font-bold text-[17px]"onClick={() => { navigate('/chinhanh'); }}>Chi nhánh</button>
              </div>
              <div className="w-full h-[40px] bg-[#3F4D67] rounded-[10px] mt-[15px] flex items-center">
                <img src={images['icon_nv.png']} alt="icon_member" className="w-[25px] h-[25px] ml-[10px]" />
                <button className="ml-[22px] text-[#FFFFFF] font-bold text-[17px]" onClick={() => handleNavigate('/nhanvien')}>Nhân viên</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu_QL;