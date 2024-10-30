import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../../images';

function Lohang_QL() {
  const [isDropdown1Open, setDropdown1Open] = useState(false);
  const [isDropdown2Open, setDropdown2Open] = useState(false);
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleTable = () => {
    setIsTableVisible(!isTableVisible);
  };
  const toggleDropdown1 = () => {
    setDropdown1Open(!isDropdown1Open);
  };

  const toggleDropdown2 = () => {
    setDropdown2Open(!isDropdown2Open);
  };
  const [isFormVisible, setIsFormVisible] = useState(false);


  const navigate = useNavigate(); // Sử dụng navigate để điều hướng




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
               onClick={() => { toggleDropdown1(); navigate('/lohang-ql'); }}
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
        {isDropdown1Open && (
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
              <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]"onClick={() => navigate('/dslk-ql')}>Linh kiện</button>
            </div>
            <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
              <img src={images['icon_category.png']} alt="icon_category" className="w-[25px] h-[25px] ml-[10px]" />
              <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]"onClick={() => navigate('/danhmuc-ql')}>Danh mục</button>
            </div>
          </div>
        )}

        {/* Thống kê */}
        <div className={`absolute w-[250px] h-[45px] left-[15px] ${isDropdown1Open ? 'top-[585px]' : 'top-[280px]'} bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] transition-all duration-200`}>
          <img src={images['icon_dashboard.png']} alt="icon_dashboard" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
          <button className="absolute left-[55px] top-[8px] text-[#FFFFFF] font-bold text-[17px]">Thống kê</button>
        </div>
<div>
        {/* Danh mục tổ chức */}
        <div className={`absolute w-[250px] h-[45px] left-[15px] ${isDropdown2Open ? 'top-[650px]' : 'top-[345px]'} bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] flex items-center`}>
          <img src={images['icon_dmtc.png']} alt="icon_organization" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
          <button
              className="w-full h-full text-[#FFFFFF] font-bold text-[17px] flex items-center justify-between pl-[55px] pr-[10px]"
              onClick={toggleDropdown2}
          >
              Danh mục tổ chức
          <img
              src={images['icon_down_arrow.png']}
              alt="icon_downarrow"
              className="w-[20px] h-[20px] ml-[-5px]"
          />
          </button>

        </div>
        {/* Các mục con của Danh mục tổ chức */}
        {isDropdown2Open && (
          <div className="absolute right-[15px] w-[200px] top-[700px]">
            <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[10px] flex items-center">
              <img src={images['icon_ncc.png']} alt="icon_ncc" className="w-[25px] h-[25px] ml-[10px]" />
              <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]" onClick={() => navigate('/Nhacungcap')}>Nhà cung cấp</button>
            </div>
            <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
              <img src={images['icon_cn.png']} alt="icon_cn" className="w-[25px] h-[25px] ml-[10px]" />
              <button a ='#' className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]"onClick={() => navigate('/Chinhanh')}>Chi nhánh</button>
            </div>
            <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
              <img src={images['icon_nv.png']} alt="icon_nv" className="w-[25px] h-[25px] ml-[10px]" />
              <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]">Nhân viên</button>
            </div>
          </div>
        )}
        </div>

        

        {/* Account */}
        <div className="absolute w-[280px] h-[80px] left-0 bottom-0 bg-gradient-to-r from-[#4B4E55] to-[#62656B] rounded-tl-[15px] rounded-tr-[15px]">
          <button className="absolute w-[40px] h-[40px] left-[30px] top-[10px]">
            <img src={images['icon_account.png']} alt="Account Avatar" className="w-full h-full" />
          </button>
          <div className="absolute left-[85px] top-[10px] font-inter font-bold text-[18px] text-[#FFFFFF]">Tên Tài Khoản</div>
          <div className="absolute left-[85px] top-[40px] font-inter font-bold text-[10px] text-[#D9D9D9]">email@gmail.com</div>
          <button className="absolute right-[10px] top-[10px] w-[20px] h-[20px]">
            <img src={images['icon_ring.png']} alt="Notification Ring" className="w-full h-full" />
          </button>
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
      </div>
     <div className="left-[333px] top-[37px] absolute text-[#7d7d7d] text-2xl font-bold font-['Inter']">Kho Linh Kiện</div>
      <div className="w-[1525px] h-[170px] left-[333px] top-[86px] absolute bg-white rounded-[15px]" />
      <div className="w-[1525px] h-[753px] left-[335px] top-[276px] absolute bg-white rounded-[15px]" />
      <div className="left-[427px] top-[118px] absolute text-black text-[32px] font-bold font-['Inter']">Thông Tin Lô Hàng</div>
      <div className="left-[389px] top-[207px] absolute text-[#3498db] text-base font-bold font-['Inter']">Tổng số lô hàng:</div>
      <div className="left-[697px] top-[207px] absolute text-[#3498db] text-base font-bold font-['Inter']">Số lô hàng cận hạn:</div>
      <img src={images['icon_lh.png']} alt="icon_lh" className="w-[50px] h-[50px] left-[364px] top-[113px] absolute"  />
      <div className="absolute w-[279px] h-[50px] left-[364px] top-[299px]">
  <div className="w-[279px] h-[50px] left-0 top-0 absolute bg-[#d9d9d9]/60 rounded-[20px] flex items-center transition duration-200 hover:bg-[#c0c0c0]">
    <img src={images['icon_search.png']} alt="icon_search" className="w-[25px] h-[25px] ml-[15px]" />
    <input
      type="text"
      placeholder="Tìm kiếm..."
      className="ml-[15px] w-full h-full bg-transparent text-[#7f8089] font-semibold text-[14px] placeholder-[#A2A2A2] focus:outline-none"
    />
  </div>
</div>
      <div className="relative">
      {/* Button */}
      <div
        className="w-[184px] h-[50px] absolute left-[1674px] top-[16px] cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="w-[184px] h-[50px] absolute bg-[#64c860] rounded-[15px]" />
        <div className="w-[120.23px] h-[21.29px] absolute left-[48px] top-[14px] text-white text-lg font-semibold font-['Inter']">
          Duyệt lô hàng
        </div>
        <img
          className="w-5 h-5 absolute left-[17px] top-[15px]"
          src={images['icon_duyetlh.png']}
          alt="icon"
        />
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div className="w-[291px] h-[181px] absolute left-[1674px] top-[66px]">
          <div className="w-[291px] h-[181px] bg-white rounded-[25px] border-2 border-[#767676]" />
          <div className="absolute left-[40px] top-[17px] text-[#525050] text-2xl font-bold font-['Inter']">
            Trạng thái lô hàng
          </div>
          <div className="w-[25px] h-[25px] absolute left-[20px] top-[72px] bg-[#d9d9d9] rounded-[5px]" />
          <input 
      type="radio" 
      name="status" 
      id="approved" 
      className="w-[20px] h-[20px] mr-2" 
    />
          <div className="absolute left-[63px] top-[73px] text-[#a1a1a1] text-xl font-normal font-['Inter']">
            Đã duyệt
          </div>
          <div className="w-[25px] h-[25px] absolute left-[20px] top-[120px] bg-[#d9d9d9] rounded-[5px]" />
          <input 
      type="radio" 
      name="status" 
      id="approved" 
      className="w-[20px] h-[20px] mr-2" 
    />
          <div className="absolute left-[63px] top-[121px] text-[#a1a1a1] text-xl font-normal font-['Inter']">
            Bị từ chối
          </div>
        </div>
      )}
    </div>
  <div className="w-[330px] h-[55px] left-[1507px] top-[296px] absolute">
        <div className="w-[330px] h-[55px] left-0 top-0 absolute bg-white rounded-[5px] border border-[#c2c2c2]/80" />
        <div className="left-[47px] top-[16px] absolute text-[#cbcbcb] text-lg font-bold font-['Inter']">Lọc theo: </div>
        <img className="w-5 h-5 left-[12px] top-[18px] absolute" src={images['icon_loc.png']} alt="icon_loc" />
        <img className="w-[25px] h-[25px] left-[289px] top-[15px] absolute" src={images['icon_drop.png']} alt="icon_drop" />
      </div>
      <div className="w-[1473.01px] h-[282px] left-[364px] top-[401px] absolute">
        <div className="left-[438px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Ngày nhận</div>
        <div className="left-[207px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Số seri</div>
        <div className="left-[317px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Tên lô</div>
        <div className="left-[71px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Barcode </div>
        <div className="w-[1473.01px] h-[0px] left-0 top-[33px] absolute border-2 border-[#7f7e7e]"></div>
        <div className="w-[1473.01px] h-[0px] left-0 top-[82px] absolute border-2 border-[#cdcdcd]"></div>
        <div className="w-[1473.01px] h-[0px] left-0 top-[132px] absolute border-2 border-[#7f7e7e]"></div>
        <div className="w-[1473.01px] h-[0px] left-0 top-[181px] absolute border-2 border-[#7f7e7e]"></div>
        <div className="w-[1473.01px] h-[0px] left-0 top-[132px] absolute border-2 border-[#cdcdcd]"></div>
        <div className="w-[1473.01px] h-[0px] left-0 top-[181px] absolute border-2 border-[#cdcdcd]"></div>
        <div className="w-[25px] h-[0px] left-[279px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="w-[25px] h-[0px] left-[394px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="w-[25px] h-[0px] left-[173px] top-[26px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="w-[25px] h-[0px] left-[33px] top-[26px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="w-[25px] h-[0px] left-[554px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="left-[586px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Ngày sản xuất</div>
        <div className="w-[25px] h-[0px] left-[714px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="left-[742px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Ngày hết hạn lô</div>
        <div className="w-[25px] h-[0px] left-[873px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="left-[883px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Số lượng lô hàng</div>
        <div className="w-[25px] h-[0px] left-[1005px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="left-[1042px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Tổng giá</div>
        <div className="w-[25px] h-[0px] left-[1148px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="left-[1165px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Trạng thái lô hàng</div>
        <div className="left-[1363px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú</div>
        <div className="w-[25px] h-[0px] left-[1302px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="relative">
      {/* Hình ảnh kích hoạt bảng xổ */}
      <img
        className="w-5 h-5 left-[6px] top-[48px] absolute cursor-pointer"
        src={images['icon_barcode.png']} 
        alt="Toggle Dropdown"
        onClick={toggleTable}
      />

      {/* Bảng xổ xuống */}
      {isTableVisible && (
        <div className="w-[1473.01px] h-[252px] left-0 top-[231px] absolute">
          <div className="w-[1473px] h-[252px] left-0 top-0 absolute bg-[#eeeeee] rounded-[5px]" />
          <div className="left-[850px] top-[14px] absolute text-black text-sm font-normal font-['Inter']">Giá</div>
          <div className="left-[614px] top-[14px] absolute text-black text-sm font-normal font-['Inter']">Đơn vị</div>
          <div className="left-[274px] top-[14px] absolute text-black text-sm font-normal font-['Inter']">Tên linh kiện</div>
          <div className="left-[1063px] top-[14px] absolute text-black text-sm font-normal font-['Inter']">Ngày sản xuất</div>
          <img className="w-[56.76px] h-[50px] left-[77px] top-[54px] absolute" src={images['icon_linhkien.png']}  alt="item" />
          <div className="w-[1473.01px] h-[0px] left-0 top-[45px] absolute border-2 border-[#cdcdcd]"></div>
          <img className="w-[56.76px] h-[50px] left-[77px] top-[125px] absolute" src={images['icon_linhkien.png']}  alt="item" />
          <div className="w-[1473.01px] h-[0px] left-0 top-[116px] absolute border-2 border-[#cdcdcd]"></div>
          <img className="w-[56.76px] h-[50px] left-[77px] top-[193px] absolute" src={images['icon_linhkien.png']}  alt="item" />
          <div className="w-[1473.01px] h-[0px] left-0 top-[184px] absolute border-2 border-[#cdcdcd]"></div>
          <div className="left-[1371px] top-[14px] absolute text-[#3498db] text-sm font-bold font-['Inter']"onClick={() => navigate('/lohang-ql2')}>Xem chi tiết</div>
        </div>
      )}
    </div>        
      <img className="w-5 h-5 left-[6px] top-[97px] absolute" src={images['icon_barcode.png']} 
        alt="Toggle Dropdown" />
        <img className="w-5 h-5 left-[6px] top-[146px] absolute" src={images['icon_barcode.png']} 
        alt="Toggle Dropdown" />
        <img className="w-5 h-5 left-[6px] top-[197px] absolute" src={images['icon_barcode.png']} 
        alt="Toggle Dropdown" />
        <img className="w-5 h-5 left-[6px] top-[246px] absolute" src={images['icon_barcode.png']} 
        alt="Toggle Dropdown" />
        <div className="w-[1473.01px] h-[0px] left-0 top-[233px] absolute border-2 border-[#cdcdcd]"></div>
        <div className="w-[1473.01px] h-[0px] left-0 top-[282px] absolute border-2 border-[#cdcdcd]"></div>
        <div className="w-[100px] h-[27px] left-[1176px] top-[244px] absolute">
          <div className="w-[100px] h-[27px] left-0 top-0 absolute bg-white rounded-[10px] border border-[#efec38]" />
          <div className="left-[7px] top-[5px] absolute text-[#efec38] text-sm font-bold font-['Inter']">Đã nhập kho</div>
        </div>
        <div className="w-[122px] h-[27px] left-[1166px] top-[192px] absolute">
          <div className="w-[122px] h-[27px] left-0 top-0 absolute bg-white rounded-[10px] border border-[#9f9f9f]" />
          <div className="left-[9px] top-[5px] absolute text-[#9f9f9f] text-sm font-bold font-['Inter']">Chưa nhập kho</div>
        </div>
        <div className="w-[86px] h-[27px] left-[1183px] top-[143px] absolute">
          <div className="w-[86px] h-[27px] left-0 top-0 absolute bg-white rounded-[10px] border border-[#cd4141]" />
          <div className="w-[65px] h-[14.34px] left-[11px] top-[5.06px] absolute text-[#cd4141] text-sm font-bold font-['Inter']">Bị từ chối</div>
        </div>
        <div className="w-[91px] h-[27px] left-[1180px] top-[43px] absolute">
          <div className="w-[91px] h-[27px] left-0 top-0 absolute bg-white rounded-[10px] border border-[#3498db]" />
          <div className="left-[10px] top-[5px] absolute text-[#3498db] text-sm font-bold font-['Inter']">Chờ duyệt </div>
        </div>
        <div className="w-[81px] h-[27px] left-[1185px] top-[91px] absolute">
          <div className="w-[81px] h-[27px] left-0 top-0 absolute bg-white rounded-[10px] border border-[#36de47]" />
          <div className="left-[10px] top-[5px] absolute text-[#36de47] text-sm font-bold font-['Inter']">Đã duyệt</div>
        </div>
      </div>
      

      <div className="w-[119px] h-5 left-[1718px] top-[987px] absolute">
        <img className="w-5 h-5 left-[99px] top-[20px] absolute origin-top-left -rotate-90" src={images['left.png']}/>
        <img className="w-5 h-5 left-[94px] top-0 absolute origin-top-left rotate-90" src={images['right.png']} />
        <div className="left-0 top-[2px] absolute text-[#b1b1b1] text-xs font-bold font-['Inter']">1/ 10 trang</div>
      </div>
    </div>
  );
}
export default Lohang_QL;