import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import images from '../../images';

function Danhmuc_QL() {
  const navigate = useNavigate(); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOrganizationDropdownOpen, setIsOrganizationDropdownOpen] = useState(false);
  const [isTableVisible, setIsTableVisible] = useState(false);

  // Function to toggle the table visibility
  const toggleTable = () => {
      setIsTableVisible((prev) => !prev);
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
  
      
<div className="left-[50px] top-[37px] absolute text-[#7d7d7d] text-2xl font-bold font-['Inter']">Kho Linh Kiện</div>
<div className="w-[1150px] h-[170px] left-[50px] top-[86px] absolute bg-white rounded-[15px]" />
<div className="w-[1150px] h-[753px] left-[50px] top-[276px] absolute bg-white rounded-[15px]" />
<div className="left-[150px] top-[118px] absolute text-black text-[32px] font-bold font-['Inter']">Danh mục Linh Kiện</div>
<img src={images['icon_dmlk.png']} alt="icon_lh" className="w-[50px] h-[50px] left-[90px] top-[113px] absolute"  />
<div className="left-[100px] top-[207px] absolute text-[#3498db] text-base font-bold font-['Inter']">Tổng số danh mục:</div>
        <div className="left-[350px] top-[208px] absolute text-[#3498db] text-base font-bold font-['Inter']">Danh mục cha:</div>
        <div className="left-[650px] top-[208px] absolute text-[#3498db] text-base font-bold font-['Inter']">Danh mục con:</div>

        <div className="w-[330px] h-[55px] left-[850px] top-[296px] absolute">
        <div className="w-[330px] h-[55px] left-0 top-0 absolute bg-white rounded-[5px] border border-[#c2c2c2]/80" />
        <div className="left-[47px] top-[16px] absolute text-[#cbcbcb] text-lg font-bold font-['Inter']">Lọc theo: </div>
        <img className="w-5 h-5 left-[12px] top-[18px] absolute" src={images['icon_loc.png']} alt="icon_loc" />
        <img className="w-[25px] h-[25px] left-[289px] top-[15px] absolute" src={images['icon_drop.png']} alt="icon_drop" />
      </div>
  <div className="w-[184px] h-[50px] left-[950px] top-[150px] absolute">
    <div className="w-[184px] h-[50px] left-0 top-0 absolute bg-[#3498db] rounded-[15px]" />
    <div className="w-[126px] h-[21px] left-[43px] top-[12px] absolute text-white text-lg font-semibold font-['Inter']"onClick={() => navigate('/danhmuc-ql-tao')}>Tạo danh mục</div>
  </div>
  <img className="w-[25px] h-[25px] left-[960px] top-[162px] absolute" src={images['Plus.png']} 
        alt="Plus" />
  <div className="w-[1150px] h-[482px] left-[46px] top-[399px] absolute">
    <div className="left-[370px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Tên danh mục</div>
    <div className="left-[160px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Số hiệu danh mục</div>
    <div className="left-[80px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">ID</div>
    <div className="w-full h-[0px] left-[3px] top-[32px] absolute border-2 border-[#7f7e7e]"></div>
    <div className="w-full h-[0px] left-[3px] top-[81px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-full h-[0px] left-[3px] top-[131px] absolute border-2 border-[#7f7e7e]"></div>
    <div className="w-full h-[0px] left-[3px] top-[180px] absolute border-2 border-[#7f7e7e]"></div>
    <div className="w-full h-[0px] left-[3px] top-[131px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-full h-[0px] left-[3px] top-[180px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[120px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[300px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[520px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[60px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="left-[620px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Mô tả</div>
    <div className="w-[25px] h-[0px] left-[740px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="left-[800px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Số hiệu danh mục cấp cha</div>
    <div className="left-[1050px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú</div>
    <div className="w-[25px] h-[0px] left-[1000px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <img className="w-5 h-5 left-[9px] top-[96px] absolute" src={images['icon_barcode.png']} />
    <img className="w-5 h-5 left-[9px] top-[145px] absolute" src={images['icon_barcode.png']} />
    <img
        className="w-5 h-5 left-[6px] top-[48px] absolute cursor-pointer"
        src={images['icon_barcode.png']}
        alt="Toggle Dropdown"
        onClick={toggleTable}
        
      />

    <div className="w-full h-[252px] left-0 top-[230px] absolute">
      <div className="w-full h-[252px] left-0 top-0 absolute bg-[#eeeeee] rounded-[5px]" />
      <div className="w-full h-[0px] left-0 top-[45px] absolute border-2 border-[#cdcdcd]"></div>
      <div className="w-full h-[0px] left-0 top-[116px] absolute border-2 border-[#cdcdcd]"></div>
      <div className="w-full h-[0px] left-0 top-[184px] absolute border-2 border-[#cdcdcd]"></div>
      <div className="left-[400px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Tên danh mục</div>
      <div className="left-[150px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Số hiệu danh mục con</div>
      <div className="left-[60px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">ID</div>
      <div className="left-[650px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Mô tả</div>
      <div className="left-[900px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú</div>
    </div>
  </div>
  <div className="w-[119px] h-5 left-[1050px] top-[987px] absolute">
        <img className="w-5 h-5 left-[99px] top-[20px] absolute origin-top-left -rotate-90" src={images['left.png']}/>
        <img className="w-5 h-5 left-[94px] top-0 absolute origin-top-left rotate-90" src={images['right.png']} />
        <div className="left-0 top-[2px] absolute text-[#b1b1b1] text-xs font-bold font-['Inter']">1/ 10 trang</div>
      </div>
  <img className="w-[30px] h-[30px] left-[800px] top-[308px] absolute" src={images['icon_canhloc.png']} 
        alt="icon_canhloc" onClick={() => navigate('/danhmuc-ql-sua')}/>
</div>


  );
}
export default Danhmuc_QL;