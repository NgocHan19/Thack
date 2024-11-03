import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../../images';

function Nhacungcap_Tao() {
  const navigate = useNavigate(); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOrganizationDropdownOpen, setIsOrganizationDropdownOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isTableVisible, setIsTableVisible] = useState(false);

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
const toggleTable = () => {
  setIsTableVisible(!isTableVisible);};
// Handle button click
const handleClick = () => {
  setShowSuccessMessage(true);

  // Automatically hide the message after 3 seconds
  setTimeout(() => {
    setShowSuccessMessage(false);
  }, 3000);
};
  return (
    <div className="relative w-full h-[1080px] bg-[#EEEEEE]">

  <div className="w-[1150px] h-[981px] left-[50px] top-[49px] absolute bg-white rounded-[15px]" />
  <div className="left-[50px] top-[15px] absolute text-[#7d7d7d] text-2xl font-bold font-['Inter']" onClick={() => navigate('/nhacungcap')}>Nhà cung cấp/Thêm mới</div>
  <div className="left-[70px] top-[190px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Tên nhà cung cấp</div>
  <div className="left-[70px] top-[282px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Địa chỉ</div>
<div className="absolute w-[300px] h-[35px] left-[70px] top-[230px]">
  <div className="w-full h-full bg-white rounded-[10px] border border-[#525050] flex items-center">
    <input
      type="text"
      placeholder="Nhập dữ liệu..."
      className="w-full h-full bg-transparent text-[#525050] font-semibold text-[14px] placeholder-[#A2A2A2] focus:outline-none px-[10px]"
    />
  </div>
</div>
  <div className="left-[400px] top-[190px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Ngày bắt đầu hợp tác</div>
  <div className="absolute w-[300px] h-[35px] left-[400px] top-[230px]">
  <div className="w-full h-full bg-white rounded-[10px] border border-[#525050] flex items-center">
    <input
      type="text"
      placeholder="Nhập dữ liệu..."
      className="w-full h-full bg-transparent text-[#525050] font-semibold text-[14px] placeholder-[#A2A2A2] focus:outline-none px-[10px]"
    />
  </div>
</div>
  <div className="left-[70px] top-[380px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Số điện thoại</div>
  <div className="absolute w-[300px] h-[35px] left-[70px] top-[419px]">
  <div className="w-full h-full bg-white rounded-[10px] border border-[#525050] flex items-center">
    <input
      type="text"
      placeholder="Nhập dữ liệu..."
      className="w-full h-full bg-transparent text-[#525050] font-semibold text-[14px] placeholder-[#A2A2A2] focus:outline-none px-[10px]"
    />
  </div>
</div>  <div className="left-[70px] top-[480px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Contact</div>
<div className="absolute w-[300px] h-[50px] left-[70px] top-[519px]">
  <div className="w-full h-full bg-white rounded-[10px] border border-[#525050] flex items-center">
    <input
      type="text"
      placeholder="Nhập dữ liệu..."
      className="w-full h-full bg-transparent text-[#525050] font-semibold text-[16px] placeholder-[#A2A2A2] focus:outline-none px-[10px]"
    />
  </div>
</div>
  <div className="left-[70px] top-[595px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Ghi chú</div>
  <div className="absolute w-[600px] h-[200px] left-[70px] top-[634px]">
  <div className="w-full h-full bg-white rounded-[10px] border border-[#525050] flex items-center">
    <textarea
      placeholder="Nhập nội dung ở đây..."
      className="w-full h-full bg-transparent text-[#525050] font-semibold text-[16px] placeholder-[#A2A2A2] focus:outline-none p-[10px] resize-none"
    />
  </div>
</div>
<div className="absolute w-[300px] h-[35px] left-[70px] top-[319px]">
  <div className="w-full h-full bg-white rounded-[10px] border border-[#525050] flex items-center">
    <input
      type="text"
      placeholder="Nhập dữ liệu..."
      className="w-full h-full bg-transparent text-[#525050] font-semibold text-[14px] placeholder-[#A2A2A2] focus:outline-none px-[10px]"
    />
  </div>
</div>
  <div className="left-[400px] top-[282px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Email</div>
  <div className="absolute w-[300px] h-[35px] left-[400px] top-[319px]">
  <div className="w-full h-full bg-white rounded-[10px] border border-[#525050] flex items-center">
    <input
      type="text"
      placeholder="Nhập dữ liệu..."
      className="w-full h-full bg-transparent text-[#525050] font-semibold text-[14px] placeholder-[#A2A2A2] focus:outline-none px-[10px]"
    />
  </div>
</div>
  <div className="left-[400px] top-[380px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Trạng thái</div>
  <div className="w-[300px] h-[35px] left-[400px] top-[417px] absolute bg-white rounded-[10px] border border-[#525050]" />
  <img className="w-5 h-5 left-[670px] top-[425px] absolute" src={images['icon_drop.png']} />
  <div className="w-[180px] h-[55px] left-[396px] top-[860px] absolute bg-[#3498db] rounded-[5px]" />
  <div className="left-[449px] top-[875px] absolute text-white text-xl font-bold font-['Inter']" onClick={handleClick}>Tạo mới</div>
  {showSuccessMessage && (
        <div className="absolute left-[393px] top-[950px] bg-green-500 text-white p-3 rounded-md">
          Thành công
        </div>
      )}
    
  <img className="w-[450px] h-[590px] left-[730px] top-[221px] absolute" src="https://via.placeholder.com/450x590" />
  <img className="w-[50px] h-[50px] left-[90px] top-[79px] absolute" src={images['iconttncc.png']} />

  <div className="left-[150px] top-[84px] absolute text-black text-[32px] font-bold font-['Inter']">Thêm Nhà Cung Cấp Mới</div>
</div>
);
}
export default Nhacungcap_Tao;