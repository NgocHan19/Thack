import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import images from '../../images';
import '../custom.css';

function DSLK_QL2() {
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
            <img src={images['icon_shipment.png']} alt="icon_shipment" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
            <button
                className="w-full h-full text-[#FFFFFF] font-bold text-[17px] flex items-center justify-between pl-[55px] pr-[10px]"
                onClick={() => { toggleDropdown(); navigate('/lohang-ql'); }}
                
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
                <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]" onClick={() => handleNavigate('/nhapkho')}>Nhập kho</button>
              </div>
              <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
                <img src={images['icon_export.png']} alt="icon_export" className="w-[25px] h-[25px] ml-[10px]" />
                <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]" onClick={() => handleNavigate('/xuatkho')}>Xuất kho</button>
              </div>
              <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
                <img src={images['icon_inventory.png']} alt="icon_inventory" className="w-[25px] h-[25px] ml-[10px]" />
                <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]" onClick={() => handleNavigate('/kiemke')}>Kiểm kê</button>
              </div>
              <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
                <img src={images['icon_component.png']} alt="icon_component" className="w-[25px] h-[25px] ml-[10px]" />
                <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]"onClick={() => {  navigate('/dslk-ql'); }}>Linh kiện</button>
              </div>
              <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
                <img src={images['icon_category.png']} alt="icon_category" className="w-[25px] h-[25px] ml-[10px]" />
                <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]"onClick={() => {  navigate('/danhmuc-ql'); }}>Danh mục</button>
              </div>
            </div>
          )}

          <div className={`absolute w-[250px] h-[45px] left-[15px] ${isDropdownOpen ? 'top-[585px]' : 'top-[280px]'} bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] transition-all duration-200`}>
            <img src={images['icon_dashboard.png']} alt="icon_dashboard" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
            <button className="absolute left-[55px] top-[8px] text-[#FFFFFF] font-bold text-[17px]" onClick={() => handleNavigate('/thongke')}>Thống kê</button>
          </div>

          <div className={`absolute w-[250px] h-[45px] left-[15px] ${isDropdownOpen ? 'top-[650px]' : 'top-[345px]'} bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] flex items-center`}>
            <img src={images['icon_dmtc.png']} alt="icon_organization" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
            <button
                className="w-full h-full text-[#FFFFFF] font-bold text-[17px] flex items-center justify-between pl-[55px] pr-[10px]"
                onClick={toggleOrganizationDropdown}
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
          {isOrganizationDropdownOpen && (
            <div className="absolute right-[15px] w-[200px] top={[isDropdownOpen ? '700px' : '400px']}" style={{ top: `${isDropdownOpen ? '700px' : '400px'}` }}>
              <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[10px] flex items-center">
                <img src={images['icon_ncc.png']} alt="icon_organization" className="w-[25px] h-[25px] ml-[10px]" />
                <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]"onClick={() => {  navigate('/nhacungcap'); }}>Nhà cung cấp</button>
              </div>
              <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
                <img src={images['icon_cn.png']} alt="icon_member" className="w-[25px] h-[25px] ml-[10px]" />
                <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]"onClick={() => { navigate('/chinhanh'); }}>Chi nhánh</button>
              </div>
              <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
                <img src={images['icon_nv.png']} alt="icon_member" className="w-[25px] h-[25px] ml-[10px]" />
                <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]" onClick={() => handleNavigate('/nhanvien')}>Nhân viên</button>
              </div>
            </div>
          )}

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
  <div className="left-[342px] top-[38px] absolute text-[#7d7d7d] text-2xl font-bold font-['Inter']">Kho Linh Kiện/ Chi Tiết Linh Kiện</div>
  <div className="w-[1525px] h-[170px] left-[342px] top-[87px] absolute bg-white rounded-[15px]" />
  <div className="left-[436px] top-[119px] absolute text-black text-[32px] font-bold font-['Inter']">Thông Tin Linh Kiện</div>
  <img className="w-[50px] h-[50px] left-[373px] top-[114px] absolute" src={images['icon_dslk.png']} />
  <div className="left-[398px] top-[208px] absolute text-[#3498db] text-base font-bold font-['Inter']">Tên lô:</div>
  <div className="left-[772px] top-[208px] absolute text-[#3498db] text-base font-bold font-['Inter']">Tên linh kiện:</div>
  <div className="w-[1525px] h-[753px] left-[342px] top-[277px] absolute bg-white rounded-[15px]" />
  
  <div className="w-[1473.01px] h-[284px] left-[368px] top-[299px] absolute">
    <div className="left-[311px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Số seri</div>
    <div className="left-[520px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Ngày sản xuất</div>
    <div className="left-[68px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Barcode</div>
    <div className="w-[1473.01px] h-[0px] left-0 top-[35px] absolute border-2 border-[#7f7e7e]"></div>
    <div className="w-[1473.01px] h-[0px] left-0 top-[84px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-[1473.01px] h-[0px] left-0 top-[134px] absolute border-2 border-[#7f7e7e]"></div>
    <div className="w-[1473.01px] h-[0px] left-0 top-[183px] absolute border-2 border-[#7f7e7e]"></div>
    <div className="w-[1473.01px] h-[0px] left-0 top-[134px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-[1473.01px] h-[0px] left-0 top-[183px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[456px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[697px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[212px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="left-[758px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Thời gian sử dụng</div>
    <div className="w-[25px] h-[0px] left-[938px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="left-[1014px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Ngày hết hạn</div>
    <div className="w-[25px] h-[0px] left-[1179px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="left-[1309px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Mô tả</div>
    <div className="w-[1473.01px] h-[0px] left-0 top-[235px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-[1473.01px] h-[0px] left-0 top-[284px] absolute border-2 border-[#cdcdcd]"></div>
  </div>
  <div className="w-[119px] h-5 left-[1724px] top-[990px] absolute">
          <img className="w-5 h-5 left-[99px] top-[20px] absolute origin-top-left -rotate-90" src={images['left.png']}/>
          <img className="w-5 h-5 left-[94px] top-0 absolute origin-top-left rotate-90" src={images['right.png']} />
          <div className="left-0 top-[2px] absolute text-[#b1b1b1] text-xs font-bold font-['Inter']">1/ 10 trang</div>
        </div>
      </div>
  );
}


export default DSLK_QL2;