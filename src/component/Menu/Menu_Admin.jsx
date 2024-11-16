import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import images from '../../images';

function Menu_Admin() {
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
            <button className="absolute left-[65px] top-[8px] text-[#FFFFFF] font-bold text-[17px]"  onClick={() => handleNavigate('/dashboard-admin')}>Dashboard</button>
          </div>

          <div className={`absolute w-[250px] h-[40px] left-[15px] top-[240px] bg-[#3F4D67] rounded-[10px] transition-all duration-200`}>
            <img src={images['icon_dashboard.png']} alt="icon_dashboard" className="w-[25px] h-[25px] absolute left-[18px] top-[8px]" />
            <button className="absolute left-[63px] top-[8px] text-[#FFFFFF] font-bold text-[17px]" onClick={() => handleNavigate('/qlnd')}>Quản lý người dùng</button>
          </div>

          <div className={`absolute w-[250px] h-[40px] left-[15px] top-[295px] bg-[#3F4D67] rounded-[10px] transition-all duration-200`}>
            <img src={images['icon_dashboard.png']} alt="icon_dashboard" className="w-[25px] h-[25px] absolute left-[18px] top-[8px]" />
            <button className="absolute left-[63px] top-[8px] text-[#FFFFFF] font-bold text-[17px]" onClick={() => handleNavigate('/qllk')}>Quản lý linh kiện</button>
          </div>

          <div className={`absolute w-[250px] h-[40px] left-[15px] top-[350px] bg-[#3F4D67] rounded-[10px] transition-all duration-200`}>
            <img src={images['icon_dashboard.png']} alt="icon_dashboard" className="w-[25px] h-[25px] absolute left-[18px] top-[8px]" />
            <button className="absolute left-[63px] top-[8px] text-[#FFFFFF] font-bold text-[17px]" onClick={() => handleNavigate('/caidat-admin')}>Cài đặt bảo mật</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu_Admin;