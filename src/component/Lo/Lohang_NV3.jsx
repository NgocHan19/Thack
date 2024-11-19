import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import images from '../../images';

function Lohang_NV3() {
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
    <div className="relative w-full h-[1080px] bg-[#F4F7FA]">
     <div className="absolute left-[70px] top-[20px] font-inter font-bold text-base leading-[29px] text-[#7D7D7D]"onClick={() => navigate('/lohang-nv')}>Lô hàng/Chi Tiết Linh Kiện Lô Hàng</div>

<div className="w-[1150px] h-[170px] left-[50px] top-[86px] absolute bg-white rounded-[15px]" />
<div className="w-[1150px] h-[753px] left-[50px] top-[276px] absolute bg-white rounded-[15px]" />
<div className="left-[150px] top-[118px] absolute text-[24px] font-bold text-black">Thông Tin Lô Hàng</div>
<img src={images['icon_lh.png']} alt="icon_lh" className="w-[50px] h-[50px] left-[90px] top-[113px] absolute"  />
<div className="w-[148px] h-[41px] left-[70px] top-[193px] absolute bg-[#e4e4e4] rounded-[10px]" />
  <div className="left-[75px] top-[204px] absolute text-[#3498db] text-base ">ID Lô: </div>
  <div className="w-[181px] h-[41px] left-[250px] top-[193px] absolute bg-[#e4e4e4] rounded-[10px]" />
  <div className="left-[255px] top-[204px] absolute text-[#3498db] text-base">Số lượng lô: </div>
  <div className="w-[204px] h-[41px] left-[460px] top-[193px] absolute bg-[#e4e4e4] rounded-[10px]" />
  <div className="left-[465px] top-[204px] absolute text-[#3498db] text-base">Tổng giá: </div>
  <div className="w-60 h-[41px] left-[940px] top-[193px] absolute bg-[#e4e4e4] rounded-[10px]" />
  <div className="left-[945px] top-[204px] absolute text-[#3498db] text-base">Trạng thái:</div>
  <div className="w-[222px] h-[41px] left-[690px] top-[193px] absolute bg-[#e4e4e4] rounded-[10px]" />
  <div className="left-[695px] top-[204px] absolute text-[#3498db] text-base">Tên lô: </div>

  <div className="left-[350px] top-[297px] absolute text-black text-sm font-normal font-['Inter']">Giá</div>
  <div className="left-[250px] top-[297px] absolute text-black text-sm font-normal font-['Inter']">Đơn vị</div>
  <div className="left-[130px] top-[297px] absolute text-black text-sm font-normal font-['Inter']">Tên linh kiện</div>
  <div className="w-[25px] h-[0px] left-[420px] top-[318px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
  <div className="w-[25px] h-[0px] left-[320px] top-[318px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
  <div className="w-[25px] h-[0px] left-[230px] top-[318px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
  <div className="w-[25px] h-[0px] left-[570px] top-[318px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
  <div className="left-[450px] top-[297px] absolute text-black text-sm font-normal font-['Inter']">Ngày sản xuất</div>
  <div className="left-[900px] top-[297px] absolute text-black text-sm font-normal font-['Inter']">Số seri</div>
  <div className="w-[25px] h-[0px] left-[670px] top-[318px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
  <div className="w-[25px] h-[0px] left-[800px] top-[318px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
  <div className="left-[1080px] top-[297px] absolute text-black text-sm font-normal font-['Inter']">Barcode</div>
  <div className="left-[580px] top-[297px] absolute text-black text-sm font-normal font-['Inter']">Số lượng</div>
  <div className="w-[25px] h-[0px] left-[1000px] top-[318px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
  <div className="w-[25px] h-[0px] left-[120px] top-[318px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
  <div className="left-[700px] top-[297px] absolute text-black text-sm font-normal font-['Inter']">Ngày hết hạn</div>
  <img className="w-[40px] h-[40px] left-[70px] top-[343px] absolute" src={images['icon_linhkien.png']}/>
  <div className="w-[1100px] h-[0px] left-[70px] top-[328px] absolute border-2 border-[#cdcdcd]"></div>
  <img className="w-[40px] h-[40px] left-[70px] top-[414px] absolute" src={images['icon_linhkien.png']} />
  <div className="w-[1100px] h-[0px] left-[70px] top-[399px] absolute border-2 border-[#cdcdcd]"></div>
  <img className="w-[40px] h-[40px] left-[70px] top-[482px] absolute" src={images['icon_linhkien.png']} />
  <div className="w-[1100px] h-[0px] left-[70px] top-[467px] absolute border-2 border-[#cdcdcd]"></div>
</div>
);
}
export default Lohang_NV3;