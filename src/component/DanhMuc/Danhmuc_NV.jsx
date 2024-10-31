import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import hook điều hướng
import images from '../../images';
import '../custom.css';

function Danhmuc_NV() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isTableVisible, setIsTableVisible] = useState(false);

  const toggleTable = () => {
    setIsTableVisible(!isTableVisible);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const navigate = useNavigate(); // Hook điều hướng

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
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
            <button className="absolute left-[55px] top-[8px] text-[#FFFFFF] font-bold text-[17px]">Dashboard</button>
          </div>

          <div className={`absolute w-[250px] h-[45px] left-[15px] top-[215px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] flex items-center`}>
            <img src={images['icon_shipment.png']} alt="icon_shipment" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
            <button
              className="w-full h-full text-[#FFFFFF] font-bold text-[17px] flex items-center justify-between pl-[55px] pr-[10px]"
              onClick={() => { toggleDropdown(); navigate('/lohang-nv'); }}
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

          <div className={`absolute w-[250px] h-[45px] left-[15px] ${isDropdownOpen ? 'top-[585px]' : 'top-[280px]'} bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] transition-all duration-200`}>
            <img src={images['icon_dashboard.png']} alt="icon_dashboard" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
            <button className="absolute left-[55px] top-[8px] text-[#FFFFFF] font-bold text-[17px]">Thống kê</button>
          </div>

          <div className="absolute w-[280px] h-[80px] left-0 bottom-0 bg-gradient-to-r from-[#4B4E55] to-[#62656B] rounded-tl-[15px] rounded-br-[15px] ">
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

  <div className="left-[340px] top-[37px] absolute text-[#7d7d7d] text-2xl font-bold font-['Inter']">Kho Linh Kiện</div>
  <div className="w-[1525px] h-[170px] left-[340px] top-[86px] absolute bg-white rounded-[15px]" />
  <div className="w-[1525px] h-[753px] left-[340px] top-[276px] absolute bg-white rounded-[15px]" />
  <div className="left-[434px] top-[118px] absolute text-black text-[32px] font-bold font-['Inter']">Danh Mục Linh Kiện</div>
  <div className="left-[396px] top-[207px] absolute text-[#3498db] text-base font-bold font-['Inter']">Tổng số danh mục:</div>
  <div className="left-[744px] top-[207px] absolute text-[#3498db] text-base font-bold font-['Inter']">Danh mục cha:</div>
  <div className="left-[1060px] top-[207px] absolute text-[#3498db] text-base font-bold font-['Inter']">Danh mục con:</div>
  <img className="w-[50px] h-[50px] left-[371px] top-[113px] absolute" src={images['icon_dmlk.png']} />


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
  <div className="w-[330px] h-[55px] left-[1514px] top-[300px] absolute">
    <div className="w-[330px] h-[55px] left-0 top-0 absolute bg-white rounded-[5px] border border-[#c2c2c2]/80" />
    <div className="left-[47px] top-[16px] absolute text-[#cbcbcb] text-lg font-bold font-['Inter']">Lọc theo: </div>
    <img className="w-5 h-5 left-[12px] top-[18px] absolute" src={images['icon_loc.png']} />
    <img className="w-[25px] h-[25px] left-[289px] top-[15px] absolute" src={images['icon_drop.png']}/>
  </div>
  <div className="w-[1476.01px] h-[482px] left-[365px] top-[406px] absolute">
    <div className="left-[517px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Tên danh mục</div>
    <div className="left-[240px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Số hiệu danh mục</div>
    <div className="left-[103px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">ID</div>
    <div className="w-[1473.01px] h-[0px] left-[3px] top-[32px] absolute border-2 border-[#7f7e7e]"></div>
    <div className="w-[1473.01px] h-[0px] left-[3px] top-[81px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-[1473.01px] h-[0px] left-[3px] top-[131px] absolute border-2 border-[#7f7e7e]"></div>
    <div className="w-[1473.01px] h-[0px] left-[3px] top-[180px] absolute border-2 border-[#7f7e7e]"></div>
    <div className="w-[1473.01px] h-[0px] left-[3px] top-[131px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-[1473.01px] h-[0px] left-[3px] top-[180px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[412px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[188px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[43px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[716px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="left-[823px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Mô tả</div>
    <div className="w-[25px] h-[0px] left-[968px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="left-[990px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Số hiệu danh mục cấp cha</div>
    <div className="left-[1310px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú</div>
    <div className="w-[25px] h-[0px] left-[1181px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>

    
      
    <img className="w-5 h-5 left-[9px] top-[96px] absolute" src={images['icon_barcode.png']} />
    <img className="w-5 h-5 left-[9px] top-[145px] absolute" src={images['icon_barcode.png']} />
    <img
        className="w-5 h-5 left-[6px] top-[48px] absolute cursor-pointer"
        src={images['icon_barcode.png']}
        alt="Toggle Dropdown"
        onClick={toggleTable}
        
      />
    {isTableVisible && (
        <div className="w-[1473.01px] h-[252px] left-0 top-[230px] absolute">
        <div className="w-[1473px] h-[252px] left-0 top-0 absolute bg-[#eeeeee] rounded-[5px]" />
        <div className="w-[1473.01px] h-[0px] left-0 top-[45px] absolute border-2 border-[#cdcdcd]"></div>
        <div className="w-[1473.01px] h-[0px] left-0 top-[116px] absolute border-2 border-[#cdcdcd]"></div>
        <div className="w-[1473.01px] h-[0px] left-0 top-[184px] absolute border-2 border-[#cdcdcd]"></div>
        <div className="left-[611px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Tên danh mục</div>
        <div className="left-[274px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Số hiệu danh mục con</div>
        <div className="left-[84px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">ID</div>
        <div className="left-[936px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Mô tả</div>
        <div className="left-[1259px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú</div>
      </div>
      )}
    </div>        
    
  <div className="w-[119px] h-5 left-[1719px] top-[990px] absolute">
    <img className="w-5 h-5 left-[99px] top-[20px] absolute origin-top-left -rotate-90" src={images['left.png']} />
    <img className="w-5 h-5 left-[94px] top-0 absolute origin-top-left rotate-90" src={images['right.png']} />
    <div className="left-0 top-[2px] absolute text-[#b1b1b1] text-xs font-bold font-['Inter']">1/ 10 trang</div>
  </div>
</div>
 
  );
}


export default Danhmuc_NV;