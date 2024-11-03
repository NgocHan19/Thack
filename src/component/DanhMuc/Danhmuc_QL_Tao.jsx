import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import images from '../../images';

function Danhmuc_QL_Tao() {
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
  <div className="left-[50px] top-[16px] absolute text-[#7d7d7d] text-2xl font-bold font-['Inter']" onClick={() => navigate('/danhmuc-ql')}>Kho Linh Kiện/Tạo mới</div>
  <div className="left-[150px] top-[84px] absolute text-black text-[32px] font-bold font-['Inter']">Tạo Danh Mục Mới</div>
  <div className="left-[100px] top-[191px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Số hiệu danh mục</div>
  <div className="left-[100px] top-[283px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Số hiệu danh mục cha</div>
  <div className="w-[480px] h-[35px] left-[100px] top-[222px] absolute bg-white rounded-[10px] border border-[#525050]" />
  <div className="left-[700px] top-[191px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Tên danh mục</div>
  <div className="w-[480px] h-[35px] left-[700px] top-[222px] absolute bg-white rounded-[10px] border border-[#525050]" />
  <div className="left-[100px] top-[381px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Mô tả</div>
  <div className="w-[480px] h-[100px] left-[100px] top-[420px] absolute bg-white rounded-[10px] border border-[#525050]" />
  <div className="left-[100px] top-[533px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Ghi chú</div>
  <div className="w-[950px] h-[200px] left-[100px] top-[572px] absolute bg-white rounded-[10px] border border-[#525050]" />
  <div className="w-[480px] h-[35px] left-[100px] top-[320px] absolute bg-white rounded-[10px] border border-[#525050]" />
  <img className="w-[25px] h-[25px] left-[550px] top-[227px] absolute" src={images['icon_drop.png']} />
  <img className="w-[25px] h-[25px] left-[550px] top-[325px] absolute" src={images['icon_drop.png']} />
  <img className="w-[50px] h-[50px] left-[90px] top-[79px] absolute" src={images['icon_dmlk.png']} />
  <div className="w-[200px] h-[55px] left-[394px] top-[900px] absolute bg-[#3498db] rounded-[5px]" />
  <div className="left-[447px] top-[910px] absolute text-white text-2xl font-bold font-['Inter']"onClick={handleClick}>Tạo mới</div>
  {showSuccessMessage && (
        <div className="absolute left-[393px] top-[958px] bg-green-500 text-white p-3 rounded-md">
          Thành công
        </div>
      )}
    
</div>
  );
}
export default Danhmuc_QL_Tao;