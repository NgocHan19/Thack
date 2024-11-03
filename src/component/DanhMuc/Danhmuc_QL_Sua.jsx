import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import images from '../../images';

function Danhmuc_QL_Sua() {
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
    <div className="relative w-full h-[1080px] bg-[#EEEEEE]">
 
 <div className="w-[1150px] h-[981px] left-[50px] top-[49px] absolute bg-white rounded-[15px]" />
 <div className="left-[50px] top-[16px] absolute text-[#7d7d7d] text-2xl font-bold font-['Inter']" onClick={() => navigate('/danhmuc-ql')}>Kho Linh Kiện/Chỉnh sửa</div>
 <div className="left-[150px] top-[84px] absolute text-black text-[32px] font-bold font-['Inter']">Chỉnh Sửa Thông Tin Danh Mục</div>
  <div className="left-[100px] top-[197px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Số hiệu danh mục</div>
  <div className="left-[100px] top-[289px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Số hiệu danh mục cha</div>
  <div className="absolute left-[100px] top-[228px]">
  <input 
    className="w-[480px] h-[35px] bg-white rounded-[10px] border border-[#525050] px-2" 
  />
</div>  
<div className="left-[700px] top-[197px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Tên danh mục</div>
<div className="absolute left-[700px] top-[228px]">
  <input 
    type="text" 
    className="w-[480px] h-[35px] bg-white rounded-[10px] border border-[#525050] px-2" 
    placeholder="Nhập thông tin tại đây" 
  />
</div>  <div className="left-[100px] top-[387px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Mô tả</div>
<div className="absolute left-[100px] top-[426px]">
  <textarea 
    className="w-[480px] h-[100px] bg-white rounded-[10px] border border-[#525050] p-2 resize-none" 
    placeholder="Nhập thông tin tại đây" 
  />
</div>
  <div className="left-[100px] top-[539px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Ghi chú</div>
  <div className="absolute left-[100px] top-[578px]">
  <textarea 
    className="w-[950px] h-[200px] bg-white rounded-[10px] border border-[#525050] p-2 resize-none" 
    placeholder="Nhập thông tin tại đây" 
  />
</div>  <div className="w-[480px] h-[35px] left-[100px] top-[326px] absolute bg-white rounded-[10px] border border-[#525050]" />
  <div className="w-[300px] h-[55px] left-[100px] top-[890px] absolute bg-[#f39c12] rounded-[5px]" />
  <div className="left-[180px] top-[905px] absolute text-white text-2xl font-bold font-['Inter']" onClick={handleClick}>Lưu thay đổi</div>
  {showSuccessMessage && (
        <div className="absolute left-[393px] top-[950px] bg-green-500 text-white p-3 rounded-md">
          Thành công
        </div>
      )}
    
  <img className="w-[25px] h-[25px] left-[550px] top-[233px] absolute" src={images['icon_drop.png']}/>
  <img className="w-[25px] h-[25px] left-[550px] top-[331px] absolute" src={images['icon_drop.png']} />
  <img className="w-[50px] h-[50px] left-[90px] top-[79px] absolute" src={images['icon_dmlk.png']} />
</div>
);
}
export default Danhmuc_QL_Sua;