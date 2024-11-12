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
    <div className="relative w-full h-full">
      <div className="absolute w-[280px] h-[1080px] left-0 top-0">
        <div className="absolute w-full h-full bg-gradient-to-r from-[#4B4E55] to-[#62656B] rounded-r-[15px]">
          <div className="absolute w-[180px] h-[60px] left-[30px] top-0">
            <img src={images['logo.png']} alt="Logo" className="w-full h-full object-cover rounded-r-[15px]" />
          </div>
          
          <div className="absolute w-[250px] h-[45px] left-[15px] top-[85px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] flex items-center transition duration-200 hover:bg-[#4B4E55]">
            <img src={images['search.png']} alt="icon_search" className="w-[25px] h-[25px] ml-[15px]" />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="ml-[15px] w-full h-full bg-transparent text-white font-bold text-[14px] placeholder-[#A2A2A2] focus:outline-none"
            />
          </div>

          <div className="absolute w-[250px] h-[45px] left-[15px] top-[150px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] flex items-center">
            <img src={images['icon_dashboard.png']} alt="icon_dashboard" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
            <button className="absolute left-[55px] top-[8px] text-[#FFFFFF] font-bold text-[17px]"  onClick={() => handleNavigate('/dashboard')}>Dashboard</button>
          </div>

          <div className={`absolute w-[250px] h-[45px] left-[15px] top-[215px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] flex items-center`}>
            <img src={images['icon_QLND.png']} alt="icon_shipment" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
            <button
                className="w-full h-full text-[#FFFFFF] font-bold text-[17px] flex items-center justify-between pl-[55px] pr-[10px]"
                onClick={() => handleNavigate('/qlnd')}
            >
                Quản lý người dùng

            </button>
          </div>



          <div className={`absolute w-[250px] h-[45px] left-[15px] ${isDropdownOpen ? 'top-[585px]' : 'top-[280px]'} bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] transition-all duration-200`}>
            <img src={images['icon_QLLK.png']} alt="icon_dashboard" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
            <button className="absolute left-[55px] top-[8px] text-[#FFFFFF] font-bold text-[17px]" onClick={() => handleNavigate('/qllk')}>Quản lí linh kiện</button>
          </div>

          <div className={`absolute w-[250px] h-[45px] left-[15px] ${isDropdownOpen ? 'top-[650px]' : 'top-[345px]'} bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] flex items-center`}>
            <img src={images['icon_Caidat.png']} alt="icon_organization" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
            <button
                className="w-full h-full text-[#FFFFFF] font-bold text-[17px] flex items-center justify-between pl-[55px] pr-[10px]"
                onClick={() => handleNavigate('/caidat-admin')}
            >
                Cài đặt

            </button>
          </div>



          <div className="absolute w-[280px] h-[80px] left-0 bottom-0 bg-gradient-to-r from-[#4B4E55] to-[#62656B] rounded-tl-[15px] rounded-br-[15px]">
            <button className="absolute w-[40px] h-[40px] left-[30px] top-[10px]" onClick={toggleForm}>
              <img src={images['icon_account1.png']} alt="Account Avatar" className="w-full h-full" />
            </button>
            <div className="absolute left-[85px] top-[10px] font-inter font-bold text-[18px] text-[#FFFFFF]">Tên Tài Khoản</div>
            <div className="absolute left-[85px] top-[40px] font-inter font-bold text-[10px] text-[#D9D9D9]">email@gmail.com</div>
            <button className="absolute right-[10px] top-[10px] w-[20px] h-[20px]">
              <img src={images['icon_ring.png']} alt="Notification Ring" className="w-full h-full" />
            </button>
          </div>        
        </div>
      </div>

      {isFormVisible && (
        <div className="absolute left-[30px] top-[910px] w-[200px] h-[80px] bg-gradient-to-r from-[#4B4E55] to-[#62656B] rounded-[15px] flex flex-col items-center justify-center border-2 border-[#D8D8D8]">
          <button  onClick={() => handleNavigate('/suathongtincanhan')}className="w-full h-[30px] bg-gradient-to-r from-[#4B4E55] to-[#62656B] rounded-[5px] text-[#FFFFFF] flex items-center">
            <img src={images['icon_info.png']} alt="icon_infp" className="w-[20px] h-[20px] ml-[10px] mr-[10px]" />
            Thông tin cá nhân
          </button>
          <button onClick={() => handleNavigate('/dangxuat')} className="w-full h-[30px] bg-gradient-to-r from-[#4B4E55] to-[#62656B] rounded-[5px] text-[#FFFFFF] mt-2 flex items-center">
            <img src={images['icon_logout.png']} alt="icon_logout" className="w-[20px] h-[20px] ml-[10px] mr-[10px]" />
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu_Admin;