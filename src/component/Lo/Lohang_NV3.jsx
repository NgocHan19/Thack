import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import hook điều hướng
import images from '../../images';
import '../custom.css';

function Lohang_NV3() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isTableVisible, setIsTableVisible] = useState(false);

  const toggleTable = () => {
    setIsTableVisible(!isTableVisible);
  };


  const navigate = useNavigate(); // Hook điều hướng

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  }; 

  return (
    <div className="relative w-full h-[1080px]">
      {/* Menu */}
      <div className="absolute w-[280px] h-full left-0 top-0">
        <div className="absolute w-full h-full bg-gradient-to-r from-[#4B4E55] to-[#62656B] rounded-r-[15px]"></div>
        
        {/* Logo */}
        <div className="absolute w-[180px] h-[60px] left-[30px] top-0">
          <img src={images['logo.png']} alt="Logo" className="w-full h-full object-cover rounded-r-[15px]" />
        </div>
        
        {/* Tìm kiếm */}
        <div className="absolute w-[250px] h-[45px] left-[15px] top-[85px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] flex items-center transition duration-200 hover:bg-[#4B4E55]">
          <img src={images['search.png']} alt="icon_search" className="w-[25px] h-[25px] ml-[15px]" />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="ml-[15px] w-full h-full bg-transparent text-white font-bold text-[14px] placeholder-[#A2A2A2] focus:outline-none"
          />
        </div>

        {/* Dashboard */}
        <div className="absolute w-[250px] h-[45px] left-[15px] top-[150px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] flex items-center">
          <img src={images['icon_dashboard.png']} alt="icon_dashboard" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
          <button className="absolute left-[55px] top-[8px] text-[#FFFFFF] font-bold text-[17px]">Dashboard</button>
        </div>

        {/* Lô hàng */}
<div className="absolute w-[250px] h-[45px] left-[15px] top-[215px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] flex items-center">
  <img src={images['icon_shipment.png']} alt="icon_shipment" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
  <button
    className="w-full h-full text-[#FFFFFF] font-bold text-[17px] flex items-center justify-between pl-[55px] pr-[10px]"
    onClick={() => { toggleDropdown(); navigate('/lohang-nv'); }} // Gọi cả toggleDropdown và navigate
  >
    Lô hàng
    <img
      src={images['icon_down_arrow.png']}
      alt="icon_downarrow"
      className="w-[20px] h-[20px] ml-[-5px]"
    />
  </button>
</div>


        {/* Các mục con của Lô hàng */}
        {isDropdownOpen && (
          <div className="absolute right-[15px] top-[270px] w-[200px]">
            <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[10px] flex items-center">
              <img src={images['icon_import.png']} alt="icon_import" className="w-[25px] h-[25px] ml-[10px]" />
              <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]">Nhập kho</button>
            </div>
            <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
              <img src={images['icon_export.png']} alt="icon_export" className="w-[25px] h-[25px] ml-[10px]" />
              <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]">Xuất kho</button>
            </div>
            <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
              <img src={images['icon_inventory.png']} alt="icon_inventory" className="w-[25px] h-[25px] ml-[10px]" />
              <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]">Kiểm kê</button>
            </div>
            <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
              <img src={images['icon_component.png']} alt="icon_component" className="w-[25px] h-[25px] ml-[10px]" />
              <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]"onClick={() => navigate('/dslk-nv')}>Linh kiện</button>
            </div>
            <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
              <img src={images['icon_category.png']} alt="icon_category" className="w-[25px] h-[25px] ml-[10px]" />
              <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]"onClick={() => navigate('/danhmuc-nv')}>Danh mục</button>
            </div>
          </div>
        )}

        {/* Thống kê */}
        <div className={`absolute w-[250px] h-[45px] left-[15px] ${isDropdownOpen ? 'top-[585px]' : 'top-[280px]'} bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] transition-all duration-200`}>
          <img src={images['icon_dashboard.png']} alt="icon_dashboard" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
          <button className="absolute left-[55px] top-[8px] text-[#FFFFFF] font-bold text-[17px]">Thống kê</button>
        </div>

          {/* Account */}
          <div className="absolute w-[280px] h-[80px] left-0 bottom-0 bg-gradient-to-r from-[#4B4E55] to-[#62656B] rounded-tl-[15px] rounded-tr-[15px]">
          <button className="absolute w-[40px] h-[40px] left-[30px] top-[10px]" onClick={toggleForm}>
            <img src={images['icon_account.png']} alt="Account Avatar" className="w-full h-full" />
          </button>
          <div className="absolute left-[85px] top-[10px] font-inter font-bold text-[18px] text-[#FFFFFF]">Tên Tài Khoản</div>
          <div className="absolute left-[85px] top-[40px] font-inter font-bold text-[10px] text-[#D9D9D9]">email@gmail.com</div>
          <button className="absolute right-[10px] top-[10px] w-[20px] h-[20px]">
            <img src={images['icon_ring.png']} alt="Notification Ring" className="w-full h-full" />
          </button>
        </div>
      </div>

      {/* Form for Account Information */}
      {isFormVisible && (
        <div className="absolute left-[290px] top-[auto] bottom-[10px] w-[200px] h-[80px] bg-gradient-to-r from-[#4B4E55] to-[#62656B] rounded-[15px] flex flex-col items-center justify-center border-2 border-[#D8D8D8]">
          <button className="w-full h-[30px] bg-gradient-to-r from-[#4B4E55] to-[#62656B] rounded-[5px] text-[#FFFFFF] flex items-center">
            <img src={images['icon_info.png']} alt="icon_infp" className="w-[20px] h-[20px] ml-[10px] mr-[10px]" />
            Thông tin cá nhân
          </button>
          <button className="w-full h-[30px] bg-gradient-to-r from-[#4B4E55] to-[#62656B] rounded-[5px] text-[#FFFFFF] mt-2 flex items-center">
            <img src={images['icon_logout.png']} alt="icon_logout" className="w-[20px] h-[20px] ml-[10px] mr-[10px]" />
            Đăng xuất
          </button>
        </div>
      )}


  <div className="left-[333px] top-[37px] absolute text-[#7d7d7d] text-2xl font-bold font-['Inter']">Lô Hàng / Chi Tiết Linh Kiện Lô Hàng</div>
  <div className="w-[1525px] h-[170px] left-[333px] top-[86px] absolute bg-white rounded-[15px]" />
  <div className="w-[1525px] h-[753px] left-[335px] top-[276px] absolute bg-white rounded-[15px]" />
  <div className="left-[427px] top-[118px] absolute text-black text-[32px] font-bold font-['Inter']">Thông Tin Lô Hàng</div>
  <img className="w-[50px] h-[50px] left-[364px] top-[113px] absolute" src={images['icon_lh.png']}/>
  <div className="w-[148px] h-[41px] left-[389px] top-[193px] absolute bg-[#e4e4e4] rounded-[10px]" />
  <div className="left-[405px] top-[204px] absolute text-[#3498db] text-base font-bold font-['Inter']">ID Lô: </div>
  <div className="w-[181px] h-[41px] left-[835px] top-[193px] absolute bg-[#e4e4e4] rounded-[10px]" />
  <div className="left-[851px] top-[204px] absolute text-[#3498db] text-base font-bold font-['Inter']">Số lượng lô: </div>
  <div className="w-[204px] h-[41px] left-[1054px] top-[193px] absolute bg-[#e4e4e4] rounded-[10px]" />
  <div className="left-[1070px] top-[204px] absolute text-[#3498db] text-base font-bold font-['Inter']">Tổng giá: </div>
  <div className="w-60 h-[41px] left-[1296px] top-[193px] absolute bg-[#e4e4e4] rounded-[10px]" />
  <div className="left-[1312px] top-[204px] absolute text-[#3498db] text-base font-bold font-['Inter']">Trạng thái:</div>
  <div className="w-[222px] h-[41px] left-[575px] top-[193px] absolute bg-[#e4e4e4] rounded-[10px]" />
  <div className="left-[591px] top-[204px] absolute text-[#3498db] text-base font-bold font-['Inter']">Tên lô: </div>
  <div className="left-[835px] top-[297px] absolute text-black text-sm font-normal font-['Inter']">Giá</div>
  <div className="left-[700px] top-[297px] absolute text-black text-sm font-normal font-['Inter']">Đơn vị</div>
  <div className="left-[533px] top-[297px] absolute text-black text-sm font-normal font-['Inter']">Tên linh kiện</div>
  <div className="w-[25px] h-[0px] left-[777px] top-[318px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
  <div className="w-[25px] h-[0px] left-[674px] top-[318px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
  <div className="w-[25px] h-[0px] left-[484px] top-[318px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
  <div className="w-[25px] h-[0px] left-[926px] top-[318px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
  <div className="left-[976px] top-[297px] absolute text-black text-sm font-normal font-['Inter']">Ngày sản xuất</div>
  <div className="left-[1502px] top-[297px] absolute text-black text-sm font-normal font-['Inter']">Số seri</div>
  <div className="w-[25px] h-[0px] left-[1444px] top-[318px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
  <div className="w-[25px] h-[0px] left-[1593px] top-[318px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
  <div className="left-[1643px] top-[297px] absolute text-black text-sm font-normal font-['Inter']">Barcode</div>
  <div className="left-[1164px] top-[297px] absolute text-black text-sm font-normal font-['Inter']">Số lượng</div>
  <div className="w-[25px] h-[0px] left-[1106px] top-[318px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
  <div className="w-[25px] h-[0px] left-[1255px] top-[318px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
  <div className="left-[1305px] top-[297px] absolute text-black text-sm font-normal font-['Inter']">Ngày hết hạn</div>
  <img className="w-[56.76px] h-[50px] left-[392px] top-[343px] absolute" src={images['icon_linhkien.png']}/>
  <div className="w-[1473.01px] h-[0px] left-[359px] top-[328px] absolute border-2 border-[#cdcdcd]"></div>
  <img className="w-[56.76px] h-[50px] left-[392px] top-[414px] absolute" src={images['icon_linhkien.png']} />
  <div className="w-[1473.01px] h-[0px] left-[359px] top-[399px] absolute border-2 border-[#cdcdcd]"></div>
  <img className="w-[56.76px] h-[50px] left-[392px] top-[482px] absolute" src={images['icon_linhkien.png']} />
  <div className="w-[1473.01px] h-[0px] left-[359px] top-[467px] absolute border-2 border-[#cdcdcd]"></div>
</div>
);
}
export default Lohang_NV3;