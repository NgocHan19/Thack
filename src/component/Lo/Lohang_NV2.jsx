import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import hook điều hướng
import images from '../../images';

function Lohang_NV2() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

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
        <div className={`absolute w-[250px] h-[45px] left-[15px] top-[215px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] flex items-center`}>
          <img src={images['icon_shipment.png']} alt="icon_shipment" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
          <button
            className="w-full h-full text-[#FFFFFF] font-bold text-[17px] flex items-center justify-between pl-[55px] pr-[10px]"
            onClick={() => navigate('/lohang')} // Điều hướng đến Lohang_NV.jsx
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
              <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]" onClick={() => navigate('/linhkien')}>
                Linh kiện
              </button>
            </div>
            <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
              <img src={images['icon_category.png']} alt="icon_category" className="w-[25px] h-[25px] ml-[10px]" />
              <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]" onClick={() => navigate('/danhmuc')}>
                Danh mục
              </button>
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
            <img src={images['icon_account.png']} alt="icon_account" className="w-full h-full" />
          </button>
          <div className="absolute w-[180px] h-[40px] left-[80px] top-[15px]">
            <p className="text-white text-[17px] font-bold">Admin</p>
          </div>
        </div>
      </div>
  <div className="left-[333px] top-[37px] absolute text-[#7d7d7d] text-2xl font-bold font-['Inter']">Lô Hàng</div>
  <div className="w-[1525px] h-[170px] left-[333px] top-[86px] absolute bg-white rounded-[15px]" />
  <div className="w-[1525px] h-[753px] left-[335px] top-[276px] absolute bg-white rounded-[15px]" />
  <div className="left-[427px] top-[118px] absolute text-black text-[32px] font-bold font-['Inter']">Thông Tin Lô Hàng</div>
  <div className="left-[389px] top-[207px] absolute text-[#3498db] text-base font-bold font-['Inter']">Tổng số lô hàng:</div>
  <div className="left-[697px] top-[207px] absolute text-[#3498db] text-base font-bold font-['Inter']">Số lô hàng cận hạn:</div>
  <img className="w-[50px] h-[50px] left-[364px] top-[113px] absolute" src="https://via.placeholder.com/50x50" />
  <div className="w-[279px] h-[50px] left-[364px] top-[299px] absolute">
    <div className="w-[279px] h-[50px] left-0 top-0 absolute bg-[#d9d9d9]/60 rounded-[20px]" />
    <div className="left-[25px] top-[17px] absolute text-[#7f8089] text-xs font-semibold font-['Inter']">Tìm kiếm...</div>
    <img className="w-[25px] h-[38px] left-[240px] top-[6px] absolute" src="https://via.placeholder.com/25x38" />
  </div>
  <div className="w-[330px] h-[55px] left-[1507px] top-[296px] absolute">
    <div className="w-[330px] h-[55px] left-0 top-0 absolute bg-white rounded-[5px] border border-[#c2c2c2]/80" />
    <div className="left-[47px] top-[16px] absolute text-[#cbcbcb] text-lg font-bold font-['Inter']">Lọc theo: </div>
    <img className="w-5 h-5 left-[12px] top-[18px] absolute" src="https://via.placeholder.com/20x20" />
    <img className="w-[25px] h-[25px] left-[289px] top-[15px] absolute" src="https://via.placeholder.com/25x25" />
  </div>
  <div className="w-[1476.01px] h-[483px] left-[361px] top-[408px] absolute">
    <div className="left-[441px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Ngày nhận</div>
    <div className="left-[210px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Số seri</div>
    <div className="left-[320px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Tên lô</div>
    <div className="left-[77px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Barcode </div>
    <div className="w-[1473.01px] h-[0px] left-[3px] top-[33px] absolute border-2 border-[#7f7e7e]"></div>
    <div className="w-[1473.01px] h-[0px] left-[3px] top-[82px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-[1473.01px] h-[0px] left-[3px] top-[132px] absolute border-2 border-[#7f7e7e]"></div>
    <div className="w-[1473.01px] h-[0px] left-[3px] top-[181px] absolute border-2 border-[#7f7e7e]"></div>
    <div className="w-[1473.01px] h-[0px] left-[3px] top-[132px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-[1473.01px] h-[0px] left-[3px] top-[181px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[282px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[397px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[176px] top-[26px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[43px] top-[26px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[557px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="left-[589px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Ngày sản xuất</div>
    <div className="w-[25px] h-[0px] left-[717px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="left-[745px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Ngày hết hạn lô</div>
    <div className="w-[25px] h-[0px] left-[876px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="left-[886px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Số lượng lô hàng</div>
    <div className="w-[25px] h-[0px] left-[1008px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="left-[1045px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Tổng giá</div>
    <div className="w-[25px] h-[0px] left-[1151px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="left-[1168px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Trạng thái lô hàng</div>
    <div className="left-[1366px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú</div>
    <div className="w-[25px] h-[0px] left-[1305px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <img className="w-5 h-5 left-[9px] top-[48px] absolute" src="https://via.placeholder.com/20x20" />
    <img className="w-5 h-5 left-[9px] top-[97px] absolute" src="https://via.placeholder.com/20x20" />
    <img className="w-5 h-5 left-[9px] top-[146px] absolute" src="https://via.placeholder.com/20x20" />
    <img className="w-5 h-5 left-[9px] top-[196px] absolute" src="https://via.placeholder.com/20x20" />
    <div className="w-[1473.01px] h-[252px] left-0 top-[231px] absolute">
      <div className="w-[1473px] h-[252px] left-0 top-0 absolute bg-[#eeeeee] rounded-[5px]" />
      <div className="left-[850px] top-[14px] absolute text-black text-sm font-normal font-['Inter']">Giá</div>
      <div className="left-[614px] top-[14px] absolute text-black text-sm font-normal font-['Inter']">Đơn vị</div>
      <div className="left-[274px] top-[14px] absolute text-black text-sm font-normal font-['Inter']">Tên linh kiện</div>
      <div className="left-[1063px] top-[14px] absolute text-black text-sm font-normal font-['Inter']">Ngày sản xuất</div>
      <img className="w-[56.76px] h-[50px] left-[77px] top-[54px] absolute" src="https://via.placeholder.com/57x50" />
      <div className="w-[1473.01px] h-[0px] left-0 top-[45px] absolute border-2 border-[#cdcdcd]"></div>
      <img className="w-[56.76px] h-[50px] left-[77px] top-[125px] absolute" src="https://via.placeholder.com/57x50" />
      <div className="w-[1473.01px] h-[0px] left-0 top-[116px] absolute border-2 border-[#cdcdcd]"></div>
      <img className="w-[56.76px] h-[50px] left-[77px] top-[193px] absolute" src="https://via.placeholder.com/57x50" />
      <div className="w-[1473.01px] h-[0px] left-0 top-[184px] absolute border-2 border-[#cdcdcd]"></div>
      <div className="left-[1371px] top-[14px] absolute text-[#3498db] text-sm font-bold font-['Inter']">Xem chi tiết </div>
    </div>
  </div>
  <div className="w-[119px] h-5 left-[1715px] top-[987px] absolute">
    <img className="w-5 h-5 left-[99px] top-[20px] absolute origin-top-left -rotate-90" src="https://via.placeholder.com/20x20" />
    <img className="w-5 h-5 left-[94px] top-0 absolute origin-top-left rotate-90" src="https://via.placeholder.com/20x20" />
    <div className="left-0 top-[2px] absolute text-[#b1b1b1] text-xs font-bold font-['Inter']">1/ 10 trang</div>
  </div>
  <img className="w-[30px] h-[30px] left-[1457px] top-[308px] absolute" src="https://via.placeholder.com/30x30" />
</div>
)}
export default Lohang_NV2;
