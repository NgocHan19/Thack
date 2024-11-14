import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import images from '../../images';

function Chinhanh_Tao() {
  const navigate = useNavigate(); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOrganizationDropdownOpen, setIsOrganizationDropdownOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Handle button click
  const handleClick = () => {
    setShowSuccessMessage(true);

    // Automatically hide the message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };
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
       <div className="w-[1150px] h-[981px] left-[50px] top-[49px] absolute bg-white rounded-[15px] shadow-lg" />
       <div className="left-[50px] top-[16px] absolute text-[#7d7d7d] text-2xl font-bold font-['Inter']" onClick={() => navigate('/chinhanh')}>Chi nhánh/Tạo mới</div>

  <div className="left-[100px] top-[190px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Tên chi nhánh</div>
  <div className="left-[100px] top-[282px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Địa chỉ</div>
  <div className="absolute w-[380px] h-[35px] left-[100px] top-[221px]">
  <div className="w-full h-full bg-white rounded-[10px] border border-[#525050] flex items-center">
    <input
      type="text"
      placeholder="Nhập dữ liệu..."
      className="w-full h-full bg-transparent text-[#525050] font-semibold text-[14px] placeholder-[#A2A2A2] focus:outline-none px-[10px]"
    />
  </div>
</div>  <div className="left-[650px] top-[190px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Quản lý chi nhánh</div>
<div className="absolute w-[380px] h-[35px] left-[650px] top-[221px]">
  <div className="w-full h-full bg-white rounded-[10px] border border-[#525050] flex items-center">
    <input
      type="text"
      placeholder="Nhập dữ liệu..."
      className="w-full h-full bg-transparent text-[#525050] font-semibold text-[14px] placeholder-[#A2A2A2] focus:outline-none px-[10px]"
    />
  </div>
</div>
  <div className="left-[100px] top-[380px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Số điện thoại của chi nhánh</div>
  <div className="absolute w-[380px] h-[35px] left-[100px] top-[419px]">
  <div className="w-full h-full bg-white rounded-[10px] border border-[#525050] flex items-center">
    <input
      type="text"
      placeholder="Nhập dữ liệu..."
      className="w-full h-full bg-transparent text-[#525050] font-semibold text-[14px] placeholder-[#A2A2A2] focus:outline-none px-[10px]"
    />
  </div>
</div>
<div className="left-[100px] top-[480px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Ghi chú</div>
  <div className="absolute w-[600px] h-[200px] left-[100px] top-[520px]">
  <div className="w-full h-full bg-white rounded-[10px] border border-[#525050] flex items-center">
    <textarea
      placeholder="Nhập nội dung ở đây..."
      className="w-full h-full bg-transparent text-[#525050] font-semibold text-[16px] placeholder-[#A2A2A2] focus:outline-none p-[10px] resize-none"
    />
  </div>
</div>
<div className="absolute w-[380px] h-[35px] left-[100px] top-[319px] bg-white rounded-[10px] border border-[#525050] flex items-center">
  <input 
    type="text" 
    placeholder="Nhập thông tin..." 
    className="w-full h-full bg-transparent text-[#525050] font-semibold text-[16px] placeholder-[#A2A2A2] focus:outline-none px-[10px]" 
  />
</div>  <div className="w-[200px] h-[55px] left-[396px] top-[890px] absolute bg-[#3498db] rounded-[5px]" />
  <div className="left-[449px] top-[900px] absolute text-white text-2xl font-bold font-['Inter']" onClick={handleClick}>Tạo mới</div>
  {showSuccessMessage && (
        <div className="absolute left-[393px] top-[960px] bg-green-500 text-white p-3 rounded-md">
          Thành công
        </div>
      )}
    
  <img src={images['icon_ttcn.png']}  className="w-[50px] h-[50px] left-[90px] top-[79px] absolute"  />
  <div className="left-[150px] top-[84px] absolute text-black text-[32px] font-bold font-['Inter']">Tạo Chi nhánh mới</div>

</div>  
  );
}
  export default Chinhanh_Tao;